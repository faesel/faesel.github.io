# Quick Deployment Setup

## 1️⃣ Add GitHub Secrets

Go to: `https://github.com/faesel/faesel.github.io/settings/secrets/actions`

Add these secrets:
- `CONTENTFUL_SPACE_ID` = (your space ID)
- `CONTENTFUL_ACCESS_TOKEN` = (your delivery API token)
- `NEXT_PUBLIC_GOOGLE_TRACKING_ID` = (optional, your GA4 ID)

## 2️⃣ Configure GitHub Pages

Go to: `https://github.com/faesel/faesel.github.io/settings/pages`

Set:
- Source: **Deploy from a branch**
- Branch: **master** 
- Folder: **/ (root)**

## 3️⃣ Push to Source Branch

```bash
git add .
git commit -m "Set up GitHub Actions deployment"
git push origin source
```

This will automatically:
- Build your Next.js site
- Deploy to the master branch
- Publish to faesel.github.io

## 4️⃣ Set Up Contentful Webhook (Optional)

### Create GitHub Token
1. Go to: `https://github.com/settings/tokens`
2. Generate new token (classic)
3. Select scope: `repo`
4. Copy the token

### Add Contentful Webhook
Go to: Contentful → Settings → Webhooks → Add webhook

**URL**: `https://api.github.com/repos/faesel/faesel.github.io/dispatches`

**Headers**:
```
Accept: application/vnd.github.v3+json
Authorization: Bearer YOUR_GITHUB_TOKEN
Content-Type: application/json
```

**Payload**:
```json
{
  "event_type": "contentful_publish"
}
```

**Triggers**: Publish (Entry), Publish (Asset)

---

## That's it! 🎉

Your site will now:
- ✅ Deploy automatically on every push to source
- ✅ Rebuild when you publish content in Contentful
- ✅ Be live at `https://faesel.github.io`

See `DEPLOYMENT.md` for detailed documentation.
