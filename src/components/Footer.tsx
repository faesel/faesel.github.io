import Link from 'next/link';
import RssIcon from '@/components/RssIcon';
import { siteConfig } from '@/lib/config';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.introduction}>
            <Link href="/" className={styles.name}>{siteConfig.author.name}</Link>
            <p className={styles.description}>
              Building useful software.<br />
              Sharing what I learn.
            </p>
            <a href="https://www.binarymeadow.com" className={styles.studioLink}>
              Discover my apps at Binary Meadow &rarr;
            </a>
          </div>
          <nav className={styles.links} aria-label="Footer navigation">
            <h2 className={styles.heading}>Explore</h2>
            <Link href="/blog" className={styles.link}>
              Blog
            </Link>
            <Link href="/projects" className={styles.link}>
              Projects
            </Link>
            <Link href="/company" className={styles.link}>
              Company
            </Link>
            <Link href="/about" className={styles.link}>
              About
            </Link>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </nav>
          <nav className={styles.links} aria-label="Social and feed links">
            <h2 className={styles.heading}>Elsewhere</h2>
            <a href={siteConfig.social.github} className={styles.link}>GitHub &rarr;</a>
            <a href={siteConfig.social.linkedin} className={styles.link}>LinkedIn &rarr;</a>
            <a href="/feed.xml" className={styles.rssLink} aria-label="RSS Feed" title="RSS Feed">
              <RssIcon size={16} />
              <span>RSS</span>
            </a>
          </nav>
        </div>
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Faesel Saeed. All rights reserved. Code snippets are MIT licensed unless stated otherwise.
          </p>
          <a href="#main-content" className={styles.link}>Back to top &uarr;</a>
        </div>
      </div>
    </footer>
  );
}
