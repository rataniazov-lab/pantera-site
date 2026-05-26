// src/app/hot-tours/page.tsx
import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE, TG } from "../shared";

export const metadata: Metadata = buildMeta({
  title: "Горящие туры из Ташкента — дешёвые туры последней минуты | PANTERA LUXE",
  description: "Горящие туры из Ташкента. Дубай от $299, Турция от $199, Египет от $249. Последняя минута — скидки до 50%. Вылет через 1–7 дней. ☎ +998 77 161 88 88",
  keywords: [
    "горящие туры Ташкент","горящие туры из Ташкента","дешёвые туры Ташкент",
    "туры последней минуты","hot tours Tashkent","горящий тур Дубай","горящий тур Турция",
    "туры со скидкой Ташкент","cheap tours Tashkent 2026",
  ],
  path: "/hot-tours",
});

const faqData = [
  { q:"Что такое горящий тур?", a:"Горящий тур — это тур с большой скидкой (до 50%), который нужно купить срочно. Обычно вылет через 1–7 дней. Отели заполняют оставшиеся места по сниженным ценам." },
  { q:"Как купить горящий тур в Ташкенте?", a:"Позвоните нам по номеру +998 77 161 88 88 или напишите в Telegram @vilet_support. Мы сразу проверим актуальные горящие предложения и забронируем." },
  { q:"Какие направления бывают в горящих турах?", a:"Самые популярные: Дубай, Анталья, Стамбул, Шарм Эль Шейх, Тбилиси. Иногда появляются предложения на Мальдивы и Таиланд." },
];

const HOT_TOURS = [
  { dest:"🇦🇪 Дубай",   nights:"5 ночей",  hotel:"Jumeirah Beach Hotel 5★", price:"$299", old:"$499", days:"Вылет через 3 дня", hot:true  },
  { dest:"🇹🇷 Анталья", nights:"7 ночей",  hotel:"Rixos Sungate 5★ All incl", price:"$349", old:"$599", days:"Вылет через 2 дня", hot:true  },
  { dest:"🇪🇬 Шарм",    nights:"7 ночей",  hotel:"Baron Resort 5★",          price:"$279", old:"$420", days:"Вылет через 5 дней", hot:false },
  { dest:"🇬🇪 Тбилиси", nights:"4 ночи",   hotel:"Rooms Hotel Tbilisi 5★",   price:"$189", old:"$310", days:"Вылет через 4 дня", hot:false },
  { dest:"🇹🇷 Стамбул", nights:"4 ночи",   hotel:"Divan Hotel 5★",           price:"$220", old:"$380", days:"Вылет через 6 дней", hot:false },
];

