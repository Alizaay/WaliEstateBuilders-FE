# Wali Estates & Builders — Frontend

React + Vite + Tailwind CSS website for **Wali Estates & Builders**.

## Features

- Premium landing page with navy / gold / white branding
- Official company logo (`src/assets/logo.png`)
- Property search, filters, and detail pages
- Contact and inquiry forms
- WhatsApp and click-to-call
- SEO basics (meta tags, sitemap, robots.txt)

## Prerequisites

- Node.js 20+
- Running backend API (see the backend repository)

## Setup

```bash
npm install
cp .env.example .env
```

Edit `.env` and set `VITE_API_URL` to your backend API base URL:

```
VITE_API_URL=http://localhost:5000/api
```

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm test` | Run validation tests |
| `npm run lint` | Lint source files |

## Environment variables

See `.env.example` for all options:

- `VITE_API_URL` — backend API URL (required for data/forms)
- `VITE_SITE_URL` — public site URL for SEO
- `VITE_WHATSAPP_NUMBER` / `VITE_PHONE_*` — contact details
- Optional: email, address, map embed, social links

## Production

```bash
npm run build
```

### Deploy on Vercel

This repo includes `vercel.json` for Vite + React Router.

1. Import the GitHub repo in [Vercel](https://vercel.com).
2. Framework preset: **Vite** (or leave auto-detect).
3. Add environment variables in the Vercel project settings:
   - `VITE_API_URL` — your live backend API URL (e.g. `https://your-api.com/api`)
   - `VITE_SITE_URL` — your Vercel domain (e.g. `https://your-app.vercel.app`)
   - Optional: phone, WhatsApp, email, address, socials (see `.env.example`)
4. Deploy.

On the backend, set `CLIENT_URL` to your Vercel URL so CORS allows the frontend.

You can also deploy from the CLI:

```bash
npx vercel
```

## License

UNLICENSED — proprietary to Wali Estates & Builders.
