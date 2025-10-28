# Deploying Happy Hatchery Frontend to Vercel

This guide walks through deploying the frontend application to Vercel.

## Prerequisites

1. A Vercel account
2. The backend API deployed on Render

## Deployment Steps

### 1. Environment Setup

Ensure the `.env.production` file contains the correct API URL pointing to your Render backend:

```
VITE_API_URL=https://happy-hatchery-api.onrender.com/api
VITE_APP_NAME=Happy Hatchery
```

### 2. Deploy to Vercel

#### Option 1: Using the Dashboard (Recommended for First Deployment)

1. Log in to your Vercel account
2. Click "Add New" and select "Project"
3. Import your GitHub repository
4. Configure the project:
   - Framework Preset: Vite
   - Build Command: `npm run build` (should be detected automatically)
   - Output Directory: `dist` (should be detected automatically)
5. Add environment variables:
   - VITE_API_URL: https://happy-hatchery-api.onrender.com/api
   - VITE_APP_NAME: Happy Hatchery
6. Click "Deploy"

#### Option 2: Using the Vercel CLI

1. Install the Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Log in to Vercel from the CLI:

   ```bash
   vercel login
   ```

3. Deploy the project:

   ```bash
   vercel
   ```

4. Follow the prompts and specify:
   - Project directory (default)
   - Link to existing project: Yes
   - Environment variables from step 1

### 3. Verify Deployment

1. Once deployed, Vercel will provide you with a URL (e.g., https://happy-hatchery-app.vercel.app)
2. Open the URL in your browser
3. Test the application:
   - Navigate through the pages
   - Try logging in with a test account
   - Check if quizzes load properly
   - Test the "Learn" and "Missions" placeholder pages

### 4. Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Add your custom domain
3. Follow the instructions to configure DNS settings

## Troubleshooting

1. **API Connection Issues**

   - Check the browser console for CORS errors
   - Verify the VITE_API_URL environment variable is set correctly
   - Ensure the backend CORS settings include your Vercel domain

2. **Build Failures**

   - Check the Vercel build logs
   - Ensure all dependencies are properly installed
   - Verify the build command and output directory are correct

3. **Routing Issues**
   - Ensure the vercel.json configuration is correct
   - Check that client-side routing works with page refreshes
   - Test deep links to ensure they resolve properly
