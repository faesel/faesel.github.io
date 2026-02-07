import Image from 'next/image';
import { siteConfig } from '@/lib/config';
import styles from './page.module.css';

export const metadata = {
  title: 'Projects',
  description: 'Explore my latest projects and work',
};

const projects = [
  {
    id: 1,
    title: 'Az-Lazy - The go-to CLI for Azure storage',
    description: 'Check out my CLI tool Az-Lazy, it provides a command line interface to quickly manage and make changes to azure storage queues, blobs and tables. The inspiration for this project was to move away from using Azure Storage Manager and provide a faster CLI experience for developers.',
    tags: ['c#', 'Azure', 'CLI'],
    link: 'https://github.com/faesel/az-lazy',
    image: '/images/azlazy.png',
  },
  {
    id: 2,
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
                <a
                  href={project.link}
                  className={styles.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
