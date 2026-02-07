import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'About | Tech Blog',
  description: 'Learn more about us and what we do',
};

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 
  'Node.js', 'C#', '.NET', 'Azure',
  'Architecture', 'Team Leadership', 'DevOps', 'System Design'
];

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.subtitle}>
          I'm a passionate Staff Engineer dedicated to building scalable solutions 
          and fostering engineering excellence.
        </p>
      </section>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>My Journey</h2>
          <p className={styles.text}>
            Welcome to my tech blog! This is a place where I share my thoughts, experiences,
            and insights about technology, programming, and software development.
          </p>
          <p className={styles.text}>
            Experienced Staff Engineer with a proven track record of delivering high-impact digital solutions, leading engineering teams, and driving technical strategy across complex platforms. I have designed and implemented scalable architectures, improved user experiences, and optimized development processes to enable rapid growth and efficiency.
          </p>
          <p className={styles.text}>
            My expertise spans full-stack development, system design, platform migrations, API development, and performance optimization, along with mentoring engineers and fostering collaborative cross-functional relationships. Passionate about leveraging technology to solve real business problems, I combine strong technical leadership with a hands-on approach to deliver measurable results.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technical Expertise</h2>
          <p className={styles.text}>
            I work with a wide range of technologies, always choosing the right tool for the job. 
            Here are some of the key areas I specialize in:
          </p>
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <div key={skill} className={styles.skillItem}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What You'll Find Here</h2>
          <p className={styles.text}>
            On this blog, I write about various topics including web development, software
            engineering best practices, new technologies, and personal projects. My goal is
            to share knowledge and help others learn from my experiences.
          </p>
        </section>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Let's Connect</h2>
          <p className={styles.ctaText}>
            I'm always interested in connecting with fellow developers and tech enthusiasts.
            Whether you have a question or just want to say hi, feel free to reach out.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
