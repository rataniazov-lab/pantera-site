// ─────────────────────────────────────────────────────────────
// robots.ts  →  src/app/robots.ts
// Доступен по: https://turytashkent.com/robots.txt
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
    sitemap: "https://turytashkent.com/sitemap.xml",
    host:    "https://turytashkent.com",
  };
}
