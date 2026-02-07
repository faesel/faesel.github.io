# JSON-LD & SEO Enhancement Guide

## What is JSON-LD?

JSON-LD (JSON for Linked Data) is structured data that helps search engines better understand your content, improving SEO and search result appearance.

## What's Included

Your blog now has comprehensive JSON-LD structured data on every page:

### Site-Wide (All Pages)
- **Organization Schema** - Your org details, logo, social profiles
- **WebSite Schema** - Site name, URL, description

### Home Page
- **ItemList Schema** - Featured articles

### Blog Listing
- **CollectionPage Schema** - Blog collection
- **BreadcrumbList Schema** - Navigation path

### Article Pages
- **BlogPosting Schema** - Full article metadata (author, dates, keywords)
- **BreadcrumbList Schema** - Article navigation

## Quick Setup

**1. Update Site Config** - Edit `src/lib/config.ts`:

\`\`\`typescript
export const siteConfig = {
  name: 'Your Blog Name',
  url: 'https://yourdomain.com', // ⚠️ REQUIRED: Update with real domain!
  author: {
    name: 'Your Name',
    jobTitle: 'Your Title',
  },
  social: {
    twitter: '@yourusername',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
};
\`\`\`

**2. Validate** - Test at: https://search.google.com/test/rich-results

## SEO Benefits

✅ **Rich snippets** in search results (images, dates, author)  
✅ **Better rankings** from explicit content structure  
✅ **Higher CTR** with enhanced search appearance  
✅ **Voice search** optimization  
✅ **Featured snippets** eligibility

## Files Added

- `src/lib/jsonld.tsx` - JSON-LD generation functions
- `src/lib/config.ts` - Site SEO configuration

## Testing Tools

- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema Validator: https://validator.schema.org/
- Google Search Console: Monitor "Enhancements"

## Next Steps

1. Update `src/lib/config.ts` with your real info
2. Deploy your site
3. Validate with Google's tools
4. Monitor in Search Console

That's it! Your blog now has professional-grade structured data.
