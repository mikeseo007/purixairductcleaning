# Purix Air Duct & Dryer Vent Cleaning — Website

SEO-focused marketing site for [Purix Air Duct & Dryer Vent Cleaning](https://purixairductcleaning.com/), based in Miami, FL, with service in Fort Lauderdale, Boca Raton, Naples and Cape Coral.

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

| Page | URL |
| --- | --- |
| Home (Miami) | `/` |
| Locations | `/fort-lauderdale/`, `/boca-raton/`, `/naples/`, `/cape-coral/` |
| Air Duct & AC Ductwork | `/air-duct-cleaning/`, `/residential-air-duct-cleaning/`, `/commercial-air-duct-cleaning/`, `/air-duct-sanitizing/`, `/air-duct-inspection/`, `/ac-duct-replacement/` |
| HVAC & Mold Cleaning | `/hvac-cleaning/`, `/hvac-mold-cleaning/`, `/ac-coil-cleaning/`, `/air-handler-cleaning/`, `/blower-wheel-cleaning/` |
| Dryer Vent | `/dryer-vent-cleaning/`, `/dryer-vent-installation/`, `/commercial-dryer-vent-cleaning/` |
| Company | `/about-us/`, `/contact-us/`, `/our-services/`, `/service-areas/`, `/privacy-policy/` |
| Blog | `/blog/` and `/blog/<slug>/` |

All service pages are generated from `src/data/services.ts` by `src/pages/[service].astro`. Retired URLs are 301-redirected in `netlify.toml` (for example `/hvac-system-cleaning/` → `/hvac-cleaning/`, plus old WordPress URLs).

## Editing content

- `src/data/site.ts` — business name, address, phone, email, hours, service areas, social links, reviews
- `src/data/services.ts` — service groups and every service page's copy, FAQs, images and related services
- `src/data/location-content.ts` — homepage (Miami) and city page copy and FAQs
- `src/content/blog/*.md` — blog posts (frontmatter: `title`, `description`, `date`, `cover`, `coverAlt`, `service`)
- `src/assets/images/` — photos (automatically resized and converted to WebP at build)

Location pages show only the phone number in page content; the full address, hours and email appear in the header, footer and contact page.

## SEO features

- Unique title, meta description, H1 and canonical URL on every page
- JSON-LD: one `HVACBusiness` (Miami address, phone, email, Sun–Fri 24-hour opening hours, service areas), `WebSite`, `Service`, `FAQPage`, `BreadcrumbList`, `BlogPosting`
- Grouped services section on the homepage, every service page, the services page, the service-areas page and each location page
- Open Graph / Twitter cards, XML sitemap, `robots.txt`

## Service request form

The form posts to Netlify Forms (`service-request`) with a honeypot field and redirects to `/thank-you/`. After the first deploy, enable email notifications in Netlify under **Site configuration → Forms → Form notifications** and send them to Info@purixairsolution.com.
