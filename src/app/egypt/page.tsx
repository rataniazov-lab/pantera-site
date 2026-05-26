import type { Metadata } from "next";
import { buildMeta, destinationSchema, CTABlock, PHONE } from "../shared";

const IMG = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779524661/%D0%A8%D0%B0%D1%80%D0%BC_enh5kh.png";

export const metadata: Metadata = buildMeta({
  title: "Туры в Египет из Ташкента — Шарм Эль Шейх от $380 | PANTERA LUXE",
  description:
    "Туры в Египет из Ташкента от $380. Шарм Эль Шейх — дайвинг, Красное море, коралловые рифы. Виза $25 по прилёту. ☎ +998 77 161 88 88",
  keywords: [
    "туры в Египет из Ташкента",
    "Шарм Эль Шейх тур",
    "Египет из Ташкента цена",
    "дайвинг Красное море",
    "Egypt tours Tashkent",
    "Шарм Эль Шейх 2025",
    "туры Египет горящие",
    "Хургада тур Ташкент",
    "виза Египет цена",
    "Красное море коралловый риф",
  ],
  path: "/egypt",
  image: IMG,
});

const schema = destinationSchema({
  name: "Тур в Египет — Шарм Эль Шейх",
  description: "Туры в Египет из Ташкента: Шарм Эль Шейх, Хургада. Дайвинг, коралловые рифы, вечное лето.",
  url: "/egypt",
  image: IMG,
  price: "380",
});

const FACTS = [
  { ico: "🛂", title: "Виза",     text: "Sinai Only бесплатно. Полная виза $25 по прилёту" },
  { ico: "✈️", title: "Перелёт",  text: "Прямой рейс Ташкент–Шарм ≈ 4 часа" },
  { ico: "💰", title: "Валюта",   text: "Египетский фунт (EGP). 1$ ≈ 50 EGP" },
  { ico: "☀️", title: "Климат",   text: "Ноябрь–апрель +24–28°C. Лето +40°C" },
  { ico: "🤿", title: "Дайвинг",  text: "Лучшие рифы мира — Рас-Мухаммад, Тиран" },
  { ico: "🐠", title: "Море",     text: "Красное море — 20 метров видимости под водой" },
];

const TOURS = [
  { name: "Шарм 5 ночей", hotel: "Reef Oasis Beach Resort 5★", price: "$380", old: "$515" },
  { name: "Шарм 7 ночей", hotel: "Baron Resort Sharm 5★",       price: "$499", old: "$675" },
  { name: "Шарм 10 ночей + дайвинг", hotel: "Movenpick Resort 5★", price: "$699", old: "$945" },
];

export default function EgyptPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section style={{ background: `linear-gradient(to bottom,rgba(13,27,42,0.5),rgba(13,27,42,0.85)),url('${IMG}') center/cover no-repeat`, padding: "100px 0 60px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <span className="section-tag" style={{ color: "#ffd166" }}>🇪🇬 Египет</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, margin: "12px 0 16px" }}>
            Туры в Египет из Ташкента
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 18, maxWidth: 560, margin: "0 auto 32px" }}>
            Шарм Эль Шейх · Красное море · Дайвинг · от $380 · виза $25
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 16, padding: "14px 32px" }}>Подобрать тур →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding: "52px 20px 80px" }}>

        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Туры</span>
          <h2 className="section-title">Туры в Шарм Эль Шейх</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 24 }}>
            {TOURS.map(t => (
              <div key={t.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 4 }}>{t.name}</h3>
                  <p style={{ fontSize: 13, color: "#64748b" }}>{t.hotel}</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 12, color: "#94a3b8", textDecoration: "line-through", textDecorationColor: "#9b3030" }}>{t.old}</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "2px 8px", borderRadius: 6 }}>{t.price}</div>
                  <a className="btn-primary" href="/contacts" style={{ display: "inline-block", marginTop: 8, fontSize: 12, padding: "7px 14px" }}>Забронировать</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Важно знать</span>
          <h2 className="section-title">Египет — полезная информация</h2>
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

        <section style={{ marginBottom: 56 }}>
          <h2 className="section-title">Смотрите также</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
            {[
              { href: "/visa/egypt",   label: "Виза в Египет" },
              { href: "/dubai",        label: "Туры в Дубай" },
              { href: "/turkey",       label: "Туры в Турцию" },
              { href: "/maldives",     label: "Туры на Мальдивы" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
        </section>

        <CTABlock title="Готовы на Красное море?" />
      </div>
    </>
  );
}
