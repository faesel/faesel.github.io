# GitHub Copilot Instructions for FAESEL.COM Blog

## Project Overview

This is a **static tech blog** built with **Next.js 14+** and **Contentful CMS**. It's a personal portfolio and blogging platform featuring a modern black/white design with pastel accents, optimized for SEO, performance, and accessibility.

**Project Type:** Personal blog and portfolio website  
**Tech Stack:** Next.js (App Router), TypeScript, React Server Components, Contentful CMS  
**Deployment:** Static export (`output: 'export'`) for GitHub Pages/Netlify/Vercel  
**Author:** Faesel Saeed  
**Domain:** https://www.faesel.com

---

## Architecture & Stack

### Core Technologies
- **Framework:** Next.js 16.1+ with App Router
- **Language:** TypeScript (strict mode enabled)
- **Runtime:** React 19+ with Server Components
- **CMS:** Contentful (headless CMS for blog posts)
- **Styling:** CSS Modules (scoped component styles)
- **Build Output:** Static HTML export (no server required)

### Key Dependencies
```json
{
  "contentful": "^11.10.3",
  "@contentful/rich-text-react-renderer": "^16.1.6",
  "marked": "^17.0.1",
  "gray-matter": "^4.0.3",
  "highlight.js": "^11.11.1"
}
```

### Build Configuration
- **Static Export:** `output: 'export'` in `next.config.js`
- **Image Optimization:** Disabled (`unoptimized: true`) for static hosting
- **Path Aliases:** `@/*` maps to `./src/*`
- **Revalidation:** 1-hour ISR (`revalidate: 3600`) on pages that fetch data

---

## Project Structure

```
faesel.github.io/
├── .github/
│   └── copilot-instructions.md    # This file
├── docs/
│   └── JSON-LD-GUIDE.md           # SEO structured data guide
├── public/
│   └── images/
│       ├── logo.png               # Site logo (large)
│       └── logo-small.png         # Header logo (40x40)
├── src/
│   ├── app/                       # Next.js App Router pages
│   │   ├── about/                 # About page
│   │   ├── blog/                  # Blog listing & articles
│   │   │   ├── [slug]/           # Dynamic blog post pages
│   │   │   ├── BlogPageClient.tsx # Client-side filtering
│   │   │   └── page.tsx          # Blog listing page
│   │   ├── contact/              # Contact page
│   │   ├── projects/             # Projects showcase
│   │   ├── layout.tsx            # Root layout (metadata, global styles)
│   │   ├── page.tsx              # Home page (featured posts)
│   │   ├── globals.css           # Global styles & CSS variables
│   │   ├── not-found.tsx         # 404 page
│   │   └── *.module.css          # Component-scoped styles
│   ├── components/               # Reusable React components
│   │   ├── Header.tsx            # Navigation header (client component)
│   │   ├── Footer.tsx            # Site footer
│   │   ├── BlogCard.tsx          # Blog post preview card
│   │   ├── GoogleAnalytics.tsx   # Google Analytics tracking component
│   │   └── *.module.css          # Component styles
│   ├── lib/                      # Utility functions & integrations
│   │   ├── contentful.ts         # Contentful API client & queries
│   │   ├── utils.ts              # Helper functions (excerpt, date)
│   │   ├── config.ts             # Site configuration (SEO, author)
│   │   └── jsonld.tsx            # JSON-LD schema generators
│   └── types/                    # TypeScript type definitions
│       └── contentful.ts         # Contentful content types
├── .env.local                    # Environment variables (gitignored)
├── .env.example                  # Environment variable template
├── next.config.js                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies & scripts
├── README.md                     # Project documentation
├── SETUP.md                      # Setup instructions
└── PROJECT_SUMMARY.md            # Comprehensive project summary
```

---

## Coding Conventions

### TypeScript Guidelines
1. **Always use TypeScript** - No `.js` or `.jsx` files
2. **Strict mode enabled** - Fix all type errors, no `any` without justification
3. **Type imports** - Use `import type` for type-only imports when possible
4. **Explicit return types** - Always specify return types for functions
5. **Use interfaces** - Prefer interfaces over types for object shapes

### React & Next.js Patterns
1. **Server Components by default** - Only add `'use client'` when needed
2. **Async Server Components** - Use `async function` for data fetching pages
3. **CSS Modules** - Use `.module.css` for component styles (scoped)
4. **Named exports** - Use `export default` for pages, named for components
5. **Metadata export** - Add `export const metadata` for SEO on pages
6. **Path aliases** - Always use `@/` for imports (e.g., `@/components/Header`)

