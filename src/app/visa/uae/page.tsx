import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Виза в ОАЭ для граждан Узбекистана — не нужна 30 дней | PANTERA LUXE",
  description: "Виза в ОАЭ для граждан Узбекистана — не нужна 30 дней автоматически. Что нужно при въезде в Дубай, Абу-Даби. Правила въезда 2025.",
  keywords: ["виза ОАЭ Узбекистан", "виза Дубай узбекистан", "нужна ли виза в ОАЭ", "UAE visa Uzbekistan 2025", "въезд в Дубай без визы", "ОАЭ без визы"],
  path: "/visa/uae",
});

const STEPS = [
  { n: 1, title: "Купите авиабилет", desc: "Прямой рейс Ташкент–Дубай ~4 часа. Flydubai, Uzbekistan Airways." },
  { n: 2, title: "Забронируйте отель", desc: "Подтверждение бронирования понадобится на паспортном контроле." },
  { n: 3, title: "Прилетите в Дубай", desc: "На паспортном контроле получите штамп на 30 дней автоматически." },
  { n: 4, title: "Готово", desc: "Виза не нужна. 30 дней пребывания без каких-либо оплат." },
];

export default function VisaUaePage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0d1b2a,#0f2d45)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/visa" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Виза</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>🇦🇪 ОАЭ</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 900, margin: "0 0 14px" }}>
            Виза в ОАЭ для граждан Узбекистана
          </h1>
          <div style={{ display: "inline-block", background: "rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.4)", color: "#4ade80", fontSize: 16, fontWeight: 800, padding: "8px 24px", borderRadius: 30, margin: "0 0 24px" }}>
            ✅ Виза НЕ нужна — 30 дней бесплатно
          </div>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, maxWidth: 500, margin: "0 auto 28px" }}>
            Граждане Узбекистана въезжают в ОАЭ без визы с 2024 года
          </p>
          <a className="btn-primary" href="/dubai" style={{ fontSize: 15, padding: "13px 28px" }}>Туры в Дубай →</a>
        </div>
      </section>
      <div className="site-container" style={{ padding: "48px 20px 80px" }}>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Как въехать</span>
          <h2 className="section-title">Въезд в ОАЭ без визы — пошагово</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
            {STEPS.map(s => (
              <div key={s.n} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 12, padding: "16px 20px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 34, height: 34, background: "linear-gradient(135deg,#ff6b35,#ff8c42)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14, fontWeight: 900, flexShrink: 0 }}>{s.n}</div>
                <div><h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{s.title}</h3><p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{s.desc}</p></div>
              </div>
            ))}
          </div>
        </section>
        <section style={{ marginBottom: 52 }}>
          <h2 className="section-title">Что нужно при въезде</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 10, marginTop: 20 }}>
            {["Загранпаспорт (срок действия 6+ месяцев)","Обратный авиабилет","Бронь отеля","Достаточно средств ($100+)"].map(item => (
              <div key={item} style={{ background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 10, padding: "12px 16px", display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ color: "#16a34a", fontSize: 16, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/dubai",label:"Туры в Дубай"},{href:"/visa",label:"Все визы"},{href:"/visa/turkey",label:"Виза Турция"},{href:"/cruise/uae",label:"Круиз ОАЭ"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Готовы в Дубай?" />
      </div>
    </>
  );
}
