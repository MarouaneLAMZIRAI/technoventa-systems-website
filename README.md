# Technoventa Systems — Website (React + Vite + Tailwind)

Production-ready frontend website for **TECHNOVENTA SYSTEMS**.

## Tech stack
- React + Vite + TypeScript
- TailwindCSS
- React Router

## Setup
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy
### Vercel
- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`

## Where to plug email / backend later
- Contact form submit handler: `src/pages/Contact.tsx` (see `// INTEGRATION HOOK`)
- Careers apply handler: `src/pages/Careers.tsx` (see `// INTEGRATION HOOK`)
- Environment variables template: `.env.example`

## Assets
- Logo: `src/assets/logo.png`
- Hero image (optional): `src/assets/hero.webp`  
  Replace it with your final illustration if needed.

## Hosting notes (Netlify/Vercel/Cloudflare)

- Recommended Node version: **20.x (LTS)** (this repo includes `.nvmrc`).
- On Netlify: publish directory `dist`, build command `npm run build`.
- If you see an npm internal error on Node 22, switch the build image/node version to 20.

