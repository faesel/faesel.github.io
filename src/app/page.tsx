import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { getAllBlogPosts } from '@/lib/contentful';
import { BlogPostFields } from '@/types/contentful';
import { getExcerpt, calculateReadingTime } from '@/lib/utils';
import { JsonLd } from '@/lib/jsonld';
import { siteConfig, getAbsoluteUrl } from '@/lib/config';
import styles from './page.module.css';

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  const allPosts = await getAllBlogPosts();
  const featuredPosts = allPosts.slice(0, 3);

  // Generate ItemList JSON-LD for featured posts
  const featuredPostsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Featured Articles',
    itemListElement: featuredPosts.map((post, index) => {
      const fields = post.fields as any as BlogPostFields;
      return {
        '@type': 'ListItem',
        position: index + 1,
        url: getAbsoluteUrl(`/blog/${fields.slug}`),
        name: fields.title,
      };
    }),
  };

  return (
    <>
      <JsonLd data={featuredPostsJsonLd} />
      
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Hi, I'm <span className={styles.highlight}>{siteConfig.author.name}</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Software Developer & Tech Enthusiast. 
            <br />
            Welcome to my digital garden where I share insights on technology, coding, and innovation.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/blog" className={styles.heroButtonPrimary}>
              Read the Blog
            </Link>
            <Link href="/projects" className={styles.heroButtonSecondary}>
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Featured Articles</h2>
        <div className={styles.grid}>
          {featuredPosts.map((post) => {
            const fields = post.fields as any as BlogPostFields;
            return (
              <BlogCard
                key={post.sys.id}
                title={fields.title}
                slug={fields.slug}
                datePublished={fields.datePublished}
                tags={fields.tags}
                heroUrl={`https:${(fields.hero as any).fields.file.url}`}
                excerpt={getExcerpt(fields.bodym)}
                readingTime={calculateReadingTime(fields.bodym)}
              />
            );
          })}
        </div>
        
        {allPosts.length > 3 && (
          <div className={styles.viewAll}>
            <Link href="/blog" className={styles.viewAllLink}>
              View All Articles →
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
