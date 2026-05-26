// src/app/contacts/page.tsx
import type { Metadata } from "next";
import { buildMeta, PHONE, PHONE_DISPLAY, EMAIL, TG, TG_ICON, WA, WA_ICON, ADDRESS } from "../shared";

export const metadata: Metadata = buildMeta({
  title: "Контакты — PANTERA LUXE Ташкент | +998 77 161 88 88",
  description: "Контакты туристического агентства PANTERA LUXE в Ташкенте. Телефон: +998 77 161 88 88. Email: uz@exploremore.travel. Адрес: Юнусабадский район, пр. Амир Темур 99а.",
  keywords: ["контакты PANTERA LUXE","туристическое агентство Ташкент телефон","turytashkent.com контакты","туры из Ташкента телефон","агентство Ташкент адрес"],
  path: "/contacts",
});

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "PANTERA LUXE",
  url: "https://turytashkent.com",
  telephone: PHONE,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "пр. Амир Темур 99а, Юнусабадский район",
    addressLocality: "Ташкент",
    addressRegion: "Узбекистан",
    addressCountry: "UZ",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "10:00",
    closes: "21:00",
  },
};

const CONTACTS = [
  { ico: "📞", label: "Телефон",   value: PHONE_DISPLAY,             href: `tel:${PHONE}`,          bg: "rgba(255,107,53,0.1)",  color: "#ff6b35" },
  { ico: "✉️", label: "Email",     value: EMAIL,                     href: `mailto:${EMAIL}`,        bg: "rgba(33,150,243,0.1)",  color: "#2196f3" },
  { ico: "💬", label: "Telegram",  value: "@vilet_support",          href: TG,                       bg: "rgba(44,165,224,0.1)",  color: "#2ca5e0" },
  { ico: "💬", label: "WhatsApp",  value: "+998 77 161 88 88",       href: WA,                       bg: "rgba(37,211,102,0.1)",  color: "#25d366" },
  { ico: "📍", label: "Адрес",     value: ADDRESS,                   href: "https://maps.google.com/?q=Ташкент+Амир+Темур+99а", bg: "rgba(234,67,53,0.1)", color: "#ea4335" },
  { ico: "⏰", label: "Режим",     value: "Пн–Вс: 10:00–21:00",     href: undefined,                bg: "rgba(251,188,5,0.1)",   color: "#f59e0b" },
];

const SOCIALS = [
  { name: "Telegram — поддержка",    href: TG,                                    icon: TG_ICON, desc: "Написать менеджеру" },
  { name: "Telegram — горящие туры", href: "https://t.me/tury_iz_tashkenta",      icon: TG_ICON, desc: "Скидки и горящие туры" },
  { name: "Instagram",               href: "https://www.instagram.com/tury_tashkent/", icon: "https://res.cloudinary.com/dass5gqvk/image/upload/v1779538594/Instagram_qdbqub.png", desc: "@tury_tashkent" },
  { name: "WhatsApp",                href: WA,                                    icon: WA_ICON, desc: "Написать в WhatsApp" },
];

export default function ContactsPage() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      <section style={{ background: "linear-gradient(135deg,#0d1b2a,#1a3550)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <span className="section-tag" style={{ color: "#ffd166" }}>📞 Контакты</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, margin: "12px 0 14px" }}>
            Свяжитесь с нами
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, maxWidth: 500, margin: "0 auto 28px" }}>
            Подберём тур, ответим на вопросы, поможем с визой и трансфером
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${PHONE}`} className="btn-primary" style={{ fontSize: 16, padding: "14px 32px", textDecoration: "none" }}>
              📞 Позвонить сейчас
            </a>
            <a href={TG} target="_blank" rel="noopener noreferrer" className="btn-outline"
              style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={TG_ICON} alt="Telegram" style={{ width: 18, height: 18 }} />
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding: "52px 20px 80px" }}>

        {/* Contact cards */}
        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Как с нами связаться</span>
          <h2 className="section-title">Контактная информация</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 14, marginTop: 24 }}>
            {CONTACTS.map(c => (
              <div key={c.label} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "20px 22px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 46, height: 46, background: c.bg, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                  {c.ico}
                </div>
                <div>
                  <p style={{ fontSize: 12, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{ fontSize: 14, fontWeight: 700, color: c.color, textDecoration: "none", lineHeight: 1.4 }}>
                      {c.value}
                    </a>
                  ) : (
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#1e293b", lineHeight: 1.4 }}>{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social channels */}
        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Социальные сети</span>
          <h2 className="section-title">Мы в соцсетях</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 14, marginTop: 22 }}>
            {SOCIALS.map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "18px 20px", display: "flex", gap: 14, alignItems: "center" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.icon} alt={s.name} style={{ width: 40, height: 40, objectFit: "contain", flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: 14, fontWeight: 800, color: "#1e293b", marginBottom: 2 }}>{s.name}</p>
                  <p style={{ fontSize: 12, color: "#64748b" }}>{s.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Map embed */}
        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Адрес</span>
          <h2 className="section-title">Как нас найти</h2>
          <div style={{ marginTop: 22, borderRadius: 16, overflow: "hidden", border: "1px solid #e8eef5" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.7!2d69.279!3d41.336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE2JzExLjIiTiA2OcKwMTYnNDQuNCJF!5e0!3m2!1sru!2suz!4v1"
              width="100%"
              height="360"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PANTERA LUXE на карте"
            />
          </div>
          <p style={{ marginTop: 12, fontSize: 14, color: "#64748b", textAlign: "center" }}>
            📍 г.Ташкент, Узбекистан, Юнусабадский район, пр. Амир Темур 99а
          </p>
        </section>

        {/* Quick links */}
        <section>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 14 }}>Популярные направления</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              {href:"/dubai",      label:"🇦🇪 Дубай"},
              {href:"/turkey",     label:"🇹🇷 Турция"},
              {href:"/egypt",      label:"🇪🇬 Египет"},
              {href:"/maldives",   label:"🇲🇻 Мальдивы"},
              {href:"/georgia",    label:"🇬🇪 Грузия"},
              {href:"/cruise",     label:"🚢 Круизы"},
              {href:"/sanatorium", label:"🏥 Санатории"},
              {href:"/visa",       label:"🛂 Визы"},
            ].map(l => (
              <a key={l.href} href={l.href} style={{ background:"#f1f5f9", color:"#334155", fontSize:13, fontWeight:600, padding:"7px 14px", borderRadius:20, textDecoration:"none" }}>
                {l.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
