import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Туры в Анталью из Ташкента от $450 — пляжный отдых 5★ | PANTERA LUXE",
  description:
    "Туры в Анталью из Ташкента от $450. Кемер, Белек, Сиде, Аланья. All inclusive отели 5★. Пляжный сезон апрель–октябрь. Виза не нужна. ☎ +998 77 161 88 88",
  keywords: ["туры в Анталью", "Анталья из Ташкента", "Кемер тур", "Белек all inclusive", "Анталья 5 звезд", "Antalya tour Tashkent", "пляжный тур Турция", "Сиде тур"],
  path: "/turkey/antalya",
});

const RESORTS = [
  { name: "Белек",    desc: "Лучшие 5★ отели Турции. Огромные территории, аквапарки, гольф.", tag: "Люкс" },
  { name: "Кемер",    desc: "Сосновые горы встречают море. Уютный курорт, отличный снорклинг.", tag: "Природа" },
  { name: "Сиде",     desc: "Руины античного города прямо у пляжа. История + пляжный отдых.", tag: "История" },
  { name: "Аланья",   desc: "Средневековая крепость, Клеопатра-бич. Популярен у семей.", tag: "Семья" },
];

const TOURS = [
  { name: "Анталья Белек 7 ночей", hotel: "Maxx Royal Belek Golf Resort 5★", price: "$750", old: "$1 015", inc: "All inclusive" },
  { name: "Анталья Кемер 7 ночей", hotel: "Rixos Sungate 5★", price: "$650", old: "$880", inc: "All inclusive" },
  { name: "Анталья Сиде 7 ночей",  hotel: "Barut Hemera 5★", price: "$580", old: "$785", inc: "All inclusive" },
  { name: "Анталья 10 ночей",      hotel: "Titanic Mardan Palace 5★", price: "$950", old: "$1 285", inc: "Ultra All inclusive" },
];

export default function AntalyaPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0a1f3c,#0d3460)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/turkey" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Турция</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>Анталья</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            Туры в Анталью из Ташкента
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 520, margin: "0 auto 28px" }}>
            Белек · Кемер · Сиде · Аланья · All inclusive 5★ · Виза не нужна · от $450
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Подобрать тур →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding: "48px 20px 80px" }}>

        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Курорты</span>
          <h2 className="section-title">Лучшие курорты Антальи</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 14, marginTop: 22 }}>
            {RESORTS.map(r => (
              <div key={r.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800 }}>{r.name}</h3>
                  <span style={{ background: "rgba(255,107,53,0.1)", color: "#ff6b35", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20 }}>{r.tag}</span>
                </div>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.55 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Туры</span>
          <h2 className="section-title">Туры в Анталью — цены 2025</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 22 }}>
            {TOURS.map(t => (
              <div key={t.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1e293b", marginBottom: 4 }}>{t.name}</h3>
                  <p style={{ fontSize: 13, color: "#64748b" }}>🏨 {t.hotel}</p>
                  <span style={{ background: "rgba(34,197,94,0.1)", color: "#16a34a", fontSize: 11, fontWeight: 700, padding: "2px 9px", borderRadius: 20, display: "inline-block", marginTop: 6 }}>✓ {t.inc}</span>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 12, color: "#94a3b8", textDecoration: "line-through", textDecorationColor: "#9b3030" }}>{t.old}</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "2px 10px", borderRadius: 6 }}>{t.price}</div>
                  <a className="btn-primary" href="/contacts" style={{ display: "inline-block", marginTop: 8, fontSize: 12, padding: "7px 16px" }}>Забронировать</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 14 }}>Смотрите также</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { href: "/turkey",            label: "Все туры Турция" },
              { href: "/turkey/istanbul",   label: "Стамбул" },
              { href: "/turkey/cappadocia", label: "Каппадокия" },
              { href: "/visa/turkey",       label: "Виза Турция" },
              { href: "/egypt",             label: "Туры Египет" },
              { href: "/maldives",          label: "Мальдивы" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
        </section>

        <CTABlock title="Готовы на пляж в Антальи?" />
      </div>
    </>
  );
}
