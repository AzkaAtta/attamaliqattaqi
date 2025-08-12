// src/pages/sitemap.xml.ts
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  // ✅ 1. Gunakan fallback jika 'date' tidak ada
  const posts = (await getCollection('post')).map(post => ({
    ...post,
    data: {
      ...post.data,
      date: post.data.date || new Date() // Fallback ke tanggal sekarang
    }
  }));

  // ✅ 2. Daftar URL manual untuk halaman penting
  const staticPages = [
    { url: '/', priority: 1.0 },
    { url: '/layanan', priority: 0.9 },
    { url: '/layanan/jasa-registrasi-aplikasi', priority: 0.8 }
  ];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- Halaman Statis -->
      ${staticPages.map(page => `
        <url>
          <loc>https://auradigital.id${page.url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>${page.priority}</priority>
        </url>
      `).join('')}

      <!-- Blog Posts -->
      ${posts.map(post => `
        <url>
          <loc>https://auradigital.id/post/${post.id}</loc>
          <lastmod>${new Date(post.data.date).toISOString()}</lastmod>
          <priority>0.7</priority>
        </url>
      `).join('')}
    </urlset>`,
    { headers: { 'Content-Type': 'application/xml' } }
  );
};
