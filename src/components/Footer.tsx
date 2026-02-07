import Link from 'next/link';
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
            <Link href="/about" className={styles.link}>
              About
            </Link>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </nav>
          <p className={styles.copyright}>
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
