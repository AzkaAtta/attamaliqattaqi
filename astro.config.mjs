import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://auradigital.id', // Ganti dengan domain kamu
  integrations: [sitemap()],
});
