# Purix Air Duct Cleaning — Website

SEO-focused marketing site for [Purix Air Duct Cleaning](https://purixairductcleaning.com/), serving Cape Coral, Naples, Fort Lauderdale and Boca Raton, FL.

## Stack

- [Astro](https://astro.build) — static HTML output, fast loads, strong SEO
- Tailwind CSS v4
- `astro:assets` for responsive WebP images
- `@astrojs/sitemap` for `sitemap-index.xml`
- Netlify hosting + Netlify Forms for service requests

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Netlify builds with `npm run build` and publishes `dist/` (see `netlify.toml`).

## URL structure

URLs match the previous WordPress site so existing rankings carry over:

| Page | URL |
| --- | --- |
| Home (Cape Coral) | `/` |
| Locations | `/naples/`, `/fort-lauderdale/`, `/boca-raton/` |
| Services | `/air-duct-cleaning/`, `/dryer-vent-cleaning/`, `/air-duct-sanitizing/`, `/hvac-system-cleaning/`, `/commercial-air-duct-cleaning/` |
| Company | `/about-us/`, `/contact-us/`, `/our-services/`, `/service-areas/`, `/privacy-policy/` |
| Blog | `/blog/` and `/blog/<slug>/` |

Old WordPress-only URLs (`/hello-world/`, `/sitemap_index.xml`, `/category/*`, etc.) are 301-redirected in `netlify.toml`.

## Editing content

- `src/data/site.ts` — business name, locations (phone, email, address, neighborhoods), social links, reviews
- `src/data/services.ts` — service page copy, FAQs and images
- `src/data/location-content.ts` — city page copy and FAQs
- `src/content/blog/*.md` — blog posts (frontmatter: `title`, `description`, `date`, `cover`, `coverAlt`, `service`)
- `src/assets/images/` — photos (automatically resized and converted to WebP at build)

## SEO features

- Unique title, meta description and canonical URL on every page
- JSON-LD: `Organization`, `WebSite`, one `HVACBusiness` per location with its own NAP, `Service`, `FAQPage`, `BreadcrumbList`, `BlogPosting`
- Location-specific phone numbers in the header, hero, CTAs and mobile call bar on each city page
- Open Graph / Twitter cards, XML sitemap, `robots.txt`

## Service request form

The form posts to Netlify Forms (`service-request`) with a honeypot field and redirects to `/thank-you/`. After the first deploy, enable form notifications in Netlify under **Site configuration → Forms → Form notifications** to email new leads.
