// ─────────────────────────────────────────────────────────────
// next.config.js  →  корень проекта (рядом с package.json)
// PANTERA LUXE — turytashkent.com
// ─────────────────────────────────────────────────────────────
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Базовое ──────────────────────────────────────────────
  reactStrictMode: true,        // ловит потенциальные баги в разработке
  poweredByHeader: false,       // убирает заголовок X-Powered-By (безопасность)
  compress: true,               // gzip-сжатие ответов (скорость)

  // ── Картинки ─────────────────────────────────────────────
  images: {
    // современные форматы — меньше вес, быстрее загрузка
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dass5gqvk/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // ── Заголовки безопасности и кэширования ─────────────────
  async headers() {
    return [
      {
        // безопасность на все страницы
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options",          value: "DENY" },
          { key: "X-Content-Type-Options",   value: "nosniff" },
          { key: "Referrer-Policy",          value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection",         value: "1; mode=block" },
          { key: "Permissions-Policy",       value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        // sitemap кэшируем на сутки
        source: "/sitemap.xml",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
      {
        // статика (картинки, шрифты) — кэш на год
        source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|woff|woff2)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
