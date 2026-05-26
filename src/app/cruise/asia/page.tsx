import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Круиз по Азии из Ташкента — Япония, Китай, Корея от $685 | PANTERA LUXE",
  description: "Круиз по Азии из Ташкента от $685. Шанхай, Токио, Фукуока, Пусан, Тайвань. 5–10 ночей. Лайнер MSC Bellissima.",
  keywords: ["круиз Азия", "круиз Япония Китай", "Asia cruise Tashkent", "MSC Bellissima круиз", "круиз Шанхай Токио", "круиз Корея Япония цена"],
  path: "/cruise/asia",
});

const PORTS = [
  { flag: "🇨🇳", port: "Шанхай",   note: "Набережная Бунд, башня Ориент Перл. Отправление." },
  { flag: "🇯🇵", port: "Фукуока",  note: "Ворота в Японию. Суши-рестораны, замок Фукуока." },
  { flag: "🇰🇷", port: "Пусан",    note: "Второй город Кореи. Рыбный рынок Чагальчи, пляжи." },
  { flag: "🇹🇼", port: "Килунг",   note: "Порт Тайваня. Тайбэй рядом — night markets, 101." },
  { flag: "🇨🇳", port: "Шанхай",   note: "Прибытие." },
];

export default function AsiaCruisePage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0a1a30,#0d2040)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/cruise" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Круизы</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>Азия</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            🌏 Круиз по Азии — Дальний Восток
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 540, margin: "0 auto 28px" }}>
            Шанхай · Япония · Южная Корея · Тайвань · 5 ночей · MSC Bellissima · от $685
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
          <h2 className="section-title">5 дней — 4 страны</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 22, border: "1px solid #e8eef5", borderRadius: 14, overflow: "hidden" }}>
            {PORTS.map((p, i) => (
              <div key={p.port + i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 20px", background: i % 2 === 0 ? "#fff" : "#f8fafc", borderBottom: i < PORTS.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                <div style={{ width: 30, height: 30, background: "linear-gradient(135deg,#ff6b35,#ff8c42)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, fontWeight: 900, flexShrink: 0 }}>{i + 1}</div>
                <span style={{ fontSize: 18, flexShrink: 0 }}>{p.flag}</span>
                <span style={{ fontSize: 15, fontWeight: 800, color: "#1e293b", flex: 1 }}>{p.port}</span>
                <span style={{ fontSize: 13, color: "#64748b" }}>{p.note}</span>
              </div>
            ))}
          </div>
        </section>
        <div style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "20px 24px", marginBottom: 52, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 6 }}>MSC Bellissima — каюта с балконом</h3>
            <p style={{ fontSize: 13, color: "#64748b" }}>5 ночей · Шанхай–Япония–Корея–Тайвань · Всё включено на борту</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 12, color: "#94a3b8", textDecoration: "line-through", textDecorationColor: "#9b3030" }}>$925</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "3px 12px", borderRadius: 8 }}>$685 / чел.</div>
            <a className="btn-primary" href="/contacts" style={{ display: "inline-block", marginTop: 10, fontSize: 13, padding: "10px 22px" }}>Забронировать</a>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/cruise",label:"Все круизы"},{href:"/cruise/uae",label:"Круиз ОАЭ"},{href:"/cruise/mediterranean",label:"Средиземноморье"},{href:"/visa/china",label:"Виза Китай"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Готовы в Азию?" />
      </div>
    </>
  );
}
