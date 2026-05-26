// ─────────────────────────────────────────────────────────────
// sitemap.ts  →  src/app/sitemap.ts
// Автогенерация sitemap.xml для turytashkent.com
// Доступен по: https://turytashkent.com/sitemap.xml
// ─────────────────────────────────────────────────────────────
import type { MetadataRoute } from "next";

const BASE = "https://turytashkent.com";
type Freq = "daily" | "weekly" | "monthly";

const routes: { url: string; priority: number; freq: Freq }[] = [
  // Core
  { url: "/", priority: 1.0, freq: "daily" },
  { url: "/about", priority: 0.85, freq: "monthly" },
  { url: "/contacts", priority: 0.9, freq: "monthly" },
  { url: "/reviews", priority: 0.88, freq: "weekly" },
  { url: "/hot-tours", priority: 0.95, freq: "daily" },

  // Dubai
  { url: "/dubai", priority: 0.95, freq: "weekly" },
  { url: "/dubai/tours", priority: 0.88, freq: "weekly" },
  { url: "/dubai/hotels", priority: 0.84, freq: "weekly" },
  { url: "/dubai/beaches", priority: 0.8, freq: "weekly" },

  // Turkey
  { url: "/turkey", priority: 0.95, freq: "weekly" },
  { url: "/turkey/istanbul", priority: 0.88, freq: "weekly" },
  { url: "/turkey/antalya", priority: 0.88, freq: "weekly" },
  { url: "/turkey/cappadocia", priority: 0.82, freq: "weekly" },
  { url: "/turkey/medical", priority: 0.88, freq: "weekly" },

  // Destinations
  { url: "/egypt", priority: 0.9, freq: "weekly" },
  { url: "/maldives", priority: 0.85, freq: "weekly" },
  { url: "/georgia", priority: 0.85, freq: "weekly" },
  { url: "/azerbaijan", priority: 0.82, freq: "weekly" },
  { url: "/thailand", priority: 0.82, freq: "weekly" },
  { url: "/vietnam", priority: 0.8, freq: "weekly" },
  { url: "/qatar", priority: 0.78, freq: "weekly" },
  { url: "/india", priority: 0.82, freq: "weekly" },

  // Cruise
  { url: "/cruise", priority: 0.92, freq: "weekly" },
  { url: "/cruise/uae", priority: 0.86, freq: "weekly" },
  { url: "/cruise/mediterranean", priority: 0.86, freq: "weekly" },
  { url: "/cruise/asia", priority: 0.82, freq: "weekly" },

  // Sanatorium
  { url: "/sanatorium", priority: 0.9, freq: "weekly" },
  { url: "/sanatorium/naftalan", priority: 0.84, freq: "weekly" },
  { url: "/sanatorium/karlovy-vary", priority: 0.84, freq: "weekly" },
  { url: "/sanatorium/zheleznovodsk", priority: 0.84, freq: "weekly" }, // ← ИСПРАВЛЕНО (убрал пробел)
  { url: "/sanatorium/dead-sea", priority: 0.82, freq: "weekly" },
  { url: "/sanatorium/turkey", priority: 0.84, freq: "weekly" },
  { url: "/sanatorium/borjomi", priority: 0.78, freq: "weekly" },

  // Visa
  { url: "/visa", priority: 0.92, freq: "weekly" },
  { url: "/visa/uae", priority: 0.86, freq: "weekly" },
  { url: "/visa/turkey", priority: 0.86, freq: "weekly" },
  { url: "/visa/egypt", priority: 0.82, freq: "weekly" },
  { url: "/visa/vietnam", priority: 0.82, freq: "weekly" },
  { url: "/visa/india", priority: 0.8, freq: "weekly" },
  { url: "/visa/thailand", priority: 0.8, freq: "weekly" },
  { url: "/visa/china", priority: 0.8, freq: "weekly" },
  { url: "/visa/maldives", priority: 0.76, freq: "monthly" },

  // Uzbekistan Tours
  { url: "/uzbekistan-tours", priority: 0.94, freq: "weekly" },
  { url: "/uzbekistan-tours/samarkand", priority: 0.9, freq: "weekly" },
  { url: "/uzbekistan-tours/bukhara", priority: 0.9, freq: "weekly" },
  { url: "/uzbekistan-tours/khiva", priority: 0.86, freq: "weekly" },
  { url: "/uzbekistan-tours/tashkent", priority: 0.86, freq: "weekly" },
  { url: "/uzbekistan-tours/muynak", priority: 0.82, freq: "weekly" },
  { url: "/uzbekistan-tours/silk-road", priority: 0.88, freq: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return routes.map((r) => ({
    url: `${BASE}${r.url}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}