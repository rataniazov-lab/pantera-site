import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

const IMG = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779520521/%D0%A1%D0%A2%D0%90%D0%9C%D0%91%D0%A3%D0%9B_xak5js.png";

export const metadata: Metadata = buildMeta({
  title: "Туры в Стамбул из Ташкента от $350 — PANTERA LUXE",
  description:
    "Туры в Стамбул из Ташкента от $350. Айя-София, Босфор, Гранд-Базар, Каппадокия рядом. Виза не нужна. Прямой рейс 5 часов. ☎ +998 77 161 88 88",
  keywords: ["туры в Стамбул", "Стамбул из Ташкента", "тур Стамбул цена", "Istanbul tour Tashkent", "Стамбул достопримечательности", "Босфор круиз", "Айя-София тур"],
  path: "/turkey/istanbul",
  image: IMG,
});

const SIGHTS = [
  { ico: "🕌", name: "Айя-София",       desc: "Величественный собор-мечеть. Символ Стамбула и всей Турции." },
  { ico: "🏛️", name: "Дворец Топкапы",  desc: "Резиденция османских султанов. Гарем, сокровищница, виды Босфора." },
  { ico: "🛍️", name: "Гранд-Базар",    desc: "Крупнейший крытый рынок мира — 4 000 лавок. Специи, ковры, золото." },
  { ico: "🚢", name: "Круиз по Босфору", desc: "Мост между Европой и Азией. Вечерний круиз — одно из лучших впечатлений." },
  { ico: "🍖", name: "Турецкая кухня",   desc: "Донер, мезе, кебаб, пахлава, чай. Стамбул — гастрономическая столица." },
  { ico: "🏘️", name: "Район Каракёй",   desc: "Модные галереи, кофейни, стрит-арт. Современный Стамбул." },
];

const TOURS = [
  { name: "Стамбул 3 ночи", hotel: "Divan Hotel Istanbul 5★", price: "$350", old: "$475", nights: 3 },
  { name: "Стамбул 5 ночей", hotel: "Ciragan Palace Kempinski 5★", price: "$599", old: "$810", nights: 5 },
  { name: "Стамбул + Каппадокия 6 ночей", hotel: "Mix Hotels + Cave Hotel", price: "$799", old: "$1 080", nights: 6 },
];

export default function IstanbulPage() {
  return (
    <>
      <section style={{ background: `linear-gradient(to bottom,rgba(13,27,42,0.5),rgba(13,27,42,0.85)),url('${IMG}') center/cover no-repeat`, padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/turkey" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Турция</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>Стамбул</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            Туры в Стамбул из Ташкента
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 520, margin: "0 auto 28px" }}>
            Айя-София · Босфор · Гранд-Базар · Виза не нужна · от $350
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Подобрать тур →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding: "48px 20px 80px" }}>

        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Туры</span>
          <h2 className="section-title">Туры в Стамбул — цены 2025</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 22 }}>
            {TOURS.map(t => (
              <div key={t.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1e293b", marginBottom: 4 }}>{t.name}</h3>
                  <p style={{ fontSize: 13, color: "#64748b" }}>🏨 {t.hotel} · 🌙 {t.nights} ночей</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 12, color: "#94a3b8", textDecoration: "line-through", textDecorationColor: "#9b3030" }}>{t.old}</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "2px 10px", borderRadius: 6 }}>{t.price}</div>
                  <a className="btn-primary" href="/contacts" style={{ display: "inline-block", marginTop: 8, fontSize: 12, padding: "7px 16px" }}>Забронировать</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Что посмотреть</span>
          <h2 className="section-title">Достопримечательности Стамбула</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: 14, marginTop: 22 }}>
            {SIGHTS.map(s => (
              <div key={s.name} style={{ background: "#f8fafc", borderRadius: 12, padding: "16px 18px", display: "flex", gap: 12 }}>
                <span style={{ fontSize: 26, flexShrink: 0 }}>{s.ico}</span>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{s.name}</h3>
                  <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 14 }}>Смотрите также</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { href: "/turkey",             label: "Все туры Турция" },
              { href: "/turkey/antalya",     label: "Анталья" },
              { href: "/turkey/cappadocia",  label: "Каппадокия" },
              { href: "/turkey/medical",     label: "Медтуризм Турция" },
              { href: "/visa/turkey",        label: "Виза Турция" },
              { href: "/dubai",              label: "Туры Дубай" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
        </section>

        <CTABlock title="Готовы в Стамбул?" />
      </div>
    </>
  );
}
