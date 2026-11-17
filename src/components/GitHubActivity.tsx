import type { JSX } from 'react';
import type { ContributionLevel, GitHubActivityData } from '@/lib/github';
import styles from './GitHubActivity.module.css';

interface GitHubActivityProps {
  activity: GitHubActivityData | null;
}

const levels: Record<ContributionLevel, string> = {
  NONE: styles.level0,
  FIRST_QUARTILE: styles.level1,
  SECOND_QUARTILE: styles.level2,
  THIRD_QUARTILE: styles.level3,
  FOURTH_QUARTILE: styles.level4,
};

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

export function GitHubActivity({ activity }: GitHubActivityProps): JSX.Element {
  if (!activity) {
    return (
      <p className={styles.unavailable}>
        GitHub activity is temporarily unavailable. Visit my profile for the latest stats.
      </p>
    );
  }

  const stats = [
    { label: 'Commits', value: activity.commits, period: 'Past 12 months' },
    { label: 'Active days', value: activity.activeDays, period: 'Days with contributions, past 12 months' },
    { label: 'Repository stars', value: activity.stars, period: "My public repositories and Binary Meadow's" },
  ];
  const total = activity.totalContributions.toLocaleString('en-GB');

  return (
    <div>
      <dl className={styles.stats}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <dt className={styles.statLabel}>{stat.label}</dt>
            <dd className={styles.statValue}>{stat.value.toLocaleString('en-GB')}</dd>
            <dd className={styles.statPeriod}>{stat.period}</dd>
          </div>
        ))}
      </dl>

      <figure className={styles.calendar}>
        <figcaption className={styles.calendarCaption}>
          <strong>{total} contributions</strong> in the past 12 months
        </figcaption>
        <p id="github-calendar-help" className={styles.calendarHelp}>
          Commits, pull requests, issues and reviews. Darker squares mean more activity.
        </p>
        <div
          className={styles.calendarScroll}
          role="region"
          aria-label="GitHub contribution calendar"
          aria-describedby="github-calendar-help"
          tabIndex={0}
        >
          <svg
            className={styles.heatmap}
            viewBox={`0 0 ${48 + activity.weeks.length * 14} 126`}
            role="img"
            aria-labelledby="github-calendar-title"
          >
            <title id="github-calendar-title">
              {`${total} GitHub contributions in the past 12 months. Each square represents one day.`}
            </title>
            {['Mon', 'Wed', 'Fri'].map((day, index) => (
              <text key={day} x={0} y={47 + index * 28} className={styles.axisLabel}>{day}</text>
            ))}
            {activity.weeks.map((week, index) => {
              const monthStart = week.contributionDays.find((day) => day.date.endsWith('-01'));
              return (
                <g key={week.contributionDays[0].date} transform={`translate(${32 + index * 14}, 0)`}>
                  {monthStart && (
                    <text x={0} y={12} className={styles.axisLabel}>
                      {new Date(`${monthStart.date}T00:00:00Z`).toLocaleDateString('en-GB', {
                        month: 'short',
                        timeZone: 'UTC',
                      })}
                    </text>
                  )}
                  {week.contributionDays.map((day) => (
                    <rect
                      key={day.date}
                      x={0}
                      y={24 + day.weekday * 14}
                      width={10}
                      height={10}
                      rx={2}
                      className={`${styles.day} ${levels[day.contributionLevel]}`}
                    >
                      <title>
                        {`${day.contributionCount} ${day.contributionCount === 1 ? 'contribution' : 'contributions'} on ${dateFormatter.format(new Date(`${day.date}T00:00:00Z`))}`}
                      </title>
                    </rect>
                  ))}
                </g>
              );
            })}
          </svg>
        </div>
        <div className={styles.calendarFooter}>
          <span className={styles.scrollHint}>Scroll to explore the full year.</span>
          <div className={styles.legend} aria-label="Contribution intensity: less to more">
            <span>Less</span>
            <span className={styles.legendSquares} aria-hidden="true">
              {Object.values(levels).map((level) => (
                <span key={level} className={`${styles.legendSquare} ${level}`} />
              ))}
            </span>
            <span>More</span>
          </div>
        </div>
      </figure>
      <p className={styles.updated}>
        Updated <time dateTime={activity.updatedAt}>{dateFormatter.format(new Date(activity.updatedAt))}</time>.
        {' '}Counts follow GitHub&apos;s contribution rules and profile visibility.
      </p>
    </div>
  );
}
