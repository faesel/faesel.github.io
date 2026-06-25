import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Company | Binary Meadow Ltd',
  description:
    'Binary Meadow Ltd is my independent UK software studio, building a focused collection of apps including Jannah Builder, OPDSy and GridWatch.',
};

export default function CompanyPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <Image
          src="/images/binary-meadow-logo.png"
          alt="Binary Meadow logo"
          width={96}
          height={96}
          className={styles.logo}
          priority
        />
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
            maintained and supported directly &mdash; no dark patterns and no
            selling your data.
          </p>
          <p className={styles.text}>
            The apps span everything from spiritually-mindful tools to developer
            dashboards, available across Android, macOS and Windows. You can see
            the full collection, screenshots and downloads on the Binary Meadow
            website.
          </p>
          <a
            href="https://www.binarymeadow.com"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit binarymeadow.com &rarr;
          </a>
        </section>
      </div>
    </div>
  );
}
