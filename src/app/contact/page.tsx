import { siteConfig } from '@/lib/config';
import styles from './page.module.css';

export const metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: 'Get in touch with me',
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.subtitle}>
          Have a question or want to work together? I'd love to hear from you.
        </p>
      </header>

      <div className={styles.card}>
        <div className={styles.grid}>
          <div className={styles.item}>
            <div className={styles.iconWrapper}>
              <span>📧</span>
            </div>
            <div className={styles.itemContent}>
              <span className={styles.label}>Email</span>
              <span className={styles.value}>
                <a href="mailto:faesel@outlook.com">faesel@outlook.com</a>
              </span>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.iconWrapper}>
              <span>📍</span>
            </div>
            <div className={styles.itemContent}>
              <span className={styles.label}>Location</span>
              <span className={styles.value}>London, UK</span>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.iconWrapper}>
              <span>💼</span>
            </div>
            <div className={styles.itemContent}>
              <span className={styles.label}>Availability</span>
              <span className={styles.value}>Open to freelance projects & consulting</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.socialSection}>
        <h2 className={styles.socialTitle}>Find me online</h2>
        <div className={styles.socialGrid}>
          <a
            href={siteConfig.social.github}
            className={styles.socialCard}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span> ↗
          </a>
          <a
            href={siteConfig.social.linkedin}
            className={styles.socialCard}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span> ↗
          </a>
          <a
            href={`https://twitter.com/${siteConfig.social.twitter.replace('@', '')}`}
            className={styles.socialCard}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Twitter</span> ↗
          </a>
        </div>
      </div>
    </div>
  );
}
