#!/bin/bash

# Quick deployment script for Cloudflare Pages
echo "🚀 Deploying QCoin to Cloudflare Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Copy functions
echo "📁 Copying functions..."
cp -r functions out/_functions

# Deploy to Cloudflare Pages
echo "🌐 Deploying to Cloudflare..."
npx wrangler pages deploy out --project-name qcoin

echo "✅ Deployment complete!"
echo "📝 Don't forget to set up your custom subdomain in the Cloudflare Dashboard"
