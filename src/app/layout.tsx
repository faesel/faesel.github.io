import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { JsonLd, generateOrganizationJsonLd, generateWebSiteJsonLd } from '@/lib/jsonld';
import { siteConfig, getAbsoluteUrl } from '@/lib/config';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tech Blog',
  description: 'A modern tech blog built with Next.js and Contentful',
  keywords: ['blog', 'technology', 'web development', 'programming'],
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.social.twitter,
    creator: siteConfig.social.twitter,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Generate JSON-LD for Organization and WebSite
  const organizationJsonLd = generateOrganizationJsonLd({
    name: siteConfig.organization.name,
    url: siteConfig.organization.url,
    logo: getAbsoluteUrl('/images/logo.png'),
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
    ],
  });

  const websiteJsonLd = generateWebSiteJsonLd({
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      name: siteConfig.organization.name,
      url: siteConfig.organization.url,
    },
  });

  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content" style={{ minHeight: '70vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
