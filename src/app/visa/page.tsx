import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../shared";

export const metadata: Metadata = buildMeta({
  title: "Визовая поддержка для граждан Узбекистана — PANTERA LUXE Ташкент",
  description:
    "Визовая поддержка из Ташкента: ОАЭ, Турция, Вьетнам, Египет, Индия. Помощь с оформлением виз, страховок, приглашений. ☎ +998 77 161 88 88",
  keywords: [
    "виза из Ташкента",
    "визовая поддержка Ташкент",
    "виза ОАЭ узбекистан",
    "виза Турция узбекистан",
    "visa support Tashkent",
    "виза Вьетнам",
    "виза Египет цена",
    "страховка для выезда",
    "оформление визы Ташкент",
    "безвизовые страны Узбекистан",
  ],
  path: "/visa",
});

const DESTINATIONS = [
  { flag: "🇦🇪", name: "ОАЭ",       href: "/visa/uae",    type: "Без визы",       days: "30 дней", price: "бесплатно", color: "#06b6d4" },
  { flag: "🇹🇷", name: "Турция",     href: "/visa/turkey", type: "Без визы",       days: "30 дней", price: "бесплатно", color: "#22c55e" },
  { flag: "🇪🇬", name: "Египет",     href: "/visa/egypt",  type: "Виза по прилёту", days: "30 дней", price: "$25",       color: "#f59e0b" },
  { flag: "🇻🇳", name: "Вьетнам",    href: "/visa/vietnam",type: "eVisa онлайн",   days: "45 дней", price: "$25",       color: "#8b5cf6" },
  { flag: "🇮🇳", name: "Индия",      href: "/visa/india",  type: "eVisa онлайн",   days: "60 дней", price: "$25–80",    color: "#f97316" },
  { flag: "🇹🇭", name: "Таиланд",    href: "/visa/thailand",type: "Без визы",      days: "30 дней", price: "бесплатно", color: "#22c55e" },
  { flag: "🇨🇳", name: "Китай",      href: "/visa/china",  type: "Без визы",       days: "30 дней", price: "бесплатно", color: "#ef4444" },
  { flag: "🇲🇻", name: "Мальдивы",   href: "/visa/maldives",type: "Виза по прилёту","days": "30 дней", price: "бесплатно", color: "#06b6d4" },
];

export default function VisaPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0d1b2a,#0f2d45)", padding: "100px 0 60px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <span className="section-tag" style={{ color: "#ffd166" }}>🛂 Виза</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, margin: "12px 0 16px" }}>
            Визовая поддержка из Ташкента
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 18, maxWidth: 560, margin: "0 auto 32px" }}>
            Актуальные требования 2025–2026 · Помощь с оформлением · Страховки
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 16, padding: "14px 32px" }}>Получить консультацию →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding: "52px 20px 80px" }}>

        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Направления</span>
          <h2 className="section-title">Визы для граждан Узбекистана — 2025</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 24 }}>
            {DESTINATIONS.map(d => (
              <a key={d.name} href={d.href} style={{ textDecoration: "none", background: "#fff", border: "1px solid #f1f5f9", borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{d.flag}</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#1e293b", flex: 1 }}>{d.name}</span>
                <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${d.color}18`, color: d.color, whiteSpace: "nowrap" }}>{d.type}</span>
                <span style={{ fontSize: 12, color: "#64748b", whiteSpace: "nowrap" }}>{d.days}</span>
                <span style={{ fontSize: 13, fontWeight: 800, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "2px 8px", borderRadius: 6, whiteSpace: "nowrap" }}>{d.price}</span>
                <span style={{ fontSize: 12, color: "#ff6b35", fontWeight: 700 }}>Гид →</span>
              </a>
            ))}
          </div>
        </section>

        <CTABlock title="Нужна помощь с визой?" />
      </div>
    </>
  );
}
