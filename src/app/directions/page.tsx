// src/app/directions/page.tsx
import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../shared";

export const metadata: Metadata = buildMeta({
  title: "Все направления из Ташкента — туры, круизы, санатории | PANTERA LUXE",
  description: "Все туристические направления из Ташкента. Дубай, Турция, Египет, Мальдивы, Грузия, Таиланд, Вьетнам. Круизы, санатории, визовая поддержка. PANTERA LUXE — turytashkent.com",
  keywords: [
    "направления из Ташкента","туры из Ташкента все направления",
    "куда полететь из Ташкента","турагентство Ташкент направления",
    "Дубай Турция Египет Мальдивы из Ташкента",
  ],
  path: "/directions",
});

const GROUPS = [
  {
    label: "🏖️ Пляжный отдых",
    color: "#06b6d4",
    items: [
      { flag:"🇦🇪", name:"Дубай",         href:"/dubai",         price:"от $499", badge:"" },
      { flag:"🇪🇬", name:"Египет",        href:"/egypt",         price:"от $380", badge:"" },
      { flag:"🇹🇷", name:"Анталья",       href:"/turkey/antalya",price:"от $450", badge:"" },
      { flag:"🇲🇻", name:"Мальдивы",      href:"/maldives",      price:"от $1200",badge:"" },
      { flag:"🇹🇭", name:"Таиланд",       href:"/thailand",      price:"от $650", badge:"" },
      { flag:"🇻🇳", name:"Вьетнам",       href:"/vietnam",       price:"от $600", badge:"" },
    ],
  },
  {
    label: "🏙️ Города и культура",
    color: "#8b5cf6",
    items: [
      { flag:"🇹🇷", name:"Стамбул",       href:"/turkey/istanbul",   price:"от $350", badge:"" },
      { flag:"🇹🇷", name:"Каппадокия",    href:"/turkey/cappadocia", price:"от $599", badge:"" },
      { flag:"🇬🇪", name:"Грузия",        href:"/georgia",            price:"от $290", badge:"" },
      { flag:"🇦🇿", name:"Баку",          href:"/azerbaijan",         price:"от $250", badge:"" },
      { flag:"🇶🇦", name:"Катар",         href:"/qatar",              price:"Доха",    badge:"" },
      { flag:"🇮🇳", name:"Индия",         href:"/india",              price:"от $480", badge:"" },
    ],
  },
  {
    label: "🏥 Лечение и санатории",
    color: "#22c55e",
    items: [
      { flag:"🇦🇿", name:"Нафталан",      href:"/sanatorium/naftalan",      price:"от $350",  badge:"" },
      { flag:"🇨🇿", name:"Карловы Вары",  href:"/sanatorium/karlovy-vary",  price:"от $1200", badge:"" },
      { flag:"🇷🇺", name:"Железноводск",  href:"/sanatorium/zheleznovodsk", price:"от $2470", badge:"" },
      { flag:"🇹🇷", name:"Медтуризм",     href:"/turkey/medical",           price:"от $500",  badge:"" },
      { flag:"🇮🇱", name:"Мёртвое море",  href:"/sanatorium/dead-sea",      price:"от $900",  badge:"" },
      { flag:"🇬🇪", name:"Боржоми",       href:"/sanatorium/borjomi",       price:"от $280",  badge:"" },
    ],
  },
  {
    label: "🚢 Круизы",
    color: "#0ea5e9",
    items: [
      { flag:"🇦🇪", name:"ОАЭ и залив",    href:"/cruise/uae",           price:"от $499", badge:"" },
      { flag:"🌊", name:"Средиземноморье", href:"/cruise/mediterranean", price:"от $599", badge:"" },
      { flag:"🌏", name:"Азия",            href:"/cruise/asia",          price:"от $685", badge:"" },
    ],
  },
  {
    label: "🇺🇿 Шёлковый путь",
    color: "#f59e0b",
    items: [
      { flag:"🏙️", name:"Ташкент",   href:"/uzbekistan-tours/tashkent",  price:"от $45",  badge:"" },
      { flag:"🕌", name:"Самарканд", href:"/uzbekistan-tours/samarkand", price:"от $120", badge:"" },
      { flag:"🏛️", name:"Бухара",    href:"/uzbekistan-tours/bukhara",   price:"от $110", badge:"" },
      { flag:"🏰", name:"Хива",      href:"/uzbekistan-tours/khiva",     price:"от $90",  badge:"" },
      { flag:"🌊", name:"Муйнак",    href:"/uzbekistan-tours/muynak",    price:"от $95",  badge:"" },
      { flag:"🛤️", name:"Весь маршрут", href:"/uzbekistan-tours/silk-road", price:"от $590", badge:"" },
    ],
  },
  {
    label: "🛂 Визовая поддержка",
    color: "#ff6b35",
    items: [
      { flag:"🇦🇪", name:"ОАЭ",      href:"/visa/uae",     price:"", badge:"без визы" },
      { flag:"🇹🇷", name:"Турция",   href:"/visa/turkey",  price:"", badge:"без визы" },
      { flag:"🇨🇳", name:"Китай",    href:"/visa/china",   price:"", badge:"без визы" },
      { flag:"🇹🇭", name:"Таиланд",  href:"/visa/thailand",price:"", badge:"без визы" },
      { flag:"🇪🇬", name:"Египет",   href:"/visa/egypt",   price:"$25", badge:"по прилёту" },
      { flag:"🇻🇳", name:"Вьетнам",  href:"/visa/vietnam", price:"$25", badge:"eVisa" },
      { flag:"🇮🇳", name:"Индия",    href:"/visa/india",   price:"$25", badge:"eVisa" },
      { flag:"🇲🇻", name:"Мальдивы", href:"/visa/maldives",price:"",   badge:"без визы" },
    ],
  },
];

