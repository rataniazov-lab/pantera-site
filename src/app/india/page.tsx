// src/app/india/page.tsx
import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../shared";

export const metadata: Metadata = buildMeta({
  title: "Туры в Индию из Ташкента — Гоа, Дели, Агра от $550 | PANTERA LUXE",
  description: "Туры в Индию из Ташкента от $550. Гоа — пляжи, Дели — история, Агра — Тадж-Махал, Раджастан. eVisa онлайн $25. ☎ +998 77 161 88 88",
  keywords: ["туры в Индию из Ташкента","Гоа тур","Индия тур цена","India tours Tashkent","Тадж-Махал тур","Дели Агра тур","виза Индия Узбекистан"],
  path: "/india",
});

const REGIONS = [
  { name:"Гоа",      desc:"Лучшие пляжи Индии. Северный Гоа — вечеринки. Южный Гоа — спокойствие и роскошь.", price:"от $550", emoji:"🏖️" },
  { name:"Дели + Агра", desc:"Тадж-Махал на рассвете — мечта каждого путешественника. Красный форт, рынок Чандни Чоук.", price:"от $480", emoji:"🕌" },
  { name:"Раджастан",desc:"Дворцы Джайпура, Джодхпура, Удайпура. Пустыня Тар, верблюды, закаты.", price:"от $620", emoji:"🏰" },
  { name:"Керала",   desc:"Тропические бэкуотеры, аюрведические спа, слоновьи фестивали, чайные плантации.", price:"от $590", emoji:"🌴" },
];

const TOURS = [
  { name:"Гоа 7 ночей",          hotel:"Taj Exotica Resort 5★",  price:"$550", old:"$745" },
  { name:"Золотой треугольник",   hotel:"Дели + Агра + Джайпур",  price:"$480", old:"$650" },
  { name:"Гоа + Дели 10 ночей",  hotel:"4★ по маршруту",          price:"$750", old:"$1 015" },
];

export default function IndiaPage() {
  return (
    <>
      <section style={{ background:"linear-gradient(135deg,#1a0800,#3d1500)", padding:"100px 0 56px" }}>
        <div className="site-container" style={{ textAlign:"center" }}>
          <span className="section-tag" style={{ color:"#ffd166" }}>🇮🇳 Индия</span>
          <h1 style={{ color:"#fff", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:900, margin:"12px 0 14px" }}>
            Туры в Индию из Ташкента
          </h1>
          <p style={{ color:"rgba(255,255,255,0.8)", fontSize:16, maxWidth:520, margin:"0 auto 28px" }}>
            Гоа · Тадж-Махал · Раджастан · eVisa $25 · от $480
          </p>
          <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize:15, padding:"13px 28px", textDecoration:"none" }}>Подобрать тур →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding:"48px 20px 80px" }}>
        <div style={{ display:"inline-block", background:"rgba(139,92,246,0.1)", border:"1px solid rgba(139,92,246,0.3)",
          borderRadius:10, padding:"10px 18px", marginBottom:40, fontSize:13, color:"#5b21b6" }}>
          🌐 <strong>eVisa онлайн — $25</strong> · Оформляется за 72 часа · Без посольства ·{" "}
          <a href="/visa/india" style={{ color:"#7c3aed" }}>Инструкция →</a>
        </div>

        <section style={{ marginBottom:52 }}>
          <span className="section-tag">Регионы</span>
          <h2 className="section-title">Куда поехать в Индии</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:14, marginTop:22 }}>
            {REGIONS.map(r => (
              <div key={r.name} style={{ background:"#fff", border:"1px solid #e8eef5", borderRadius:14, padding:"20px" }}>
                <div style={{ fontSize:28, marginBottom:10 }}>{r.emoji}</div>
                <h3 style={{ fontSize:15, fontWeight:800, marginBottom:8 }}>{r.name}</h3>
                <p style={{ fontSize:13, color:"#64748b", lineHeight:1.6, marginBottom:12 }}>{r.desc}</p>
                <span style={{ fontSize:14, fontWeight:800, color:"#bf4b18",
                  background:"rgba(255,205,115,0.55)", padding:"3px 10px", borderRadius:6 }}>{r.price}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom:52 }}>
          <span className="section-tag">Туры</span>
          <h2 className="section-title">Туры в Индию — цены 2026</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:14, marginTop:22 }}>
            {TOURS.map(t => (
              <div key={t.name} style={{ background:"#fff", border:"1px solid #e8eef5", borderRadius:14,
                padding:"18px 22px", display:"flex", alignItems:"center",
                justifyContent:"space-between", gap:16, flexWrap:"wrap" }}>
                <div>
                  <h3 style={{ fontSize:15, fontWeight:800, marginBottom:4 }}>{t.name}</h3>
                  <p style={{ fontSize:13, color:"#64748b" }}>🏨 {t.hotel}</p>
                </div>
                <div style={{ textAlign:"right", flexShrink:0 }}>
                  <div style={{ fontSize:12, color:"#94a3b8", textDecoration:"line-through",
                    textDecorationColor:"#9b3030" }}>{t.old}</div>
                  <div style={{ fontSize:20, fontWeight:900, color:"#bf4b18",
                    background:"rgba(255,205,115,0.55)", padding:"2px 10px", borderRadius:6 }}>{t.price}</div>
                  <a className="btn-primary" href="/contacts"
                    style={{ display:"inline-block", marginTop:8, fontSize:12,
                      padding:"7px 16px", textDecoration:"none" }}>
                    Забронировать
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:48 }}>
          {[{href:"/visa/india",label:"Виза Индия"},{href:"/thailand",label:"Таиланд"},{href:"/vietnam",label:"Вьетнам"},{href:"/maldives",label:"Мальдивы"}].map(l => (
            <a key={l.href} href={l.href} style={{ background:"#f1f5f9", color:"#334155",
              fontSize:13, fontWeight:600, padding:"7px 14px", borderRadius:20, textDecoration:"none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Готовы в Индию?" />
      </div>
    </>
  );
}
