import { getAllBlogPosts } from '@/lib/contentful';
import { siteConfig, getAbsoluteUrl } from '@/lib/config';
import { getExcerpt } from '@/lib/utils';

export const dynamic = 'force-static';
export const revalidate = 3600;

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET(): Promise<Response> {
  const posts = await getAllBlogPosts();

  const lastBuildDate = posts.length > 0
    ? new Date(posts[0].fields.datePublished as string).toUTCString()
    : new Date().toUTCString();

  const items = posts.map((post) => {
    const title = post.fields.title as string;
    const slug = post.fields.slug as string;
    const datePublished = post.fields.datePublished as string;
    const body = post.fields.bodym as string;
    const tags = (post.fields.tags as string[]) || [];
    const excerpt = getExcerpt(body, 300);
    const url = getAbsoluteUrl(`/blog/${slug}`);

    const categoryTags = tags
      .map((tag) => `      <category>${escapeXml(tag)}</category>`)
      .join('\n');

    return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(datePublished).toUTCString()}</pubDate>
      <description>${escapeXml(excerpt)}</description>
${categoryTags}
    </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.name)}</title>
    <link>${siteConfig.url}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en-gb</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${getAbsoluteUrl('/feed.xml')}" rel="self" type="application/rss+xml" />
    <managingEditor>${escapeXml(siteConfig.author.name)}</managingEditor>
    <webMaster>${escapeXml(siteConfig.author.name)}</webMaster>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
