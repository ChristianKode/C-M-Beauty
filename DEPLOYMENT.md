# How to Deploy C&M Beauty Salon

This project is built with **Next.js 14**, which makes it extremely easy to deploy to **Vercel** (the creators of Next.js) or **Netlify**.

## Option 1: Deploy to Vercel (Recommended)

1.  **Create a Vercel Account**: Go to [vercel.com](https://vercel.com) and sign up (you can use your GitHub account).
2.  **Import Project**:
    *   Click "Add New..." -> "Project".
    *   Select your GitHub repository (`C-M-Beauty`).
    *   Vercel will automatically detect that it's a Next.js project.
3.  **Deploy**:
    *   Click "Deploy".
    *   Vercel will build your site and give you a live URL (e.g., `c-m-beauty.vercel.app`) within a minute.

## Option 2: Deploy to Netlify

1.  **Create a Netlify Account**: Go to [netlify.com](https://netlify.com).
2.  **New Site from Git**:
    *   Click "Add new site" -> "Import an existing project".
    *   Connect to GitHub and select `C-M-Beauty`.
3.  **Build Settings**:
    *   Netlify usually detects these automatically:
        *   **Build command**: `npm run build`
        *   **Publish directory**: `.next`
    *   *Note*: You might need to install the "Next.js on Netlify" plugin if it doesn't happen automatically.

## Pre-Deployment Checklist

- [x] **Build Check**: We have verified that `npm run build` passes locally.
- [x] **Lint Check**: We are running `npm run lint` to ensure code quality.
- [x] **Environment Variables**: This project currently doesn't use any `.env` secrets (like API keys), so you don't need to configure environment variables on Vercel/Netlify yet.

## Updating the Live Site

Since you are using GitHub:
*   Any time you **push code** to the `main` branch on GitHub, Vercel/Netlify will **automatically redeploy** your site with the changes.
