import type { Metadata } from 'next';
import Image from 'next/image';
import { siteConfig, getAbsoluteUrl } from '@/lib/config';
import { JsonLd, generateSoftwareApplicationListJsonLd } from '@/lib/jsonld';
import styles from './page.module.css';

const pageDescription =
  'Apps and developer tools by Faesel Saeed, including Task Monster, Spinely, OPDSy, Jannah Builder, GridWatch and iCare.';

export const metadata: Metadata = {
  title: 'Projects',
  description: pageDescription,
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    type: 'website',
    url: getAbsoluteUrl('/projects'),
    siteName: siteConfig.name,
    title: `Projects | ${siteConfig.name}`,
    description: pageDescription,
    images: [
      {
        url: '/images/projects-og.jpg',
        width: 1200,
        height: 630,
        alt: 'App icons for Task Monster, Spinely, OPDSy, Jannah Builder and GridWatch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Projects | ${siteConfig.name}`,
    description: pageDescription,
    images: ['/images/projects-og.jpg'],
  },
};

type ProjectLink = {
  href: string;
  /** 'play' and 'appstore' render store badges; 'site' renders a text link. */
  type: 'play' | 'appstore' | 'site';
  /** Optional label for 'site' links; defaults to 'See More →'. */
  label?: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  tags?: string[];
  links: ProjectLink[];
  image?: string;
  /** schema.org applicationCategory, set for apps published to a store. */
  appCategory?: string;
};

const projects: Project[] = [
  {
    id: 8,
    title: 'Task Monster - Family Chores & Routines',
    description: 'A gamified family to-do list where finished chores feed a friendly monster that grows and evolves.',
    tags: ['React Native', 'Expo', 'TypeScript', 'React Native SVG', 'Reanimated'],
    links: [
      { href: 'https://play.google.com/store/apps/details?id=com.taskmonsters', type: 'play' },
      { href: 'https://www.binarymeadow.com/apps/task-monster/', type: 'site' },
    ],
    image: '/images/task-monster.webp',
    appCategory: 'LifestyleApplication',
  },
  {
    id: 7,
    title: 'Spinely - Bookshelf Organiser',
    description: 'A bookshelf organiser that scans your book spines and turns your collection into a visual shelf.',
    tags: ['React Native', 'Expo', 'TypeScript', 'TanStack Query'],
    links: [
      { href: 'https://play.google.com/store/apps/details?id=com.spinely', type: 'play' },
      { href: 'https://www.binarymeadow.com/apps/spinely/', type: 'site' },
    ],
    image: '/images/spinely.webp',
    appCategory: 'LifestyleApplication',
  },
  {
    id: 6,
    title: 'OPDSy - Book, Comic & Audiobook Reader',
    description: 'A reader that brings your local files and self-hosted OPDS servers together in one library.',
    tags: ['React Native', 'Expo', 'TypeScript', 'TanStack Query', 'OPDS'],
    links: [
      { href: 'https://play.google.com/store/apps/details?id=com.opdsy', type: 'play' },
      { href: 'https://apps.apple.com/app/opdsy/id6827915459', type: 'appstore' },
      { href: 'https://www.binarymeadow.com/apps/opdsy/', type: 'site' },
    ],
    image: '/images/opdsy.webp',
    appCategory: 'ReferenceApplication',
  },
  {
    id: 5,
    title: 'Jannah Builder - Islamic Prayer Garden',
    description: 'A calm prayer tracker where logging your five daily prayers grows a peaceful pixel-art garden.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Shopify Skia', 'Pixel Art'],
    links: [
      { href: 'https://play.google.com/store/apps/details?id=com.jannahbuilder', type: 'play' },
      { href: 'https://github.com/binarymeadow/jannah-builder', type: 'site' },
    ],
    image: '/images/jannah-builder.webp',
    appCategory: 'LifestyleApplication',
  },
  {
    id: 1,
    title: 'iCare - Desktop Blink Reminder',
    description: 'A tiny always-on-top desktop widget that reminds you to blink and rest your eyes.',
    tags: ['Electron', 'TypeScript', 'Desktop App', 'Eye Care'],
    links: [
      { href: 'https://github.com/faesel/icare', type: 'site' },
    ],
    image: '/images/icare.png',
  },
  {
    id: 2,
    title: 'GridWatch - Copilot CLI Dashboard',
    description: 'A desktop dashboard for exploring your GitHub Copilot CLI sessions, token usage and activity.',
    tags: ['Electron', 'React', 'TypeScript', 'Recharts'],
    links: [
      { href: 'https://github.com/binarymeadow/gridwatch', type: 'site' },
    ],
    image: '/images/gridwatch.webp',
  },
  {
    id: 3,
    title: 'Az-Lazy - The go-to CLI for Azure storage',
    description: 'A command line tool for quickly managing Azure Storage queues, blobs and tables.',
    tags: ['c#', 'Azure', 'CLI'],
    links: [
      { href: 'https://github.com/faesel/az-lazy', type: 'site' },
    ],
    image: '/images/azlazy.webp',
  },
  {
    id: 4,
    title: 'Gatsby tech blog starter template',
    description: 'A free tech blog starter template built with Gatsby, Contentful and Disqus.',
    tags: ['Node.js', 'Gatsby', 'Contentful', 'Disqus'],
    links: [
      { href: 'https://github.com/faesel/gatsby-techblog-starter', type: 'site' },
    ],
    image: '/images/gatsby-blog-starter.webp',
  }
];

const operatingSystems = (links: ProjectLink[]): string =>
  [
    links.some((link) => link.type === 'play') && 'Android',
    links.some((link) => link.type === 'appstore') && 'iOS',
  ]
    .filter(Boolean)
    .join(', ');

const appsJsonLd = generateSoftwareApplicationListJsonLd(
  projects
    .filter((project) => project.appCategory)
    .map((project) => ({
      name: project.title.split(' - ')[0],
      description: project.description,
      url: project.links.find((link) => link.type === 'site')?.href ?? getAbsoluteUrl('/projects'),
      image: project.image ? getAbsoluteUrl(project.image) : undefined,
      applicationCategory: project.appCategory as string,
      operatingSystem: operatingSystems(project.links),
      installUrls: project.links.filter((link) => link.type !== 'site').map((link) => link.href),
    })),
  { name: siteConfig.author.name, url: siteConfig.author.url }
);

export default function ProjectsPage() {
  return (
    <div className={styles.container}>
      <JsonLd data={appsJsonLd} />
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
              
              {project.links.length > 0 && (
                <div className={styles.projectLinks}>
                  {project.links.some((link) => link.type !== 'site') && (
                    <div className={styles.storeBadges}>
                      {project.links.map((link) =>
                        link.type === 'appstore' ? (
                          <a
                            key={link.href}
                            href={link.href}
                            className={styles.storeBadgeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download on the App Store"
                          >
                            <Image
                              src="/badges/app-store-badge.svg"
                              alt="Download on the App Store"
                              width={120}
                              height={40}
                              className={styles.storeBadge}
                            />
                          </a>
                        ) : link.type === 'play' ? (
                          <a
                            key={link.href}
                            href={link.href}
                            className={styles.storeBadgeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Get it on Google Play"
                          >
                            <Image
                              src="/badges/google-play-badge.png?v=2"
                              alt="Get it on Google Play"
                              width={134}
                              height={40}
                              className={styles.storeBadge}
                            />
                          </a>
                        ) : null
                      )}
                    </div>
                  )}
                  {project.links
                    .filter((link) => link.type === 'site')
                    .map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className={styles.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label ?? 'See More →'}
                      </a>
                    ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
