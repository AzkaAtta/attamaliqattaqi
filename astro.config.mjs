import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://namasituskamu.com', // ⛳ Ganti dengan domain kamu
  integrations: [sitemap()],
});
