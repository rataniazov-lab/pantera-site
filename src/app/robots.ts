// ─────────────────────────────────────────────────────────────
// robots.ts  →  src/app/robots.ts
// Доступен по: https://www.turytashkent.com/robots.txt
// ─────────────────────────────────────────────────────────────
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: "https://www.turytashkent.com/sitemap.xml",
    host:    "https://www.turytashkent.com",
  };
}
