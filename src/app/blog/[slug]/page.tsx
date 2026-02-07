import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPostBySlug, getAllSlugs } from '@/lib/contentful';
import { parseMarkdown, formatDate } from '@/lib/utils';
import { JsonLd, generateBlogPostingJsonLd, generateBreadcrumbJsonLd } from '@/lib/jsonld';
import { siteConfig, getAbsoluteUrl } from '@/lib/config';
import type { BlogPostFields } from '@/types/contentful';
import styles from './page.module.css';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  const fields: BlogPostFields = post.fields as any;

  return {
    title: `${fields.title} | Tech Blog`,
    description: fields.bodym.substring(0, 160),
    keywords: fields.tags,
    openGraph: {
      title: fields.title,
      description: fields.bodym.substring(0, 160),
      images: [`https:${(fields.hero as any).fields.file.url}`],
      type: 'article' as const,
      publishedTime: fields.datePublished,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const fields: BlogPostFields = post.fields as any;
  const htmlContent = parseMarkdown(fields.bodym);
  const heroUrl = `https:${(fields.hero as any).fields.file.url}`;
  const articleUrl = getAbsoluteUrl(`/blog/${slug}`);
  
  // Deduplicate tags to avoid duplicate keys
  const uniqueTags = fields.tags ? Array.from(new Set(fields.tags)) : [];

  // Generate BlogPosting JSON-LD
  const blogPostingJsonLd = generateBlogPostingJsonLd({
    headline: fields.title,
    description: fields.bodym.substring(0, 160),
    image: heroUrl,
    datePublished: fields.datePublished,
    dateModified: fields.datePublished, // Use same as published if no modified date
    author: {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
    publisher: {
      name: siteConfig.organization.name,
      url: siteConfig.organization.url,
      logo: getAbsoluteUrl('/images/logo.png'),
    },
    keywords: uniqueTags,
    url: articleUrl,
  });

  // Generate Breadcrumb JSON-LD
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: getAbsoluteUrl('/') },
    { name: 'Blog', url: getAbsoluteUrl('/blog') },
    { name: fields.title, url: articleUrl },
  ]);

  return (
    <>
      <JsonLd data={blogPostingJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      
      <article className={styles.article}>
        <Link href="/blog" className={styles.backLink}>
          ← Back to Blog
        </Link>

        <header className={styles.header}>
          <h1 className={styles.title}>{fields.title}</h1>
          
          <div className={styles.meta}>
            <time className={styles.date} dateTime={fields.datePublished}>
              📅 {formatDate(fields.datePublished)}
            </time>
          </div>

          {uniqueTags.length > 0 && (
            <div className={styles.tags}>
              {uniqueTags.map((tag, index) => (
                <span key={`${tag}-${index}`} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className={styles.heroImage}>
          <Image
            src={heroUrl}
            alt={fields.title}
            fill
            className={styles.heroImageImg}
            priority
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </>
  );
}
