// ─────────────────────────────────────────────────────────────
// shared.tsx  →  src/app/shared.tsx
// Общие утилиты для всех SEO страниц turytashkent.com
// ─────────────────────────────────────────────────────────────

export const SITE_URL = "https://turytashkent.com";
export const PHONE    = "+998771618888";
export const PHONE_DISPLAY = "+998 77 161 88 88";
export const EMAIL    = "uz@exploremore.travel";
export const TG       = "https://t.me/vilet_support";
export const TG_HOT   = "https://t.me/tury_iz_tashkenta";
export const IG       = "https://www.instagram.com/tury_tashkent/";
export const WA       = "https://wa.me/998771618888";
export const ADDRESS  = "г.Ташкент, Узбекистан, Юнусабадский район, пр. Амир Темур 99а";

export const LOGO_URL =
  "https://res.cloudinary.com/dass5gqvk/image/upload/v1779385406/pantera_luxe_logo_v0gbmo.png";
export const TG_ICON =
  "https://res.cloudinary.com/dass5gqvk/image/upload/v1779538770/Telegram_logo_kdtfle.svg";
export const IG_ICON =
  "https://res.cloudinary.com/dass5gqvk/image/upload/v1779538594/Instagram_qdbqub.png";
export const WA_ICON =
  "https://res.cloudinary.com/dass5gqvk/image/upload/v1779539173/WhatsApp_wln0nb.png";

// ── Build standard metadata ──────────────────────────────────
export function buildMeta({
  title,
  description,
  keywords,
  path,
  image,
}: {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  image?: string;
}) {
  const url = `${SITE_URL}${path}`;
  const og  = image || LOGO_URL;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website" as const,
      locale: "ru_RU",
      siteName: "PANTERA LUXE | turytashkent.com",
      title,
      description,
      url,
      images: [{ url: og, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [og],
    },
    robots: { index: true, follow: true },
  };
}

// ── Schema.org TouristTrip ───────────────────────────────────
export function destinationSchema({
  name,
  description,
  url,
  image,
  price,
}: {
  name: string;
  description: string;
  url: string;
  image: string;
  price: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name,
    description,
    url: `${SITE_URL}${url}`,
    image,
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "TravelAgency",
        name: "PANTERA LUXE",
        telephone: PHONE,
        url: SITE_URL,
      },
    },
  };
}

// ── Shared CTA block ─────────────────────────────────────────
export function CTABlock({ title = "Готовы лететь?" }: { title?: string }) {
  return (
    <div className="cta-banner">
      <h3>✈️ {title}</h3>
      <p>Оставьте заявку — подберём лучший тур и отель под ваш бюджет</p>
      <div className="cta-btns">
        <a className="btn-primary" href="/contacts">Оставить заявку</a>
        <a className="btn-outline" href={TG} target="_blank" rel="noopener noreferrer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={TG_ICON} alt="Telegram"
            style={{ width:16, height:16, verticalAlign:"middle", marginRight:6 }} />
          Telegram
        </a>
        <a className="btn-outline" href={`tel:${PHONE}`}
          style={{ textDecoration:"none" }}>
          📞 {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
}

// ── Breadcrumb Schema ────────────────────────────────────────
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

// ── FAQ Schema ───────────────────────────────────────────────
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(item => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

// ── Breadcrumb nav component ─────────────────────────────────
export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="breadcrumb" style={{ padding:"80px 0 0" }}>
      <div className="site-container">
        <ol style={{ display:"flex", gap:6, alignItems:"center", listStyle:"none",
          padding:"12px 0", fontSize:13, color:"rgba(255,255,255,0.5)", flexWrap:"wrap" }}>
          <li><a href="/" style={{ color:"rgba(255,255,255,0.5)", textDecoration:"none" }}>Главная</a></li>
          {items.map((item, i) => (
            <li key={i} style={{ display:"flex", alignItems:"center", gap:6 }}>
              <span style={{ opacity:0.4 }}>›</span>
              {item.href && i < items.length - 1 ? (
                <a href={item.href} style={{ color:"rgba(255,255,255,0.5)", textDecoration:"none" }}>
                  {item.label}
                </a>
              ) : (
                <span style={{ color:"#ffd166", fontWeight:700 }}>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
