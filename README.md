# Tech Blog - Next.js Static Website with Contentful

A modern, performant static blog built with Next.js 14+ and Contentful CMS. Features a clean black and white design with pastel accent colors, optimized for Core Web Vitals and accessibility.

## ✨ Features

- 🚀 **Next.js 14+** with App Router and React Server Components
- 📝 **Contentful CMS** integration for content management
- 🎨 **Modern Design** with black/white theme and pastel accents
- ♿ **Accessible** - WCAG 2.1 AA compliant
- ⚡ **Performance** - Optimized for Core Web Vitals
- 📱 **Responsive** - Mobile-first design
- 🔍 **SEO Optimized** - Meta tags, OpenGraph, and **JSON-LD structured data**
- 🏷️ **Tag Filtering** - Filter blog posts by tags
- 📦 **Static Export** - Host anywhere (Netlify, Vercel, GitHub Pages, etc.)

## 📋 Pages

- **Home** - Hero section with featured articles
- **Blog** - List of all articles with tag filtering
- **Article** - Individual blog post pages with markdown rendering
- **Projects** - Showcase your projects
- **About** - Information about you
- **Contact** - Contact information and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A Contentful account (free tier available)
- Your Contentful Space ID and API tokens

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Set Up Contentful

1. Create a Contentful account at https://www.contentful.com
2. Create a new space
3. Import the content model from the provided export.json or create a content type called "ContentufulBlog" with these fields:
   - **hero** (Media - Asset)
   - **title** (Text)
   - **tags** (Text, list)
   - **slug** (Text - unique)
   - **datePublished** (Date & time)
   - **bodym** (Long text)

### 3. Configure Environment Variables

Copy the example environment file:

\`\`\`bash
cp .env.example .env.local
\`\`\`

Edit \`.env.local\` and add your Contentful credentials:

\`\`\`env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_content_delivery_api_token
CONTENTFUL_MANAGEMENT_TOKEN=your_management_token (optional)

# Google Analytics (optional)
NEXT_PUBLIC_GOOGLE_TRACKING_ID=G-XXXXXXXXXX
\`\`\`

**Where to find these:**
- Space ID: Settings → General Settings
- Access Token: Settings → API keys → Content Delivery API
- Management Token: Settings → API keys → Content Management API (optional)
- Google Analytics ID: Google Analytics → Admin → Data Streams → Measurement ID

### 4. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

\`\`\`bash
npm run build
\`\`\`

This generates a static export in the \`out\` directory.

## 📁 Project Structure

\`\`\`
├── src/
│   ├── app/                  # Next.js app directory
│   │   ├── blog/            # Blog listing and articles
│   │   │   └── [slug]/      # Dynamic article pages
│   │   ├── about/           # About page
│   │   ├── projects/        # Projects page
│   │   ├── contact/         # Contact page
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── BlogCard.tsx
│   ├── lib/                 # Utilities
│   │   ├── contentful.ts    # Contentful client
│   │   └── utils.ts         # Helper functions
│   └── types/               # TypeScript types
│       └── contentful.ts
├── public/
│   └── images/              # Logo and static images
├── .env.local               # Environment variables (not committed)
├── .env.example             # Example environment variables
├── next.config.js           # Next.js configuration
└── package.json
\`\`\`

## 🎨 Customization

### Colors

Edit the CSS variables in \`src/app/globals.css\`:

\`\`\`css
:root {
  --color-primary: #000000;
  --color-background: #FFFFFF;
  --color-accent-pink: #FFB6C1;
  --color-accent-blue: #B0E0E6;
  --color-accent-purple: #DDA0DD;
  --color-accent-green: #98FB98;
}
\`\`\`

### Content

- Update the About page in \`src/app/about/page.tsx\`
- Update the Projects page in \`src/app/projects/page.tsx\`
- Update the Contact page in \`src/app/contact/page.tsx\`
- Edit site metadata in \`src/app/layout.tsx\`

### SEO & JSON-LD

- **Important:** Update \`src/lib/config.ts\` with your:
  - Actual domain URL
  - Author name and details
  - Social media links
- See \`docs/JSON-LD-GUIDE.md\` for detailed information
- Validate structured data at https://search.google.com/test/rich-results

## 🚢 Deployment

### GitHub Pages (Automated)

This project uses GitHub Actions for automatic deployment:

1. **Set up GitHub Secrets**: Add `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` in repository settings
2. **Configure GitHub Pages**: Set to deploy from `master` branch
3. **Push to source branch**: Automatically builds and deploys to master
4. **Optional**: Set up Contentful webhook to rebuild on content changes

📖 **See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed setup instructions**  
⚡ **See [DEPLOYMENT_QUICKSTART.md](./DEPLOYMENT_QUICKSTART.md) for quick setup**

### Manual Deployment

If you prefer manual deployment:

### Netlify

1. Connect your GitHub repository
2. Set environment variables in Netlify dashboard
3. Deploy!

### Vercel

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### GitHub Pages

\`\`\`bash
npm run build
# Upload the 'out' directory to your hosting
\`\`\`

## 📊 Core Web Vitals

This site is optimized for:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

Run Lighthouse audits to verify performance.

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Skip-to-content link
- Sufficient color contrast
- Focus indicators

## 📝 License

MIT License - feel free to use this project for your own blog!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For questions or issues, please open an issue on GitHub or contact via the website.

---

Built with ❤️ using Next.js and Contentful
