import styles from './page.module.css';

export const metadata = {
  title: 'Projects | Tech Blog',
  description: 'Explore my latest projects and work',
};

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A modern web application built with Next.js and TypeScript. Features include server-side rendering, optimized performance, and a beautiful user interface.',
    tags: ['Next.js', 'TypeScript', 'React'],
    link: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'An open-source tool for developers to streamline their workflow. Built with performance and developer experience in mind.',
    tags: ['Node.js', 'CLI', 'JavaScript'],
    link: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A full-stack application with real-time features, authentication, and database integration. Scalable and production-ready.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
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
          </article>
        ))}
      </div>
    </div>
  );
}
