import styles from './page.module.css';

export const metadata = {
  title: 'About | Tech Blog',
  description: 'Learn more about us and what we do',
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About</h1>
      
      <div className={styles.content}>
        <p>
          Welcome to my tech blog! This is a place where I share my thoughts, experiences,
          and insights about technology, programming, and software development.
        </p>

        <h2>What You'll Find Here</h2>
        <p>
          On this blog, I write about various topics including web development, software
          engineering best practices, new technologies, and personal projects. My goal is
          to share knowledge and help others learn from my experiences.
        </p>

        <div className={styles.highlight}>
          <h2>Get in Touch</h2>
          <p>
            I'm always interested in connecting with fellow developers and tech enthusiasts.
            Feel free to reach out through the <a href="/contact">contact page</a> or
            connect with me on social media.
          </p>
        </div>

        <h2>Background</h2>
        <p>
          I'm a passionate software developer with experience in modern web technologies.
          I believe in writing clean, maintainable code and continuously learning new
          skills to stay current in this ever-evolving field.
        </p>
      </div>
    </div>
  );
}
