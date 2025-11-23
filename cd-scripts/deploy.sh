#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Ensure we are on the master branch (skip check in CI)
if [[ -z "$CI" ]]; then
  BRANCH=$(git rev-parse --abbrev-ref HEAD)
  if [[ "$BRANCH" != "master" ]]; then
    echo "Error: You must be on the master branch to deploy."
    echo "Current branch: $BRANCH"
    exit 1
  fi
else
  # In CI, configure the remote with the token
  echo "🔧 Configuring Git remote for CI..."
  git remote set-url origin "https://git:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
fi

echo "🚀 Starting deployment from master..."

# Install dependencies to ensure lockfile is in sync
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🏗️  Building the project..."
npm run build

# Deploy to GitHub Pages
echo "📤 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
