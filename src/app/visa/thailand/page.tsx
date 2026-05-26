import type { Metadata } from "next";
import { buildMeta, CTABlock } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Виза в Таиланд для граждан Узбекистана — без визы 30 дней | PANTERA LUXE",
  description: "Виза в Таиланд для граждан Узбекистана — без визы 30 дней. Пхукет, Самуи, Бангкок, Паттайя. Что взять с собой. Правила 2025.",
  keywords: ["виза Таиланд Узбекистан", "Thailand visa Uzbekistan 2025", "Таиланд без визы", "въезд в Таиланд без визы", "виза Пхукет"],
  path: "/visa/thailand",
});

const DOCS = [
  "Загранпаспорт (срок действия 6+ месяцев)",
  "Обратный авиабилет",
  "Бронь отеля или подтверждение проживания",
  "Наличные $50+ или карта с балансом",
];

const TIPS = [
  { t: "Срок пребывания",    d: "30 дней без визы. Продлить на 30 дней через иммиграционный офис внутри страны — 1 900 бат." },
  { t: "Виза-ран",           d: "Можно выехать в соседнюю страну (Малайзия, Камбоджа) и вернуться — получите ещё 30 дней." },
  { t: "Лучший сезон",       d: "Ноябрь–апрель — сухой сезон. Май–октябрь — муссоны (но цены ниже)." },
  { t: "Буддийские храмы",   d: "В храмы нужна закрытая одежда (плечи и колени). Бесплатные накидки у входа." },
];

export default function VisaThailandPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0a1a30,#001428)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/visa" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Виза</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>🇹🇭 Таиланд</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 900, margin: "0 0 14px" }}>
            Виза в Таиланд для граждан Узбекистана
          </h1>
          <div style={{ display: "inline-block", background: "rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.4)", color: "#4ade80", fontSize: 16, fontWeight: 800, padding: "8px 24px", borderRadius: 30, margin: "0 0 24px" }}>
            ✅ Без визы — 30 дней бесплатно
          </div>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, maxWidth: 480, margin: "0 auto 28px" }}>
            Пхукет · Самуи · Бангкок · Чиангмай · Актуально 2025
          </p>
          <a className="btn-primary" href="/thailand" style={{ fontSize: 15, padding: "13px 28px" }}>Туры в Таиланд →</a>
        </div>
      </section>
      <div className="site-container" style={{ padding: "48px 20px 80px" }}>
        <section style={{ marginBottom: 48 }}>
          <h2 className="section-title">Что нужно при въезде</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 10, marginTop: 20 }}>
            {DOCS.map(d => (
              <div key={d} style={{ background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 10, padding: "12px 16px", display: "flex", gap: 10 }}>
                <span style={{ color: "#16a34a" }}>✓</span>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{d}</span>
              </div>
            ))}
          </div>
        </section>
        <section style={{ marginBottom: 52 }}>
          <h2 className="section-title">Важные детали</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 20 }}>
            {TIPS.map(t => (
              <div key={t.t} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 12, padding: "14px 18px", display: "flex", gap: 14 }}>
                <span style={{ flexShrink: 0 }}>ℹ️</span>
                <div><strong style={{ fontSize: 14 }}>{t.t}: </strong><span style={{ fontSize: 13, color: "#475569" }}>{t.d}</span></div>
              </div>
            ))}
          </div>
        </section>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/thailand",label:"Туры Таиланд"},{href:"/visa",label:"Все визы"},{href:"/visa/uae",label:"Виза ОАЭ"},{href:"/vietnam",label:"Вьетнам"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Готовы на пляжи Таиланда?" />
      </div>
    </>
  );
}
