import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://panteraluxe.travel";
const LOGO_URL =
  "https://res.cloudinary.com/dass5gqvk/image/upload/v1779385406/pantera_luxe_logo_v0gbmo.png";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d1b2a",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PANTERA LUXE — Туры из Ташкента | Туристическое агентство Узбекистана",
    template: "%s | PANTERA LUXE",
  },
  description:
    "PANTERA LUXE — туристическое агентство в Ташкенте. Туры в Дубай, Турцию, Египет, Мальдивы, Грузию. Горящие туры, медицинский туризм, круизы. ☎ +998 77 161 88 88",
  keywords: [
    "туры из Ташкента",
    "туристическое агентство Ташкент",
    "туры в Дубай из Ташкента",
    "туры в Турцию",
    "горящие туры Ташкент",
    "медицинский туризм Узбекистан",
    "PANTERA LUXE",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "PANTERA LUXE",
    title: "PANTERA LUXE — Туры из Ташкента",
    description: "Туры в Дубай, Турцию, Египет, Мальдивы из Ташкента.",
    images: [{ url: LOGO_URL, width: 800, height: 600, alt: "PANTERA LUXE" }],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
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
    streetAddress: "проспект Амир Темур 99а",
    addressLocality: "Ташкент",
    addressCountry: "UZ",
  },
  openingHours: "Mo-Su 10:00-21:00",
  sameAs: [
    "https://www.instagram.com/tury_tashkent/",
    "https://t.me/tury_iz_tashkenta",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={manrope.variable}>
      <head>
        <meta name="geo.region" content="UZ-TK" />
        <meta name="geo.placename" content="Tashkent, Uzbekistan" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${manrope.className} antialiased bg-white text-[#1e293b]`}>
        {children}
      </body>
    </html>
  );
}