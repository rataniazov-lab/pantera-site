import type { Metadata } from "next";
import { buildMeta, CTABlock } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Виза во Вьетнам для граждан Узбекистана — eVisa $25 | PANTERA LUXE",
  description: "Виза во Вьетнам для граждан Узбекистана — eVisa онлайн $25, 45 дней. Пошаговая инструкция оформления. Обработка 3 рабочих дня.",
  keywords: ["виза Вьетнам Узбекистан", "eVisa Вьетнам", "Vietnam visa Uzbekistan", "виза во Вьетнам цена", "электронная виза Вьетнам"],
  path: "/visa/vietnam",
});

const STEPS = [
  { n: 1, title: "Откройте сайт evisa.xuatnhapcanh.gov.vn", desc: "Официальный сайт иммиграционного департамента Вьетнама." },
  { n: 2, title: "Заполните анкету", desc: "Паспортные данные, дата въезда, цель визита. Загрузите фото 4×6." },
  { n: 3, title: "Оплатите $25", desc: "Кредитной или дебетовой картой Visa/Mastercard. Оплата безопасна." },
  { n: 4, title: "Ждите 3 рабочих дня", desc: "eVisa придёт на email. Распечатайте или сохраните на телефоне." },
  { n: 5, title: "Летите!", desc: "Предъявите eVisa + загранпаспорт на паспортном контроле." },
];

export default function VisaVietnamPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0d1b2a,#1a0010)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/visa" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Виза</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>🇻🇳 Вьетнам</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 900, margin: "0 0 14px" }}>
            Виза во Вьетнам — eVisa для узбекистанцев
          </h1>
          <div style={{ display: "inline-block", background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.4)", color: "#a78bfa", fontSize: 16, fontWeight: 800, padding: "8px 24px", borderRadius: 30, margin: "0 0 24px" }}>
            🌐 eVisa онлайн · $25 · 45 дней
          </div>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, maxWidth: 500, margin: "0 auto 28px" }}>
            Оформляется онлайн за 3 рабочих дня · Без посещения посольства
          </p>
          <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Помощь с оформлением →</a>
        </div>
      </section>
      <div className="site-container" style={{ padding: "48px 20px 80px" }}>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Инструкция</span>
          <h2 className="section-title">Как оформить eVisa во Вьетнам — 5 шагов</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
            {STEPS.map(s => (
              <div key={s.n} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 12, padding: "16px 20px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 34, height: 34, background: "linear-gradient(135deg,#8b5cf6,#a78bfa)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14, fontWeight: 900, flexShrink: 0 }}>{s.n}</div>
                <div><h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{s.title}</h3><p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{s.desc}</p></div>
              </div>
            ))}
          </div>
        </section>
        <div style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.3)", borderRadius: 12, padding: "16px 20px", marginBottom: 48 }}>
          <p style={{ fontSize: 13, color: "#92400e" }}>💡 <strong>Совет:</strong> Подавайте заявку минимум за 7–10 дней до вылета. Не тяните до последнего — обработка может занять дольше в пиковые сезоны.</p>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/visa",label:"Все визы"},{href:"/visa/uae",label:"Виза ОАЭ"},{href:"/visa/turkey",label:"Виза Турция"},{href:"/visa/egypt",label:"Виза Египет"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Нужна помощь с визой?" />
      </div>
    </>
  );
}
