import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Отели Дубая 5★ — лучшие отели Дубая из Ташкента | PANTERA LUXE",
  description: "Лучшие отели Дубая 5★. Burj Al Arab, Atlantis The Palm, Jumeirah Beach Hotel, Address Beach Resort. Бронирование из Ташкента. Цены от $150/ночь.",
  keywords: ["отели Дубая", "Дубай отель 5 звезд", "Burj Al Arab цена", "Atlantis Palm Dubai", "Dubai hotel Tashkent", "лучшие отели Дубая", "Jumeirah Beach Hotel", "отель Дубай забронировать"],
  path: "/dubai/hotels",
});

const HOTELS = [
  {
    name: "Burj Al Arab",
    stars: "7★",
    area: "Джумейра",
    desc: "Единственный в мире «семизвёздочный» отель. Парусообразное здание на искусственном острове. Символ Дубая.",
    price: "от $1 500/ночь",
    old: "от $2 025/ночь",
    features: ["Частный пляж", "Дворецкий 24/7", "Трансфер на Rolls-Royce", "Панорамный бассейн"],
    tag: "Ультра-люкс",
    color: "#f59e0b",
  },
  {
    name: "Atlantis The Palm",
    stars: "5★",
    area: "Пальм Джумейра",
    desc: "Легендарный курортный отель на Пальме. Водный парк Aquaventure, аквариум, 17+ ресторанов.",
    price: "от $450/ночь",
    old: "от $608/ночь",
    features: ["Водный парк Aquaventure", "Private Beach", "Aquarium", "Dinner by Heston Blumenthal"],
    tag: "Легенда",
    color: "#06b6d4",
  },
  {
    name: "Jumeirah Beach Hotel",
    stars: "5★",
    area: "Джумейра",
    desc: "Волнообразное здание прямо у моря. Вид на Burj Al Arab. Отличное соотношение цена/качество в Дубае.",
    price: "от $300/ночь",
    old: "от $405/ночь",
    features: ["Частный пляж 1 км", "Вид на Burj Al Arab", "9 бассейнов", "20+ ресторанов"],
    tag: "Популярный",
    color: "#22c55e",
  },
  {
    name: "Address Beach Resort",
    stars: "5★",
    area: "JBR / Маринa",
    desc: "Самый высокий infinity pool в мире на 77 этаже. Вид на Бурдж-Халифа. В сердце пляжного района.",
    price: "от $380/ночь",
    old: "от $513/ночь",
    features: ["Infinity pool 77 этаж", "Вид на Burj Khalifa", "Пляж JBR", "Спа мирового класса"],
    tag: "Trending",
    color: "#8b5cf6",
  },
  {
    name: "Sofitel The Palm",
    stars: "5★",
    area: "Пальм Джумейра",
    desc: "Французский шарм на Пальме. Огромные бассейны, частный пляж. Идеально для семей.",
    price: "от $280/ночь",
    old: "от $378/ночь",
    features: ["Частный пляж", "Детский клуб", "4 бассейна", "Французская кухня"],
    tag: "Семейный",
    color: "#ff6b35",
  },
  {
    name: "Madinat Jumeirah",
    stars: "5★",
    area: "Джумейра",
    desc: "Арабская деревня у моря. Каналы с абрами, сук, 45 ресторанов и баров. Уникальная атмосфера.",
    price: "от $420/ночь",
    old: "от $567/ночь",
    features: ["Арабские каналы", "45 ресторанов", "Talise Spa", "Вид на Burj Al Arab"],
    tag: "Атмосфера",
    color: "#d97706",
  },
];

const AREAS = [
  { name: "Джумейра / JBR",   desc: "Лучшие пляжные отели. Burj Al Arab, Jumeirah Beach Hotel. 20 мин от центра." },
  { name: "Пальм Джумейра",   desc: "Искусственный остров-пальма. Atlantis, Sofitel. Эксклюзивность." },
  { name: "Даунтаун / DIFC",  desc: "Бурдж-Халифа под окном. Address Downtown, Armani Hotel." },
  { name: "Дейра / Bur Dubai", desc: "Бюджетные варианты. Рядом Gold Souk, метро, аэропорт." },
];

export default function DubaiHotelsPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0d1b2a,#1a3550)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/dubai" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Дубай</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>Отели</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            Лучшие отели Дубая 5★
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 520, margin: "0 auto 28px" }}>
            Burj Al Arab · Atlantis · Jumeirah · Sofitel · бронирование из Ташкента
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Забронировать отель →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding: "48px 20px 80px" }}>

        {/* Hotels grid */}
        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Отели</span>
          <h2 className="section-title">Топ отели Дубая — цены 2025</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 24 }}>
            {HOTELS.map(h => (
              <article key={h.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 16, padding: "22px 26px", display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "space-between" }}>
                <div style={{ flex: 1, minWidth: 260 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                    <h2 style={{ fontSize: 17, fontWeight: 900, color: "#1e293b" }}>{h.name}</h2>
                    <span style={{ background: `${h.color}18`, color: h.color, fontSize: 10, fontWeight: 800, padding: "2px 9px", borderRadius: 20 }}>{h.tag}</span>
                    <span style={{ fontSize: 12, color: "#94a3b8" }}>{h.stars}</span>
                  </div>
                  <p style={{ fontSize: 12, color: "#ff6b35", fontWeight: 700, marginBottom: 8 }}>📍 {h.area}</p>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65, marginBottom: 14 }}>{h.desc}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {h.features.map(f => (
                      <span key={f} style={{ background: "#f1f5f9", color: "#475569", fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 20 }}>✓ {f}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", gap: 10, flexShrink: 0 }}>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 12, color: "#94a3b8", textDecoration: "line-through", textDecorationColor: "#9b3030" }}>{h.old}</div>
                    <div style={{ fontSize: 18, fontWeight: 900, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "3px 10px", borderRadius: 6 }}>{h.price}</div>
                  </div>
                  <a className="btn-primary" href="/contacts" style={{ fontSize: 13, padding: "9px 20px", whiteSpace: "nowrap" }}>Забронировать</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Areas guide */}
        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Районы</span>
          <h2 className="section-title">Где остановиться в Дубае</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14, marginTop: 22 }}>
            {AREAS.map(a => (
              <div key={a.name} style={{ background: "#f8fafc", borderRadius: 12, padding: "18px 20px", borderLeft: "3px solid #ff6b35" }}>
                <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 6 }}>{a.name}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.55 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 14 }}>Смотрите также</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { href: "/dubai",         label: "О Дубае" },
              { href: "/dubai/tours",   label: "Туры в Дубай" },
              { href: "/dubai/beaches", label: "Пляжи Дубая" },
              { href: "/visa/uae",      label: "Виза в ОАЭ" },
              { href: "/cruise/uae",    label: "Круиз ОАЭ" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
        </section>

        <CTABlock title="Подобрать отель в Дубае?" />
      </div>
    </>
  );
}
