import type { Metadata } from "next";
import { buildMeta, CTABlock } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Виза в Индию для граждан Узбекистана — eVisa $25 онлайн | PANTERA LUXE",
  description: "Виза в Индию для граждан Узбекистана — eVisa онлайн $25–80, до 60 дней. Гоа, Дели, Агра, Раджастан. Оформление 72 часа.",
  keywords: ["виза Индия Узбекистан", "India eVisa Uzbekistan", "электронная виза Индия", "виза Гоа", "India visa Tashkent", "eVisa India price"],
  path: "/visa/india",
});

const STEPS = [
  { n: 1, t: "Сайт indianvisaonline.gov.in", d: "Официальный портал. Выберите тип: Tourist eVisa (туризм) или Business eVisa." },
  { n: 2, t: "Заполните анкету", d: "Паспортные данные, маршрут, адрес проживания в Индии. Загрузите фото и скан паспорта." },
  { n: 3, t: "Оплатите", d: "Tourist eVisa: $25 (30 дней) или $40 (1 год двукратная). Business: $80. Visa/Mastercard." },
  { n: 4, t: "Получите eVisa (72 часа)", d: "PDF на email. Распечатайте — пограничники просят именно бумажную копию." },
  { n: 5, t: "Прилетите в Индию", d: "Предъявите распечатанную eVisa + паспорт. Доступно большинство международных аэропортов." },
];

const TYPES = [
  { name: "Tourist eVisa 30 дней", price: "$25", features: ["Однократный въезд", "Гоа, Дели, Агра", "Туризм и осмотр достопримечательностей"] },
  { name: "Tourist eVisa 1 год",   price: "$40", features: ["Двукратный въезд", "Весь год", "Yoga retreat, Аюрведа"] },
  { name: "Business eVisa",        price: "$80", features: ["Деловые встречи", "Конференции", "До 180 дней"] },
];

export default function VisaIndiaPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a0800,#2d1500)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/visa" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Виза</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>🇮🇳 Индия</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 900, margin: "0 0 14px" }}>
            eVisa в Индию для граждан Узбекистана
          </h1>
          <div style={{ display: "inline-block", background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.4)", color: "#a78bfa", fontSize: 15, fontWeight: 800, padding: "8px 22px", borderRadius: 30, margin: "0 0 24px" }}>
            🌐 eVisa онлайн · от $25 · 72 часа
          </div>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, maxWidth: 480, margin: "0 auto 28px" }}>
            Гоа · Дели · Агра · Раджастан · Оформление без посольства
          </p>
          <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Помощь с оформлением →</a>
        </div>
      </section>
      <div className="site-container" style={{ padding: "48px 20px 80px" }}>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Типы виз</span>
          <h2 className="section-title">Выберите нужный тип eVisa</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 14, marginTop: 22 }}>
            {TYPES.map(t => (
              <div key={t.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "20px" }}>
                <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 10 }}>{t.name}</h3>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "3px 10px", borderRadius: 6, display: "inline-block", marginBottom: 14 }}>{t.price}</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                  {t.features.map(f => <li key={f} style={{ fontSize: 12, color: "#475569", display: "flex", gap: 6 }}><span style={{ color: "#16a34a" }}>✓</span>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Инструкция</span>
          <h2 className="section-title">Как оформить eVisa — 5 шагов</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 22 }}>
            {STEPS.map(s => (
              <div key={s.n} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 12, padding: "16px 20px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 34, height: 34, background: "linear-gradient(135deg,#f59e0b,#d97706)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14, fontWeight: 900, flexShrink: 0 }}>{s.n}</div>
                <div><h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{s.t}</h3><p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{s.d}</p></div>
              </div>
            ))}
          </div>
        </section>
        <div style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.3)", borderRadius: 12, padding: "14px 18px", marginBottom: 48 }}>
          <p style={{ fontSize: 13, color: "#92400e" }}>💡 <strong>Совет:</strong> Подавайте за 7–10 дней. Распечатайте eVisa — пограничники в Индии требуют бумажную копию, а не телефон.</p>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/visa",label:"Все визы"},{href:"/visa/vietnam",label:"Виза Вьетнам"},{href:"/visa/egypt",label:"Виза Египет"},{href:"/thailand",label:"Таиланд"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Нужна помощь с визой в Индию?" />
      </div>
    </>
  );
}
