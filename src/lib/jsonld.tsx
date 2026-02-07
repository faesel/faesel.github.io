// JSON-LD Schema.org structured data utilities for SEO

export interface OrganizationSchema {
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[]; // Social media profiles
}

export interface BlogPostingSchema {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: OrganizationSchema;
  keywords?: string[];
  url: string;
}

export interface WebSiteSchema {
  name: string;
  url: string;
  description: string;
  publisher?: OrganizationSchema;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generate Organization JSON-LD
 */
export function generateOrganizationJsonLd(org: OrganizationSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: org.name,
    url: org.url,
    logo: org.logo ? {
      '@type': 'ImageObject',
      url: org.logo,
    } : undefined,
    sameAs: org.sameAs,
  };
}

/**
 * Generate WebSite JSON-LD
 */
export function generateWebSiteJsonLd(site: WebSiteSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: site.publisher ? {
      '@type': 'Organization',
      name: site.publisher.name,
      url: site.publisher.url,
    } : undefined,
  };
}

/**
 * Generate BlogPosting JSON-LD for article pages
 */
export function generateBlogPostingJsonLd(post: BlogPostingSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.headline,
    description: post.description,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: post.author.url,
    },
    publisher: {
      '@type': 'Organization',
      name: post.publisher.name,
      url: post.publisher.url,
      logo: post.publisher.logo ? {
        '@type': 'ImageObject',
        url: post.publisher.logo,
      } : undefined,
    },
    keywords: post.keywords?.join(', '),
    url: post.url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
  };
}

/**
 * Generate BreadcrumbList JSON-LD
 */
export function generateBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Person JSON-LD (for author)
 */
export function generatePersonJsonLd(person: {
  name: string;
  url?: string;
  image?: string;
  jobTitle?: string;
  sameAs?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    url: person.url,
    image: person.image,
    jobTitle: person.jobTitle,
    sameAs: person.sameAs,
  };
}

/**
 * Helper to render JSON-LD script tag
 */
export function JsonLd({ data }: { data: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
