// ─────────────────────────────────────────────────────────────
// layout.tsx  →  src/app/layout.tsx
// Root layout — подключает SeoNavbar + Footer на все страницы
// ─────────────────────────────────────────────────────────────
import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import SeoNavbar from "./SeoNavbar";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

const SITE_URL  = process.env.NEXT_PUBLIC_SITE_URL || "https://turytashkent.com";
const LOGO_URL  = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779385406/pantera_luxe_logo_v0gbmo.png";
const TG_ICON   = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779538770/Telegram_logo_kdtfle.svg";
const IG_ICON   = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779538594/Instagram_qdbqub.png";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d1b2a",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PANTERA LUXE — Туры из Ташкента | turytashkent.com",
    template: "%s | PANTERA LUXE Ташкент",
  },
  description:
    "PANTERA LUXE — туристическое агентство в Ташкенте. Туры в Дубай, Турцию, Египет, Мальдивы. Круизы, санатории, визовая поддержка. ☎ +998 77 161 88 88",
  keywords: [
    "туры из Ташкента", "туристическое агентство Ташкент",
    "туры в Дубай из Ташкента", "туры в Турцию", "горящие туры Ташкент",
    "PANTERA LUXE", "turytashkent.com",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "PANTERA LUXE | turytashkent.com",
    title: "PANTERA LUXE — Туры из Ташкента",
    description: "Туры в Дубай, Турцию, Египет, Мальдивы из Ташкента.",
    images: [{ url: LOGO_URL, width: 1200, height: 630, alt: "PANTERA LUXE" }],
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "https://res.cloudinary.com/dass5gqvk/image/upload/v1779576708/favicon_a6vpnj.ico", sizes: "any" },
      { url: "https://res.cloudinary.com/dass5gqvk/image/upload/v1779576719/icon_fsztwb.png",    type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "https://res.cloudinary.com/dass5gqvk/image/upload/v1779576701/apple-icon_hgfowj.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "https://res.cloudinary.com/dass5gqvk/image/upload/v1779576708/favicon_a6vpnj.ico",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "PANTERA LUXE",
  url: SITE_URL,
  logo: LOGO_URL,
  telephone: "+998771618888",
  email: "uz@exploremore.travel",
  address: {
    "@type": "PostalAddress",
    streetAddress: "пр. Амир Темур 99а, Юнусабадский район",
    addressLocality: "Ташкент",
    addressRegion: "Узбекистан",
    addressCountry: "UZ",
  },
  openingHours: "Mo-Su 10:00-21:00",
  sameAs: [
    "https://www.instagram.com/tury_tashkent/",
    "https://t.me/tury_iz_tashkenta",
  ],
};

