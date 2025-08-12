import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import compress from 'astro-compress';
import astrowind from './vendor/integration';
import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://auradigital.id', // ✅ Canonical URL
  output: 'static',

  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    mdx(),
    icon({
      include: { 
        tabler: ['*'],
        'flat-color-icons': ['template', 'gallery', /* ... */]
      }
    }),
    compress({
      CSS: true,
      HTML: { 'html-minifier-terser': { removeAttributeQuotes: false } },
      JavaScript: true,
    }),
    astrowind({ config: './src/config.yaml' }),
  ],

  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }, // ✅ Optimisasi gambar
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin, 'remark-gfm'], // ✅ Support tabel
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
    syntaxHighlight: 'shiki',
  },

  vite: {
    resolve: { alias: { '~': path.resolve(__dirname, './src') } },
  },
});
