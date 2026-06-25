import Link from 'next/link';
import RssIcon from '@/components/RssIcon';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <nav className={styles.links} aria-label="Footer navigation">
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
            <a href="/feed.xml" className={styles.rssLink} aria-label="RSS Feed" title="RSS Feed">
              <RssIcon size={16} />
              <span>RSS</span>
            </a>
          </nav>
          <p className={styles.copyright}>
            © {currentYear} Faesel Saeed. All rights reserved. Code snippets are MIT licensed unless stated otherwise.
          </p>
        </div>
      </div>
    </footer>
  );
}
