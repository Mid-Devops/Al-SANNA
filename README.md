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

Run `npm run format` to format supported source files, or `npm run format:check` to verify formatting.

## Project structure

```text
app/                  Next.js routes, metadata, and application styles
components/            Shared React layout, page content, and interactions
css/style.css          Stylesheet for the standalone HTML pages
js/main.js             Deferred standalone-site interactions
images/                Assets used by standalone HTML pages
public/                Assets served by Next.js
scripts/               Build and deployment helpers
*.html                 Standalone home, about, products, details, and contact pages
```

The standalone HTML pages load `css/style.css` and deferred `js/main.js`; the Next.js app has separate styles in `app/company.css`. Existing raster artwork can be converted to WebP or AVIF to reduce transfer size; retain descriptive alternatives and verify image quality before replacing originals.

## Edit the site

- Shared navigation and footer: `components/SiteHeader.js`, `components/SiteFooter.js`
- Page content and equipment list: `components/CompanyPages.js`
- Gallery, equipment search, contact validation, floating links: `components/Interactions.js`
- Styling and responsive breakpoints: `app/company.css`
- Page metadata and route composition: `app/**/page.js`
- Logo and current vector image placeholders: `public/images/`

The product artwork currently uses local SVG placeholders in `public/images/products/`. Replace these files or update the image paths in `components/CompanyPages.js` when approved product photography is available. The contact form validates fields in the browser and opens the visitor's default email application; it does not submit to a server. Configure a form service or backend if direct online submission is required.

## Standalone deployment

The production build writes a runnable Node server and copies the required `public` and `.next/static` assets into `.next/standalone`. Deploy that directory and start `server.js` with Node.js. The host must support the Node.js version required by the installed Next.js release.