export default function HotToursPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage",
        mainEntity: faqData.map(f => ({
          "@type":"Question", name:f.q,
          acceptedAnswer:{"@type":"Answer", text:f.a}
        }))
      })}} />

      <section style={{ background:"linear-gradient(135deg,#1a0000,#3d0000)", padding:"100px 0 56px" }}>
        <div className="site-container" style={{ textAlign:"center" }}>
          <div style={{ display:"inline-block", background:"#ff0000", color:"#fff", fontSize:12,
            fontWeight:800, padding:"4px 16px", borderRadius:20, marginBottom:12, animation:"pulse 1.5s infinite" }}>
            🔥 ГОРЯЩИЕ ТУРЫ
          </div>
          <h1 style={{ color:"#fff", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, margin:"0 0 14px" }}>
            Горящие туры из Ташкента
          </h1>
          <p style={{ color:"rgba(255,255,255,0.8)", fontSize:16, maxWidth:520, margin:"0 auto 12px" }}>
            Скидки до 50% · Вылет через 1–7 дней · Лучшие отели 5★
          </p>
          <p style={{ color:"rgba(255,180,180,0.8)", fontSize:13, marginBottom:28 }}>
            ⚡ Количество мест ограничено — звоните сразу!
          </p>
          <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <a href={`tel:${PHONE}`} className="btn-primary"
              style={{ fontSize:16, padding:"14px 32px", textDecoration:"none", background:"#ff0000" }}>
              📞 Позвонить прямо сейчас
            </a>
            <a href={TG} target="_blank" rel="noopener noreferrer" className="btn-outline"
              style={{ textDecoration:"none" }}>
              💬 Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding:"48px 20px 80px" }}>

        <section style={{ marginBottom:56 }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:22, flexWrap:"wrap", gap:10 }}>
            <div>
              <span className="section-tag">Горящие туры</span>
              <h2 className="section-title" style={{ marginTop:6 }}>Актуальные предложения</h2>
            </div>
            <div style={{ background:"rgba(255,0,0,0.08)", border:"1px solid rgba(255,0,0,0.2)",
              borderRadius:10, padding:"8px 16px", fontSize:12, color:"#dc2626", fontWeight:700 }}>
              🔄 Обновлено сегодня
            </div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {HOT_TOURS.map(t => (
              <div key={t.dest} style={{ background:"#fff",
                border:`1px solid ${t.hot ? "rgba(255,0,0,0.25)" : "#e8eef5"}`,
                borderRadius:14, padding:"18px 22px",
                display:"flex", alignItems:"center", justifyContent:"space-between",
                gap:16, flexWrap:"wrap", position:"relative", overflow:"hidden" }}>
                {t.hot && (
                  <div style={{ position:"absolute", top:0, left:0, background:"#ff0000",
                    color:"#fff", fontSize:10, fontWeight:800, padding:"3px 12px",
                    borderRadius:"0 0 8px 0" }}>🔥 ХИТ</div>
                )}
                <div style={{ paddingTop: t.hot ? 8 : 0 }}>
                  <h3 style={{ fontSize:16, fontWeight:800, marginBottom:4 }}>{t.dest} — {t.nights}</h3>
                  <p style={{ fontSize:13, color:"#64748b", marginBottom:6 }}>🏨 {t.hotel}</p>
                  <span style={{ background:"rgba(255,0,0,0.08)", color:"#dc2626",
                    fontSize:12, fontWeight:700, padding:"2px 10px", borderRadius:20 }}>
                    ⏰ {t.days}
                  </span>
                </div>
                <div style={{ textAlign:"right", flexShrink:0 }}>
                  <div style={{ fontSize:13, color:"#94a3b8", textDecoration:"line-through",
                    textDecorationColor:"#9b3030" }}>{t.old}</div>
                  <div style={{ fontSize:24, fontWeight:900, color:"#ff0000",
                    background:"rgba(255,0,0,0.08)", padding:"3px 12px", borderRadius:8 }}>{t.price}</div>
                  <a className="btn-primary" href={`tel:${PHONE}`}
                    style={{ display:"inline-block", marginTop:10, fontSize:13,
                      padding:"9px 20px", textDecoration:"none", background:"#ff0000" }}>
                    Забронировать
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom:56 }}>
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Вопросы о горящих турах</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:12, marginTop:22 }}>
            {faqData.map(f => (
              <div key={f.q} style={{ background:"#fff", border:"1px solid #e8eef5",
                borderRadius:12, padding:"18px 22px" }}>
                <h3 style={{ fontSize:15, fontWeight:800, marginBottom:8, color:"#1e293b" }}>
                  ❓ {f.q}
                </h3>
                <p style={{ fontSize:13, color:"#475569", lineHeight:1.65 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom:48 }}>
          <h2 style={{ fontSize:18, fontWeight:800, marginBottom:14 }}>Смотрите также</h2>
          <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
            {[
              {href:"/dubai",   label:"🇦🇪 Дубай"},
              {href:"/turkey",  label:"🇹🇷 Турция"},
              {href:"/egypt",   label:"🇪🇬 Египет"},
              {href:"/georgia", label:"🇬🇪 Грузия"},
              {href:"/visa",    label:"🛂 Визы"},
            ].map(l => (
              <a key={l.href} href={l.href} style={{ background:"#f1f5f9", color:"#334155",
                fontSize:13, fontWeight:600, padding:"7px 14px", borderRadius:20, textDecoration:"none" }}>
                {l.label}
              </a>
            ))}
          </div>
        </section>

        <CTABlock title="Нашли горящий тур — бронируйте сразу!" />
      </div>
    </>
  );
}
