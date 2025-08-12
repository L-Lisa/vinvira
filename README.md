# Vinvira – Next.js Website

Modern, SEO-optimized site for small/new businesses in Sweden.

## Tech Stack
- Next.js 14, React 18
- Tailwind CSS
- next-seo, next-sitemap
- Framer Motion
- Deployed on Vercel

## Quick Start
```bash
npm install
npm run dev
```

## Build & Start
```bash
npm run build
npm start
```

## Environment
Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://vinvira.se
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXX
```

## SEO
- Use `<SeoHead />` to set per-page meta
- JSON-LD FAQ files in `/data`
- Sitemap/robots via `next-sitemap`

## Deploy (Vercel)
1) Push to GitHub
2) Import in Vercel
3) Set env vars
4) Go live
