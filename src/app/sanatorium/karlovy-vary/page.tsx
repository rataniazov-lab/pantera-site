import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Карловы Вары лечение из Ташкента — санаторий Чехия от $1200 | PANTERA LUXE",
  description: "Лечение в Карловых Варах из Ташкента от $1200. Старейший бальнеологический курорт Европы. Минеральные воды, ЖКТ, обмен веществ. 10–21 ночей.",
  keywords: ["Карловы Вары санаторий", "лечение Карловы Вары", "Карловы Вары из Ташкента", "Karlovy Vary treatment Tashkent", "бальнеология Чехия", "минеральные воды Карловы Вары", "санаторий Чехия"],
  path: "/sanatorium/karlovy-vary",
});

const TREATMENTS = [
  { ico: "🥤", name: "Питьевое лечение",      desc: "13 минеральных источников. Каждый лечит разные органы. Курс — 3–4 стакана в день.", duration: "3 раза в день" },
  { ico: "🛁", name: "Минеральные ванны",      desc: "Углекислые, радоновые, жемчужные ванны. Улучшают кровообращение, нормализуют давление.", duration: "20–30 мин" },
  { ico: "💆", name: "Грязевые обёртывания",   desc: "Пелоидотерапия — лечебные грязи из Мёртвого моря и местных источников.", duration: "20 мин" },
  { ico: "🏊", name: "Гидротерапия",           desc: "Подводный душ-массаж, контрастные ванны, инхаляции.", duration: "30 мин" },
  { ico: "🩺", name: "Диагностика",            desc: "Полное обследование ЖКТ, эндоскопия, УЗИ. Немецкое оборудование.", duration: "1 день" },
];

const HOTELS = [
  { name: "Grandhotel Pupp 5★",     desc: "Легендарный отель — снимался в «Казино Рояль». Прямо на главной колоннаде.", price: "от $1 800 / 10 ночей" },
  { name: "Spa Hotel Olympia 4★",   desc: "Собственный санаторный центр, бассейн, отличная кухня.", price: "от $1 300 / 10 ночей" },
  { name: "Hotel Thermal 4★",       desc: "Прямо у крытой колоннады. Удобный доступ ко всем источникам.", price: "от $1 200 / 10 ночей" },
];

export default function KarlovyVaryPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0a1520,#0d2030)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/sanatorium" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Санатории</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>Карловы Вары</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            🇨🇿 Карловы Вары — лечение в Чехии
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 540, margin: "0 auto 10px" }}>
            Старейший бальнеологический курорт Европы · 13 минеральных источников · от $1 200
          </p>
          <p style={{ color: "rgba(200,220,255,0.7)", fontSize: 13, marginBottom: 28 }}>ЖКТ · Обмен веществ · Сердечно-сосудистые · Профилактика</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Забронировать →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>
      <div className="site-container" style={{ padding: "48px 20px 80px" }}>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Процедуры</span>
          <h2 className="section-title">Лечебные процедуры</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: 14, marginTop: 22 }}>
            {TREATMENTS.map(t => (
              <div key={t.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{t.ico}</div>
                <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 5 }}>{t.name}</h3>
                <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.55, marginBottom: 8 }}>{t.desc}</p>
                <span style={{ fontSize: 11, color: "#94a3b8" }}>⏱ {t.duration}</span>
              </div>
            ))}
          </div>
        </section>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Отели</span>
          <h2 className="section-title">Санатории и отели Карловых Вар</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 22 }}>
            {HOTELS.map(h => (
              <div key={h.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 4 }}>{h.name}</h3>
                  <p style={{ fontSize: 13, color: "#64748b" }}>{h.desc}</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "3px 10px", borderRadius: 6 }}>{h.price}</div>
                  <a className="btn-primary" href="/contacts" style={{ display: "inline-block", marginTop: 8, fontSize: 12, padding: "7px 16px" }}>Забронировать</a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/sanatorium",label:"Все санатории"},{href:"/sanatorium/naftalan",label:"Нафталан"},{href:"/sanatorium/turkey",label:"Медтуризм Турция"},{href:"/sanatorium/dead-sea",label:"Мёртвое море"},{href:"/visa",label:"Визы"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Хотите поехать в Карловы Вары?" />
      </div>
    </>
  );
}
