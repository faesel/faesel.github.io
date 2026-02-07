import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { getAllBlogPosts } from '@/lib/contentful';
import { BlogPostFields } from '@/types/contentful';
import { getExcerpt } from '@/lib/utils';
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
          <h1 className={styles.heroTitle}>Welcome to My Tech Blog</h1>
          <p className={styles.heroSubtitle}>
            Exploring technology, coding, and digital innovation
          </p>
          <Link href="/blog" className={styles.heroButton}>
            Explore Articles
          </Link>
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
