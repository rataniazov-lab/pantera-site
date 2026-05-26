import type { Metadata } from "next";
import { buildMeta, CTABlock } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Виза в Турцию для граждан Узбекистана — не нужна 30 дней | PANTERA LUXE",
  description: "Виза в Турцию для граждан Узбекистана — не нужна 30 дней. Стамбул, Анталья, Каппадокия. Что взять с собой при въезде. Правила 2025.",
  keywords: ["виза Турция Узбекистан", "нужна ли виза в Турцию", "Turkey visa Uzbekistan 2025", "въезд в Стамбул без визы", "Турция без визы узбекистан"],
  path: "/visa/turkey",
});

export default function VisaTurkeyPage() {
  const DOCS = ["Загранпаспорт (срок действия 6+ месяцев)", "Обратный авиабилет", "Бронь отеля", "Достаточно средств"];
  const TIPS = [
    { t: "Срок пребывания", d: "30 дней без визы. Можно продлить до 60 дней через жандармерию." },
    { t: "Повторный въезд",  d: "Между визитами должен пройти минимум 90 дней." },
    { t: "Медицинская страховка", d: "Не обязательна, но настоятельно рекомендуется. Лечение дорогое." },
    { t: "Таможня",          d: "Наличные свыше $10 000 нужно декларировать." },
  ];
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0d1b2a,#1a0030)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/visa" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Виза</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>🇹🇷 Турция</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 900, margin: "0 0 14px" }}>
            Виза в Турцию для граждан Узбекистана
          </h1>
          <div style={{ display: "inline-block", background: "rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.4)", color: "#4ade80", fontSize: 16, fontWeight: 800, padding: "8px 24px", borderRadius: 30, margin: "0 0 24px" }}>
            ✅ Виза НЕ нужна — 30 дней бесплатно
          </div>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, maxWidth: 500, margin: "0 auto 28px" }}>
            Актуально 2025–2026 · Стамбул · Анталья · Каппадокия
          </p>
          <a className="btn-primary" href="/turkey" style={{ fontSize: 15, padding: "13px 28px" }}>Туры в Турцию →</a>
        </div>
      </section>
      <div className="site-container" style={{ padding: "48px 20px 80px" }}>
        <section style={{ marginBottom: 48 }}>
          <h2 className="section-title">Необходимые документы</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 10, marginTop: 20 }}>
            {DOCS.map(item => (
              <div key={item} style={{ background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 10, padding: "12px 16px", display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ color: "#16a34a" }}>✓</span>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>
        <section style={{ marginBottom: 52 }}>
          <h2 className="section-title">Важные детали</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 20 }}>
            {TIPS.map(tip => (
              <div key={tip.t} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 12, padding: "14px 18px", display: "flex", gap: 14 }}>
                <span style={{ color: "#ff6b35", fontSize: 16, flexShrink: 0 }}>ℹ️</span>
                <div><strong style={{ fontSize: 14 }}>{tip.t}: </strong><span style={{ fontSize: 13, color: "#475569" }}>{tip.d}</span></div>
              </div>
            ))}
          </div>
        </section>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/turkey",label:"Туры Турция"},{href:"/turkey/istanbul",label:"Стамбул"},{href:"/turkey/antalya",label:"Анталья"},{href:"/visa",label:"Все визы"},{href:"/visa/uae",label:"Виза ОАЭ"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Нужна помощь с поездкой?" />
      </div>
    </>
  );
}
