import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import compress from 'astro-compress';
import astrowind from './vendor/integration.js'; // sesuaikan jika kamu pakai astrowind

export default defineConfig({
  output: 'static',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      JavaScript: true,
      Logger: 1,
    }),
    astrowind({
      config: './src/config.yaml', // kalau pakai yaml config
    }),
  ],

  vite: {
    resolve: {
      alias: {
        '~': new URL('./src', import.meta.url).pathname,
      },
    },
  },

  image: {
    domains: ['cdn.pixabay.com'],
  },
});
