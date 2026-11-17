import assert from 'node:assert/strict';
import { afterEach, test } from 'node:test';
import { getGitHubActivity } from '../src/lib/github.ts';

const originalFetch = globalThis.fetch;
const originalToken = process.env.GITHUB_STATS_TOKEN;
const originalActionsToken = process.env.GITHUB_TOKEN;
const originalWarn = console.warn;

afterEach(() => {
  globalThis.fetch = originalFetch;
  console.warn = originalWarn;
  for (const [key, value] of [
    ['GITHUB_STATS_TOKEN', originalToken],
    ['GITHUB_TOKEN', originalActionsToken],
  ]) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
});

test('omits unavailable stats without making an unauthenticated request', async () => {
  delete process.env.GITHUB_STATS_TOKEN;
  delete process.env.GITHUB_TOKEN;
  globalThis.fetch = () => { throw new Error('Unexpected request'); };
  assert.equal(await getGitHubActivity('faesel'), null);
});

test('loads contribution data and includes stars from every repository page and organisation', async () => {
  delete process.env.GITHUB_STATS_TOKEN;
  process.env.GITHUB_TOKEN = 'test-token';
  const requests = [];
  const weeks = [{
    contributionDays: [{
      date: '2026-01-05',
      weekday: 1,
      contributionCount: 3,
      contributionLevel: 'FIRST_QUARTILE',
    }, {
      date: '2026-01-06',
      weekday: 2,
      contributionCount: 0,
      contributionLevel: 'NONE',
    }],
  }];
  globalThis.fetch = async (url, options) => {
    const request = JSON.parse(options.body);
    requests.push(request);
    assert.equal(url, 'https://api.github.com/graphql');
    assert.equal(options.headers.Authorization, 'Bearer test-token');
    if (requests.length === 1) {
      assert.match(request.query, /ownerAffiliations: OWNER, privacy: PUBLIC, isFork: false/);
      return Response.json({ data: {
        user: {
          contributionsCollection: {
            totalCommitContributions: 42,
            contributionCalendar: { totalContributions: 60, weeks },
          },
          repositories: {
            nodes: [{ stargazerCount: 7 }, { stargazerCount: 4 }],
            pageInfo: { hasNextPage: true, endCursor: 'next-page' },
          },
        },
      } });
    }
    if (request.variables.login === 'BinaryMeadow') {
      assert.match(request.query, /organization\(login: \$login\)/);
      assert.doesNotMatch(request.query, /ownerAffiliations/);
      return Response.json({ data: { organization: { repositories: {
        nodes: [{ stargazerCount: 35 }],
        pageInfo: { hasNextPage: false, endCursor: null },
      } } } });
    }
    assert.equal(request.variables.after, 'next-page');
    return Response.json({ data: { user: { repositories: {
      nodes: [{ stargazerCount: 3 }],
      pageInfo: { hasNextPage: false, endCursor: null },
    } } } });
  };

  const activity = await getGitHubActivity('faesel', ['BinaryMeadow']);
  assert.equal(requests.length, 3);
  assert.equal(activity.commits, 42);
  assert.equal(activity.activeDays, 1);
  assert.equal(activity.stars, 49);
  assert.equal(activity.totalContributions, 60);
  assert.deepEqual(activity.weeks, weeks);
});

test('does not present partial GraphQL data as valid stats', async () => {
  process.env.GITHUB_STATS_TOKEN = 'test-token';
  console.warn = () => {};
  globalThis.fetch = async () => Response.json({
    data: { user: null },
    errors: [{ message: 'Rate limit exceeded' }],
  });
  assert.equal(await getGitHubActivity('faesel'), null);
});

test('keeps the home page usable when the API fails', async () => {
  process.env.GITHUB_STATS_TOKEN = 'test-token';
  console.warn = () => {};
  globalThis.fetch = async () => { throw new Error('Network unavailable'); };
  assert.equal(await getGitHubActivity('faesel'), null);
});
