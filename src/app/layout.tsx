import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
  preload: true,
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://panteraluxe.travel";
const LOGO_URL =
  process.env.NEXT_PUBLIC_LOGO_URL ||
  "https://res.cloudinary.com/dass5gqvk/image/upload/v1779385406/pantera_luxe_logo_v0gbmo.png";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0d1b2a",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "PANTERA LUXE — Туры из Ташкента | Туристическое агентство Узбекистана",
    template: "%s | PANTERA LUXE",
  },
  description:
    "PANTERA LUXE — туристическое агентство в Ташкенте. Туры в Дубай, Турцию, Египет, Мальдивы, Грузию. Горящие туры, медицинский туризм, круизы. ☎ +998 77 161 88 88",
  keywords: [
    "туры из Ташкента",
    "туристическое агентство Ташкент",
    "туры в Дубай из Ташкента",
    "туры в Турцию из Ташкента",
    "Шарм Эль Шейх туры",
    "горящие туры Ташкент",
    "медицинский туризм Узбекистан",
    "круизы из Ташкента",
    "PANTERA LUXE",
    "Toshkentdan turlar",
    "turizm agentligi Toshkent",
    "туры Мальдивы из Ташкента",
    "туры Грузия из Ташкента",
  ],
  authors: [{ name: "PANTERA LUXE", url: SITE_URL }],
  creator: "PANTERA LUXE",
  publisher: "PANTERA LUXE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "ru-UZ": "/",
      "uz-UZ": "/uz",
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    alternateLocale: "uz_UZ",
    url: "/",
    siteName: "PANTERA LUXE",
    title: "PANTERA LUXE — Туры из Ташкента",
    description:
      "Туры в Дубай, Турцию, Египет, Мальдивы из Ташкента. Горящие туры, медицинский туризм, круизы.",
    images: [
      {
        url: LOGO_URL,
        width: 800,
        height: 600,
        alt: "PANTERA LUXE — Туристическое агентство Ташкент",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PANTERA LUXE — Туры из Ташкента",
    description:
      "Туры в Дубай, Турцию, Египет, Мальдивы из Ташкента. Горящие туры, медицинский туризм.",
    images: [LOGO_URL],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "PANTERA LUXE",
  url: SITE_URL,
  logo: LOGO_URL,
  telephone: "+998771618888",
  email: "uz@panteraluxe.travel",
  address: {
    "@type": "PostalAddress",
    streetAddress: "проспект Амир Темур 99а",
    addressLocality: "Ташкент",
    addressCountry: "UZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.2995,
    longitude: 69.2401,
  },
  openingHours: "Mo-Su 10:00-21:00",
  sameAs: [
    "https://www.instagram.com/tury_tashkent/",
    "https://t.me/tury_iz_tashkenta",
  ],
  priceRange: "$$",
  areaServed: { "@type": "Country", name: "Uzbekistan" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Как купить тур из Ташкента?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Оставьте заявку на сайте panteraluxe.travel или напишите в Telegram @vilet_support. Менеджер свяжется в течение 15 минут.",
      },
    },
    {
      "@type": "Question",
      name: "Нужна ли виза для туров из Ташкента в Дубай?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Гражданам Узбекистана виза в ОАЭ не нужна — 30 дней без визы. Для Турции и Египта также виза не требуется.",
      },
    },
    {
      "@type": "Question",
      name: "Есть ли горящие туры из Ташкента?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, горящие туры доступны регулярно. Подпишитесь на Telegram t.me/tury_iz_tashkenta чтобы получать актуальные предложения.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={manrope.variable}>
      <head>
        <meta name="geo.region" content="UZ-TK" />
        <meta name="geo.placename" content="Tashkent, Uzbekistan" />
        <meta name="geo.position" content="41.2995;69.2401" />
        <meta name="ICBM" content="41.2995, 69.2401" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