function SeoFooter() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="f-brand">
            <div className="f-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO_URL} alt="PANTERA LUXE" width={38} height={38} loading="lazy" />
              <span>PANTERA LUXE</span>
            </div>
            <p>Туристическое агентство в Ташкенте. turytashkent.com</p>
            <p style={{ marginTop:6 }}>📍 г.Ташкент, Узбекистан, Юнусабадский район, пр. Амир Темур 99а</p>
            <p style={{ marginTop:4 }}>⏰ Пн–Вс 10:00–21:00</p>
          </div>
          <div className="f-col">
            <h4>Контакты</h4>
            <ul>
              <li><a href="tel:+998771618888">+998 77 161 88 88</a></li>
              <li><a href="mailto:uz@exploremore.travel">uz@exploremore.travel</a></li>
              <li>
                <a href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer"
                  className="footer-ig-link">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={TG_ICON} alt="Telegram" className="footer-soc-icon" />
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/tury_tashkent/" target="_blank" rel="noopener noreferrer"
                  className="footer-ig-link">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IG_ICON} alt="Instagram" className="footer-soc-icon" />
                  @tury_tashkent
                </a>
              </li>
              <li>
                <a href="https://t.me/tury_iz_tashkenta" target="_blank" rel="noopener noreferrer">
                  🔥 Горящие туры
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO internal links */}
        <div style={{
          display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))",
          gap:"8px 20px", padding:"20px 0",
          borderTop:"1px solid rgba(255,255,255,0.07)",
          borderBottom:"1px solid rgba(255,255,255,0.07)",
          marginBottom:20,
        }}>
          {[
            {href:"/dubai",                          label:"Туры в Дубай"},
            {href:"/dubai/tours",                    label:"Туры Дубай — цены"},
            {href:"/dubai/hotels",                   label:"Отели Дубая 5★"},
            {href:"/dubai/beaches",                  label:"Пляжи Дубая"},
            {href:"/turkey",                         label:"Туры в Турцию"},
            {href:"/turkey/istanbul",                label:"Стамбул"},
            {href:"/turkey/antalya",                 label:"Анталья"},
            {href:"/turkey/cappadocia",              label:"Каппадокия"},
            {href:"/turkey/medical",                 label:"Медтуризм Турция"},
            {href:"/egypt",                          label:"Туры в Египет"},
            {href:"/maldives",                       label:"Мальдивы"},
            {href:"/georgia",                        label:"Грузия"},
            {href:"/thailand",                       label:"Таиланд"},
            {href:"/vietnam",                        label:"Вьетнам"},
            {href:"/azerbaijan",                     label:"Азербайджан"},
            {href:"/qatar",                          label:"Катар"},
            {href:"/cruise",                         label:"Круизы"},
            {href:"/cruise/uae",                     label:"Круиз ОАЭ"},
            {href:"/cruise/mediterranean",           label:"Средиземноморье"},
            {href:"/cruise/asia",                    label:"Круиз Азия"},
            {href:"/sanatorium",                     label:"Санатории"},
            {href:"/sanatorium/naftalan",            label:"Нафталан"},
            {href:"/sanatorium/karlovy-vary",        label:"Карловы Вары"},
            {href:"/sanatorium/zheleznov odsk",     label:"Железноводск"},
            {href:"/sanatorium/dead-sea",            label:"Мёртвое море"},
            {href:"/sanatorium/turkey",              label:"Медтуризм Стамбул"},
            {href:"/sanatorium/borjomi",             label:"Боржоми"},
            {href:"/visa",                           label:"Визовая поддержка"},
            {href:"/visa/uae",                       label:"Виза ОАЭ"},
            {href:"/visa/turkey",                    label:"Виза Турция"},
            {href:"/visa/egypt",                     label:"Виза Египет"},
            {href:"/visa/vietnam",                   label:"Виза Вьетнам"},
            {href:"/visa/india",                     label:"Виза Индия"},
            {href:"/visa/thailand",                  label:"Виза Таиланд"},
            {href:"/visa/china",                     label:"Виза Китай"},
            {href:"/visa/maldives",                  label:"Виза Мальдивы"},
            {href:"/uzbekistan-tours",               label:"Uzbekistan Tours"},
            {href:"/uzbekistan-tours/samarkand",     label:"Samarkand"},
            {href:"/uzbekistan-tours/bukhara",       label:"Bukhara"},
            {href:"/uzbekistan-tours/khiva",         label:"Khiva"},
            {href:"/uzbekistan-tours/tashkent",      label:"Tashkent"},
            {href:"/uzbekistan-tours/muynak",        label:"Muynak Aral Sea"},
            {href:"/uzbekistan-tours/silk-road",     label:"Silk Road Tour"},
          ].map(l => (
            <a key={l.href} href={l.href} style={{
              color:"rgba(255,255,255,0.45)", fontSize:11,
              textDecoration:"none", transition:"color 0.2s",
            }}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="f-bottom">
          <p>© 2026 PANTERA LUXE. Все права защищены. turytashkent.com</p>
          <p>🌍 Туристическое агентство в Ташкенте, Узбекистан</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={manrope.variable}>
      <head>
        <meta name="google-site-verification" content="U4iHcX28_0-3lbOrz8T7hhiNJZ1PZ3Zb-mqiaGZ2wRA" />
        <meta name="geo.region" content="UZ-TK" />
        <meta name="geo.placename" content="Tashkent, Uzbekistan" />
        <meta name="geo.position" content="41.2995;69.2401" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${manrope.className} antialiased`}>
        <SeoNavbar />
        <main>{children}</main>
        <SeoFooter />
      </body>
    </html>
  );
}
