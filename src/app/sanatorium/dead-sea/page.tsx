import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Мёртвое море лечение из Ташкента — псориаз, дерматология от $900 | PANTERA LUXE",
  description: "Лечение на Мёртвом море из Ташкента от $900. Псориаз, атопический дерматит, артрит. Солевые ванны и грязи. Израиль, Иордания.",
  keywords: ["Мёртвое море лечение", "псориаз Мёртвое море", "Dead Sea treatment Tashkent", "лечение кожных болезней Израиль", "Мёртвое море тур", "грязи Мёртвого моря"],
  path: "/sanatorium/dead-sea",
});

const CONDITIONS = [
  { ico: "🔴", name: "Псориаз",              desc: "Мёртвое море — признанный мировой стандарт лечения псориаза. 4-недельный курс даёт ремиссию на 6–12 месяцев." },
  { ico: "🟡", name: "Атопический дерматит", desc: "Соль, солнце и грязи значительно снижают воспаление и зуд." },
  { ico: "🟢", name: "Артрит и суставы",     desc: "Высокая концентрация минералов в воде — природный противовоспалительный эффект." },
  { ico: "🔵", name: "Витилиго",             desc: "Солнечная терапия в сочетании с купанием даёт положительные результаты." },
];

const RESORTS = [
  { name: "Ein Bokek (Израиль)",   desc: "Главный курорт. Десятки отелей 4★–5★. Лучшая медицинская база.", price: "от $900 / 7 ночей" },
  { name: "Sweimeh (Иордания)",    desc: "Тот же берег, в 2 раза дешевле. Отели Movenpick, Kempinski.", price: "от $650 / 7 ночей" },
];

export default function DeadSeaPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0a1520,#001528)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/sanatorium" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Санатории</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>Мёртвое море</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            🌊 Мёртвое море — лечение кожи и суставов
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 540, margin: "0 auto 10px" }}>
            Самое солёное море мира · Псориаз · Дерматит · Артрит · от $650
          </p>
          <p style={{ color: "rgba(200,220,255,0.7)", fontSize: 13, marginBottom: 28 }}>Израиль или Иордания · Мировой стандарт лечения псориаза</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Забронировать →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>
      <div className="site-container" style={{ padding: "48px 20px 80px" }}>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Показания</span>
          <h2 className="section-title">Что лечат на Мёртвом море</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 14, marginTop: 22 }}>
            {CONDITIONS.map(c => (
              <div key={c.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{c.ico}</div>
                <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 6 }}>{c.name}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.55 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Курорты</span>
          <h2 className="section-title">Израиль или Иордания?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 22 }}>
            {RESORTS.map(r => (
              <div key={r.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 4 }}>{r.name}</h3>
                  <p style={{ fontSize: 13, color: "#64748b" }}>{r.desc}</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "3px 10px", borderRadius: 6 }}>{r.price}</div>
                  <a className="btn-primary" href="/contacts" style={{ display: "inline-block", marginTop: 8, fontSize: 12, padding: "7px 16px" }}>Забронировать</a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/sanatorium",label:"Все санатории"},{href:"/sanatorium/naftalan",label:"Нафталан"},{href:"/sanatorium/karlovy-vary",label:"Карловы Вары"},{href:"/sanatorium/turkey",label:"Медтуризм Турция"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Нужна консультация по лечению?" />
      </div>
    </>
  );
}
