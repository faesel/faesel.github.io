import { siteConfig, getAbsoluteUrl } from '@/lib/config';

export const dynamic = 'force-static';

export async function GET(): Promise<Response> {
  const body = `User-agent: *
Allow: /

Sitemap: ${getAbsoluteUrl('/sitemap.xml')}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
