// src/pages/rss.xml.ts
import rss from '@astrojs/rss';
import { SITE } from '@/config';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const posts = await getCollection('post');
  
  return rss({
    title: `${SITE.title} | Blog & Layanan`,
    description: SITE.description,
    site: context.site || SITE.url,
    stylesheet: '/rss/styles.xsl',
    items: posts
      .filter(post => !post.data.draft) // Exclude drafts
      .map(post => ({
        title: post.data.title,
        description: post.data.excerpt || SITE.description,
        link: `/blog/${post.slug}/`,
        pubDate: post.data.publishDate || new Date(),
        customData: `
          <author>${post.data.author || SITE.title}</author>
          <category>${post.data.category || 'Digital Marketing'}</category>
          ${post.data.image ? `<enclosure url="${new URL(post.data.image, SITE.url).href}" type="image/${post.data.image.split('.').pop()}" />` : ''}
        `,
      })),
  });
};
