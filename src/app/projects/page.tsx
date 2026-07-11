import Image from 'next/image';
import { siteConfig } from '@/lib/config';
import styles from './page.module.css';

export const metadata = {
  title: 'Projects',
  description: 'Explore my latest projects and work',
};

const projects = [
  {
    id: 6,
    title: 'Opdsy - OPDS Comics & Book Reader',
    description: 'A modern, cross-platform reader for self-hosted OPDS libraries. Browse and stream comics and books from multiple servers at once in a single unified library, with page-by-page OPDS-PSE streaming. Works with Ubooquity, Komga, Kavita and Calibre-Web, designed to be server-agnostic and resilient.',
    tags: ['React Native', 'Expo', 'TypeScript', 'TanStack Query', 'OPDS'],
    link: 'https://play.google.com/store/apps/details?id=com.opdsy',
    image: '/images/opdsy.png?v=2',
  },
  {
    id: 5,
    title: 'Jannah Builder - Islamic Prayer Garden',
    description: 'A calm, spiritually-sensitive prayer tracking app built with React Native and Expo. Log your five daily prayers and watch a peaceful pixel-art garden grow with trees, flowers, buildings, and wildlife. Features gentle decay, Qur\'an and dhikr visual effects, and animated animals — designed to inspire without pressure.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Shopify Skia', 'Pixel Art'],
    link: 'https://github.com/faesel/jannah-builder',
    image: '/images/jannah-builder.png?v=3',
  },
  {
    id: 1,
    title: 'iCare - Desktop Blink Reminder',
    description: 'A dead-simple, no-frills desktop blink reminder. No accounts, no cloud sync, no analytics — just a tiny always-on-top widget with a retro seven-segment countdown that tells you to blink and rest your eyes.',
    tags: ['Electron', 'TypeScript', 'Desktop App', 'Eye Care'],
    link: 'https://github.com/faesel/icare',
    image: '/images/icare.png',
  },
  {
    id: 2,
    title: 'GridWatch - Copilot CLI Dashboard',
    description: 'A cross-platform Electron desktop app that reads GitHub Copilot CLI session data and presents it as a real-time dashboard. Features a retro Tron-inspired design with session management, token usage charts, activity heatmaps, and AI-powered insights.',
    tags: ['Electron', 'React', 'TypeScript', 'Recharts'],
    link: 'https://github.com/faesel/gridwatch',
    image: '/images/gridwatch.png?v=2',
  },
  {
    id: 3,
    title: 'Az-Lazy - The go-to CLI for Azure storage',
    description: 'Check out my CLI tool Az-Lazy, it provides a command line interface to quickly manage and make changes to azure storage queues, blobs and tables. The inspiration for this project was to move away from using Azure Storage Manager and provide a faster CLI experience for developers.',
    tags: ['c#', 'Azure', 'CLI'],
    link: 'https://github.com/faesel/az-lazy',
    image: '/images/azlazy.png',
  },
  {
    id: 4,
    title: 'Gatsby tech blog starter template',
    description: 'Checkout my tech blog template built with Gatsby, Contentful and Disqus. Its free to use for anyone this includes all costs aside from a custom domain (which is optional), and really easy to configure.',
    tags: ['Node.js', 'Gatsby', 'Contentful', 'Disqus'],
    link: '#',
    image: '/images/gatsby-blog-starter.png',
  }
];

export default function ProjectsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <p className={styles.subtitle}>
        A showcase of my recent work and side projects
      </p>

      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.id} className={styles.projectCard}>
            {project.image && (
              <div className={styles.projectImageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className={styles.projectImage}
                />
              </div>
            )}
            
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              
              {project.tags && (
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              {project.link && (
                project.link.includes('play.google.com') ? (
                  <a
                    href={project.link}
                    className={styles.playBadgeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get it on Google Play"
                  >
                    <Image
                      src="/badges/google-play-badge.png"
                      alt="Get it on Google Play"
                      width={155}
                      height={60}
                      className={styles.playBadge}
                    />
                  </a>
                ) : (
                  <a
                    href={project.link}
                    className={styles.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                )
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
