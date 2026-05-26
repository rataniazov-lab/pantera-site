import type { Metadata } from "next";
import { buildMeta, CTABlock } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Виза на Мальдивы для граждан Узбекистана — бесплатно по прилёту | PANTERA LUXE",
  description: "Виза на Мальдивы для граждан Узбекистана — бесплатно по прилёту, 30 дней. Никакого посольства. Что нужно при въезде на Мальдивы.",
  keywords: ["виза Мальдивы Узбекистан", "Мальдивы без визы", "Maldives visa Uzbekistan", "въезд на Мальдивы", "виза по прилёту Мальдивы"],
  path: "/visa/maldives",
});

export default function VisaMaldivesPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#001428,#002040)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/visa" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Виза</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>🇲🇻 Мальдивы</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 900, margin: "0 0 14px" }}>
            Виза на Мальдивы для граждан Узбекистана
          </h1>
          <div style={{ display: "inline-block", background: "rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.4)", color: "#4ade80", fontSize: 16, fontWeight: 800, padding: "8px 24px", borderRadius: 30, margin: "0 0 24px" }}>
            ✅ Виза по прилёту — БЕСПЛАТНО · 30 дней
          </div>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, maxWidth: 480, margin: "0 auto 28px" }}>
            Никаких посольств, никаких анкет — виза выдаётся автоматически при прилёте
          </p>
          <a className="btn-primary" href="/maldives" style={{ fontSize: 15, padding: "13px 28px" }}>Туры на Мальдивы →</a>
        </div>
      </section>
      <div className="site-container" style={{ padding: "48px 20px 80px" }}>
        <section style={{ marginBottom: 52 }}>
          <h2 className="section-title">Что нужно при въезде</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 10, marginTop: 20 }}>
            {[
              "Загранпаспорт (срок действия 6+ месяцев)",
              "Обратный авиабилет",
              "Подтверждение бронирования отеля или бунгало",
              "$100+ на счету или наличными",
              "Медицинская страховка (рекомендуется)",
            ].map(d => (
              <div key={d} style={{ background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 10, padding: "12px 16px", display: "flex", gap: 10 }}>
                <span style={{ color: "#16a34a", flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{d}</span>
              </div>
            ))}
          </div>
        </section>
        <section style={{ marginBottom: 52 }}>
          <h2 className="section-title">Важные особенности Мальдив</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 20 }}>
            {[
              { t: "Алкоголь", d: "Разрешён только на курортных островах (resort islands). На местных островах запрещён." },
              { t: "Трансфер на остров", d: "Аэропорт на одном острове, ваш отель — на другом. Заранее забронируйте гидроплан или катер." },
              { t: "Продление визы", d: "Можно продлить до 90 дней в иммиграционном департаменте за $10." },
              { t: "Валюта",          d: "Мальдивская руфия, но доллары США принимают везде на курортах." },
            ].map(t => (
              <div key={t.t} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 12, padding: "14px 18px", display: "flex", gap: 14 }}>
                <span style={{ flexShrink: 0 }}>ℹ️</span>
                <div><strong style={{ fontSize: 14 }}>{t.t}: </strong><span style={{ fontSize: 13, color: "#475569" }}>{t.d}</span></div>
              </div>
            ))}
          </div>
        </section>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/maldives",label:"Туры Мальдивы"},{href:"/visa",label:"Все визы"},{href:"/visa/uae",label:"Виза ОАЭ"},{href:"/visa/thailand",label:"Виза Таиланд"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Готовы на Мальдивы?" />
      </div>
    </>
  );
}
