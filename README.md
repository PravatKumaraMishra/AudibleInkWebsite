# Murmur website

A standalone Next.js landing page for [Murmur](https://github.com/PravatKumaraMishra/MarkDownToTTS), a native macOS document-to-speech app. This repository is independent of the desktop application.

## Development

Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Verification and deployment

```sh
npm run build
npm run typecheck
```

The production build exports a static website to `out/`. Deploy that directory to any static hosting provider, or connect this repository to a Next.js-compatible host. No external services are required. The production URL defaults to https://murmur-website-sandy.vercel.app; SITE_URL can override it at build time.

## Content

- `app/page.tsx`: page content and interactive illustrative controls.
- `app/globals.css`: responsive monochrome design and reduced-motion support.
- `app/layout.tsx`: page metadata and favicon.
- `public/murmur.png`: original desktop application icon.

The preview demonstrates code inclusion and pace selection; it does not synthesize or play audio. Download calls to action link to the application repository, where setup requirements and the detailed guide live. Application features were checked against its README during implementation.

## Validation performed

Production export and TypeScript checks pass. The landing page was visually inspected in the browser and the code-block switch was verified to update both illustrations. Responsive styles cover narrow screens; mobile-device testing has not been performed.

## Search and sharing metadata

The site includes a descriptive search title, description, Open Graph and Twitter sharing metadata, crawl rules, and SoftwareApplication structured data. Content is rendered into the static HTML for search crawlers.

The canonical production origin is `https://murmur-website-sandy.vercel.app`. Set `SITE_URL` before building to override it when moving to a custom domain. This origin is used for the canonical URL, absolute social images, WebSite structured data, and the home-page sitemap entry. Rebuild when changing the public URL.

After deployment, submit `/sitemap.xml` in Google Search Console. Structured data describes the app without inventing ratings or reviews; rich search results are not guaranteed.
