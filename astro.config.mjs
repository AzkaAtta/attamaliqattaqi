// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'url';

export default defineConfig({
  // domain publik kamu
  site: 'https://auradigital.id',

  // rute pakai trailing slash (sesuaikan dengan halaman kamu)
  trailingSlash: 'always',

  // penting untuk GitHub Pages / hosting statis
  output: 'static',

  integrations: [
    sitemap({
      entryLimit: 50000,
      filter: (url) => !['/404/', '/search/'].some((p) => url.startsWith(p)),
      serialize: (item) => ({
        url: item.url,
        changefreq:
          item.url === '/' ? 'weekly'
          : item.url.startsWith('/layanan/') ? 'weekly'
          : 'monthly',
        priority:
          item.url === '/' ? 1.0
          : item.url.startsWith('/layanan/') ? 0.8
          : 0.6,
        lastmod: new Date().toISOString().slice(0, 10),
      }),
    }),
  ],

  vite: {
    resolve: {
      alias: {
        // ⬇️ ini yang bikin import "@/config" bisa ditemukan
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});
