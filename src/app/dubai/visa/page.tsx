// src/app/dubai/visa/page.tsx
import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Виза в Дубай (ОАЭ) для граждан Узбекистана — не нужна 30 дней",
  description: "Виза в Дубай для граждан Узбекистана — не нужна, 30 дней автоматически. Что нужно для въезда в Дубай. Правила въезда 2025–2026. turytashkent.com",
  keywords: ["виза Дубай Узбекистан","нужна ли виза в Дубай","виза ОАЭ 2026","Dubai visa Uzbekistan","въезд в Дубай","Дубай без визы Узбекистан"],
  path: "/dubai/visa",
});

const STEPS = [
  { n:1, t:"Купите авиабилет",       d:"Прямой рейс Ташкент–Дубай ~4 часа. Flydubai, Uzbekistan Airways, Air Arabia." },
  { n:2, t:"Забронируйте отель",      d:"Бронь отеля понадобится на паспортном контроле. Мы помогаем с бронированием." },
  { n:3, t:"Подготовьте документы",   d:"Загранпаспорт (6+ месяцев), обратный билет, наличные от $100 или карта." },
  { n:4, t:"Прилетите в Дубай",       d:"На паспортном контроле получите штамп на 30 дней автоматически — бесплатно." },
];

const DOCS = [
  "Загранпаспорт (срок действия 6+ месяцев)",
  "Обратный авиабилет",
  "Бронь отеля (распечатать или показать на телефоне)",
  "Наличные $100+ или банковская карта",
  "Медицинская страховка (рекомендуется)",
];

const TIPS = [
  { t:"Продление визы",   d:"Можно продлить ещё на 30 дней прямо в ОАЭ за 600 AED (~$165) в иммиграционном офисе." },
  { t:"Дресс-код",        d:"В аэропорту и торговых центрах — обычная одежда. На пляже — купальник. В мечети — закрытая одежда." },
  { t:"Рамадан",          d:"Во время Рамадана нельзя есть и пить публично в дневное время. Рестораны работают." },
  { t:"Запрещено",        d:"Нельзя ввозить наркотики (смертная казнь), порнографию, некоторые лекарства без рецепта." },
  { t:"Валюта",           d:"Дирхам ОАЭ (AED). 1$ = 3.67 AED. Обменники в аэропорту и торговых центрах." },
];

export default function DubaiVisaPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0d1b2a,#1a3550)", padding:"100px 0 56px" }}>
        <div className="site-container" style={{ textAlign:"center" }}>
          <nav style={{ marginBottom:16, fontSize:13, color:"rgba(255,255,255,0.55)" }}>
            <a href="/dubai" style={{ color:"rgba(255,255,255,0.55)", textDecoration:"none" }}>Дубай</a>
            <span style={{ margin:"0 8px" }}>›</span>
            <span style={{ color:"#ffd166" }}>Виза</span>
          </nav>
          <h1 style={{ color:"#fff", fontSize:"clamp(1.8rem,4vw,2.6rem)", fontWeight:900, margin:"0 0 14px" }}>
            🇦🇪 Виза в Дубай для граждан Узбекистана
          </h1>
          <div style={{ display:"inline-block", background:"rgba(34,197,94,0.2)", border:"1px solid rgba(34,197,94,0.4)", color:"#4ade80", fontSize:16, fontWeight:800, padding:"8px 24px", borderRadius:30, margin:"0 0 24px" }}>
            ✅ Виза НЕ нужна — 30 дней бесплатно
          </div>
          <p style={{ color:"rgba(255,255,255,0.7)", fontSize:14, maxWidth:480, margin:"0 auto 28px" }}>
            С 2024 года граждане Узбекистана въезжают в ОАЭ без визы
          </p>
          <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <a className="btn-primary" href="/dubai/tours" style={{ fontSize:15, padding:"13px 28px", textDecoration:"none" }}>Туры в Дубай →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding:"48px 20px 80px" }}>
        <section style={{ marginBottom:52 }}>
          <span className="section-tag">Пошагово</span>
          <h2 className="section-title">Въезд в ОАЭ — 4 простых шага</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:12, marginTop:22 }}>
            {STEPS.map(s => (
              <div key={s.n} style={{ background:"#fff", border:"1px solid #e8eef5", borderRadius:12, padding:"16px 20px", display:"flex", gap:16 }}>
                <div style={{ width:34, height:34, background:"linear-gradient(135deg,#ff6b35,#ff8c42)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:14, fontWeight:900, flexShrink:0 }}>{s.n}</div>
                <div><h3 style={{ fontSize:14, fontWeight:800, marginBottom:4 }}>{s.t}</h3><p style={{ fontSize:13, color:"#64748b", lineHeight:1.5 }}>{s.d}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom:52 }}>
          <h2 className="section-title">Необходимые документы</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:10, marginTop:20 }}>
            {DOCS.map(d => (
              <div key={d} style={{ background:"rgba(34,197,94,0.07)", border:"1px solid rgba(34,197,94,0.2)", borderRadius:10, padding:"12px 16px", display:"flex", gap:10 }}>
                <span style={{ color:"#16a34a" }}>✓</span>
                <span style={{ fontSize:13, fontWeight:600 }}>{d}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom:52 }}>
          <h2 className="section-title">Важные детали</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:10, marginTop:20 }}>
            {TIPS.map(t => (
              <div key={t.t} style={{ background:"#fff", border:"1px solid #e8eef5", borderRadius:12, padding:"14px 18px", display:"flex", gap:14 }}>
                <span style={{ flexShrink:0 }}>ℹ️</span>
                <div><strong style={{ fontSize:14 }}>{t.t}: </strong><span style={{ fontSize:13, color:"#475569" }}>{t.d}</span></div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:48 }}>
          {[{href:"/dubai",label:"О Дубае"},{href:"/dubai/tours",label:"Туры в Дубай"},{href:"/dubai/hotels",label:"Отели Дубая"},{href:"/visa",label:"Все визы"},{href:"/cruise/uae",label:"Круиз ОАЭ"}].map(l => (
            <a key={l.href} href={l.href} style={{ background:"#f1f5f9", color:"#334155", fontSize:13, fontWeight:600, padding:"7px 14px", borderRadius:20, textDecoration:"none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Готовы лететь в Дубай?" />
      </div>
    </>
  );
}
