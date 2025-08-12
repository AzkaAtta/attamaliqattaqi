import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkSocialCards from 'remark-social-cards'; // Untuk OG image otomatis

export default defineConfig({
  site: 'https://auradigital.id',
  trailingSlash: 'never',
  
  integrations: [
    sitemap({
      filter: (url) => !url.includes('/admin') // Exclude private pages
    })
  ],

  markdown: {
    remarkPlugins: [
      [remarkSocialCards, { 
        platforms: ['instagram', 'tiktok', 'youtube'] 
      }]
    ]
  }
});
