# Soul Frames - Deployment Guide

## Quick Deploy to Netlify

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Soul Frames website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 2. Deploy on Netlify

1. Go to [Netlify](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your Soul Frames repository
4. Netlify will auto-detect settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### 3. Enable Netlify CMS

After deployment:

1. In Netlify dashboard, go to **Site settings** → **Identity**
2. Click **Enable Identity**
3. Under **Registration preferences**, select **Invite only** (recommended)
4. Under **External providers**, enable **Google** (optional but recommended)
5. Go to **Services** → **Git Gateway** and click **Enable Git Gateway**

### 4. Access CMS

1. Visit `https://your-site-name.netlify.app/admin`
2. Click "Sign up" to create your admin account
3. Check your email for confirmation link
4. Log in and start managing content!

## Managing Content

### Adding Products

1. Go to `/admin` on your live site
2. Click "Products" in the sidebar
3. Click "New Product"
4. Fill in:
   - Title (e.g., "Classic Elegance Frame")
   - Description
   - Price (e.g., "From ₹2,499")
   - Upload image
   - Set order number (lower numbers appear first)
5. Click "Publish"

### Adding Gallery Items

1. Go to `/admin`
2. Click "Gallery" in the sidebar
3. Click "New Gallery"
4. Fill in:
   - Title
   - Upload image
   - Set order number
5. Click "Publish"

### Editing Site Settings

1. Go to `/admin`
2. Click "Site Settings"
3. Click "Site Info"
4. Edit:
   - Site title
   - Tagline
   - Hero text
   - Instagram handle and URL
   - Email
   - About text
5. Click "Publish"

## Custom Domain Setup

1. In Netlify dashboard, go to **Domain settings**
2. Click **Add custom domain**
3. Enter your domain name
4. Follow DNS configuration instructions
5. SSL certificate will be automatically provisioned

## Environment Variables (if needed)

If you add any backend features:

1. Go to **Site settings** → **Environment variables**
2. Add your variables
3. Redeploy the site

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Troubleshooting

### CMS not loading
- Ensure Git Gateway is enabled in Netlify
- Check that Identity is enabled
- Clear browser cache and try again

### Images not showing
- Check that images are uploaded to `public/images/uploads/`
- Verify image paths in content files
- Ensure build succeeded without errors

### Build fails
- Check Node.js version (use Node 18+)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check console for specific error messages

## Support

For issues or questions:
- Check Netlify docs: https://docs.netlify.com/
- Netlify CMS docs: https://www.netlifycms.org/docs/
- Contact developer

---

Built with ❤️ using React + Vite + Netlify CMS
