# Shivdarshan Kitchen Gallery

A Vite + React single-page experience for Shivdarshan Kitchen Gallery, showcasing balcony farm transformations, explainer videos, and a consultation booking form that integrates with EmailJS. The UI is powered by Tailwind CSS, shadcn/ui, framer-motion animations, and Lucide iconography.

## Features

- Sticky header with smooth-scrolling navigation for hero, info, videos, booking, and about sections.
- Immersive hero with CTA buttons, animated stats, and parallax background.
- “Why Kitchen Garden?” section highlighting differentiators with animated cards.
- Embedded video gallery (YouTube iframes) with placeholder IDs for real project footage.
- Lead capture form validated with `zod`, surfaced toast notifications, and EmailJS submission.
- Story-driven About section featuring an auto-advancing image slider and mission highlights.
- Global toast + tooltip providers, React Query setup, and responsive layout utilities.

## Tech Stack

- React 18 + TypeScript + Vite 5
- Tailwind CSS 3 + shadcn/ui + Radix primitives
- framer-motion, react-intersection-observer
- EmailJS for booking notifications
- React Router 6, React Hook Form style primitives, Lucide icons

## Getting Started

### Prerequisites

- Node.js ≥ 18 (recommend using `nvm` or `fnm`)
- npm ≥ 9

### Installation

```sh
git clone <repo-url>
cd shivdarshankitchengallery-main
npm install
```

### Development

```sh
npm run dev
```

This launches Vite on `http://localhost:5173` with hot module replacement.

### Production Build & Preview

```sh
npm run build      # emits static assets into dist/
npm run preview    # serves the built output locally
```

### Linting

```sh
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # sticky navigation + mobile drawer
│   ├── Hero.tsx            # landing section with CTA buttons
│   ├── Info.tsx            # feature grid and concept blurb
│   ├── Videos.tsx          # embedded video gallery
│   ├── BookingForm.tsx     # EmailJS-powered lead form + contact info
│   ├── About.tsx           # mission/vision copy and slider
│   └── ui/…                # shadcn/ui component library
├── pages/
│   ├── Index.tsx           # assembles the homepage sections
│   └── NotFound.tsx        # simple 404 fallback
├── assets/                 # hero + gallery imagery and logo
├── hooks/                  # toast + responsive helpers
└── main.tsx                # app bootstrap + router
```

## Configuration

| Concern | Location | Notes |
| --- | --- | --- |
| EmailJS service/template/public key | `src/components/BookingForm.tsx` | Loaded from `.env` via `VITE_SERVICEID`, `VITE_TEMPLATEID`, `VITE_PUBLICID`. Update values there and in your hosting env settings. |
| Contact email / WhatsApp link | `BookingForm` copy | Update to reflect your business channels. |
| YouTube video IDs | `src/components/Videos.tsx` | Swap out placeholder IDs with real showcase content. |
| Gallery images | `src/assets/garden-*.jpg` | Replace with optimised images of completed projects. |

### Environment Variables

Create a `.env` (or `.env.local`) file at the project root:

```dotenv
VITE_SERVICEID=your_emailjs_service_id
VITE_TEMPLATEID=your_emailjs_template_id
VITE_PUBLICID=your_emailjs_public_key
```

Restart `npm run dev` after adding or changing env vars. For production (e.g., Vercel), define the same variables in the project’s Environment Variables settings.

## Deployment

The site builds down to static assets and can be hosted on Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any static web host:

1. Run `npm run build`.
2. Upload the `dist/` directory to your hosting provider.
3. Ensure single-page routing is configured to fall back to `index.html` (Vercel/Netlify handle this automatically).

## Next Steps

- Replace placeholder media and credentials.
- Connect analytics or CRM tooling to track form submissions.
- Add end-to-end validation (e.g., Formspree fallback) if EmailJS is unavailable.

For questions or contributions, open an issue or reach out via the contact details embedded in the booking form. Happy gardening!
