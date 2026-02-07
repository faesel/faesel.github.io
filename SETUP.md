# Setup Guide - Tech Blog

## Quick Start

Your Next.js blog is ready! Follow these steps to get it running:

### 1. Set Up Contentful

1. Go to https://www.contentful.com and create a free account
2. Create a new space
3. Import the content model or create it manually:

#### Content Type: "Blog"

Create a content type with **Name**: `Blog` and **ID**: `theCodeTransposerBlogPosts` with these fields:

| Field Name | Field ID | Type | Required | Validation |
|------------|----------|------|----------|------------|
| Hero | hero | Media (Asset) | Yes | - |
| Title | title | Short text | Yes | Unique |
| Tags | tags | Short text, list | Yes | - |
| Slug | slug | Short text | Yes | Unique, max 50 chars, kebab-case |
| Date Published | datePublished | Date & time | Yes | - |
| Body (Markdown) | bodym | Long text | Yes | - |

### 2. Get Your API Keys

1. In Contentful, go to **Settings → API keys**
2. Create a new API key or use the default
3. Copy these values:
   - **Space ID**
   - **Content Delivery API - access token**
   - (Optional) **Content Management API - access token**

### 3. Configure Environment Variables

Edit `.env.local` in the root directory:

\`\`\`env
CONTENTFUL_SPACE_ID=your_actual_space_id
CONTENTFUL_ACCESS_TOKEN=your_actual_delivery_token
CONTENTFUL_MANAGEMENT_TOKEN=your_management_token_optional
\`\`\`

### 4. Create Some Content

1. In Contentful, go to **Content**
2. Click **Add entry → Blog**
3. Fill in the fields:
   - Upload a hero image
   - Add a title
   - Add some tags (e.g., "JavaScript", "React", "Next.js")
   - Create a slug (e.g., "my-first-post")
   - Set the publish date
   - Write your article in Markdown in the bodym field

4. Click **Publish**
5. Create 2-3 more articles for testing

### 5. Run the Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit http://localhost:3000 - you should see your blog with articles!

### 6. Build for Production

\`\`\`bash
npm run build
\`\`\`

The static site will be generated in the `out/` directory.

## Customizing Your Blog

### Update Site Information

Edit `src/app/layout.tsx` to change:
- Site title
- Description
- Author name
- Meta tags

### Customize Pages

- **About**: Edit `src/app/about/page.tsx` (add your email and social links)
- **Projects**: Edit `src/app/projects/page.tsx` (replace sample projects with yours)
- **Contact**: Edit `src/app/contact/page.tsx` (add your email and social links)

### Configure SEO & JSON-LD

**Important for SEO!** Edit `src/lib/config.ts` and update:

\`\`\`typescript
export const siteConfig = {
  name: 'Your Blog Name',
  url: 'https://yourdomain.com', // ⚠️ CRITICAL: Use your actual domain!
  description: 'Your blog description',
  author: {
    name: 'Your Name',
    url: 'https://yourdomain.com/about',
    jobTitle: 'Software Developer',
  },
  social: {
    twitter: '@yourusername',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
};
\`\`\`

This configures JSON-LD structured data for better SEO. See `docs/JSON-LD-GUIDE.md` for details.

### Change Colors

Edit `src/app/globals.css` to modify the color scheme:

\`\`\`css
:root {
  --color-accent-pink: #FFB6C1;
  --color-accent-blue: #B0E0E6;
  --color-accent-purple: #DDA0DD;
  --color-accent-green: #98FB98;
}
\`\`\`

### Replace Logos

Replace these files with your own logos:
- `public/images/logo.png` (large logo)
- `public/images/logo-small.png` (small logo for header)

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to https://netlify.com
3. Create new site from Git
4. Set build command: `npm run build`
5. Set publish directory: `out`
6. Add environment variables
7. Deploy!

### Deploy to GitHub Pages

1. Build the site: `npm run build`
2. The `out/` directory contains your static site
3. Deploy the `out/` directory to GitHub Pages

## Troubleshooting

### Build fails with "resource could not be found"
- Check your `CONTENTFUL_SPACE_ID` is correct
- Verify your `CONTENTFUL_ACCESS_TOKEN` is the Content **Delivery** API token (not Management)
- Ensure your content type ID is exactly `theCodeTransposerBlogPosts` (not just "Blog")

### No articles showing
- Make sure you've published at least one article in Contentful
- Check that all required fields are filled in
- Verify the hero image is uploaded and published

### Images not loading
- Ensure hero images are published in Contentful
- Check that image URLs start with `https://`

### TypeScript errors
- Run `npm install` to ensure all dependencies are installed
- Delete `.next` folder and rebuild

## Support

For issues or questions:
- Check the main README.md
- Review Next.js documentation: https://nextjs.org/docs
- Review Contentful documentation: https://www.contentful.com/developers/docs/

Enjoy your new blog! 🎉
