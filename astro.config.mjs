// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const site = 'https://purixairductcleaning.com';

// Trailing slashes match the URLs already indexed from the previous WordPress site.
export default defineConfig({
  site,
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  prefetch: {
    defaultStrategy: 'hover',
  },
  image: {
    responsiveStyles: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you/') && !page.includes('/404'),
      serialize(item) {
        const path = item.url.replace(site, '');
        item.lastmod = new Date().toISOString();

        if (path === '/') {
          item.changefreq = 'weekly';
          item.priority = 1.0;
        } else if (['/boca-raton/', '/fort-lauderdale/', '/naples/'].includes(path) || path.includes('cleaning') || path.includes('sanitizing')) {
          item.changefreq = 'monthly';
          item.priority = 0.9;
        } else if (path.startsWith('/blog/')) {
          item.changefreq = 'monthly';
          item.priority = 0.6;
        } else {
          item.changefreq = 'monthly';
          item.priority = 0.7;
        }
        return item;
      },
    }),
  ],
});
