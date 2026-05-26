import type { Metadata } from "next";
import { buildMeta, destinationSchema, CTABlock, SITE_URL, TG, PHONE } from "../shared";

const IMG = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779484881/Dubai2_zebzf8.png";

export const metadata: Metadata = buildMeta({
  title: "Туры в Дубай из Ташкента от $499 — PANTERA LUXE",
  description:
    "Туры в Дубай из Ташкента от $499. Отели 5★, пляжи JBR, Бурдж-Халифа, сафари. Вылет напрямую. Визы не нужно 30 дней. Звоните: +998 77 161 88 88",
  keywords: [
    "туры в Дубай из Ташкента",
    "тур Дубай цена",
    "Дубай из Ташкента",
    "дубай тур купить",
    "отдых в Дубай",
    "туристическое агентство Ташкент Дубай",
    "Dubai tours Tashkent",
    "туры ОАЭ 2025",
    "горящие туры Дубай",
    "Дубай виза узбекистан",
  ],
  path: "/dubai",
  image: IMG,
});

const schema = destinationSchema({
  name: "Тур в Дубай из Ташкента",
  description: "Туры в Дубай из Ташкента: отели 5★, экскурсии, пляжи. Виза не нужна 30 дней.",
  url: "/dubai",
  image: IMG,
  price: "499",
});

const TOURS = [
  { name: "Дубай 5 ночей / 6 дней", hotel: "Jumeirah Beach Hotel 5★", price: "$499", old: "$675", includes: ["Авиабилеты", "Трансфер", "Завтраки"] },
  { name: "Дубай 7 ночей", hotel: "Atlantis The Palm 5★", price: "$899", old: "$1 215", includes: ["Авиабилеты", "Трансфер", "Завтраки", "Экскурсия"] },
  { name: "Дубай 10 ночей", hotel: "Address Beach Resort 5★", price: "$1 299", old: "$1 755", includes: ["Авиабилеты", "Трансфер", "Завтраки", "Сафари"] },
];

const FACTS = [
  { ico: "🛂", title: "Виза", text: "Не нужна — 30 дней автоматически при въезде" },
  { ico: "✈️", title: "Перелёт", text: "Прямой рейс Ташкент–Дубай ~4 часа" },
  { ico: "💰", title: "Валюта", text: "Дирхам ОАЭ (AED). 1$ ≈ 3.67 AED" },
  { ico: "☀️", title: "Климат", text: "Окт–апр: +25°C идеально. Лето до +48°C" },
  { ico: "🏨", title: "Отели", text: "Джумейра, Пальма, Марина — лучшие районы" },
  { ico: "🕌", title: "Культура", text: "Уважайте дресс-код. Рамадан — особые правила" },
];

const ATTRACTIONS = [
  { name: "Бурдж-Халифа", desc: "Самое высокое здание мира — 830м. Смотровая на 124-м этаже.", ico: "🏙️" },
  { name: "Пальм Джумейра", desc: "Искусственный остров. Atlantis, водный парк, рестораны.", ico: "🌴" },
  { name: "Dubai Mall", desc: "Крупнейший ТРЦ мира — аквариум, каток, 1 200 магазинов.", ico: "🛍️" },
  { name: "Сафари в пустыне", desc: "Джипы, верблюды, ужин под звёздами — must do.", ico: "🏜️" },
  { name: "Gold Souk", desc: "Рынок золота — самые низкие цены на ювелирные украшения.", ico: "💎" },
  { name: "Пляж JBR", desc: "Jumeirah Beach — бесплатный белый пляж 1.7 км.", ico: "🏖️" },
];

export default function DubaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section
        style={{
          background: `linear-gradient(to bottom, rgba(13,27,42,0.55) 0%, rgba(13,27,42,0.85) 100%), url('${IMG}') center/cover no-repeat`,
          padding: "100px 0 60px",
        }}
      >
        <div className="site-container" style={{ textAlign: "center" }}>
          <span className="section-tag" style={{ color: "#ffd166" }}>🇦🇪 ОАЭ</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, margin: "12px 0 16px" }}>
            Туры в Дубай из Ташкента
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 18, marginBottom: 32, maxWidth: 560, margin: "0 auto 32px" }}>
            Виза не нужна · от $499 · прямой рейс 4 часа · вылет из Ташкента
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 16, padding: "14px 32px" }}>
              Подобрать тур →
            </a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding: "52px 20px 80px" }}>

        {/* Key facts */}
        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Важно знать</span>
          <h2 className="section-title">Дубай — что нужно знать</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14, marginTop: 24 }}>
            {FACTS.map(f => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{f.ico}</div>
                <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tours */}
        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Туры</span>
          <h2 className="section-title">Туры в Дубай из Ташкента</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 24 }}>
            {TOURS.map(t => (
              <div key={t.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 4 }}>{t.name}</h3>
                  <p style={{ fontSize: 13, color: "#64748b", marginBottom: 8 }}>{t.hotel}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {t.includes.map(i => (
                      <span key={i} style={{ background: "rgba(34,197,94,0.1)", color: "#16a34a", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20 }}>✓ {i}</span>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 13, color: "#94a3b8", textDecoration: "line-through", textDecorationColor: "#9b3030" }}>{t.old}</div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "2px 10px", borderRadius: 6 }}>{t.price}</div>
                  <a className="btn-primary" href="/contacts" style={{ display: "inline-block", marginTop: 10, fontSize: 13, padding: "8px 18px" }}>Забронировать</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Достопримечательности</span>
          <h2 className="section-title">Что посмотреть в Дубае</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 14, marginTop: 24 }}>
            {ATTRACTIONS.map(a => (
              <div key={a.name} style={{ background: "#f8fafc", borderRadius: 12, padding: "16px 18px", display: "flex", gap: 12 }}>
                <span style={{ fontSize: 26, flexShrink: 0 }}>{a.ico}</span>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{a.name}</h3>
                  <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links for SEO */}
        <section style={{ marginBottom: 56 }}>
          <h2 className="section-title">Смотрите также</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
            {[
              { href: "/dubai/tours",   label: "Все туры в Дубай" },
              { href: "/dubai/hotels",  label: "Отели Дубая" },
              { href: "/dubai/visa",    label: "Виза в ОАЭ" },
              { href: "/visa/uae",      label: "Визовая поддержка ОАЭ" },
              { href: "/cruise/uae",    label: "Круиз по ОАЭ" },
              { href: "/turkey",        label: "Туры в Турцию" },
              { href: "/egypt",         label: "Туры в Египет" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>
                {l.label}
              </a>
            ))}
          </div>
        </section>

        <CTABlock title="Готовы лететь в Дубай?" />
      </div>
    </>
  );
}
