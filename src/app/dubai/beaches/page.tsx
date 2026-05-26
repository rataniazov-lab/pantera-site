import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Пляжи Дубая — JBR, Джумейра, Пальма, Кайтбич | PANTERA LUXE",
  description: "Лучшие пляжи Дубая. JBR Beach, Jumeirah Beach, Kite Beach, La Mer. Бесплатные и платные пляжи. Советы для туристов из Ташкента.",
  keywords: ["пляжи Дубая", "JBR пляж", "Jumeirah Beach", "пляж Дубай бесплатный", "Dubai beaches", "Kite Beach Dubai", "La Mer Dubai", "где купаться в Дубае"],
  path: "/dubai/beaches",
});

const BEACHES = [
  {
    name: "JBR Beach",
    area: "Jumeirah Beach Residence",
    type: "Бесплатный",
    desc: "Самый популярный публичный пляж Дубая. 1.7 км белого песка. Рестораны, кафе, прогулочная набережная The Walk.",
    best: "Октябрь–апрель",
    features: ["Бесплатный вход", "Кабинки для переодевания", "Душевые", "Рестораны рядом", "Парковка"],
    color: "#06b6d4",
  },
  {
    name: "Jumeirah Beach",
    area: "Джумейра",
    type: "Бесплатный",
    desc: "Вид на Burj Al Arab. Менее людный чем JBR. Чистое море, мелкий белый песок. Рядом кафе и рестораны.",
    best: "Ноябрь–март",
    features: ["Вид на Burj Al Arab", "Тихая атмосфера", "Бесплатный вход", "Чистое море"],
    color: "#22c55e",
  },
  {
    name: "Kite Beach",
    area: "Умм-Сукейм",
    type: "Бесплатный",
    desc: "Любимое место активных туристов. Кайтсёрфинг, волейбол, беговая дорожка 14 км. Бургеры и smoothie бары.",
    best: "Весь год",
    features: ["Кайтсёрфинг", "Волейбол", "Беговая дорожка", "Вид на Burj Al Arab", "Foodtrucks"],
    color: "#f59e0b",
  },
  {
    name: "La Mer Beach",
    area: "Джумейра 1",
    type: "Бесплатный",
    desc: "Стильный пляжный кластер. Instagram-локации, бутики, рестораны, развлечения. Популярен у молодёжи.",
    best: "Октябрь–апрель",
    features: ["Стильный дизайн", "Бутики и рестораны", "Instagram-spots", "Аттракционы"],
    color: "#8b5cf6",
  },
  {
    name: "Atlantis Beach",
    area: "Пальм Джумейра",
    type: "Платный (для гостей)",
    desc: "Приватный пляж отеля Atlantis. Доступ для гостей отеля или за плату. Вода ярко-бирюзовая, очень чистая.",
    best: "Октябрь–апрель",
    features: ["Приватность", "Бирюзовая вода", "Бар у моря", "Water sports"],
    color: "#ff6b35",
  },
];

const TIPS = [
  { ico: "👙", title: "Дресс-код",        desc: "На пляже можно в купальнике. Но в сторону отеля/магазина — накиньте накидку. В Рамадан — скромнее." },
  { ico: "☀️", title: "Лучший сезон",     desc: "Октябрь–апрель: +25–30°C. Купание идеальное. Летом +38°C вода как горячая ванна." },
  { ico: "🕐", title: "Время посещения",  desc: "Утром до 10:00 или вечером после 17:00 — меньше людей и меньше жара." },
  { ico: "💧", title: "Вода",             desc: "Берите воду с собой. В жару выпивают 2–3 литра в день." },
];

export default function DubaiBeachesPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#001a3d,#003380)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/dubai" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Дубай</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>Пляжи</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            Лучшие пляжи Дубая 🏖️
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 520, margin: "0 auto 28px" }}>
            JBR · Jumeirah · Kite Beach · La Mer · бесплатные и приватные
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Подобрать тур →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding: "48px 20px 80px" }}>

        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Пляжи</span>
          <h2 className="section-title">Лучшие пляжи Дубая</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 24 }}>
            {BEACHES.map(b => (
              <article key={b.name} style={{ background: "#fff", border: `1px solid ${b.color}30`, borderLeft: `4px solid ${b.color}`, borderRadius: "0 14px 14px 0", padding: "20px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 10 }}>
                  <div>
                    <h2 style={{ fontSize: 17, fontWeight: 900, color: "#1e293b", marginBottom: 4 }}>{b.name}</h2>
                    <span style={{ fontSize: 12, color: "#64748b" }}>📍 {b.area}</span>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                    <span style={{ background: `${b.color}15`, color: b.color, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>{b.type}</span>
                    <span style={{ background: "rgba(255,200,50,0.15)", color: "#92400e", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>☀️ {b.best}</span>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65, marginBottom: 14 }}>{b.desc}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {b.features.map(f => (
                    <span key={f} style={{ background: "#f8fafc", color: "#475569", fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 20, border: "1px solid #e8eef5" }}>✓ {f}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Советы</span>
          <h2 className="section-title">Что нужно знать о пляжах Дубая</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14, marginTop: 22 }}>
            {TIPS.map(t => (
              <div key={t.title} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{t.ico}</div>
                <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 5 }}>{t.title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.55 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 14 }}>Смотрите также</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { href: "/dubai",        label: "О Дубае" },
              { href: "/dubai/tours",  label: "Туры в Дубай" },
              { href: "/dubai/hotels", label: "Отели Дубая" },
              { href: "/visa/uae",     label: "Виза в ОАЭ" },
              { href: "/egypt",        label: "Пляжи Египта" },
              { href: "/maldives",     label: "Пляжи Мальдив" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
        </section>

        <CTABlock title="Готовы на пляжи Дубая?" />
      </div>
    </>
  );
}
