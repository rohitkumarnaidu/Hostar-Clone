# 🚀 Deployment Guide

This guide will help you deploy your Hostar Clone to various hosting platforms.

## 📋 Pre-Deployment Checklist

- [ ] All environment variables are configured
- [ ] Appwrite project is set up with Google OAuth
- [ ] Google OAuth credentials are configured
- [ ] Application builds successfully (`npm run build`)
- [ ] No console errors in production build

## 🌐 Deployment Options

### 1. Vercel (Recommended)

Vercel is the easiest platform for React applications.

#### Steps:
1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add:
     ```
     VITE_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
     VITE_APPWRITE_PROJECT_ID=your_project_id_here
     ```

4. **Deploy**
   - Click "Deploy"
   - Your app will be live at `https://your-project.vercel.app`

#### Vercel Configuration
Create `vercel.json` in your project root:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 2. Netlify

#### Steps:
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your GitHub repository

3. **Configure Environment Variables**
   - Go to Site settings → Environment variables
   - Add your environment variables

4. **Configure Redirects**
   Create `_redirects` file in `public` folder:
   ```
   /*    /index.html   200
   ```

### 3. GitHub Pages

#### Steps:
1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/hostar-clone"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### 4. Firebase Hosting

#### Steps:
1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```

3. **Configure firebase.json**
   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": [
         "firebase.json",
         "**/.*",
         "**/node_modules/**"
       ],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

## 🔧 Environment Variables Setup

### For Production:
```env
VITE_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_production_project_id
```

### Important Notes:
- Never commit `.env` files to version control
- Use your hosting platform's environment variable settings
- Update Appwrite redirect URIs to include your production domain

## 🔄 Appwrite Configuration for Production

1. **Update Redirect URIs**
   - Go to Appwrite Console → Authentication → Settings
   - Add your production domain to authorized domains
   - Update OAuth redirect URI to include production URL

2. **Google OAuth Setup**
   - Go to Google Cloud Console
   - Add your production domain to authorized origins
   - Update redirect URIs for production

## 📱 Domain Configuration

### Custom Domain (Optional)
1. **Purchase a domain** from any registrar
2. **Configure DNS** to point to your hosting platform
3. **Update Appwrite settings** with your custom domain
4. **Update Google OAuth** with your custom domain

## 🔍 Post-Deployment Testing

After deployment, test:
- [ ] Application loads correctly
- [ ] Google OAuth login works
- [ ] Movie data loads properly
- [ ] Responsive design works on mobile
- [ ] All routes work correctly
- [ ] Error handling works

## 🐛 Troubleshooting

### Common Issues:

#### 1. Environment Variables Not Working
- Check if variables are prefixed with `VITE_`
- Restart the development server after adding variables
- Verify variables are set in hosting platform

#### 2. OAuth Redirect Issues
- Check redirect URIs in Appwrite and Google Console
- Ensure production domain is added to authorized domains
- Verify HTTPS is enabled (required for OAuth)

#### 3. Build Failures
- Check for TypeScript errors
- Verify all dependencies are installed
- Check for missing environment variables

#### 4. 404 Errors on Refresh
- Configure SPA routing in hosting platform
- Add redirect rules for all routes to index.html

## 📊 Performance Optimization

### Before Deployment:
1. **Optimize Images**
   - Use WebP format
   - Compress images
   - Use appropriate sizes

2. **Code Splitting**
   - Implement lazy loading
   - Split vendor bundles
   - Use dynamic imports

3. **Caching**
   - Configure proper cache headers
   - Use CDN for static assets
   - Implement service workers

## 🔒 Security Considerations

- Never expose API keys in client-side code
- Use environment variables for sensitive data
- Enable HTTPS in production
- Configure proper CORS settings
- Regular security updates

## 📈 Monitoring

Consider adding:
- **Analytics**: Google Analytics or similar
- **Error Tracking**: Sentry or Bugsnag
- **Performance Monitoring**: Lighthouse CI
- **Uptime Monitoring**: UptimeRobot

## 🎯 Success Metrics

Track these metrics after deployment:
- Page load times
- User engagement
- Authentication success rate
- Error rates
- Mobile vs desktop usage

---

**Happy Deploying! 🚀**
