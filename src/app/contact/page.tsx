import styles from './page.module.css';

export const metadata = {
  title: 'Contact | Tech Blog',
  description: 'Get in touch with me',
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <p className={styles.subtitle}>
        Let's connect! I'd love to hear from you.
      </p>

      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>📧 Email:</span>
          <span className={styles.infoValue}>
            <a href="mailto:hello@example.com">hello@example.com</a>
          </span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>📍 Location:</span>
          <span className={styles.infoValue}>Your City, Country</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>💼 Available for:</span>
          <span className={styles.infoValue}>Freelance Projects, Collaborations</span>
        </div>
      </div>

      <div className={styles.socialLinks}>
        <a
          href="https://github.com/yourusername"
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/yourusername"
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
    </div>
  );
}
