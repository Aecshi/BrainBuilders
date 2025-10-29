# 🚀 Happy Hatchery Deployment Guide

## Overview
This guide will walk you through deploying:
- **Backend** → Render (Node.js + MongoDB Atlas)
- **Frontend** → Vercel (React + Vite)

---

## Part 1: Deploy Backend to Render

### Step 1: Push Code to GitHub (if not already done)

```bash
git add .
git commit -m "Ready for production deployment"
git push origin main
```

### Step 2: Create Render Web Service

1. Go to [https://render.com](https://render.com) and sign in
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `happy-hatchery-api`
   - **Region**: Choose closest to your users
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`

### Step 3: Set Environment Variables on Render

Add these environment variables in the Render dashboard:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `PORT` | `10000` |
| `MONGODB_URI` | `mongodb+srv://BrainBuilders:brainbuilders@cluster0.fewyqig.mongodb.net/?appName=Cluster0` |
| `JWT_SECRET` | Generate a random secret (or let Render auto-generate) |
| `FRONTEND_URL` | `https://happy-hatchery-app.vercel.app` (update after Vercel deployment) |

### Step 4: Deploy on Render

1. Click **"Create Web Service"**
2. Wait for deployment to complete (5-10 minutes)
3. Copy your backend URL (e.g., `https://happy-hatchery-api.onrender.com`)

### Step 5: Test Backend Health

Visit: `https://your-backend-url.onrender.com/health`

You should see:
```json
{
  "status": "UP",
  "message": "API is healthy"
}
```

---

## Part 2: Deploy Frontend to Vercel

### Step 1: Update Frontend Environment Variable

Create `.env.production` in the project root:

```bash
VITE_API_URL=https://your-backend-url.onrender.com/api
```

Replace `your-backend-url.onrender.com` with your actual Render backend URL.

### Step 2: Commit Environment File

```bash
git add .env.production
git commit -m "Add production environment variables"
git push origin main
```

### Step 3: Deploy to Vercel

#### Option A: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

4. Follow the prompts:
   - **Set up and deploy?** `Y`
   - **Which scope?** Select your account
   - **Link to existing project?** `N`
   - **Project name?** `happy-hatchery-app`
   - **Directory?** `./` (root)
   - **Override settings?** `N`

#### Option B: Using Vercel Dashboard

1. Go to [https://vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./` (leave as root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. Add Environment Variable:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://your-backend-url.onrender.com/api`

6. Click **"Deploy"**

### Step 4: Copy Frontend URL

After deployment completes, copy your Vercel URL (e.g., `https://happy-hatchery-app.vercel.app`)

---

## Part 3: Update Backend CORS

### Step 1: Update FRONTEND_URL on Render

1. Go to your Render dashboard
2. Select your `happy-hatchery-api` service
3. Go to **"Environment"** tab
4. Update `FRONTEND_URL` to your Vercel URL: `https://happy-hatchery-app.vercel.app`
5. Click **"Save Changes"**
6. Render will automatically redeploy

---

## Part 4: Verify Deployment

### Test Checklist:

1. ✅ **Backend Health Check**
   - Visit: `https://your-backend-url.onrender.com/health`
   - Should return: `{ "status": "UP", "message": "API is healthy" }`

2. ✅ **Frontend Loads**
   - Visit: `https://happy-hatchery-app.vercel.app`
   - Should see the Happy Hatchery home page

3. ✅ **User Registration**
   - Click "REGISTER"
   - Create a test account
   - Should successfully register and redirect to dashboard

4. ✅ **User Login**
   - Log out and log back in
   - Should successfully authenticate

5. ✅ **Quizzes Load**
   - Click "PLAY"
   - Should see quizzes filtered by your grade level
   - Should have 5 questions per quiz

6. ✅ **Learn Page Works**
   - Click "LEARN"
   - Should see word challenges for your grade

7. ✅ **Missions Page Works**
   - Click "MISSIONS"
   - Should see historical adventures for your grade

8. ✅ **Profile Page**
   - Go to Dashboard → Profile
   - Should be able to view and edit profile

---

## Deployment URLs

Once deployed, update these URLs:

### Production URLs:
- **Frontend**: `https://happy-hatchery-app.vercel.app`
- **Backend API**: `https://happy-hatchery-api.onrender.com`
- **Backend Health**: `https://happy-hatchery-api.onrender.com/health`

---

## Troubleshooting

### Issue: Backend not connecting to MongoDB
**Solution**: 
1. Check MongoDB Atlas IP whitelist (should allow all: `0.0.0.0/0`)
2. Verify `MONGODB_URI` in Render environment variables
3. Check Render logs for connection errors

### Issue: Frontend getting CORS errors
**Solution**:
1. Verify `FRONTEND_URL` is set correctly on Render
2. Make sure it matches your Vercel URL exactly (including `https://`)
3. Check backend logs for CORS-related errors

### Issue: "Loading quizzes..." never ends
**Solution**:
1. Check browser console for API errors
2. Verify `VITE_API_URL` in Vercel environment variables
3. Test backend API directly in browser
4. Make sure database is seeded with content

### Issue: Render service keeps sleeping
**Solution**:
- Free tier services sleep after 15 minutes of inactivity
- First request after sleeping will take 30-50 seconds to wake up
- Consider upgrading to paid tier for always-on service

### Issue: Build fails on Vercel
**Solution**:
1. Check that `package.json` has correct build script
2. Verify all dependencies are in `package.json`
3. Check Vercel build logs for specific errors
4. Make sure `dist` folder is not in `.gitignore`

---

## Post-Deployment

### Monitor Your App:
- **Render Dashboard**: Monitor backend health, logs, and performance
- **Vercel Dashboard**: Monitor frontend deployments and analytics
- **MongoDB Atlas**: Monitor database usage and performance

### Recommended: Set Up Custom Domain (Optional)
1. Purchase a domain (e.g., from Namecheap, Google Domains)
2. Configure in Vercel: Settings → Domains
3. Update `FRONTEND_URL` on Render with your custom domain

---

## Quick Deploy Commands Summary

```bash
# 1. Prepare and push code
git add .
git commit -m "Deploy to production"
git push origin main

# 2. Deploy frontend to Vercel
vercel --prod

# 3. Backend deploys automatically on Render when you push to main
```

---

## Need Help?

If you encounter any issues:
1. Check Render logs: Dashboard → Logs
2. Check Vercel logs: Deployment → View Function Logs
3. Check browser console for frontend errors
4. Test API endpoints directly using browser or Postman

---

🎉 **Congratulations! Your Happy Hatchery Educational Game is now live!**
