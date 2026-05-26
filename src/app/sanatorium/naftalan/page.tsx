import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

const IMG = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779520521/%D0%9D%D0%90%D0%A4%D0%A2%D0%90%D0%9B%D0%90%D0%9D_eihxuc.png";

export const metadata: Metadata = buildMeta({
  title: "Нафталан санаторий из Ташкента — лечение суставов и псориаза | PANTERA LUXE",
  description:
    "Нафталан (Азербайджан) из Ташкента — уникальные нафталановые ванны. Лечение артрита, псориаза, радикулита. Туры 7–14 ночей от $350. ☎ +998 77 161 88 88",
  keywords: ["Нафталан санаторий", "нафталановые ванны", "лечение суставов Нафталан", "Нафталан тур из Ташкента", "Нафталан Азербайджан", "псориаз лечение заграница", "артрит лечение курорт"],
  path: "/sanatorium/naftalan",
  image: IMG,
});

const TREATMENTS = [
  { ico: "🛁", name: "Нафталановые ванны", desc: "Главная процедура курорта. Нафталановая нефть — уникальный природный лечебный ресурс.", duration: "8–10 мин" },
  { ico: "💆", name: "Лечебный массаж",     desc: "Классический, сегментарный, подводный. Снимает воспаление и боль.", duration: "30–45 мин" },
  { ico: "🌊", name: "Минеральные ванны",   desc: "Сероводородные, радоновые ванны. Улучшают кровообращение.", duration: "15–20 мин" },
  { ico: "💡", name: "Физиотерапия",        desc: "УВЧ, магнитотерапия, лазеролечение. Современное оборудование.", duration: "по назначению" },
  { ico: "🏊", name: "Бассейн",             desc: "Лечебный бассейн с минеральной водой. Гидромассаж, аквааэробика.", duration: "свободно" },
];

const HOTELS = [
  { name: "Нафталан Плаза 4★", price: "$350 / 7 ночей", desc: "Современный корпус, процедурный центр, ресторан, бассейн." },
  { name: "Санаторий Чинар 4★", price: "$420 / 7 ночей", desc: "Традиционный санаторий советской постройки, полностью обновлён." },
  { name: "Garabag Resort 5★",  price: "$580 / 7 ночей", desc: "Лучший отель Нафталана. Спа, несколько бассейнов, люкс-номера." },
];

export default function NaftalanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: "Нафталан — нафталановый курорт",
        description: "Лечение нафталановой нефтью. Суставы, псориаз, радикулит.",
        address: { "@type": "PostalAddress", addressLocality: "Нафталан", addressCountry: "AZ" },
      }) }} />

      <section style={{ background: `linear-gradient(to bottom,rgba(13,27,42,0.5),rgba(13,27,42,0.85)),url('${IMG}') center/cover no-repeat`, padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/sanatorium" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Санатории</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>Нафталан</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            🇦🇿 Нафталан — нафталановый курорт
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 540, margin: "0 auto 10px" }}>
            Единственный в мире курорт с нафталановой нефтью · Азербайджан · от $350
          </p>
          <p style={{ color: "rgba(255,200,100,0.75)", fontSize: 13, marginBottom: 28 }}>
            Суставы · Псориаз · Радикулит · Кожные болезни
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Забронировать →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding: "48px 20px 80px" }}>

        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Лечение</span>
          <h2 className="section-title">Лечебные процедуры Нафталана</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: 14, marginTop: 22 }}>
            {TREATMENTS.map(t => (
              <div key={t.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{t.ico}</div>
                <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 5 }}>{t.name}</h3>
                <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.55, marginBottom: 8 }}>{t.desc}</p>
                <span style={{ fontSize: 11, color: "#94a3b8" }}>⏱ {t.duration}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Отели</span>
          <h2 className="section-title">Санатории и отели Нафталана</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 22 }}>
            {HOTELS.map(h => (
              <div key={h.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 4 }}>{h.name}</h3>
                  <p style={{ fontSize: 13, color: "#64748b" }}>{h.desc}</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 16, fontWeight: 900, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "3px 10px", borderRadius: 6 }}>{h.price}</div>
                  <a className="btn-primary" href="/contacts" style={{ display: "inline-block", marginTop: 8, fontSize: 12, padding: "7px 16px" }}>Забронировать</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 14 }}>Смотрите также</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { href: "/sanatorium",              label: "Все санатории" },
              { href: "/sanatorium/karlovy-vary", label: "Карловы Вары" },
              { href: "/sanatorium/dead-sea",     label: "Мёртвое море" },
              { href: "/sanatorium/turkey",       label: "Медтуризм Турция" },
              { href: "/azerbaijan",              label: "Туры в Азербайджан" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
        </section>

        <CTABlock title="Хотите поехать в Нафталан?" />
      </div>
    </>
  );
}
