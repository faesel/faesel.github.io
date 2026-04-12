import { getAllBlogPosts } from '@/lib/contentful';
import { siteConfig, getAbsoluteUrl } from '@/lib/config';

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

interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq: string;
  priority: number;
}

export async function GET(): Promise<Response> {
  const posts = await getAllBlogPosts();

  const staticPages: SitemapEntry[] = [
    { url: getAbsoluteUrl('/'), changefreq: 'weekly', priority: 1.0 },
    { url: getAbsoluteUrl('/blog'), changefreq: 'daily', priority: 0.9 },
    { url: getAbsoluteUrl('/projects'), changefreq: 'monthly', priority: 0.7 },
    { url: getAbsoluteUrl('/about'), changefreq: 'monthly', priority: 0.6 },
    { url: getAbsoluteUrl('/contact'), changefreq: 'yearly', priority: 0.5 },
  ];

  const blogEntries: SitemapEntry[] = posts.map((post) => ({
    url: getAbsoluteUrl(`/blog/${post.fields.slug as string}`),
    lastmod: new Date(post.fields.datePublished as string).toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8,
  }));

  const allEntries = [...staticPages, ...blogEntries];

  const urls = allEntries.map((entry) => {
    const lastmod = entry.lastmod ? `\n    <lastmod>${escapeXml(entry.lastmod)}</lastmod>` : '';
    return `  <url>
    <loc>${escapeXml(entry.url)}</loc>${lastmod}
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
