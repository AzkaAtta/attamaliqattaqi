// src/pages/rss.xml.ts
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const posts = await getCollection('post');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>AuraDigital</title>
        <link>https://auradigital.id</link>
        <description>Layanan registrasi perbankan profesional</description>
        
        ${posts.map(post => `
          <item>
            <title>${post.data.title}</title>
            <link>https://auradigital.id/post/${post.id}</link>
            <pubDate>${new Date(post.data.date).toUTCString()}</pubDate>
          </item>
        `).join('')}
      </channel>
    </rss>`,
    { headers: { 'Content-Type': 'application/xml' } }
  );
};
