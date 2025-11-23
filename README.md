# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# Deployment Guide

This document outlines the steps to build and deploy the portfolio application to GitHub Pages.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed (version 18+ recommended).
- **npm**: Comes bundled with Node.js.

## Automated Deployment (Recommended)

A `deploy.sh` script is included to automate the build and deployment process. It ensures you are on the `master` branch, installs dependencies, builds the project, and deploys to GitHub Pages.

To use it:

1.  Make the script executable (one-time setup):
    ```bash
    chmod +x cd-scripts/deploy.sh
    ```
2.  Run the script:
    ```bash
    ./cd-scripts/deploy.sh
    ```

## Manual Deployment

### 1. Install Dependencies
Before running any other commands, ensure all project dependencies are installed.
```bash
npm install
```

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

## Important: GitHub Pages Configuration

After deploying for the first time, you **must** configure your repository to serve the site from the correct branch:

1.  Go to your GitHub repository.
2.  Click on **Settings** > **Pages** (in the left sidebar).
3.  Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4.  Under **Branch**, select **`gh-pages`** and **`/ (root)`**.
5.  Click **Save**.

Your site will now be served from the built files in the `gh-pages` branch, not the source code in `master`.

## Troubleshooting

### "404 There isn't a GitHub Pages site here"
If you see this error, check the following:
1.  **Wait a few minutes**: It can take up to 10 minutes for the first deployment to propagate.
2.  **Check Repository Visibility**: Go to **Settings** > **General**. If your repository is **Private**, GitHub Pages will not work unless you have a GitHub Pro account. Make the repository **Public** if possible.
3.  **Check Pages Settings**: Go to **Settings** > **Pages**. Ensure that **Source** is set to **Deploy from a branch** and the branch is **`gh-pages`**.

### Blank Page (White Screen)
If the site loads but is blank:
1.  You might be serving from the `master` branch instead of `gh-pages`. The `master` branch contains raw code that browsers can't understand. Follow the configuration steps above to switch to `gh-pages`.
