import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../shared";

export const metadata: Metadata = buildMeta({
  title: "Круизы из Ташкента — ОАЭ, Средиземноморье, Азия от $499 | PANTERA LUXE",
  description:
    "Круизы из Ташкента: ОАЭ и Персидский залив, Средиземноморье, Азия. Лайнеры MSC от $499. Всё включено — отель + транспорт + 5 стран. ☎ +998 77 161 88 88",
  keywords: [
    "круиз из Ташкента",
    "круизный тур ОАЭ",
    "круиз Средиземноморье",
    "круиз Дубай",
    "MSC круиз цена",
    "cruise from Tashkent",
    "круиз Азия",
    "Персидский залив круиз",
    "круизный отдых 2025",
    "плавучий отель",
  ],
  path: "/cruise",
});

const ROUTES = [
  { name: "ОАЭ и Персидский залив", href: "/cruise/uae",           desc: "Дубай · Абу-Даби · Оман · Катар · Бахрейн", nights: "7 ночей", price: "$499", old: "$675",   ship: "MSC World Europa" },
  { name: "Средиземноморье",         href: "/cruise/mediterranean", desc: "Испания · Италия · Греция · Франция",       nights: "7–14 ночей", price: "$599", old: "$810", ship: "MSC Sinfonia" },
  { name: "Азия — Дальний Восток",   href: "/cruise/asia",          desc: "Шанхай · Япония · Южная Корея · Тайвань",  nights: "5–10 ночей", price: "$685", old: "$925", ship: "MSC Bellissima" },
];

const WHY = [
  { ico: "🌍", title: "5 стран за 1 поездку",    text: "Просыпаетесь каждый день в новой стране" },
  { ico: "🍽️", title: "Питание включено",        text: "Завтрак, обед, ужин 24/7 на борту" },
  { ico: "🛁",  title: "Отель движется с вами",   text: "Один чемодан — ноль пересадок" },
  { ico: "💰", title: "Дешевле чем кажется",      text: "Цена включает проживание + транспорт" },
];

export default function CruisePage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0d1b2a,#0a2540)", padding: "100px 0 60px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <span className="section-tag" style={{ color: "#ffd166" }}>🚢 Круизы</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, margin: "12px 0 16px" }}>
            Круизы из Ташкента
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 18, maxWidth: 560, margin: "0 auto 32px" }}>
            ОАЭ · Средиземноморье · Азия · лайнеры MSC · от $499 / чел.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 16, padding: "14px 32px" }}>Забронировать круиз →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding: "52px 20px 80px" }}>

        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Почему круиз</span>
          <h2 className="section-title">Всё включено — отель + транспорт + страны</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 14, marginTop: 24 }}>
            {WHY.map(w => (
              <div key={w.title} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 12, padding: "20px" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{w.ico}</div>
                <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 5 }}>{w.title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{w.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Маршруты</span>
          <h2 className="section-title">Куда плыть из Ташкента</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 24 }}>
            {ROUTES.map(r => (
              <a key={r.name} href={r.href} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1e293b", marginBottom: 5 }}>{r.name}</h3>
                  <p style={{ fontSize: 13, color: "#64748b", marginBottom: 6 }}>{r.desc}</p>
                  <span style={{ fontSize: 12, color: "#94a3b8" }}>🚢 {r.ship} · 🌙 {r.nights}</span>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 12, color: "#94a3b8", textDecoration: "line-through", textDecorationColor: "#9b3030" }}>{r.old}</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "2px 8px", borderRadius: 6 }}>{r.price} / чел.</div>
                  <span style={{ fontSize: 12, color: "#ff6b35", fontWeight: 700, marginTop: 6, display: "block" }}>Подробнее →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 className="section-title">Смотрите также</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
            {[
              { href: "/cruise/uae",           label: "Круиз ОАЭ" },
              { href: "/cruise/mediterranean",  label: "Круиз Средиземноморье" },
              { href: "/cruise/asia",           label: "Круиз Азия" },
              { href: "/dubai",                 label: "Туры в Дубай" },
              { href: "/turkey",                label: "Туры в Турцию" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
        </section>

        <CTABlock title="Готовы выйти в море?" />
      </div>
    </>
  );
}
