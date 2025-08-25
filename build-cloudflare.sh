#!/bin/bash

# Build script for Cloudflare Pages
echo "Building for Cloudflare Pages..."

# Install dependencies
npm install

# Build the Next.js app for static export
npm run build

# Copy functions to the output directory
if [ -d "functions" ]; then
    mkdir -p out/_functions
    cp -r functions/* out/_functions/
fi

echo "Build complete! Deploy the 'out' directory to Cloudflare Pages."