### Styling Rules
1. **CSS Variables** - Define colors in `:root` in `globals.css`
2. **Mobile-first** - Write base styles for mobile, media queries for desktop
3. **Breakpoint** - Use `@media (min-width: 768px)` for tablet/desktop
4. **No inline styles** - Use CSS Modules or global styles
5. **Semantic class names** - Use descriptive, component-scoped names

### Contentful Integration
1. **Content Type ID** - Always use `'theCodeTransposerBlogPosts'`
2. **Error handling** - Wrap Contentful calls in try-catch, return empty arrays
3. **Type assertions** - Cast Contentful entries to `BlogPost` type
4. **Image URLs** - Prepend `https:` to Contentful image URLs
5. **Field access** - Use `post.fields.title`, `post.sys.id`, etc.

---

## Key Files & Their Purpose

### Configuration Files
- **`next.config.js`** - Next.js build settings (static export, image config)
- **`tsconfig.json`** - TypeScript compiler options (strict mode, paths)
- **`.env.local`** - Environment variables (Contentful credentials) **NEVER COMMIT**
- **`src/lib/config.ts`** - Site-wide configuration (name, URL, author, social links)

### Data Fetching
- **`src/lib/contentful.ts`** - All Contentful API functions:
  - `getAllBlogPosts()` - Fetch all posts, ordered by date
  - `getBlogPostBySlug(slug)` - Fetch single post by slug
  - `getAllSlugs()` - Get all slugs for static generation
  - `getAllTags()` - Get unique tags for filtering

### Type Definitions
- **`src/types/contentful.ts`** - TypeScript types for Contentful data:
  - `BlogPostFields` - Content type fields interface
  - `BlogPost` - Complete blog post entry type
  - `BlogCardProps` - Props for BlogCard component
  - `ProjectFields` - Project content type (if used)

### SEO & Structured Data
- **`src/lib/jsonld.tsx`** - JSON-LD schema generators:
  - `generateOrganizationJsonLd()` - Organization schema
  - `generateWebSiteJsonLd()` - WebSite schema
  - `generateBlogPostingJsonLd()` - BlogPosting schema
  - `generateBreadcrumbJsonLd()` - Breadcrumb schema
  - `JsonLd` component - Renders schema script tag

### Components
- **`src/components/Header.tsx`** - Navigation header (client component, mobile menu)
- **`src/components/Footer.tsx`** - Site footer with links
- **`src/components/BlogCard.tsx`** - Blog post preview card (reusable)
- **`src/components/GoogleAnalytics.tsx`** - Google Analytics tracking (client component)

### Pages
- **`src/app/page.tsx`** - Home page (featured posts)
- **`src/app/blog/page.tsx`** - Blog listing (server component)
- **`src/app/blog/BlogPageClient.tsx`** - Client-side tag filtering
- **`src/app/blog/[slug]/page.tsx`** - Dynamic blog post page
- **`src/app/about/page.tsx`** - About page
- **`src/app/projects/page.tsx`** - Projects showcase
- **`src/app/contact/page.tsx`** - Contact information
- **`src/app/layout.tsx`** - Root layout (metadata, fonts, JSON-LD)

---

## Content Management

### Contentful Content Type: "Blog"
**Content Type ID:** `theCodeTransposerBlogPosts`

**Fields:**
| Field ID | Type | Required | Description |
|----------|------|----------|-------------|
| `hero` | Asset | Yes | Hero image for the post |
| `title` | Text | Yes | Post title (unique) |
| `tags` | Text (list) | Yes | Array of tags for filtering |
| `slug` | Text | Yes | URL slug (unique, kebab-case) |
| `datePublished` | DateTime | Yes | Publication date |
| `bodym` | Long Text | Yes | Post content (Markdown) |

### Environment Variables
```bash
# .env.local (NEVER COMMIT THIS FILE)
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token_here
CONTENTFUL_MANAGEMENT_TOKEN=your_management_token_optional

# Google Analytics (optional)
NEXT_PUBLIC_GOOGLE_TRACKING_ID=G-XXXXXXXXXX
```

**Where to find:**
1. Go to Contentful → Settings → General Settings → Space ID
2. Go to Settings → API keys → Content Delivery API → Access token
3. Go to Google Analytics → Admin → Data Streams → Measurement ID

