# Al Sanna Tank & Sheds Ind LLC

Responsive multi-page company website built with Next.js, React, CSS and vanilla browser interactions. The site is configured with Next.js standalone output for deployment on a Node.js host.

## Pages

- `/` Home
- `/about` About us
- `/products` Product overview and filterable gallery
- `/grc` GRC / GFRC products
- `/grp` GRP / GFRP products
- `/quality` Quality and sustainability
- `/hse` Health, safety and environment
- `/team` Organization chart and workforce
- `/facilities` Searchable equipment inventory
- `/contact` Quote form and Sharjah map

## Run locally

Install Node.js, then run:

```bash
npm install
npm run dev
```

Open http://localhost:3000. Create an optimized standalone production build with `npm run build`; run it with `npm run start`.

## Edit the site

- Shared navigation and footer: `components/SiteHeader.js`, `components/SiteFooter.js`
- Page content and equipment list: `components/CompanyPages.js`
- Gallery, equipment search, contact validation, floating links: `components/Interactions.js`
- Styling and responsive breakpoints: `app/company.css`
- Page metadata and route composition: `app/**/page.js`
- Logo and current vector image placeholders: `public/images/`

The product artwork currently uses local SVG placeholders in `public/images/products/`. Replace these files or update the image paths in `components/CompanyPages.js` when approved product photography is available. The contact form validates fields in the browser and opens the visitor's default email application; it does not submit to a server. Configure a form service or backend if direct online submission is required.

## Standalone deployment

The production build writes a self-contained Node server to `.next/standalone`. Copy the standalone output together with `.next/static` and `public` to the target host, then start `server.js` with Node.js. The host must support the Node.js version required by the installed Next.js release.
