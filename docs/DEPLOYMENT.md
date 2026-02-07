# GitHub Pages Deployment Guide

This guide will help you set up automated deployment to GitHub Pages with automatic rebuilds when Contentful content changes.

## Architecture

- **Source Branch**: Contains your Next.js source code
- **Master Branch**: Contains the built static site (served by GitHub Pages)
- **GitHub Actions**: Automatically builds and deploys on every push to source
- **Contentful Webhook**: Triggers rebuilds when content is published

---

## Step 1: Configure GitHub Secrets

GitHub Secrets are used to securely store sensitive information like API keys.

### Add the following secrets to your repository:

1. Go to your GitHub repository: `https://github.com/faesel/faesel.github.io`
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add each of these:

| Secret Name | Value | Where to find |
|-------------|-------|---------------|
| `CONTENTFUL_SPACE_ID` | Your Contentful Space ID | Contentful → Settings → General Settings |
| `CONTENTFUL_ACCESS_TOKEN` | Your Content Delivery API token | Contentful → Settings → API keys → Content Delivery API |
| `NEXT_PUBLIC_GOOGLE_TRACKING_ID` | Your Google Analytics ID (optional) | Google Analytics → Admin → Data Streams |

---

## Step 2: Configure GitHub Pages

1. Go to your repository **Settings** → **Pages**
2. Under **Source**, select:
   - **Branch**: `master`
   - **Folder**: `/ (root)`
3. Click **Save**

**Note**: The master branch will be automatically created and populated by GitHub Actions when you first push to the source branch.

---

## Step 3: Set Up Contentful Webhook (Optional)

To automatically rebuild your site when you publish content in Contentful:

### 3.1 Create a Personal Access Token

