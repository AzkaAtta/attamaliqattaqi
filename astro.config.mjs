// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
  site: 'https://auradigital.id', // ✅ Ganti dengan domain Anda
  trailingSlash: 'ignore', // ✅ Hindari duplicate URL (contoh: /path vs /path/)
  
  integrations: [
    sitemap(), // ✅ Auto-generate sitemap.xml
    mdx({
      remarkPlugins: [remarkGfm] // ✅ Support tabel di MDX
    })
  ],

  markdown: {
    remarkPlugins: [remarkGfm] // ✅ Formatting markdown
  }
});
