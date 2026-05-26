import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Железноводск санаторий из Ташкента — Машук, Плаза СПА, Источник | PANTERA LUXE",
  description: "Санатории Железноводска из Ташкента. «Машук Аква-Терм», «Плаза СПА 4★», «Источник 5★». Даты заезда 10.06–24.06.2026. Цены от ~$2 470 / 2 чел.",
  keywords: ["Железноводск санаторий", "Машук Аква-Терм", "Плаза СПА Железноводск", "КМВ санаторий из Ташкента", "Кавказские минеральные воды лечение", "санаторий Россия Ташкент"],
  path: "/sanatorium/zheleznov_odsk",
});

const HOTELS = [
  {
    name: "«Машук Аква-Терм» санаторий",
    includes: "Проживание, 3-разовое питание «шведский стол», санаторно-курортное лечение, бассейн",
    rooms: [
      { type: "Стандарт 2-мест. 1-комн. (корпус А,Б)", dates: "10.06–20.06.2026", price: "~$2 470" },
      { type: "Джуниор Сюит 2-мест. 1-комн. (корпус С)", dates: "10.06–20.06.2026", price: "~$2 690" },
      { type: "Стандарт 2-мест. 1-комн. (корпус А,Б)", dates: "10.06–24.06.2026", price: "~$3 470" },
      { type: "Джуниор Сюит 2-мест. 1-комн. (корпус С)", dates: "10.06–24.06.2026", price: "~$3 750" },
    ],
  },
  {
    name: "«Плаза СПА Железноводск» санаторий 4★",
    includes: "САНКУР базовый: проживание, питание «шведский стол», лечение. Бесплатно: бассейн, тренажёрный зал, детская комната, банный комплекс, Wi-Fi",
    rooms: [
      { type: "Стандарт 2-мест. 1-комн.", dates: "10.06–20.06.2026", price: "~$2 555" },
      { type: "Стандарт 2-мест. 1-комн. (Бештау)", dates: "10.06–20.06.2026", price: "~$2 730" },
      { type: "Стандарт 2-мест. 1-комн.", dates: "10.06–24.06.2026", price: "~$3 560" },
      { type: "Стандарт 2-мест. 1-комн. (Бештау)", dates: "10.06–24.06.2026", price: "~$3 805" },
    ],
  },
  {
    name: "«Источник» санаторий 5★",
    includes: "Проживание, 3-разовое питание (шв.стол), лечение по программе, Wi-Fi, анимационные программы",
    rooms: [
      { type: "Джуниор 2-мест. 1-комн. (вид на Бештау)", dates: "10.06–20.06.2026", price: "~$3 070" },
      { type: "Джуниор 2-мест. 1-комн. (вид на Бештау)", dates: "10.06–24.06.2026", price: "~$4 300" },
    ],
  },
];

const TREATMENTS = [
  { ico: "💧", name: "Минеральные ванны",   desc: "Углекислые, сероводородные, радоновые. КМВ — лучшая бальнеология России." },
  { ico: "🥤", name: "Питьевое лечение",    desc: "Минеральные источники Слав ян овская, Смирновская — лечат ЖКТ." },
  { ico: "💆", name: "Массаж и физио",      desc: "Грязелечение, магнитотерапия, ЛФК. Полный комплекс процедур." },
  { ico: "🏊", name: "Бассейны",            desc: "Крытые и открытые бассейны с минеральной водой в каждом санатории." },
];

export default function Zheleznov_odskPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0a200a,#0d2d0d)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/sanatorium" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Санатории</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>Железноводск</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            🇷🇺 Железноводск — санатории КМВ
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 540, margin: "0 0 10px" }}>
            Машук Аква-Терм · Плаза СПА 4★ · Источник 5★ · Даты заезда: июнь 2026
          </p>
          <p style={{ color: "rgba(200,255,200,0.7)", fontSize: 13, marginBottom: 28 }}>
            Трансфер Бизнес-класс (Toyota Camry) аэропорт–отель–аэропорт включён · ~$165
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Забронировать →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>
      <div className="site-container" style={{ padding: "48px 20px 80px" }}>

        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Лечение</span>
          <h2 className="section-title">Что лечат в Железноводске</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 14, marginTop: 22 }}>
            {TREATMENTS.map(t => (
              <div key={t.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 12, padding: "18px" }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{t.ico}</div>
                <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 5 }}>{t.name}</h3>
                <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.55 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Цены 2026</span>
          <h2 className="section-title">Санатории и стоимость</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 24 }}>
            {HOTELS.map(h => (
              <div key={h.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 16, overflow: "hidden" }}>
                <div style={{ background: "linear-gradient(135deg,#0d1b2a,#1a3550)", padding: "14px 20px" }}>
                  <h3 style={{ color: "#fff", fontSize: 15, fontWeight: 800 }}>{h.name}</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {h.rooms.map((r, i) => (
                    <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 1fr", gap: 16, padding: "12px 20px", background: i % 2 === 0 ? "#fff" : "#f8fafc", borderBottom: i < h.rooms.length - 1 ? "1px solid #f1f5f9" : "none", alignItems: "center" }}>
                      <span style={{ fontSize: 13, color: "#1e293b" }}>{r.type}</span>
                      <span style={{ fontSize: 12, color: "#64748b" }}>{r.dates}</span>
                      <span style={{ fontSize: 15, fontWeight: 900, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "2px 8px", borderRadius: 6, textAlign: "center" }}>{r.price}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "12px 20px", background: "rgba(34,197,94,0.05)", borderTop: "1px solid rgba(34,197,94,0.15)" }}>
                  <p style={{ fontSize: 12, color: "#166534" }}><strong>Включено:</strong> {h.includes}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(59,130,246,0.07)", border: "1px solid rgba(59,130,246,0.18)", borderRadius: 12, padding: "14px 18px", marginTop: 16 }}>
            <p style={{ fontSize: 13, color: "#1e40af" }}>🚗 <strong>Трансфер:</strong> Аэропорт–отель–аэропорт, бизнес-класс Toyota Camry — ~$165. Цены указаны на 2 человек.</p>
          </div>
        </section>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/sanatorium",label:"Все санатории"},{href:"/sanatorium/naftalan",label:"Нафталан"},{href:"/sanatorium/karlovy-vary",label:"Карловы Вары"},{href:"/sanatorium/dead-sea",label:"Мёртвое море"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Хотите поехать в Железноводск?" />
      </div>
    </>
  );
}
