import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Каппадокия тур из Ташкента — воздушные шары, пещерные отели | PANTERA LUXE",
  description: "Туры в Каппадокию из Ташкента. Полёт на воздушном шаре, пещерные отели, долины. Горёме, Учхисар, Дерикуйу. Виза не нужна. от $599. ☎ +998 77 161 88 88",
  keywords: ["Каппадокия тур", "воздушный шар Каппадокия", "пещерные отели Каппадокия", "Горёме тур", "Cappadocia tour Tashkent", "Каппадокия из Ташкента", "Турция Каппадокия цена"],
  path: "/turkey/cappadocia",
});

const ACTIVITIES = [
  { ico: "🎈", name: "Полёт на шаре",       desc: "Рассвет над долинами — одно из лучших впечатлений в мире. Бронируйте за 2–3 месяца." },
  { ico: "🏔️", name: "Долина Ихлара",       desc: "8-километровый каньон вдоль реки. Вырубленные в скалах церкви V–XII веков." },
  { ico: "🕳️", name: "Деринкую",            desc: "Подземный город на 18 уровней. Жилища 10 000 человек в скале." },
  { ico: "🌅", name: "Долина Голубей",       desc: "Лучшая точка для фото. Закат над сотнями скальных столбов." },
  { ico: "🐴", name: "Конная прогулка",      desc: "Верхом через Розовую долину — romantic experience." },
  { ico: "🏺", name: "Гончарный мастер-класс", desc: "Традиционная каппадокийская керамика. Авано — гончарная столица." },
];

const TOURS = [
  { name: "Каппадокия 3 ночи", hotel: "Museum Hotel 5★ (пещерный)", price: "$599", old: "$810", inc: "Шар включён" },
  { name: "Каппадокия + Стамбул 6 ночей", hotel: "Cave Hotel + Bosphorus Hotel", price: "$799", old: "$1 080", inc: "2 города" },
];

export default function CappadociaPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a0040,#2d0060)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/turkey" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Турция</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>Каппадокия</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            🎈 Туры в Каппадокию
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 520, margin: "0 auto 28px" }}>
            Воздушные шары · Пещерные отели · Долины · Виза не нужна · от $599
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
          <h2 className="section-title">Туры в Каппадокию — цены 2025</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 22 }}>
            {TOURS.map(t => (
              <div key={t.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 4 }}>{t.name}</h3>
                  <p style={{ fontSize: 13, color: "#64748b" }}>🏨 {t.hotel}</p>
                  <span style={{ background: "rgba(139,92,246,0.1)", color: "#7c3aed", fontSize: 11, fontWeight: 700, padding: "2px 9px", borderRadius: 20, display: "inline-block", marginTop: 6 }}>✨ {t.inc}</span>
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
          <span className="section-tag">Активности</span>
          <h2 className="section-title">Что делать в Каппадокии</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: 14, marginTop: 22 }}>
            {ACTIVITIES.map(a => (
              <div key={a.name} style={{ background: "#f8fafc", borderRadius: 12, padding: "16px 18px", display: "flex", gap: 12 }}>
                <span style={{ fontSize: 26, flexShrink: 0 }}>{a.ico}</span>
                <div><h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{a.name}</h3><p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>{a.desc}</p></div>
              </div>
            ))}
          </div>
        </section>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/turkey",label:"Все туры Турция"},{href:"/turkey/istanbul",label:"Стамбул"},{href:"/turkey/antalya",label:"Анталья"},{href:"/visa/turkey",label:"Виза Турция"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Готовы в Каппадокию?" />
      </div>
    </>
  );
}
