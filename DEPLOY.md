# Deployment Guide

This document outlines the steps to build and deploy the portfolio application to GitHub Pages.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed (version 18+ recommended).
- **npm**: Comes bundled with Node.js.

## Available Commands

### 1. Install Dependencies
Before running any other commands, ensure all project dependencies are installed.
```bash
npm install
```
*   **What it does**: Downloads all packages listed in `package.json` into the `node_modules` folder.

### 2. Development Server
To run the application locally for development:
```bash
npm run dev
```
*   **What it does**: Starts a local Vite development server (usually at `http://localhost:5173`).
*   **Features**: Hot Module Replacement (HMR) is enabled, so changes update instantly.

### 3. Production Build
To create a production-ready build of the application:
```bash
npm run build
```
*   **What it does**:
    *   Compiles React and Sass files.
    *   Optimizes assets (minification, tree-shaking).
    *   Outputs the result to the `dist/` directory.
*   **When to use**: Run this locally to verify the build passes before deploying.

### 4. Deploy to GitHub Pages
To publish the site to the live URL:
```bash
npm run deploy
```
*   **What it does**:
    1.  Runs the `predeploy` script (which runs `npm run build` to ensure the `dist/` folder is fresh).
    2.  Uses the `gh-pages` package to push the contents of the `dist/` folder to the `gh-pages` branch of your repository.
*   **Result**: Your site will be updated at `https://RodrasSilva.github.io/`.

## Configuration Details

- **`package.json`**:
    - `homepage`: Set to your GitHub Pages URL. This ensures assets are linked correctly.
    - `scripts`:
        - `predeploy`: Automatically runs before `deploy`.
        - `deploy`: Executes `gh-pages -d dist`.
- **`vite.config.js`**:
    - `base`: Should be set to `/` (or your repository name if not a user site) to ensure correct routing.