---

## Common Tasks & How to Do Them

### Adding a New Page
1. Create `src/app/newpage/page.tsx`
2. Add `export const metadata` for SEO
3. Create `src/app/newpage/page.module.css` for styles
4. Add navigation link in `src/components/Header.tsx` (update `navItems`)
5. Test locally with `npm run dev`

### Adding a New Component
1. Create `src/components/NewComponent.tsx`
2. Create `src/components/NewComponent.module.css`
3. Use TypeScript - define props interface
4. Add `'use client'` directive if it uses client-side features (hooks, events)
5. Import and use with `import NewComponent from '@/components/NewComponent'`

### Fetching Contentful Data
```typescript
// In a Server Component (no 'use client')
import { getAllBlogPosts } from '@/lib/contentful';

export default async function Page() {
  const posts = await getAllBlogPosts();
  // Use posts...
}
```

### Adding JSON-LD Schema
```typescript
import { JsonLd, generateBlogPostingJsonLd } from '@/lib/jsonld';
import { siteConfig } from '@/lib/config';

const schema = generateBlogPostingJsonLd({
  headline: post.title,
  description: excerpt,
  image: heroUrl,
  datePublished: post.datePublished,
  author: { name: siteConfig.author.name },
  publisher: siteConfig.organization,
  keywords: post.tags,
  url: getAbsoluteUrl(`/blog/${post.slug}`),
});

// In JSX
<JsonLd data={schema} />
```

### Styling with CSS Modules
```typescript
// Component.tsx
import styles from './Component.module.css';

export default function Component() {
  return <div className={styles.container}>...</div>;
}
```

```css
/* Component.module.css */
.container {
  padding: 2rem;
  background: var(--color-background);
}

@media (min-width: 768px) {
  .container {
    padding: 4rem;
  }
}
```

### Using CSS Variables
```css
/* Defined in src/app/globals.css */
:root {
  --color-primary: #000000;
  --color-background: #FFFFFF;
  --color-text: #333333;
  --color-accent-pink: #FFB6C1;
  --color-accent-blue: #B0E0E6;
  --color-accent-purple: #DDA0DD;
  --color-accent-green: #98FB98;
}

/* Use in any CSS file */
.button {
  background: var(--color-accent-pink);
}
```

---

## Development Workflow

### Local Development
```bash
npm run dev       # Start development server (http://localhost:3000)
```

### Building for Production
```bash
npm run build     # Build static site → outputs to ./out/
npm run start     # Preview production build
```

### Deployment
The site is configured for **static export** - the `out/` directory contains a fully static website that can be deployed to:
- **GitHub Pages** (recommended for faesel.github.io)
- **Netlify** (automatic builds from Git)
- **Vercel** (automatic builds from Git)
- **Any static file host**

---

## SEO Configuration

### Site Configuration (`src/lib/config.ts`)
**IMPORTANT:** Update this file with real values for proper SEO:

```typescript
export const siteConfig = {
  name: 'FAESEL.COM',
  url: 'https://www.faesel.com', // ⚠️ Use actual production domain
  description: 'A modern tech blog...',
  author: {
    name: 'Faesel Saeed',
    url: 'https://www.faesel.com/about',
    jobTitle: 'Software Developer',
    image: 'https://www.faesel.com/images/author.jpg',
  },
  organization: {
    name: 'Faesel Saeed',
    url: 'https://www.faesel.com',
    logo: 'https://www.faesel.com/images/logo.png',
  },
  social: {
    twitter: '@faeselsaeed',
    github: 'https://github.com/faeselsaeed',
    linkedin: 'https://www.linkedin.com/in/faesel-saeed-a97b1614',
  },
};
```

### JSON-LD Structured Data
Every page includes JSON-LD schemas for better SEO:
- **Home page:** Organization, WebSite, ItemList (featured posts)
- **Blog listing:** CollectionPage, ItemList (all posts)
- **Blog posts:** BlogPosting, BreadcrumbList, Organization
- **Static pages:** WebPage, BreadcrumbList

**Validate schemas at:** https://search.google.com/test/rich-results

---

## Design System

