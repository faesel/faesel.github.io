# Pre-Deployment Checklist

Use this checklist before deploying your blog to production.

## ✅ Configuration

- [ ] **Update `src/lib/config.ts`**
  - [ ] Change `url` to your actual domain (CRITICAL!)
  - [ ] Update `name` to your blog name
  - [ ] Update `author.name` to your name
  - [ ] Update `author.jobTitle` to your title
  - [ ] Update `social.twitter` handle
  - [ ] Update `social.github` URL
  - [ ] Update `social.linkedin` URL

- [ ] **Update `src/app/layout.tsx` metadata**
  - [ ] Update site title
  - [ ] Update description
  - [ ] Update author name

## ✅ Content Pages

- [ ] **About Page** (`src/app/about/page.tsx`)
  - [ ] Replace placeholder text with your info
  - [ ] Update contact links

- [ ] **Projects Page** (`src/app/projects/page.tsx`)
  - [ ] Replace sample projects with your real projects
  - [ ] Update project links
  - [ ] Update descriptions

- [ ] **Contact Page** (`src/app/contact/page.tsx`)
  - [ ] Update email address
  - [ ] Update location
  - [ ] Update availability status
  - [ ] Update social media links

## ✅ Branding

- [ ] **Replace logos**
  - [ ] Add your `logo.png` to `public/images/`
  - [ ] Add your `logo-small.png` to `public/images/`
  - [ ] Verify logos display correctly

- [ ] **Colors** (optional)
  - [ ] Review color scheme in `src/app/globals.css`
  - [ ] Adjust pastel colors if desired

## ✅ Contentful Setup

- [ ] **Contentful Account**
  - [ ] Created account
  - [ ] Created space
  - [ ] Created content model (Blog)
  
- [ ] **Environment Variables**
  - [ ] Added `CONTENTFUL_SPACE_ID` to `.env.local`
  - [ ] Added `CONTENTFUL_ACCESS_TOKEN` to `.env.local`
  - [ ] Tested connection works

- [ ] **Content Created**
  - [ ] Created at least 3 blog articles
  - [ ] All articles published
  - [ ] Hero images uploaded
  - [ ] Tags added

## ✅ Testing

- [ ] **Local Testing**
  - [ ] Run `npm run dev`
  - [ ] Visit all pages
  - [ ] Check navigation works
  - [ ] Verify blog articles load
  - [ ] Test tag filtering
  - [ ] Test mobile responsiveness

- [ ] **Build Test**
  - [ ] Run `npm run build`
  - [ ] Build completes successfully
  - [ ] No TypeScript errors

## ✅ SEO Validation

- [ ] **Validate JSON-LD**
  - [ ] Test with Google Rich Results Test
    https://search.google.com/test/rich-results
  - [ ] Verify all schemas detected
  - [ ] No validation errors

- [ ] **Meta Tags**
  - [ ] Check OpenGraph tags
  - [ ] Verify Twitter card
  - [ ] Test with meta tag validator

## ✅ Deployment

- [ ] **Choose Platform**
  - [ ] Vercel / Netlify / GitHub Pages / Other: ___________

- [ ] **Add Environment Variables** (on hosting platform)
  - [ ] CONTENTFUL_SPACE_ID
  - [ ] CONTENTFUL_ACCESS_TOKEN

- [ ] **Deploy**
  - [ ] Initial deployment successful
  - [ ] All pages accessible
  - [ ] Images loading correctly
  - [ ] Navigation working

## ✅ Post-Deployment

- [ ] **DNS & Domain**
  - [ ] Custom domain configured
  - [ ] SSL certificate active (HTTPS)
  - [ ] Update `src/lib/config.ts` with final URL if changed

- [ ] **Search Engines**
  - [ ] Add site to Google Search Console
  - [ ] Submit sitemap (if generated)
  - [ ] Verify structured data in Search Console
  - [ ] Add site to Bing Webmaster Tools (optional)

- [ ] **Analytics** (optional)
  - [ ] Google Analytics configured
  - [ ] Privacy policy added if needed

- [ ] **Final Validation**
  - [ ] Test site on production URL
  - [ ] Run Lighthouse audit
  - [ ] Verify Core Web Vitals
  - [ ] Test on mobile devices
  - [ ] Check accessibility with screen reader

## 🎉 Launch!

Once all items are checked, your blog is ready to go live!

### Maintenance Tasks

**Weekly:**
- Add new blog content via Contentful

**Monthly:**
- Check Search Console for errors
- Review analytics
- Validate JSON-LD still working

**As Needed:**
- Update dependencies: `npm update`
- Rebuild and redeploy

---

**Need Help?**
- See `README.md` for features and deployment
- See `SETUP.md` for Contentful setup
- See `docs/JSON-LD-GUIDE.md` for SEO details
