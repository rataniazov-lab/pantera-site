import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Круиз по Средиземноморью из Ташкента — Испания, Италия, Греция от $599",
  description: "Круиз по Средиземноморью из Ташкента от $599. Барселона, Генуя, Рим, Афины. 7–14 ночей. Лайнер MSC. Испания · Италия · Греция · Франция.",
  keywords: ["круиз Средиземноморье", "круиз Барселона Рим", "Mediterranean cruise Tashkent", "MSC Средиземноморье", "круиз Греция", "круиз Италия Испания цена"],
  path: "/cruise/mediterranean",
});

const PORTS = [
  { flag: "🇪🇸", port: "Барселона",   note: "Гауди, Саграда Фамилия, Ла Рамбла. Отправление." },
  { flag: "🇫🇷", port: "Марсель",     note: "Прованс, Нотр-Дам-де-ла-Гард, Старый порт." },
  { flag: "🇮🇹", port: "Генуя",       note: "Портофино рядом. Средневековые переулки caruggi." },
  { flag: "🇮🇹", port: "Чивитавеккья", note: "Ворота в Рим — Колизей, Ватикан, Фонтан Треви." },
  { flag: "🇬🇷", port: "Афины (Пирей)", note: "Акрополь, Парфенон, Плака." },
  { flag: "🇬🇷", port: "Миконос",     note: "Белоснежные домики, ветряные мельницы, пляжи." },
  { flag: "🇪🇸", port: "Барселона",   note: "Прибытие." },
];

const CABINS = [
  { type: "Внутренняя каюта", price: "$599", old: "$810" },
  { type: "Каюта с видом на море", price: "$749", old: "$1 015" },
  { type: "Балкон", price: "$999", old: "$1 350" },
];

export default function MediterraneanCruisePage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#001f4d,#003380)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/cruise" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Круизы</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>Средиземноморье</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            🌊 Круиз по Средиземноморью
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 540, margin: "0 auto 28px" }}>
            Испания · Италия · Греция · Франция · 7 ночей · MSC Sinfonia · от $599
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Забронировать →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>
      <div className="site-container" style={{ padding: "48px 20px 80px" }}>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Маршрут</span>
          <h2 className="section-title">7 дней — 5 стран</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 22, border: "1px solid #e8eef5", borderRadius: 14, overflow: "hidden" }}>
            {PORTS.map((p, i) => (
              <div key={p.port} style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 20px", background: i % 2 === 0 ? "#fff" : "#f8fafc", borderBottom: i < PORTS.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                <div style={{ width: 30, height: 30, background: "linear-gradient(135deg,#185fa5,#378add)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, fontWeight: 900, flexShrink: 0 }}>{i + 1}</div>
                <span style={{ fontSize: 18, flexShrink: 0 }}>{p.flag}</span>
                <span style={{ fontSize: 15, fontWeight: 800, color: "#1e293b", flex: 1 }}>{p.port}</span>
                <span style={{ fontSize: 13, color: "#64748b", textAlign: "right" }}>{p.note}</span>
              </div>
            ))}
          </div>
        </section>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Каюты</span>
          <h2 className="section-title">Цены на каюты</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 14, marginTop: 22 }}>
            {CABINS.map(c => (
              <div key={c.type} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "18px 20px", textAlign: "center" }}>
                <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12 }}>{c.type}</h3>
                <div style={{ fontSize: 12, color: "#94a3b8", textDecoration: "line-through", textDecorationColor: "#9b3030" }}>{c.old}</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "3px 12px", borderRadius: 8, display: "inline-block", margin: "4px 0 14px" }}>{c.price}</div>
                <a className="btn-primary" href="/contacts" style={{ display: "block", fontSize: 12, padding: "8px" }}>Забронировать</a>
              </div>
            ))}
          </div>
        </section>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/cruise",label:"Все круизы"},{href:"/cruise/uae",label:"Круиз ОАЭ"},{href:"/cruise/asia",label:"Круиз Азия"},{href:"/turkey",label:"Туры Турция"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Готовы в Средиземноморье?" />
      </div>
    </>
  );
}
