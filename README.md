# My Project Structure for a Clean and Scalable Codebase 🗂️

When working on a front-end project, having a well-organized folder structure is essential for readability, maintainability, and scalability. Here's a breakdown of my current project structure that helps me keep everything organized and easy to navigate.

## Folder Breakdown

### src/assets
Contains project assets, organized into `images` for image management and `scss` for common styling.

### src/components
Houses reusable components, with folders like `common/blog-card` and `layout-wrapper` for modularity.

### src/config
Keeps configuration files, like `antdTheme.ts`, centralized and accessible.

### src/pages
Contains page-level components such as `about` and `home` which are connected to router of the app.

### src/routes
Manages application routing, with `Router.tsx` defining main route configurations.

### Root files
Key configurations for linting, TypeScript, Vite, and package management.

## Project Structure

```plaintext
📦 project-root
├── public
├── src
│   ├── assets
│   │   ├── images
│   │   └── scss
│   ├── components
│   │   ├── common/blog-card
│   │   └── layout-wrapper
│   ├── config
│   │   └── andtTheme.ts
│   ├── pages
│   │   ├── about
│   │   └── home
│   ├── routes
│   │   └── Router.tsx
│   ├── App.scss
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── package-lock.json
