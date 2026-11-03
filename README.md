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
- `/privacy` Privacy policy

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
app/                  Next.js routes, metadata, APIs, and application styles
components/            Shared React layout, page content, and interactions
css/style.css          Stylesheet for the standalone HTML pages
js/main.js             Deferred standalone-site interactions
images/                Assets used by standalone HTML pages
public/                Assets served by Next.js
middleware.js          CSP nonce and request security policy
.htaccess              HTTPS/security headers for Apache static hosting
public/robots.txt      Crawler policy and sitemap location
public/sitemap.xml     Canonical Next.js route list
public/.well-known/    Vulnerability disclosure contact
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

The product artwork currently uses local SVG concept illustrations in `public/images/products/`. Replace these files or update the image paths in `components/CompanyPages.js` when approved product photography is available. Contact enquiries are validated in the browser and again by `/api/contact`, protected by same-origin checks, a short-lived CSRF token, a honeypot and a time check. To deliver submissions, configure `CONTACT_FORM_ENDPOINT` with the HTTPS submission endpoint supplied by your form provider. Set `CONTACT_FORM_API_KEY` only in the host's secret store if the provider requires it; never commit a real key. Without a configured endpoint, the API intentionally returns an error and asks visitors to email the published company address.

Security headers are configured in `middleware.js` and `next.config.mjs` for the Next.js deployment. `.htaccess` supplies HTTPS redirection and security headers for Apache static hosting. The public sitemap, robots policy and vulnerability disclosure contact are under `public/`. No analytics or advertising cookies are used; the privacy page documents the essential short-lived CSRF cookie. Production metadata and sitemap URLs use `https://alsannauae.com`.

## Standalone deployment

The production build writes a runnable Node server and copies the required `public` and `.next/static` assets into `.next/standalone`. Deploy that directory and start `server.js` with Node.js. The host must support the Node.js version required by the installed Next.js release.