const BADGE_COLORS: Record<string, { bg: string; color: string }> = {
  "без визы":   { bg:"rgba(34,197,94,0.15)",  color:"#15803d" },
  "по прилёту": { bg:"rgba(245,158,11,0.15)", color:"#92400e" },
  "eVisa":      { bg:"rgba(139,92,246,0.15)", color:"#6d28d9" },
};

export default function DirectionsPage() {
  return (
    <>
      <section style={{ background:"linear-gradient(135deg,#0d1b2a,#1a3550)", padding:"100px 0 48px" }}>
        <div className="site-container" style={{ textAlign:"center" }}>
          <span className="section-tag" style={{ color:"#ffd166" }}>🌍 Направления</span>
          <h1 style={{ color:"#fff", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, margin:"12px 0 14px" }}>
            Все направления из Ташкента
          </h1>
          <p style={{ color:"rgba(255,255,255,0.75)", fontSize:16, maxWidth:560, margin:"0 auto 28px" }}>
            50+ направлений · Пляжный отдых · Города · Лечение · Круизы · Шёлковый путь
          </p>
          <a className="btn-primary" href="/contacts"
            style={{ fontSize:15, padding:"13px 32px", textDecoration:"none" }}>
            Подобрать тур →
          </a>
        </div>
      </section>

      <div className="site-container" style={{ padding:"48px 20px 80px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:20 }}>
          {GROUPS.map(group => (
            <div key={group.label} style={{
              background:"#fff", border:"1px solid #e8eef5",
              borderRadius:16, overflow:"hidden",
              boxShadow:"0 2px 12px rgba(0,0,0,0.06)",
            }}>
              {/* Header */}
              <div style={{
                background:`${group.color}15`,
                borderBottom:`2px solid ${group.color}40`,
                padding:"14px 18px",
              }}>
                <h2 style={{ fontSize:15, fontWeight:800, color:"#1e293b", margin:0 }}>
                  {group.label}
                </h2>
              </div>

              {/* Items */}
              <div style={{ padding:"12px 14px", display:"flex", flexDirection:"column", gap:6 }}>
                {group.items.map(item => (
                  <a key={item.name} href={item.href} style={{
                    display:"flex", alignItems:"center", justifyContent:"space-between",
                    padding:"8px 10px", borderRadius:10,
                    background:"#f8fafc", textDecoration:"none",
                    transition:"background 0.15s",
                  }}>
                    <span style={{ fontSize:14, color:"#1e293b", display:"flex", alignItems:"center", gap:8 }}>
                      <span style={{ fontSize:18 }}>{item.flag}</span>
                      {item.name}
                    </span>
                    <span style={{ display:"flex", alignItems:"center", gap:6, flexShrink:0 }}>
                      {item.badge && (
                        <span style={{
                          fontSize:10, fontWeight:700, padding:"2px 7px", borderRadius:20,
                          background: BADGE_COLORS[item.badge]?.bg || "#f1f5f9",
                          color: BADGE_COLORS[item.badge]?.color || "#475569",
                        }}>
                          {item.badge}
                        </span>
                      )}
                      {item.price && (
                        <span style={{ fontSize:12, fontWeight:700, color:group.color }}>
                          {item.price}
                        </span>
                      )}
                      <span style={{ fontSize:12, color:"#94a3b8" }}>→</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop:48 }}>
          <CTABlock title="Не нашли нужное направление?" />
        </div>
      </div>
    </>
  );
}
