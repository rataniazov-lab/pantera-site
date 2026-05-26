import type { Metadata } from "next";
import { buildMeta, CTABlock } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Виза в Китай для граждан Узбекистана — без визы 30 дней с 2025 | PANTERA LUXE",
  description: "Виза в Китай для граждан Узбекистана — без визы 30 дней с октября 2025. Пекин, Шанхай, Сиань. Что нужно при въезде. VPN обязателен.",
  keywords: ["виза Китай Узбекистан", "Китай без визы 2025", "China visa Uzbekistan", "въезд в Китай без визы", "Китай Ташкент тур", "Пекин без визы"],
  path: "/visa/china",
});

const TIPS = [
  { ico: "📱", title: "VPN — обязательно",     desc: "Google, Instagram, WhatsApp заблокированы. Установите VPN ДО въезда — в Китае скачать нельзя." },
  { ico: "💳", title: "WeChat Pay",             desc: "Наличные почти не принимают. Установите WeChat и привяжите карту. Без этого сложно платить." },
  { ico: "🌐", title: "Интернет-SIM",           desc: "Китайская SIM без VPN почти бесполезна для иностранцев. Возьмите международную SIM с роумингом." },
  { ico: "📋", title: "Регистрация в полиции",  desc: "В отеле регистрируют автоматически. При аренде жилья — нужно самостоятельно зарегистрироваться в течение 24 часов." },
  { ico: "🌡️", title: "Карантин отменён",       desc: "С 2023 года никаких COVID-ограничений. Въезд свободный." },
  { ico: "✈️", title: "Транзит через Китай",    desc: "Безвизовый транзит 24–144 часа доступен во многих аэропортах даже без безвизового режима." },
];

const STEPS = [
  { n: 1, t: "Купите авиабилет", d: "Прямые рейсы: Ташкент–Пекин, Ташкент–Урумчи, Ташкент–Шанхай." },
  { n: 2, t: "Установите VPN", d: "ExpressVPN, NordVPN, Surfshark. Оплатите и настройте ДО поездки." },
  { n: 3, t: "Зарегистрируйтесь в WeChat", d: "Привяжите банковскую карту для оплаты." },
  { n: 4, t: "Прилетите в Китай", d: "На паспортном контроле получите штамп на 30 дней без визы." },
];

export default function VisaChinaPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a0000,#3d0000)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/visa" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Виза</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>🇨🇳 Китай</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 900, margin: "0 0 14px" }}>
            Виза в Китай для граждан Узбекистана
          </h1>
          <div style={{ display: "inline-block", background: "rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.4)", color: "#4ade80", fontSize: 16, fontWeight: 800, padding: "8px 24px", borderRadius: 30, margin: "0 0 16px" }}>
            ✅ Без визы 30 дней — с октября 2025
          </div>
          <p style={{ color: "rgba(255,200,100,0.8)", fontSize: 13, marginBottom: 28 }}>
            ⚠️ Важно: установите VPN до въезда
          </p>
          <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Помощь с поездкой →</a>
        </div>
      </section>
      <div className="site-container" style={{ padding: "48px 20px 80px" }}>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Пошагово</span>
          <h2 className="section-title">Как въехать в Китай без визы</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 22 }}>
            {STEPS.map(s => (
              <div key={s.n} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 12, padding: "16px 20px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 34, height: 34, background: "linear-gradient(135deg,#ef4444,#dc2626)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14, fontWeight: 900, flexShrink: 0 }}>{s.n}</div>
                <div><h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{s.t}</h3><p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{s.d}</p></div>
              </div>
            ))}
          </div>
        </section>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Советы</span>
          <h2 className="section-title">Важно знать перед поездкой</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14, marginTop: 22 }}>
            {TIPS.map(t => (
              <div key={t.title} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 12, padding: "16px 18px" }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{t.ico}</div>
                <h3 style={{ fontSize: 13, fontWeight: 800, marginBottom: 5 }}>{t.title}</h3>
                <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/visa",label:"Все визы"},{href:"/visa/uae",label:"Виза ОАЭ"},{href:"/cruise/asia",label:"Круиз Азия"},{href:"/visa/vietnam",label:"Виза Вьетнам"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Планируете поездку в Китай?" />
      </div>
    </>
  );
}
