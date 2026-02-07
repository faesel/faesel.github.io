# Social Sharing Buttons

## Overview

The ShareButtons component provides easy social media sharing for blog articles. It includes support for major platforms and native mobile sharing.

## Features

✅ **Multiple Platforms**
- Twitter (X)
- LinkedIn
- Facebook
- Reddit
- Email
- Copy Link

✅ **User Experience**
- Native mobile share API support
- Copy link with visual feedback
- Responsive design
- Accessible (ARIA labels)
- Smooth hover animations

✅ **SEO Benefits**
- Increases content reach
- Drives organic traffic
- Improves social signals

## Usage

### Basic Implementation

The component is integrated into blog article pages with two variants:
1. **Sidebar (Desktop)** - Fixed to the left of the article, hidden on smaller screens.
2. **Inline (Bottom)** - Appears after the article content on all devices.

```tsx
import ShareButtons from '@/components/ShareButtons';

// Sidebar variant (Desktop only)
<ShareButtons 
  url={url} 
  title={title} 
  variant="sidebar" 
/>

// Inline variant (Default)
<ShareButtons 
  url={url} 
  title={title} 
/>
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `url` | string | Yes | Full URL of the page to share |
| `title` | string | Yes | Title of the content |
| `description` | string | No | Brief description (used for email) |
| `variant` | 'inline' \| 'sidebar' | No | Display mode (default: 'inline') |

## Supported Platforms

### 1. Twitter (X)
- Opens Twitter intent with pre-filled text
- Includes article URL and title
- Example: `https://twitter.com/intent/tweet?url=...&text=...`

### 2. LinkedIn
- Uses LinkedIn's share endpoint
- Automatically fetches Open Graph data from your page
- Professional sharing for business content

### 3. Facebook
- Facebook's native sharer
- Pulls Open Graph metadata
- Shows preview card with image

### 4. Reddit
- Submit to Reddit
- Includes title and URL
- User selects subreddit

### 5. Email
- Opens default email client
- Pre-fills subject and body
- Includes article link

### 6. Copy Link
- Copies URL to clipboard
- Shows "Link copied!" confirmation
- Works across all browsers

### 7. Native Share (Mobile)
- Uses Web Share API when available
- Native iOS/Android share sheet
- Includes all device-supported apps
- Only visible on supporting devices

## Customization

### Positioning Options

The component supports different positioning strategies:

#### Default (Inline)
```tsx
// Already implemented
<ShareButtons url={url} title={title} />
```

#### Sticky (Stays visible while scrolling)
```tsx
<div className={styles.sticky}>
  <ShareButtons url={url} title={title} />
</div>
```

Add to CSS:
```css
.sticky {
  position: sticky;
  top: 100px;
  z-index: 10;
}
```

#### Floating Sidebar (Desktop only)
```tsx
<div className={styles.floating}>
  <ShareButtons url={url} title={title} />
</div>
```

The floating style is already defined in `ShareButtons.module.css` but not active. To enable:
- Uncomment or apply the `.floating` class
- Buttons will appear as a vertical bar on the left side
- Automatically hidden on mobile/tablet

### Color Customization

Each platform has brand colors defined in `ShareButtons.module.css`:

```css
.twitter { background: #1DA1F2; }
.linkedin { background: #0077B5; }
.facebook { background: #1877F2; }
.reddit { background: #FF4500; }
.email { background: #7C7C7C; }
.copy { background: var(--color-primary); }
```

Modify these in the CSS file to match your design.

### Size Adjustment

Change button size in `ShareButtons.module.css`:

```css
.button {
  width: 44px;  /* Change to 40px or 48px */
  height: 44px;
}

.icon {
  width: 20px;  /* Adjust proportionally */
  height: 20px;
}
```

## Analytics Tracking

To track share button clicks, add event tracking:

```tsx
const handleShare = (platform: string) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'share', {
      method: platform,
      content_type: 'article',
      item_id: url,
    });
  }
};
```

Then update each share button:
```tsx
<a
  href={shareLinks.twitter}
  onClick={() => handleShare('twitter')}
  // ... rest of props
>
```

## Best Practices

### 1. Placement
- **Top placement**: Encourages impulse sharing
- **Bottom placement**: Allows informed sharing after reading
- **Both**: Maximizes sharing opportunities ✅ (current implementation)

### 2. URL Structure
Always use absolute URLs:
```tsx
const articleUrl = getAbsoluteUrl(`/blog/${slug}`);
// ✅ https://www.faesel.com/blog/article-slug
// ❌ /blog/article-slug
```

### 3. Description
Keep it concise (160 characters):
```tsx
description={fields.bodym.substring(0, 160)}
```

### 4. Open Graph Tags
Ensure your pages have proper OG tags (already implemented):
```tsx
openGraph: {
  title: fields.title,
  description: fields.bodym.substring(0, 160),
  images: [heroUrl],
  type: 'article',
}
```

## Accessibility

The component includes:
- ✅ `aria-label` on all buttons
- ✅ Semantic HTML
- ✅ Keyboard navigation support
- ✅ High contrast colors
- ✅ Clear focus indicators

## Browser Support

- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Web Share API (modern mobile browsers)
- ✅ Clipboard API (HTTPS required)

## Performance

- **Component size**: ~7KB
- **No external dependencies**: Pure React
- **Client-side only**: No server rendering overhead
- **Lazy loading**: Only loads when visible

## Troubleshooting

### Copy Link Not Working
- **Issue**: Clipboard API requires HTTPS
- **Solution**: Works on localhost and HTTPS sites (your site is on HTTPS)

### Native Share Not Showing
- **Normal**: Only appears on supporting devices
- **Desktop**: Not supported by desktop browsers
- **Mobile**: Available on iOS/Android with modern browsers

### Share Preview Not Showing Correctly
- **Check**: Verify Open Graph tags in page source
- **Test**: Use https://www.opengraph.xyz/
- **Cache**: Platforms cache OG data; may take time to update

### Share Counts
- This implementation doesn't show share counts
- To add counts, you'd need to integrate with platform APIs
- Consider services like SharedCount or AddThis

## Future Enhancements

Potential additions:
- Share count display
- WhatsApp sharing
- Pinterest (for image-heavy content)
- Telegram
- Custom share message templates
- A/B testing different placements

## Example: Custom Implementation

For a minimal share bar with just Twitter and LinkedIn:

```tsx
<div className="minimal-share">
  <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`}>
    Twitter
  </a>
  <a href={`https://linkedin.com/sharing/share-offsite/?url=${shareUrl}`}>
    LinkedIn
  </a>
</div>
```

---

## Support

The ShareButtons component is now live on all blog article pages at:
- After hero image
- After article content

Readers can easily share your content across their favorite platforms! 🚀
