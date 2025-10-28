# Deployment Guide for Happy Hatchery Educational App

This guide explains how to deploy both the frontend and backend of the Happy Hatchery Educational App.

## Backend Deployment on Render

1. Create a MongoDB Atlas account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

2. Set up your MongoDB Atlas cluster:

   - Create a new cluster (the free tier is fine for development)
   - Create a database user with read/write privileges
   - Whitelist all IP addresses (0.0.0.0/0) for development or specific IPs for production
   - Get your connection string from Connect > Connect Your Application
   - Make note of the connection string: `mongodb+srv://<username>:<password>@cluster0.mongodb.net/happy-hatchery?retryWrites=true&w=majority`

3. Create a Render account at [https://render.com](https://render.com)

4. Deploy the backend to Render:

   - Create a new Web Service
   - Connect your GitHub repository
   - Configure the following settings:
     - Name: happy-hatchery-api
     - Root Directory: backend (if your repository includes both frontend and backend)
     - Runtime: Node
     - Build Command: `npm install`
     - Start Command: `npm start`
   - Add the following environment variables:
     - `PORT`: 10000
     - `NODE_ENV`: production
     - `JWT_SECRET`: (generate a secure random string)
     - `MONGODB_URI`: (your MongoDB Atlas connection string from step 2)
   - Click "Create Web Service"

5. Once deployed, your API will be available at `https://happy-hatchery-api.onrender.com`

## Frontend Deployment on Vercel

1. Create a Vercel account at [https://vercel.com](https://vercel.com)

2. Install the Vercel CLI:

   ```bash
   npm install -g vercel
   ```

3. Create a `vercel.json` file in your frontend root directory:

   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "package.json",
         "use": "@vercel/static-build",
         "config": { "distDir": "dist" }
       }
     ],
     "routes": [
       {
         "handle": "filesystem"
       },
       {
         "src": "/.*",
         "dest": "/index.html"
       }
     ]
   }
   ```

4. Make sure you have the correct production environment variables in `.env.production`:

   ```
   VITE_API_URL=https://happy-hatchery-api.onrender.com/api
   VITE_APP_NAME=Happy Hatchery
   ```

5. Deploy the frontend to Vercel using the CLI:

   ```bash
   vercel login
   vercel
   ```

   Follow the prompts to deploy your project.

6. Set up environment variables in the Vercel dashboard:

   - Go to your project dashboard
   - Navigate to Settings > Environment Variables
   - Add the environment variables from your `.env.production` file

7. Alternatively, you can deploy directly from the Vercel dashboard:
   - Import your GitHub repository
   - Configure the build settings:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: dist
   - Add environment variables
   - Click "Deploy"

## Connecting Frontend and Backend

The frontend is already configured to connect to the backend through the API utility file (`src/lib/api.ts`). The API URL is set using the environment variable `VITE_API_URL`.

- In development, it uses `http://localhost:5000/api` (set in `.env`)
- In production, it uses `https://happy-hatchery-api.onrender.com/api` (set in `.env.production`)

## Testing the Deployment

1. Test the backend API by visiting `https://happy-hatchery-api.onrender.com`

   - You should see the message "Happy Hatchery Educational Game API"

2. Test the frontend by visiting your Vercel deployment URL
   - Try logging in with one of the seed users:
     - Email: admin@example.com
     - Password: password123

## Troubleshooting

### CORS Issues

If you encounter CORS errors, ensure the backend CORS configuration allows requests from your frontend domain:

```javascript
// In backend/src/server.js
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Development frontend
      "https://your-vercel-app-url.vercel.app", // Production frontend
    ],
    credentials: true,
  })
);
```

### Database Connection Issues

If the backend can't connect to MongoDB Atlas:

1. Check that your IP is whitelisted in MongoDB Atlas
2. Verify your connection string and credentials
3. Check the logs in the Render dashboard

### Frontend API Connection Issues

If the frontend can't connect to the backend:

1. Check that the environment variable `VITE_API_URL` is correctly set
2. Verify that the backend is running and accessible
3. Check for CORS errors in the browser console
