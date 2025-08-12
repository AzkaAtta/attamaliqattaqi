// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // WAJIB: domain publik kamu
  site: 'https://auradigital.id',

  // Biar konsisten dengan canonical kamu
  trailingSlash: 'always',

  integrations: [
    sitemap({
      // kalau halamanmu banyak, tetap 1 index + 1 part file selama < entryLimit
      entryLimit: 50000,

      // keluarkan halaman yang tak perlu diindeks
      filter: (url) => !['/404/', '/search/'].some((p) => url.startsWith(p)),

      // set meta per URL (opsional tapi rapi)
      serialize: (item) => ({
        url: item.url,
        changefreq: item.url === '/' ? 'weekly'
          : item.url.startsWith('/layanan/') ? 'weekly'
          : 'monthly',
        priority: item.url === '/' ? 1.0
          : item.url.startsWith('/layanan/') ? 0.8
          : 0.6,
        lastmod: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
      }),
    }),
  ],
});