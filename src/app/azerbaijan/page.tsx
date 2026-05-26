import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../shared";

const IMG = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779520520/%D0%91%D0%90%D0%9A%D0%A3_vycjoz.png";

export const metadata: Metadata = buildMeta({
  title: "Туры в Азербайджан из Ташкента от $250 — Баку, Нафталан | PANTERA LUXE",
  description: "Туры в Азербайджан из Ташкента от $250. Баку — огни, нефть, архитектура. Нафталан — лечебный курорт. Без визы 30 дней. ☎ +998 77 161 88 88",
  keywords: ["туры в Азербайджан из Ташкента", "Баку тур", "Azerbaijan tours Tashkent", "Азербайджан без визы", "Нафталан санаторий"],
  path: "/azerbaijan",
  image: IMG,
});

export default function AzerbaijanPage() {
  return (
    <>
      <section style={{ background: `linear-gradient(to bottom,rgba(13,27,42,0.45),rgba(13,27,42,0.82)),url('${IMG}') center/cover no-repeat`, padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <span className="section-tag" style={{ color: "#ffd166" }}>🇦🇿 Азербайджан</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "12px 0 14px" }}>Туры в Азербайджан из Ташкента</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 520, margin: "0 auto 28px" }}>Баку · Нафталан · Без визы 30 дней · от $250</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Подобрать тур →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>
      <div className="site-container" style={{ padding: "48px 20px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 16, marginBottom: 52 }}>
          {[
            { name: "Баку", desc: "Огненные башни, Старый город, набережная. Париж Кавказа.", price: "от $250", link: null },
            { name: "Нафталан", desc: "Уникальный нафталановый курорт. Лечение суставов, псориаза.", price: "от $350", link: "/sanatorium/naftalan" },
            { name: "Шеки", desc: "Средневековый Шеки-Хан дворец, шёлковые традиции, горная природа.", price: "от $280", link: null },
          ].map(c => (
            <div key={c.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "20px" }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 8 }}>{c.name}</h3>
              <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, marginBottom: 14 }}>{c.desc}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "3px 10px", borderRadius: 6 }}>{c.price}</span>
                {c.link && <a href={c.link} style={{ fontSize: 12, color: "#ff6b35", fontWeight: 700, textDecoration: "none" }}>Подробнее →</a>}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/sanatorium/naftalan",label:"Нафталан санаторий"},{href:"/georgia",label:"Грузия"},{href:"/visa",label:"Визы"},{href:"/dubai",label:"Дубай"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Готовы в Баку?" />
      </div>
    </>
  );
}
