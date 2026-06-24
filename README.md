# Portfolio Website

A personal portfolio built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Velite** for type-safe MDX project case studies.

## Features

- Single-page home with anchor navigation
- MDX-powered project case studies at `/projects/[slug]`
- Dark mode support
- Subtle scroll animations with reduced-motion respect
- SEO metadata, sitemap, and robots.txt

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Velite runs automatically before `dev` and `build` via `next.config.ts`, generating typed content in `.velite/`.

### Production build

```bash
npm run build
npm start
```

## Customizing Content

### Site-wide settings

Edit [`data/site.ts`](data/site.ts) for your name, links, email, and SEO URL.

### Sections (experience, skills, etc.)

Update the typed data files in [`data/`](data/):

- `about.ts` — bio paragraphs
- `skills.ts` — skill groups
- `experience.ts` — work and internships
- `achievements.ts` — awards and certifications
- `education.ts` — school and degree

### Projects

Add a new MDX file under [`content/projects/`](content/projects/). Use the existing files as templates. Required frontmatter:

```yaml
---
title: "Project Name"
description: "One-line summary"
date: "2025-06-01"
featured: true
tags: ["Next.js", "TypeScript"]
links:
  github: "https://github.com/yourusername/repo"
  live: "https://optional-demo.com"
image: "/images/projects/your-image.svg"
---
```

Push to GitHub to deploy.

### Resume

Place your PDF at [`public/resume.pdf`](public/resume.pdf). The site links to it from the hero and footer.

## Deployment (Vercel)

1. Push this repository to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Use default Next.js settings
4. Update `siteConfig.url` in `data/site.ts` with your live domain

Every push to `main` triggers a new deployment.

## Project Structure

```
app/                 # Next.js App Router pages
components/          # UI, layout, and home sections
content/projects/    # MDX case studies
data/                # Typed portfolio content
lib/                 # Helpers
public/              # Static assets
velite.config.ts     # Content schema
```

## License

Private portfolio — customize freely for your own use.
