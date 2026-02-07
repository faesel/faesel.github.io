// Site configuration for SEO and JSON-LD
// Update these values to match your blog

export const siteConfig = {
  name: 'FAESEL.COM',
  url: 'https://www.faesel.com', // Update with your actual domain
  description: 'A modern tech blog exploring technology, coding, and digital innovation',
  author: {
    name: 'Faesel Saeed', // Update with your name
    url: 'https://www.faesel.com/about',
    jobTitle: 'Software Developer',
    image: 'https://yourblog.com/images/author.jpg', // Add your photo
  },
  organization: {
    name: 'Faesel Saeed',
    url: 'https://www.faesel.com',
    logo: 'https://www.faesel.com/images/logo.png',
  },
  social: {
    twitter: '@faeselsaeed',
    github: 'https://github.com/faesel',
    linkedin: 'https://www.linkedin.com/in/faesel-saeed-a97b1614',
  },
};

// Helper to get absolute URL
export function getAbsoluteUrl(path: string = ''): string {
  // Remove trailing slash from base URL and leading slash from path
  const baseUrl = siteConfig.url.replace(/\/$/, '');
  const cleanPath = path.replace(/^\//, '');
  return cleanPath ? `${baseUrl}/${cleanPath}` : baseUrl;
}
