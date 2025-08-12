// src/pages/sitemap.xml.ts
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  // 1. Daftar halaman statis (manual)
  const staticPages = [
    { url: '/', lastmod: '2025-08-20', priority: 1.0 },
    { url: '/layanan', lastmod: '2025-08-20', priority: 0.9 },
    { url: '/layanan/jasa-registrasi-aplikasi', lastmod: '2025-08-20', priority: 0.8 }
  ];

  // 2. Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages.map(page => `
        <url>
          <loc>https://auradigital.id${page.url}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <priority>${page.priority}</priority>
        </url>
      `).join('')}
    </urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' }
  });
};
