import styles from './page.module.css';

export const metadata = {
  title: 'Company | Binary Meadow Ltd',
  description:
    'Binary Meadow Ltd is my independent UK software studio, building a focused collection of apps including Jannah Builder, OPDSy and GridWatch.',
};

const apps = [
  {
    name: 'Jannah Builder',
    tagline: 'Watch your spiritual journey grow.',
    platform: 'Android',
    href: 'https://www.binarymeadow.com/apps/jannah-builder/',
  },
  {
    name: 'OPDSy',
    tagline: 'Your self-hosted library, unified.',
    platform: 'Android',
    href: 'https://www.binarymeadow.com/apps/opdsy/',
  },
  {
    name: 'GridWatch',
    tagline: 'See every AI-assisted session.',
    platform: 'macOS & Windows',
    href: 'https://www.binarymeadow.com/apps/gridwatch/',
  },
];

export default function CompanyPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Binary Meadow</h1>
        <p className={styles.subtitle}>
          My independent software studio, registered in the United Kingdom —
          designing and shipping a small, carefully crafted collection of apps.
        </p>
      </section>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About the studio</h2>
          <p className={styles.text}>
            Binary Meadow Ltd is the home for the products I build outside of
            this blog. It&apos;s a small studio with a simple philosophy:
            quality, privacy and longevity over hype. Every app is shipped,
            maintained and supported directly — no dark patterns and no selling
            your data.
          </p>
          <p className={styles.text}>
            The apps span everything from spiritually-mindful tools to developer
            dashboards, available across Android, macOS and Windows.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Apps</h2>
          <div className={styles.appsGrid}>
            {apps.map((app) => (
              <a
                key={app.name}
                href={app.href}
                className={styles.appCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className={styles.appName}>{app.name}</h3>
                <p className={styles.appTagline}>{app.tagline}</p>
                <span className={styles.appPlatform}>{app.platform}</span>
              </a>
            ))}
          </div>
        </section>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Explore Binary Meadow</h2>
          <p className={styles.ctaText}>
            See the full collection of apps, screenshots and downloads on the
            Binary Meadow website.
          </p>
          <a
            href="https://www.binarymeadow.com"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit binarymeadow.com →
          </a>
        </div>
      </div>
    </div>
  );
}