1. Go to GitHub → **Settings** (your profile) → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Click **Generate new token (classic)**
3. Give it a name: `Contentful Webhook Token`
4. Set expiration: `No expiration` (or choose a duration)
5. Select scope: **`repo`** (Full control of private repositories)
6. Click **Generate token**
7. **Copy the token immediately** (you won't see it again)

### 3.2 Configure Contentful Webhook

1. Go to Contentful → **Settings** → **Webhooks**
2. Click **Add webhook**
3. Configure the webhook:

**Name**: `GitHub Actions Deploy`

**URL**: 
```
https://api.github.com/repos/faesel/faesel.github.io/dispatches
```

**Triggers**: Select these options:
- ✅ Publish (Entry)
- ✅ Unpublish (Entry)
- ✅ Publish (Asset)

**Headers**: Click **Add header** and add:
```
Accept: application/vnd.github.v3+json
Authorization: Bearer YOUR_GITHUB_TOKEN_HERE
Content-Type: application/json
```

**Content type**: `application/json`

**Payload**: 
```json
{
  "event_type": "contentful_publish"
}
```

**Filters**: (Optional) You can filter to only trigger on specific content types:
- Content type: `theCodeTransposerBlogPosts`

4. Click **Save**

### 3.3 Test the Webhook

1. Click the **Test** button next to your webhook
2. Check GitHub Actions tab in your repository to see if the workflow started
3. Or publish a blog post in Contentful and watch for the deployment

---

## How It Works

### Automatic Deployment Flow

```
┌─────────────────┐
│  Push to Source │
│     Branch      │
└────────┬────────┘
         │
         ▼
┌─────────────────────┐
│  GitHub Actions     │
│  Workflow Triggered │
└────────┬────────────┘
         │
         ├─ Checkout source code
         ├─ Install Node.js & dependencies
         ├─ Run npm run build
         │  (creates /out directory)
         │
         ▼
┌─────────────────────┐
│  Deploy to Master   │
│  - Cleans old files │
│  - Pushes /out/*    │
└────────┬────────────┘
         │
         ▼
┌─────────────────────┐
│  GitHub Pages       │
│  Serves from Master │
└─────────────────────┘
```

### Contentful Webhook Flow

```
┌──────────────────┐
│  Publish Content │
│   in Contentful  │
└────────┬─────────┘
         │
         ▼
┌──────────────────────┐
│  Contentful Webhook  │
│  Sends POST Request  │
└────────┬─────────────┘
         │
         ▼
┌──────────────────────┐
│  GitHub Repository   │
│  Dispatch Event      │
└────────┬─────────────┘
         │
         ▼
┌──────────────────────┐
│  GitHub Actions      │
│  (Same build process)│
└──────────────────────┘
```

---

## Deployment Commands

### Manual Deployment (Local)

If you want to deploy manually from your local machine:

```bash
# 1. Build the site
npm run build

# 2. Switch to master branch
git checkout master

# 3. Remove old files (keep CNAME if you have a custom domain)
git rm -rf .
git checkout HEAD -- CNAME  # Only if you have a custom domain

# 4. Copy built files from source branch
git checkout source -- out
mv out/* .
rmdir out

# 5. Commit and push
git add .
git commit -m "Deploy: $(date)"
git push origin master

# 6. Switch back to source branch
git checkout source
```

**Note**: With GitHub Actions, you shouldn't need to do this manually.

---

## Monitoring Deployments

### View Workflow Runs

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. You'll see all workflow runs with their status (✅ Success, ❌ Failed, 🟡 In Progress)
4. Click on any run to see detailed logs

### Check Deployment Status

- **GitHub Pages**: Settings → Pages (shows the deployed URL)
- **Build Time**: Typically takes 1-2 minutes
- **Live Site**: `https://faesel.github.io`

---

## Troubleshooting

### Build Fails

**Problem**: Workflow fails during `npm run build`

**Solutions**:
1. Check that all GitHub Secrets are set correctly
2. Verify your Contentful credentials work locally
3. Check the Actions log for specific error messages
4. Make sure `package-lock.json` is committed to source branch

### Deployment Fails

**Problem**: Build succeeds but deployment fails

**Solutions**:
1. Verify the workflow has `contents: write` permission
2. Check that you're pushing to the correct branch (`master`)
3. Ensure the `out` directory is being created by the build

### Webhook Not Triggering

**Problem**: Publishing in Contentful doesn't trigger a rebuild

**Solutions**:
1. Check webhook configuration in Contentful
2. Verify the GitHub token has `repo` scope
3. Test the webhook manually in Contentful
4. Check that the `repository_dispatch` event type matches exactly

### Site Not Updating

**Problem**: Deployment succeeds but site shows old content

**Solutions**:
1. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Check GitHub Pages settings (Settings → Pages)
3. Wait a few minutes (GitHub Pages can take 1-2 minutes to update)
4. Verify the master branch has the new content

---

## Custom Domain Setup (Optional)

If you want to use a custom domain like `faesel.com`:

1. Create a file named `CNAME` in the master branch with your domain:
   ```
   www.faesel.com
   ```

2. Add DNS records with your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: faesel.github.io
   ```

3. Go to GitHub Pages settings and add your custom domain

**Note**: The workflow is configured to preserve the `CNAME` file during deployments with `clean-exclude`.

---

## Workflow Configuration

The GitHub Actions workflow (`.github/workflows/deploy.yml`) is configured to:

- ✅ Trigger on every push to the `source` branch
- ✅ Trigger via Contentful webhooks (repository_dispatch)
- ✅ Build the Next.js site with environment variables from GitHub Secrets
- ✅ Clean the master branch before deploying (removes old files)
- ✅ Preserve important files like `CNAME` and `.nojekyll`
- ✅ Deploy to the `master` branch for GitHub Pages

---

## Security Best Practices

1. **Never commit `.env.local`** - It contains sensitive API keys
2. **Use GitHub Secrets** - Store all credentials as repository secrets
3. **Rotate tokens periodically** - Update tokens every 6-12 months
4. **Use fine-grained tokens** - Only grant necessary permissions
5. **Monitor webhook logs** - Check for unauthorized access attempts

---

## Cost

- **GitHub Actions**: 2,000 minutes/month free for public repositories
- **GitHub Pages**: Free for public repositories
- **Contentful**: Free tier includes 25,000 API calls/month
- **Typical usage**: ~5 builds/month = ~10 minutes of Actions time

---

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Contentful Webhooks Documentation](https://www.contentful.com/developers/docs/webhooks/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

---

## Quick Start Checklist

- [ ] Add GitHub Secrets (CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN)
- [ ] Configure GitHub Pages (master branch, / root)
- [ ] Push to source branch (triggers first deployment)
- [ ] Verify site is live at faesel.github.io
- [ ] (Optional) Set up Contentful webhook
- [ ] (Optional) Configure custom domain

---

**Need Help?** Check the Actions tab for detailed logs or review the troubleshooting section above.
