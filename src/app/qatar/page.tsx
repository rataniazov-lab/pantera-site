import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../shared";

const IMG = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779520520/%D0%94%D0%9E%D0%A5%D0%90_hgsxss.png";

export const metadata: Metadata = buildMeta({
  title: "Туры в Катар из Ташкента — Доха, без визы 30 дней | PANTERA LUXE",
  description: "Туры в Катар из Ташкента. Доха — Сук Вакиф, небоскрёбы, Музей исламского искусства. Без визы 30 дней. Трансфер через Доху.",
  keywords: ["туры в Катар", "Катар Доха тур", "Qatar tours Tashkent", "Катар без визы", "Доха тур", "туры Катар 2025"],
  path: "/qatar",
  image: IMG,
});

export default function QatarPage() {
  return (
    <>
      <section style={{ background: `linear-gradient(to bottom,rgba(13,27,42,0.45),rgba(13,27,42,0.82)),url('${IMG}') center/cover no-repeat`, padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <span className="section-tag" style={{ color: "#ffd166" }}>🇶🇦 Катар</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "12px 0 14px" }}>Туры в Катар — Доха</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 520, margin: "0 auto 28px" }}>
            Сук Вакиф · Небоскрёбы · Музей исламского искусства · Без визы 30 дней
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Подобрать тур →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>
      <div className="site-container" style={{ padding: "48px 20px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: 14, marginBottom: 52 }}>
          {[
            { ico: "🕌", name: "Сук Вакиф",                  desc: "Древний рынок Дохи. Специи, ткани, кальяны, соколы. Живая история." },
            { ico: "🏛️", name: "Музей исламского искусства",  desc: "Один из лучших музеев мира. Архитектура IM Pei, 14 веков истории." },
            { ico: "🌆", name: "Katara Cultural Village",     desc: "Амфитеатр, галереи, рестораны. Культурное сердце Катара." },
            { ico: "🏝️", name: "Pearl Qatar",                 desc: "Искусственный остров класса люкс. Лучшие рестораны и магазины." },
          ].map(s => (
            <div key={s.name} style={{ background: "#f8fafc", borderRadius: 12, padding: "16px 18px", display: "flex", gap: 12 }}>
              <span style={{ fontSize: 26, flexShrink: 0 }}>{s.ico}</span>
              <div><h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{s.name}</h3><p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>{s.desc}</p></div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/dubai",label:"Дубай"},{href:"/cruise/uae",label:"Круиз ОАЭ"},{href:"/visa/uae",label:"Визы Персидский залив"},{href:"/azerbaijan",label:"Азербайджан"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Готовы в Доху?" />
      </div>
    </>
  );
}