### Color Palette
```css
/* Primary colors */
--color-primary: #000000 (black)
--color-background: #FFFFFF (white)
--color-text: #333333 (dark gray)
--color-text-light: #666666 (medium gray)

/* Accent colors (pastel) */
--color-accent-pink: #FFB6C1 (light pink)
--color-accent-blue: #B0E0E6 (powder blue)
--color-accent-purple: #DDA0DD (plum)
--color-accent-green: #98FB98 (pale green)

/* Semantic colors */
--color-border: #E5E5E5 (light border)
--color-hover: #F0F0F0 (hover state)
```

### Typography
- **Font Stack:** System fonts (`-apple-system, BlinkMacSystemFont, Segoe UI, ...`)
- **Base Size:** 16px
- **Headings:** Bold, increased line-height
- **Body:** Line height 1.6 for readability

### Spacing
- **Base unit:** 1rem (16px)
- **Common spacings:** 0.5rem, 1rem, 2rem, 4rem
- **Container max-width:** 1200px
- **Content max-width:** 800px (for reading)

### Responsive Breakpoints
- **Mobile:** Default (< 768px)
- **Tablet/Desktop:** `@media (min-width: 768px)`

---

## Accessibility (WCAG 2.1 AA)

### Best Practices
1. **Semantic HTML** - Use `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`
2. **ARIA labels** - Add `aria-label` to icon buttons and navigation
3. **Alt text** - Always include descriptive alt text for images
4. **Keyboard navigation** - Ensure all interactive elements are keyboard accessible
5. **Focus indicators** - Visible focus states on all focusable elements
6. **Color contrast** - Maintain 4.5:1 contrast ratio for text
7. **Skip links** - Include skip-to-content link for screen readers

### Example
```tsx
<button
  className={styles.mobileMenuButton}
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  aria-label="Toggle menu"
  aria-expanded={mobileMenuOpen}
>
  {mobileMenuOpen ? '✕' : '☰'}
</button>
```

---

## Performance Optimization

### Current Optimizations
1. **Static generation** - All pages pre-rendered at build time
2. **ISR** - Revalidate blog data every hour (`revalidate: 3600`)
3. **Image optimization** - Using Next.js `<Image>` component (unoptimized for static export)
4. **Code splitting** - Automatic by Next.js App Router
5. **CSS Modules** - Scoped styles, automatically code-split
6. **Minimal JS** - Most components are Server Components (no client JS)

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Testing Performance
```bash
npm run build
npm run start
# Open http://localhost:3000
# Run Lighthouse audit in Chrome DevTools
```

---

## Testing & Quality Assurance

### Before Deploying
1. **Build test:** `npm run build` (check for TypeScript errors)
2. **Local preview:** `npm run start` (test the production build)
3. **Link checking:** Manually test all navigation links
4. **Content test:** Create 2-3 test blog posts in Contentful
5. **Mobile test:** Test responsive design on mobile devices
6. **SEO validation:** Check JSON-LD at https://search.google.com/test/rich-results
7. **Lighthouse audit:** Run in Chrome DevTools (aim for 90+ scores)
8. **Accessibility test:** Use axe DevTools or WAVE extension

### Common Issues & Solutions
| Issue | Solution |
|-------|----------|
| Build fails with "resource not found" | Check `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` |
| No blog posts showing | Ensure posts are published in Contentful |
| Images not loading | Check hero images are published, URLs start with `https:` |
| TypeScript errors | Run `npm install` to ensure types are installed |
| Mobile menu not working | Check if `'use client'` is at top of Header.tsx |

---

## AI Assistance Guidelines (for Copilot)

### When Generating Code
1. **Always use TypeScript** - Include proper types and interfaces
2. **Follow project structure** - Put files in correct directories
3. **Use existing patterns** - Match coding style of existing components
4. **Import from aliases** - Use `@/` path aliases (e.g., `@/lib/contentful`)
5. **CSS Modules** - Create `.module.css` files for new components
6. **Server Components** - Default to Server Components, only add `'use client'` if needed
7. **Error handling** - Include try-catch for Contentful calls, return empty arrays

### When Suggesting Changes
1. **Maintain consistency** - Match existing code style and patterns
2. **Consider SEO** - Add metadata exports, JSON-LD schemas
3. **Think mobile-first** - Responsive design is critical
4. **Accessibility first** - Add ARIA labels, semantic HTML
5. **Type safety** - No `any` types without justification

### When Adding Features
1. **Check existing code** - Don't duplicate utilities or components
2. **Update navigation** - Add new pages to Header.tsx
3. **Add documentation** - Update README.md or create guide in docs/
4. **Test locally** - Suggest running `npm run dev` to test
5. **Consider static export** - Avoid features that require server runtime

