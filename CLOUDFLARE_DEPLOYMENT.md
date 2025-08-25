# Cloudflare Deployment Guide for QCoin

This guide will help you deploy your QCoin app to a subdomain on Cloudflare.

## Prerequisites

1. A Cloudflare account
2. A domain managed by Cloudflare
3. Wrangler CLI installed (already done in this project)

## Option 1: Deploy using Cloudflare Pages (Recommended)

### Step 1: Build the project
```bash
npm run build
cp -r functions out/_functions
```

### Step 2: Deploy to Cloudflare Pages

#### Method A: Using Wrangler CLI
```bash
npx wrangler pages deploy out --project-name qcoin
```

#### Method B: Using Cloudflare Dashboard
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to "Pages" in the left sidebar
3. Click "Create a project"
4. Choose "Upload assets"
5. Upload the `out` folder
6. Set project name to "qcoin"

### Step 3: Set up custom subdomain
1. In Cloudflare Dashboard, go to your Pages project
2. Navigate to "Custom domains"
3. Click "Set up a custom domain"
4. Enter your desired subdomain (e.g., `qcoin.yourdomain.com`)
5. Cloudflare will automatically create the DNS record

## Option 2: Deploy using Wrangler (Alternative)

### Step 1: Authenticate Wrangler
```bash
npx wrangler auth login
```

### Step 2: Deploy
```bash
npx wrangler pages deploy out --project-name qcoin
```

## Important Changes Made

1. **Next.js Configuration**: Updated `next.config.mjs` to enable static export
2. **API Route Migration**: Moved API logic from `/api/flip` to Cloudflare Functions at `/functions/api/flip.js`
3. **Build Process**: Added scripts to build and deploy to Cloudflare

## API Endpoint

After deployment, your API will be available at:
- `https://your-subdomain.your-domain.com/api/flip`

## Environment Variables

If you need to add environment variables:
1. In Cloudflare Dashboard, go to your Pages project
2. Navigate to "Settings" > "Environment variables"
3. Add your variables for both Production and Preview environments

## Testing Locally

To test the Cloudflare Pages setup locally:
```bash
npm run build
cp -r functions out/_functions
npx wrangler pages dev out --compatibility-date=2023-12-01
```

## Troubleshooting

1. **Build fails**: Make sure all dependencies are installed with `npm install`
2. **API not working**: Check that the `_functions` directory is properly created in the `out` folder
3. **Domain issues**: Ensure your domain DNS is managed by Cloudflare

## Next Steps

1. Deploy using one of the methods above
2. Set up your custom subdomain
3. Update any hardcoded URLs in your frontend to use the new domain
4. Test the deployment thoroughly

Your QCoin app should now be running on Cloudflare with full API functionality!
