import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../shared";

const IMG = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779520521/%D0%9C%D0%90%D0%9B%D0%AC%D0%94%D0%98%D0%92%D0%AB_nshijd.png";

export const metadata: Metadata = buildMeta({
  title: "Туры на Мальдивы из Ташкента от $1200 — водные бунгало 5★ | PANTERA LUXE",
  description: "Туры на Мальдивы из Ташкента от $1200. Водные бунгало, белые пляжи, снорклинг. Виза по прилёту бесплатно. Медовый месяц, юбилей.",
  keywords: ["туры на Мальдивы", "Мальдивы из Ташкента", "водное бунгало Мальдивы", "Maldives tour Tashkent", "Мальдивы медовый месяц", "Мальдивы цена"],
  path: "/maldives",
  image: IMG,
});

const RESORTS = [
  { name: "Anantara Veli",    stars: "5★", type: "Водные бунгало", price: "$1 200", old: "$1 620" },
  { name: "One&Only Reethi Rah", stars: "5★", type: "Люкс-виллы", price: "$2 400", old: "$3 240" },
  { name: "Coco Bodu Hithi",  stars: "5★", type: "Медовый месяц", price: "$1 800", old: "$2 430" },
];

export default function MaldivesPage() {
  return (
    <>
      <section style={{ background: `linear-gradient(to bottom,rgba(13,27,42,0.4),rgba(13,27,42,0.82)),url('${IMG}') center/cover no-repeat`, padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <span className="section-tag" style={{ color: "#ffd166" }}>🇲🇻 Мальдивы</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "12px 0 14px" }}>Туры на Мальдивы из Ташкента</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 520, margin: "0 auto 28px" }}>Водные бунгало · Белые пляжи · Виза по прилёту · от $1 200</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Подобрать тур →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>
      <div className="site-container" style={{ padding: "48px 20px 80px" }}>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Туры</span>
          <h2 className="section-title">Туры на Мальдивы — цены 2025</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 22 }}>
            {RESORTS.map(r => (
              <div key={r.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 4 }}>{r.name} {r.stars}</h3>
                  <span style={{ background: "rgba(6,182,212,0.1)", color: "#0891b2", fontSize: 11, fontWeight: 700, padding: "2px 9px", borderRadius: 20 }}>{r.type}</span>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 12, color: "#94a3b8", textDecoration: "line-through", textDecorationColor: "#9b3030" }}>{r.old}</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "2px 10px", borderRadius: 6 }}>{r.price}</div>
                  <a className="btn-primary" href="/contacts" style={{ display: "inline-block", marginTop: 8, fontSize: 12, padding: "7px 16px" }}>Забронировать</a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/dubai",label:"Дубай"},{href:"/turkey",label:"Турция"},{href:"/egypt",label:"Египет"},{href:"/visa/maldives",label:"Виза Мальдивы"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Мечтаете о Мальдивах?" />
      </div>
    </>
  );
}