### Code Generation Examples

#### Creating a New Page
```typescript
// src/app/newpage/page.tsx
import styles from './page.module.css';

export const metadata = {
  title: 'New Page | FAESEL.COM',
  description: 'Description of the new page',
};

export default function NewPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>New Page</h1>
      <div className={styles.content}>
        {/* Content here */}
      </div>
    </div>
  );
}
```

#### Creating a Client Component
```typescript
// src/components/NewComponent.tsx
'use client';

import { useState } from 'react';
import styles from './NewComponent.module.css';

interface NewComponentProps {
  title: string;
  onAction?: () => void;
}

export default function NewComponent({ title, onAction }: NewComponentProps) {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <button
        onClick={() => {
          setActive(!active);
          onAction?.();
        }}
        className={styles.button}
        aria-pressed={active}
      >
        Toggle
      </button>
    </div>
  );
}
```

#### Fetching Data in Server Component
```typescript
// src/app/example/page.tsx
import { getAllBlogPosts } from '@/lib/contentful';
import { JsonLd } from '@/lib/jsonld';
import { siteConfig, getAbsoluteUrl } from '@/lib/config';

export const metadata = {
  title: 'Example | FAESEL.COM',
};

export const revalidate = 3600; // Revalidate every hour

export default async function ExamplePage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <JsonLd data={{ /* schema */ }} />
      <main>
        {posts.map(post => (
          <article key={post.sys.id}>
            {/* Render post */}
          </article>
        ))}
      </main>
    </>
  );
}
```

---

## Troubleshooting

### Build Errors
```bash
# Clear Next.js cache and rebuild
rm -rf .next out
npm run build

# Check TypeScript errors
npx tsc --noEmit

# Verify environment variables
cat .env.local  # Should have CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN
```

### Development Issues
```bash
# Restart dev server
npm run dev

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Contentful Issues
1. Check Space ID matches in Contentful dashboard
2. Verify API token is Content **Delivery** API (not Management)
3. Ensure content type ID is exactly `theCodeTransposerBlogPosts`
4. Check blog posts are **published** (not just saved as draft)

---

## Resources & Documentation

### Project Documentation
- **README.md** - Main project documentation
- **SETUP.md** - Detailed setup instructions for Contentful
- **PROJECT_SUMMARY.md** - Comprehensive project overview
- **docs/JSON-LD-GUIDE.md** - SEO structured data guide

### External Documentation
- **Next.js:** https://nextjs.org/docs
- **Contentful:** https://www.contentful.com/developers/docs/
- **TypeScript:** https://www.typescriptlang.org/docs/
- **React:** https://react.dev/

### Tools & Validators
- **Rich Results Test:** https://search.google.com/test/rich-results
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **WAVE Accessibility:** https://wave.webaim.org/
- **axe DevTools:** https://www.deque.com/axe/devtools/

---

## Quick Reference

### npm Scripts
```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build static site to ./out/
npm run start    # Preview production build
npm run export   # Alias for build (static export)
```

### Environment Variables
```bash
CONTENTFUL_SPACE_ID          # Required - Contentful space ID
CONTENTFUL_ACCESS_TOKEN      # Required - Content Delivery API token
CONTENTFUL_MANAGEMENT_TOKEN  # Optional - Management API token
NEXT_PUBLIC_GOOGLE_TRACKING_ID  # Optional - Google Analytics 4 Measurement ID (G-XXXXXXXXXX)
```

### Import Aliases
```typescript
import Component from '@/components/Component';
import { getAllBlogPosts } from '@/lib/contentful';
import { BlogPost } from '@/types/contentful';
import styles from './Component.module.css';
```

### Color Variables (CSS)
```css
var(--color-primary)
var(--color-background)
var(--color-text)
var(--color-accent-pink)
var(--color-accent-blue)
var(--color-accent-purple)
var(--color-accent-green)
```

---

## Contact & Maintainer

**Author:** Faesel Saeed  
**GitHub:** https://github.com/faesel  
**LinkedIn:** https://www.linkedin.com/in/faesel-saeed-a97b1614  
**Twitter:** @faeselsaeed  
**Website:** https://www.faesel.com

---

*Last Updated: February 2026*  
*This skill file helps GitHub Copilot understand the project structure, conventions, and best practices for code generation and suggestions.*
