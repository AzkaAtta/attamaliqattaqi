// src/pages/sitemap.xml.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  // 1. Daftar semua halaman penting Anda di sini
  const pages = [
    { url: '/', lastmod: '2025-08-20', priority: 1.0 },
    { url: '/layanan', lastmod: '2025-08-20', priority: 0.9 },
    { url: '/layanan/jasa-registrasi-aplikasi', lastmod: '2025-08-20', priority: 0.8 },
    { url: '/layanan/jasa-google-maps', lastmod: '2025-08-19', priority: 0.8 },
    { url: '/blog', lastmod: '2025-08-18', priority: 0.7 }
  ];

  // 2. Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(page => `
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
