# Happy Hatchery Deployment Guide

This guide walks through the complete process of deploying the Happy Hatchery Educational Game, with the backend on Render and the frontend on Vercel.

## 1. Backend Deployment on Render

### Step 1: Prepare for Deployment

The backend code has already been prepared for production with:

- Enhanced CORS settings to allow requests from Vercel
- Proper error handling
- Security headers
- Health check endpoint
- Production environment configuration

### Step 2: Deploy to Render

1. **Create a MongoDB Atlas Database:**

   - Sign up or log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a new cluster (the free tier works fine)
   - Create a database user with read/write privileges
   - Set network access to allow connections from anywhere (`0.0.0.0/0`)
   - Copy your connection string: `mongodb+srv://<username>:<password>@cluster0.mongodb.net/happy-hatchery?retryWrites=true&w=majority`

2. **Deploy Using Render Dashboard:**

   - Sign up or log in to [Render](https://render.com/)
   - Click "New" and select "Web Service"
   - Connect your GitHub repository
   - Configure the service:
     - Name: `happy-hatchery-api`
     - Root Directory: `backend` (if your repository includes both frontend and backend)
     - Runtime: `Node`
     - Build Command: `npm install`
     - Start Command: `npm start`
   - Add environment variables:
     - `PORT`: 10000
     - `NODE_ENV`: production
     - `JWT_SECRET`: (generate a secure random string or use Render's auto-generate feature)
     - `MONGODB_URI`: (your MongoDB Atlas connection string)
   - Set "Instance Type" to Free
   - Click "Create Web Service"

3. **Verify Backend Deployment:**
   - Wait for the deployment to complete
   - Visit your Render URL (e.g., `https://happy-hatchery-api.onrender.com`)
   - You should see a JSON response with the API info
   - Visit `/health` to check the API's health status

### Step 3: Seed the Database (Optional)

If you want to add initial data to your production database:

1. Temporarily update the `.env` file with your production MongoDB URI
2. Run the seed command:
   ```
   npm run seed
   ```
3. Restore your development environment variables when finished

## 2. Frontend Deployment on Vercel

### Step 1: Prepare for Deployment

The frontend code has been prepared with:

- Production environment variables pointing to the Render backend
- Optimized Vite build configuration
- Vercel-specific configuration for routing and caching

### Step 2: Deploy to Vercel

1. **Deploy Using Vercel Dashboard:**

   - Sign up or log in to [Vercel](https://vercel.com/)
   - Click "Add New" and select "Project"
   - Import your GitHub repository
   - Configure the project:
     - Framework Preset: Vite
     - Build Command: `npm run build` (should be detected automatically)
     - Output Directory: `dist` (should be detected automatically)
   - Add environment variables:
     - `VITE_API_URL`: https://happy-hatchery-api.onrender.com/api (use your actual Render URL)
     - `VITE_APP_NAME`: Happy Hatchery
   - Click "Deploy"

2. **Verify Frontend Deployment:**
   - Wait for the deployment to complete
   - Visit your Vercel URL (e.g., `https://happy-hatchery-app.vercel.app`)
   - Test the application:
     - Navigate through the pages
     - Try logging in
     - Check if quizzes load properly
     - Test the "Learn" and "Missions" placeholder pages

## 3. Post-Deployment Steps

### Update CORS Settings

If you encounter CORS errors, update the CORS configuration in the backend:

1. Update the `corsOptions` in `server.js` with your actual Vercel domain
2. Redeploy the backend

### Enable Automatic Deployments

For both Render and Vercel:

1. Ensure GitHub integration is enabled
2. Enable automatic deployments when you push to your main branch

### Monitor Your Application

1. Set up error tracking with tools like Sentry (optional)
2. Check Render and Vercel dashboards for any deployment issues
3. Monitor MongoDB Atlas for database performance

## 4. Common Issues and Solutions

### CORS Errors

- Ensure the backend CORS configuration includes your Vercel domain
- Check that requests include the proper headers

### Connection Timeouts

- Free tier services may sleep after inactivity
- The first request after inactivity might be slow
- Consider upgrading to a paid plan for production use

### Missing Environment Variables

- Double-check all environment variables are set correctly in both Render and Vercel
- Ensure there are no typos in variable names or values

### Database Connection Issues

- Verify MongoDB Atlas network settings allow connections from Render
- Check your connection string for typos

## 5. Next Steps

Once your application is successfully deployed, consider:

1. **Adding a Custom Domain:**

   - Configure custom domains in both Render and Vercel
   - Set up proper DNS records

2. **Setting Up CI/CD:**

   - Configure GitHub Actions for testing before deployment
   - Set up branch preview deployments

3. **Implementing Analytics:**
   - Add user analytics to track usage
   - Set up performance monitoring
