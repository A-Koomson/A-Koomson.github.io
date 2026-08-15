# Alexander Baafi Koomson

Personal portfolio of **Alexander Baafi Koomson**, Software Engineer & Systems Builder.

**Building reliable systems. Understanding how they work.**

Production URL: [https://a-koomson.github.io/](https://a-koomson.github.io/)

Creator brand: [Systems by Koomson](https://www.youtube.com/@SystemsbyKoomson)

## Overview

This is a static React portfolio. All content lives in frontend data files so the site can be updated without touching UI components. The same content service can later be swapped for an API without rebuilding the interface.

## Tech stack

- React
- Vite
- TypeScript
- Modern CSS with design tokens
- Framer Motion
- Lucide React
- GitHub Pages via GitHub Actions

There is no backend, database, authentication, or custom API.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Pages

- `/` Home
- `/about/` About
- `/projects/` Projects
- `/projects/:project-id/` Project case study
- `/skills/` Skills
- `/experience/` Experience
- `/youtube/` Systems by Koomson
- `/contact/` Contact

## Deployment

The site is configured as a GitHub user site:

`https://a-koomson.github.io/`

The repository should be named:

`A-Koomson.github.io`

The Vite base path is `/`.

GitHub Actions workflow: `.github/workflows/deploy.yml`

On every push to `main`, the workflow installs dependencies, builds the app, and deploys the `dist` folder to GitHub Pages.

The build also writes `index.html` into each route folder so GitHub Pages can serve `/about/`, `/projects/`, and project case studies as static paths.

In the GitHub repository, enable Pages with **GitHub Actions** as the source.

## How to update content

Do not hardcode personal information inside components. Edit the files in `src/data/`.

| What to change | File |
| --- | --- |
| Name, about copy, tagline, philosophy, CV path | `src/data/profile.ts` |
| Projects | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |
| Experience | `src/data/experience.ts` |
| Education | `src/data/education.ts` |
| YouTube videos | `src/data/videos.ts` |
| Social links | `src/data/socialLinks.ts` |
| Currently learning | `src/data/learning.ts` |

Components read from `src/services/content.ts`. To use an API later, change those functions and keep the return shapes the same.

Where details are not ready, keep `PLACEHOLDER` in the data file. The UI will show a professional fallback instead of inventing information.

## How to add a project

1. Add or replace an image in `src/assets/projects/images/`.
2. Add an object to `src/data/projects.ts`.

```ts
{
  id: 'unique-id',
  name: 'Project name',
  description: 'Short description',
  technologies: ['Django', 'PostgreSQL'],
  githubUrl: 'https://github.com/A-Koomson/repo',
  liveUrl: 'https://example.com',
  image: projectImage,
  featured: false,
  details: {
    problem: '...',
    solution: '...',
    whatIBuilt: '...',
    keyLearning: '...',
  },
}
```

Also add the project `id` to `src/data/routes.ts` so GitHub Pages can generate `/projects/your-id/`.

## How to add YouTube videos

Edit `src/data/videos.ts` and paste a YouTube URL. The app extracts the video ID and generates the thumbnail automatically.

```ts
{
  title: 'Video title',
  youtubeUrl: 'https://www.youtube.com/watch?v=VIDEO_ID',
  description: 'Short description',
  publishedDate: '2026-01-15',
}
```

Supported URL shapes include `youtube.com/watch?v=`, `youtu.be/`, `youtube.com/embed/`, and `youtube.com/shorts/`.

Thumbnails use `maxresdefault.jpg` and fall back to `hqdefault.jpg`. Videos open on YouTube. They are not auto-embedded.

## How to replace the profile picture

Replace this file:

`src/assets/profile/profile.jpg`

Keep the same filename. Use a clear, well-lit portrait. The UI already applies the circular frame, accent ring, and glow. The current file is an abstract placeholder until the real portrait is added.

## How to replace the CV

Add the PDF here:

`public/Alexander-Koomson-CV.pdf`

The Download CV button becomes active when that file is present. Do not add a fake CV.

## How to change colors

The palette is defined as CSS variables in `src/index.css`.

```css
--color-bg: #cdcbd6;
--color-accent: #d96846;
--color-olive: #596235;
--color-dark: #2f3020;
```

The lavender background is the default visual system. Dark mode uses the same four colors with `#2F3020` as the surface. The visitor's choice is stored in `localStorage` under `ak-theme`.

## Social preview

Replace `public/og-preview.jpg` to change the LinkedIn, WhatsApp, Facebook, and X preview image.

## Project structure

```text
src/
  assets/profile/
  assets/projects/images/
  components/
  data/
  hooks/
  pages/
  services/
  types/
  utils/
  App.tsx
  main.tsx
  index.css
```
