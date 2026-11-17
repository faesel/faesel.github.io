export type ContributionLevel =
  | 'NONE'
  | 'FIRST_QUARTILE'
  | 'SECOND_QUARTILE'
  | 'THIRD_QUARTILE'
  | 'FOURTH_QUARTILE';

export interface ContributionDay {
  date: string;
  weekday: number;
  contributionCount: number;
  contributionLevel: ContributionLevel;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface GitHubActivityData {
  commits: number;
  activeDays: number;
  stars: number;
  totalContributions: number;
  weeks: ContributionWeek[];
  updatedAt: string;
}

interface RepositoryConnection {
  nodes: { stargazerCount: number }[];
  pageInfo: { hasNextPage: boolean; endCursor: string | null };
}

interface ActivityResponse {
  user: {
    contributionsCollection: {
      totalCommitContributions: number;
      contributionCalendar: {
        totalContributions: number;
        weeks: ContributionWeek[];
      };
    };
    repositories: RepositoryConnection;
  };
}

const repositoryFields = `
  repositories(first: 100, after: $after, privacy: PUBLIC, isFork: false) {
    nodes { stargazerCount }
    pageInfo { hasNextPage endCursor }
  }
`;

const ownedRepositoryFields = repositoryFields.replace('privacy: PUBLIC', 'ownerAffiliations: OWNER, privacy: PUBLIC');

type RepositoryOwner = 'user' | 'organization';

async function queryGitHub<T>(
  token: string,
  query: string,
  variables: Record<string, string | null>,
): Promise<T> {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(10000),
  });

  if (!response.ok) {
    throw new Error('GitHub API request failed');
  }

  const result = await response.json() as { data?: T; errors?: unknown[] };
  if (!result.data || result.errors?.length) {
    throw new Error('GitHub API returned incomplete data');
  }

  return result.data;
}

async function countStars(
  token: string,
  owner: RepositoryOwner,
  login: string,
  firstPage?: RepositoryConnection,
): Promise<number> {
  let repositories = firstPage;
  let after: string | null = null;
  let stars = 0;
  while (true) {
    if (!repositories) {
      const page: Record<RepositoryOwner, { repositories: RepositoryConnection } | null> = await queryGitHub(token, `
        query Repositories($login: String!, $after: String) {
          ${owner}(login: $login) { ${owner === 'user' ? ownedRepositoryFields : repositoryFields} }
        }
      `, { login, after });
      const result = page[owner];
      if (!result) throw new Error('GitHub repository owner was not found');
      repositories = result.repositories;
    }
    stars += repositories.nodes.reduce((total, repository) => total + repository.stargazerCount, 0);
    if (!repositories.pageInfo.hasNextPage) return stars;
    if (!repositories.pageInfo.endCursor) throw new Error('GitHub repository cursor is missing');
    after = repositories.pageInfo.endCursor;
    repositories = undefined;
  }
}

export async function getGitHubActivity(
  username: string,
  organizations: string[] = [],
): Promise<GitHubActivityData | null> {
  const token = process.env.GITHUB_STATS_TOKEN || process.env.GITHUB_TOKEN;
  if (!token) return null;

  try {
    const now = new Date();
    const from = new Date(now);
    from.setUTCFullYear(from.getUTCFullYear() - 1);
    const data = await queryGitHub<ActivityResponse>(token, `
      query Activity($login: String!, $from: DateTime!, $to: DateTime!, $after: String) {
        user(login: $login) {
          contributionsCollection(from: $from, to: $to) {
            totalCommitContributions
            contributionCalendar {
              totalContributions
              weeks { contributionDays { date weekday contributionCount contributionLevel } }
            }
          }
          ${ownedRepositoryFields}
        }
      }
    `, {
      login: username,
      from: from.toISOString(),
      to: now.toISOString(),
      after: null,
    });

    const starCounts = await Promise.all([
      countStars(token, 'user', username, data.user.repositories),
      ...organizations.map((organization) => countStars(token, 'organization', organization)),
    ]);
    const stars = starCounts.reduce((total, count) => total + count, 0);

    const contributions = data.user.contributionsCollection;
    return {
      commits: contributions.totalCommitContributions,
      activeDays: contributions.contributionCalendar.weeks
        .flatMap((week) => week.contributionDays)
        .filter((day) => day.contributionCount > 0).length,
      stars,
      totalContributions: contributions.contributionCalendar.totalContributions,
      weeks: contributions.contributionCalendar.weeks,
      updatedAt: now.toISOString(),
    };
  } catch {
    console.warn('GitHub activity is temporarily unavailable.');
    return null;
  }
}
