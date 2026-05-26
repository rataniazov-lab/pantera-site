import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Круиз по ОАЭ из Ташкента — Дубай, Абу-Даби, Оман от $499 | PANTERA LUXE",
  description:
    "Круиз по ОАЭ и Персидскому заливу из Ташкента от $499. Дубай → Абу-Даби → Оман → Катар → Бахрейн. Лайнер MSC World Europa 7 ночей.",
  keywords: ["круиз ОАЭ", "круиз Дубай", "MSC круиз Персидский залив", "cruise UAE Tashkent", "круиз Абу-Даби Оман", "Персидский залив круиз цена"],
  path: "/cruise/uae",
});

const PORTS = [
  { day: 1, port: "Дубай", country: "🇦🇪 ОАЭ",    note: "Отправление. Бурдж-Халифа, шопинг" },
  { day: 2, port: "Абу-Даби", country: "🇦🇪 ОАЭ", note: "Мечеть Шейха Зайда, Лувр Абу-Даби" },
  { day: 3, port: "Сир-Бани-Яс", country: "🇦🇪 ОАЭ", note: "Остров дикой природы, снорклинг" },
  { day: 4, port: "Доха", country: "🇶🇦 Катар",    note: "Рынок Сук Вакиф, небоскрёбы" },
  { day: 5, port: "Бахрейн", country: "🇧🇭",       note: "Старый город, жемчужный рынок" },
  { day: 6, port: "Оман", country: "🇴🇲",          note: "Маскат, форт Бахла, горные фьорды" },
  { day: 7, port: "Дубай", country: "🇦🇪 ОАЭ",    note: "Прибытие. Свободное время" },
];

const CABINS = [
  { type: "Внутренняя каюта", desc: "Без окна. Для тех кто проводит время на палубе.", price: "$499 / чел.", old: "$675" },
  { type: "Каюта с окном",    desc: "Вид на море. Естественный свет, уют.", price: "$649 / чел.", old: "$878" },
  { type: "Балкон",           desc: "Частный балкон. Закаты на Персидском заливе.", price: "$849 / чел.", old: "$1 147" },
  { type: "Люкс",             desc: "Отдельная гостиная, дворецкий, приоритетная посадка.", price: "$1 499 / чел.", old: "$2 025" },
];

export default function CruiseUaePage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0a1628,#0d3460)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/cruise" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Круизы</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>ОАЭ и Персидский залив</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            🚢 Круиз по ОАЭ и Персидскому заливу
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 560, margin: "0 auto 10px" }}>
            Дубай · Абу-Даби · Оман · Катар · Бахрейн · 7 ночей · MSC World Europa
          </p>
          <p style={{ color: "rgba(255,200,100,0.8)", fontSize: 14, marginBottom: 28 }}>
            5 стран за 1 поездку · Виза в ОАЭ не нужна 30 дней
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Забронировать круиз →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding: "48px 20px 80px" }}>

        {/* Itinerary */}
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Маршрут</span>
          <h2 className="section-title">Расписание круиза — 7 дней</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 22, border: "1px solid #e8eef5", borderRadius: 14, overflow: "hidden" }}>
            {PORTS.map((p, i) => (
              <div key={p.day} style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 20px", background: i % 2 === 0 ? "#fff" : "#f8fafc", borderBottom: i < PORTS.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                <div style={{ width: 32, height: 32, background: "linear-gradient(135deg,#ff6b35,#ff8c42)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 900, flexShrink: 0 }}>{p.day}</div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: 15, fontWeight: 800, color: "#1e293b" }}>{p.port}</span>
                  <span style={{ fontSize: 12, color: "#64748b", marginLeft: 8 }}>{p.country}</span>
                </div>
                <span style={{ fontSize: 13, color: "#64748b", textAlign: "right" }}>{p.note}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Cabins */}
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Каюты</span>
          <h2 className="section-title">Типы кают и цены</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14, marginTop: 22 }}>
            {CABINS.map(c => (
              <div key={c.type} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "18px 20px" }}>
                <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 6 }}>{c.type}</h3>
                <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.55, marginBottom: 14 }}>{c.desc}</p>
                <div style={{ fontSize: 12, color: "#94a3b8", textDecoration: "line-through", textDecorationColor: "#9b3030" }}>{c.old}</div>
                <div style={{ fontSize: 18, fontWeight: 900, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "3px 10px", borderRadius: 6, display: "inline-block" }}>{c.price}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 14 }}>Смотрите также</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { href: "/cruise",                 label: "Все круизы" },
              { href: "/cruise/mediterranean",   label: "Круиз Средиземноморье" },
              { href: "/cruise/asia",            label: "Круиз Азия" },
              { href: "/dubai",                  label: "Туры в Дубай" },
              { href: "/visa/uae",               label: "Виза ОАЭ" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
        </section>

        <CTABlock title="Готовы выйти в море?" />
      </div>
    </>
  );
}
