import { getAllBlogPosts, getAllTags } from '@/lib/contentful';
import { JsonLd, generateBreadcrumbJsonLd } from '@/lib/jsonld';
import { getAbsoluteUrl } from '@/lib/config';
import BlogPageClient from './BlogPageClient';

export const revalidate = 3600;

export const metadata = {
  title: 'Blog | Tech Blog',
  description: 'Read the latest articles about technology, coding, and digital innovation',
  openGraph: {
    title: 'Blog | Tech Blog',
    description: 'Read the latest articles about technology, coding, and digital innovation',
    type: 'website',
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  const allTags = await getAllTags();

  // Generate Breadcrumb JSON-LD for blog listing
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: getAbsoluteUrl('/') },
    { name: 'Blog', url: getAbsoluteUrl('/blog') },
  ]);

  // Generate CollectionPage JSON-LD
  const collectionPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Blog',
    description: 'Articles about technology, coding, and digital innovation',
    url: getAbsoluteUrl('/blog'),
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={collectionPageJsonLd} />
      <BlogPageClient posts={posts} allTags={allTags} />
    </>
  );
}
