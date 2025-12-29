# Simpleflo Marketing Site

Production marketing site for Simpleflo, built with Next.js App Router and static-first pages.

## Stack
- Next.js (App Router, SSG)
- TypeScript + Tailwind CSS (CSS variable theming)
- shadcn/ui components

## Local development
```bash
npm install
npm run dev
```

## Scripts
```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Security and SEO
- Security headers and CSP are configured in `next.config.ts`.
- Sitemap and robots files are generated in `src/app/sitemap.ts` and `src/app/robots.ts`.
- JSON-LD structured data is embedded for the site and tool pages.
- No secrets are required or stored in the repo. `.env*` files are ignored.

## Container
```bash
docker build -t simpleflo-site .
docker run -p 8080:8080 -e PORT=8080 simpleflo-site
```

## Deploy to Cloud Run
```bash
PROJECT_ID=$(gcloud config get-value project)
REGION=$(gcloud config get-value run/region 2>/dev/null || echo us-central1)

gcloud builds submit --tag gcr.io/$PROJECT_ID/simpleflo-site
gcloud run deploy simpleflo-site \
  --image gcr.io/$PROJECT_ID/simpleflo-site \
  --region $REGION \
  --platform managed \
  --allow-unauthenticated \
  --port 8080
```
