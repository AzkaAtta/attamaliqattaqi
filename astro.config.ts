import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

// 🔥 SEO OPTIMIZATION: Added canonical URL and trailing slash config
export default defineConfig({
  site: 'https://auradigital.id', // 🔥 WAJIB: Ganti dengan domain Anda
  trailingSlash: 'ignore', // 🔥 Hindari duplicate content (e.g., /path vs /path/)
  output: 'static',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
    }),
  ],

  // 🔥 SEO OPTIMIZATION: Added image service with Sharp
  image: {
    service: { 
      entrypoint: 'astro/assets/services/sharp' // 🔥 WAJIB: Untuk optimasi gambar
    },
    domains: ['cdn.pixabay.com'],
  },

  // 🔥 SEO OPTIMIZATION: Enhanced markdown config
  markdown: {
    remarkPlugins: [
      readingTimeRemarkPlugin,
      'remark-gfm' // 🔥 Tambahkan untuk dukungan tabel
    ],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
    syntaxHighlight: 'shiki', // 🔥 Untuk highlight kode
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
