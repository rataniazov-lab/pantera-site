import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Туры в Дубай 2025 — цены, отели, программы | PANTERA LUXE Ташкент",
  description:
    "Все туры в Дубай из Ташкента 2025. Пляжные туры, экскурсионные, семейные. Отели 4★–5★. Вылет из Ташкента. Цены от $499. ☎ +998 77 161 88 88",
  keywords: ["туры в Дубай 2025", "Дубай цены", "купить тур Дубай", "Дубай отель 5 звезд", "пляжный тур Дубай", "Dubai package Tashkent", "туры ОАЭ купить"],
  path: "/dubai/tours",
});

const TOURS = [
  {
    name: "Дубай Классик — 5 ночей",
    hotel: "Jumeirah Beach Hotel 5★",
    desc: "Пляж JBR, Бурдж-Халифа, Gold Souk. Идеально для первого визита.",
    price: "$499", old: "$675",
    includes: ["Авиабилеты туда-обратно", "Трансфер аэропорт–отель", "Завтраки ежедневно", "Обзорная экскурсия"],
    nights: 5,
  },
  {
    name: "Дубай Люкс — 7 ночей",
    hotel: "Atlantis The Palm 5★",
    desc: "Водный парк Aquaventure, Private Beach, панорамный ресторан. Незабываемый отдых.",
    price: "$899", old: "$1 215",
    includes: ["Авиабилеты туда-обратно", "Трансфер", "Завтраки + ужины", "Водный парк включён", "Сафари в пустыне"],
    nights: 7,
  },
  {
    name: "Дубай Максимум — 10 ночей",
    hotel: "Address Beach Resort 5★",
    desc: "Infinity pool с видом на Burj Khalifa. Полное погружение — shopping, пляжи, пустыня.",
    price: "$1 299", old: "$1 755",
    includes: ["Авиабилеты", "Трансфер", "Завтраки", "Сафари", "Экскурсия в Абу-Даби", "Dinner cruise"],
    nights: 10,
  },
  {
    name: "Семейный Дубай — 7 ночей",
    hotel: "Sofitel The Palm 5★",
    desc: "Лучший выбор для семей с детьми. Kids club, бассейны, безопасный пляж.",
    price: "$1 099", old: "$1 485",
    includes: ["Авиабилеты", "Трансфер", "Завтраки", "Детская экскурсия", "Legoland или IMG Worlds"],
    nights: 7,
  },
];

export default function DubaiToursPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0d1b2a,#1a3550)", padding: "100px 0 50px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <span className="section-tag" style={{ color: "#ffd166" }}>🇦🇪 Дубай</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "12px 0 14px" }}>
            Туры в Дубай из Ташкента 2025
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, maxWidth: 520, margin: "0 auto 28px" }}>
            4 программы на любой бюджет · отели 5★ · вылет из Ташкента
          </p>
          <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 30px" }}>Подобрать тур →</a>
        </div>
      </section>

      <div className="site-container" style={{ padding: "48px 20px 80px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {TOURS.map(t => (
            <article key={t.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ padding: "22px 26px", display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "space-between" }}>
                <div style={{ flex: 1, minWidth: 260 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <h2 style={{ fontSize: 17, fontWeight: 900, color: "#1e293b" }}>{t.name}</h2>
                    <span style={{ background: "#f1f5f9", color: "#475569", fontSize: 11, fontWeight: 700, padding: "2px 9px", borderRadius: 20 }}>🌙 {t.nights} ночей</span>
                  </div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#ff6b35", marginBottom: 6 }}>🏨 {t.hotel}</p>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, marginBottom: 14 }}>{t.desc}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {t.includes.map(i => (
                      <span key={i} style={{ background: "rgba(34,197,94,0.1)", color: "#16a34a", fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 20 }}>✓ {i}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", gap: 10, flexShrink: 0 }}>
                  <div>
                    <div style={{ fontSize: 13, color: "#94a3b8", textDecoration: "line-through", textDecorationColor: "#9b3030", textAlign: "right" }}>{t.old}</div>
                    <div style={{ fontSize: 24, fontWeight: 900, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "3px 12px", borderRadius: 8 }}>{t.price}</div>
                    <div style={{ fontSize: 11, color: "#94a3b8", textAlign: "right", marginTop: 3 }}>за 2 человека</div>
                  </div>
                  <a className="btn-primary" href="/contacts" style={{ fontSize: 13, padding: "10px 22px", whiteSpace: "nowrap" }}>Забронировать</a>
                  <a href={`tel:${PHONE}`} style={{ fontSize: 12, color: "#64748b", textDecoration: "none", textAlign: "center" }}>или позвоните нам</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 48, marginBottom: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>Смотрите также</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { href: "/dubai",         label: "О Дубае" },
              { href: "/dubai/hotels",  label: "Отели Дубая" },
              { href: "/dubai/visa",    label: "Виза в ОАЭ" },
              { href: "/dubai/beaches", label: "Пляжи Дубая" },
              { href: "/cruise/uae",    label: "Круиз ОАЭ" },
              { href: "/turkey",        label: "Туры Турция" },
              { href: "/egypt",         label: "Туры Египет" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
        </div>

        <CTABlock title="Нужен индивидуальный тур?" />
      </div>
    </>
  );
}
