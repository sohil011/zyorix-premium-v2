# Zyorix Premium v2

Modern Next.js (App Router) + Tailwind project for Zyorix, a premium FinOps consultancy site focused on conversion, performance, and SEO.

## Tech Stack
- Next.js 15 (App Router) and TypeScript
- TailwindCSS
- ESLint (flat config) and eslint-plugin-next
- Vercel (deploy)

## Getting Started
    npm i
    npm run dev
    # http://localhost:3000

## Build and Quality
    npm run lint            # ESLint (flat)
    npm run build           # Production build

## Project Rules
- ESLint: use 'npm run lint' (no 'next lint').
- Ignores live in 'eslint.config.mjs' (not '.eslintignore').
- Backups go under '/_archive' (ignored).
- Logo: '/public/zyorix-logo-embedded.svg' (canonical path).

## Routing
- '/', '/services', '/pricing', '/case-studies', '/about', '/blog', '/contact', '/privacy', '/terms'

## Deployment
- Connect repo to Vercel. Framework: Next.js. Build: 'next build'. Output: '.next'.
- For preview reviews, you can temporarily disable Preview Protection.

## Contributing
- Branch from 'main' -> feature branch -> PR.
- Every PR must include: summary, screenshots (mobile and desktop), and verification steps ('npm run lint', 'next build').

CI validation: 2025-09-30 13:22:39
