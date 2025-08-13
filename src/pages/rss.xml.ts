// src/pages/rss.xml.ts
import rss from '@astrojs/rss';
import { SITE } from '../config';

export async function GET(context) {
  // Ganti dengan konten layanan Anda
  const services = [
    {
      title: "Jasa Google Maps Review Profesional",
      description: "Tambah ulasan & rating 5 bintang di Google Maps dari akun real. Hasil permanen & aman.",
      link: "/layanan/jasa-google-maps/",
      pubDate: new Date("2023-08-12"),
    },
    {
      title: "Jasa Buzzer Instagram Terpercaya",
      description: "Tingkatkan engagement Instagram dengan like, view, dan komentar real dari akun aktif.",
      link: "/layanan/jasa-buzzer-instagram/",
      pubDate: new Date("2023-08-10"),
    }
  ];

  return rss({
    title: `${SITE.title} | Layanan Profesional`,
    description: SITE.description,
    site: context.site,
    items: services.map((service) => ({
      title: service.title,
      description: service.description,
      link: service.link,
      pubDate: service.pubDate,
    })),
  });
}
