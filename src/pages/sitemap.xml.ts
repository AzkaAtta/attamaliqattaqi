// src/pages/sitemap.xml.ts
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- Halaman Utama -->
      <url>
        <loc>https://auradigital.id/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>1.0</priority>
      </url>

      <!-- Contoh Layanan -->
      <url>
        <loc>https://auradigital.id/layanan/jasa-registrasi-bank</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.9</priority>
      </url>

      <!-- Blog Posts -->
      ${posts.map(post => `
        <url>
          <loc>https://auradigital.id/blog/${post.slug}</loc>
          <lastmod>${post.data.updatedDate || post.data.pubDate.toISOString()}</lastmod>
          <priority>0.7</priority>
        </url>
      `).join('')}
    </urlset>
  `;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' }
  });
};
