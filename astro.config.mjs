import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import path from 'path';

export default defineConfig({
  site: 'https://auradigital.id',
  integrations: [sitemap()],
  vite: {
    resolve: {
      alias: {
        'astrowind:config': path.resolve('./src/config.ts'), // atau file config kamu
      },
    },
  },
});
