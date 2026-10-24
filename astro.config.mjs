// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const site = 'https://purixairductcleaning.com';

// Map each blog post URL to its authored frontmatter `date`, so the sitemap can
// report a real last-modified date for posts instead of the build time. Posts
// are loaded from the same directory and slug convention as the blog collection
// (filename stem -> /blog/<slug>/). Pages without a genuine date get no lastmod.
const blogLastmod = (() => {
  const map = new Map();
  const dir = fileURLToPath(new URL('./src/content/blog', import.meta.url));
  let files;
  try {
    files = readdirSync(dir).filter((f) => f.endsWith('.md'));
  } catch (err) {
    console.warn(`[sitemap] Could not read blog directory ${dir}; blog lastmod dates omitted.`, err);
    return map;
  }
  for (const file of files) {
    const url = `/blog/${file.replace(/\.md$/, '')}/`;
    try {
      const frontmatter = readFileSync(`${dir}/${file}`, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
      const dateLine = frontmatter && frontmatter[1].match(/^date:\s*(.+?)\s*$/m);
      if (!dateLine) {
        console.warn(`[sitemap] No "date" in ${file}; its lastmod will be omitted.`);
        continue;
      }
      const date = new Date(dateLine[1].replace(/^['"]|['"]$/g, ''));
      if (Number.isNaN(date.getTime())) {
        console.warn(`[sitemap] Invalid date "${dateLine[1]}" in ${file}; its lastmod will be omitted.`);
        continue;
      }
      map.set(url, date.toISOString());
    } catch (err) {
      console.warn(`[sitemap] Could not read ${file}; its lastmod will be omitted.`, err);
    }
  }
  return map;
})();

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
        // Only emit lastmod when we have a genuine authored date (blog posts).
        // Other pages have no reliable per-page date, so we omit lastmod rather
        // than stamp every URL with the build time on every build.
        const lastmod = blogLastmod.get(path);
        if (lastmod) item.lastmod = lastmod;

        item.changefreq = 'monthly';
        if (path === '/') {
          item.changefreq = 'weekly';
          item.priority = 1.0;
        } else if (path.startsWith('/blog/')) {
          item.priority = 0.6;
        } else if (['/our-services/', '/service-areas/'].includes(path)) {
          item.priority = 0.8;
        } else if (['/about-us/', '/contact-us/', '/privacy-policy/'].includes(path)) {
          item.priority = path === '/privacy-policy/' ? 0.3 : 0.7;
        } else {
          // Service and location pages.
          item.priority = 0.9;
        }
        return item;
      },
    }),
  ],
});
