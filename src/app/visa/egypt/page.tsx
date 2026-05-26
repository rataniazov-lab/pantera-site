import type { Metadata } from "next";
import { buildMeta, CTABlock } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Виза в Египет для граждан Узбекистана — $25 по прилёту | PANTERA LUXE",
  description: "Виза в Египет для граждан Узбекистана — $25 по прилёту или Sinai Only бесплатно. Шарм Эль Шейх без оформления. Инструкция 2025.",
  keywords: ["виза Египет Узбекистан", "виза Шарм Эль Шейх", "Egypt visa Uzbekistan", "Sinai Only виза", "виза Египет по прилёту", "виза Хургада"],
  path: "/visa/egypt",
});

const OPTIONS = [
  {
    type: "Sinai Only",
    price: "Бесплатно",
    days: "15 дней",
    color: "#22c55e",
    desc: "Действует только для курортов Синая (Шарм Эль Шейх, Дахаб, Нувейба). Выдаётся автоматически при прилёте. НЕ позволяет ехать в Каир, Луксор.",
    steps: ["Прилететь в аэропорт Шарм Эль Шейх", "На паспортном контроле получить Sinai Only бесплатно", "Отдыхать в пределах Синая"],
  },
  {
    type: "Полная виза по прилёту",
    price: "$25",
    days: "30 дней",
    color: "#f59e0b",
    desc: "Открывает весь Египет — Каир, Пирамиды, Луксор, Асуан, Красное море, Синай. Оплата наличными USD.",
    steps: ["Прилететь в любой аэропорт Египта", "Купить марку в банке в аэропорту за $25 наличными", "Вклеить марку в паспорт на паспортном контроле"],
  },
];

export default function VisaEgyptPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0d1b2a,#1a1000)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/visa" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Виза</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>🇪🇬 Египет</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 900, margin: "0 0 14px" }}>
            Виза в Египет для граждан Узбекистана
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, maxWidth: 500, margin: "0 auto 28px" }}>
            Sinai Only — бесплатно · Полная виза — $25 по прилёту · Никакого посольства
          </p>
          <a className="btn-primary" href="/egypt" style={{ fontSize: 15, padding: "13px 28px" }}>Туры в Египет →</a>
        </div>
      </section>
      <div className="site-container" style={{ padding: "48px 20px 80px" }}>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Типы виз</span>
          <h2 className="section-title">Два варианта — выберите нужный</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 16, marginTop: 24 }}>
            {OPTIONS.map(o => (
              <div key={o.type} style={{ background: "#fff", border: `2px solid ${o.color}33`, borderRadius: 14, padding: "22px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800 }}>{o.type}</h3>
                  <span style={{ background: `${o.color}18`, color: o.color, fontSize: 14, fontWeight: 900, padding: "4px 12px", borderRadius: 20 }}>{o.price}</span>
                </div>
                <div style={{ background: `${o.color}10`, borderRadius: 8, padding: "8px 12px", marginBottom: 14 }}>
                  <span style={{ fontSize: 13, color: o.color, fontWeight: 700 }}>📅 {o.days}</span>
                </div>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, marginBottom: 14 }}>{o.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {o.steps.map((s, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 20, height: 20, background: o.color, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 10, fontWeight: 900, flexShrink: 0 }}>{i+1}</div>
                      <span style={{ fontSize: 12, color: "#475569", lineHeight: 1.5 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <div style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.3)", borderRadius: 12, padding: "14px 18px", marginBottom: 48 }}>
          <p style={{ fontSize: 13, color: "#92400e" }}>💡 <strong>Важно:</strong> Возьмите $25 наличными USD в Ташкенте. В аэропорту Египта обменники есть, но курс невыгодный.</p>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/egypt",label:"Туры Египет"},{href:"/visa",label:"Все визы"},{href:"/visa/uae",label:"Виза ОАЭ"},{href:"/visa/turkey",label:"Виза Турция"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Готовы в Шарм Эль Шейх?" />
      </div>
    </>
  );
}
