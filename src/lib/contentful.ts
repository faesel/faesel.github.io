import { createClient } from 'contentful';
import { BlogPost, BlogPostFields } from '@/types/contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const entries = await client.getEntries({
      content_type: 'theCodeTransposerBlogPosts',
      order: ['-fields.datePublished'],
    });
    return entries.items as unknown as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const entries = await client.getEntries({
      content_type: 'theCodeTransposerBlogPosts',
      'fields.slug': slug,
      limit: 1,
    });
    return entries.items.length > 0 ? (entries.items[0] as unknown as BlogPost) : null;
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  try {
    const entries = await client.getEntries({
      content_type: 'theCodeTransposerBlogPosts',
      select: ['fields.slug'],
    });
    return entries.items.map((item) => (item.fields as any).slug as string);
  } catch (error) {
    console.error('Error fetching slugs:', error);
    return [];
  }
}

export async function getAllTags(): Promise<string[]> {
  try {
    const entries = await client.getEntries({
      content_type: 'theCodeTransposerBlogPosts',
      select: ['fields.tags'],
    });
    const allTags = entries.items.flatMap((item) => (item.fields as any).tags || []);
    return Array.from(new Set(allTags)).sort();
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
}
