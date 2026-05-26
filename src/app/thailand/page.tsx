import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../shared";

const IMG = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779487245/tai_at5qsu.png";

export const metadata: Metadata = buildMeta({
  title: "Туры в Таиланд из Ташкента от $650 — Пхукет, Самуи, Бангкок | PANTERA LUXE",
  description: "Туры в Таиланд из Ташкента от $650. Пхукет, Самуи, Бангкок, Паттайя. Виза не нужна 30 дней. Пляжи, буддийские храмы, уличная еда.",
  keywords: ["туры в Таиланд из Ташкента", "Пхукет тур", "Таиланд из Ташкента", "Thailand tours Tashkent", "Самуи тур", "Бангкок тур", "Таиланд виза узбекистан", "туры Таиланд 2025"],
  path: "/thailand",
  image: IMG,
});

const RESORTS = [
  { name: "Пхукет",   desc: "Лучшие пляжи — Карон, Ката, Патонг. Острова Пхи-Пхи, Симилан.",           price: "от $650" },
  { name: "Самуи",    desc: "Спокойный остров. Чавенг-бич, водопады, Биг-Будда.",                       price: "от $720" },
  { name: "Бангкок",  desc: "Грандиозный Королевский дворец, Wat Pho, Чайна-таун, стрит-фуд.",         price: "от $580" },
  { name: "Паттайя",  desc: "Развлечения 24/7, шоу трансвеститов, подводный мир, Ко-Лан.",              price: "от $600" },
];

const TOURS = [
  { name: "Пхукет 7 ночей",         hotel: "Kata Beach Resort 5★",   price: "$650", old: "$878" },
  { name: "Самуи 7 ночей",          hotel: "Conrad Koh Samui 5★",    price: "$850", old: "$1 148" },
  { name: "Бангкок + Пхукет 10 н.", hotel: "Anantara + Kata Rocks",  price: "$1 099", old: "$1 485" },
];

export default function ThailandPage() {
  return (
    <>
      <section style={{ background: `linear-gradient(to bottom,rgba(13,27,42,0.45),rgba(13,27,42,0.82)),url('${IMG}') center/cover no-repeat`, padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <span className="section-tag" style={{ color: "#ffd166" }}>🇹🇭 Таиланд</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "12px 0 14px" }}>Туры в Таиланд из Ташкента</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 520, margin: "0 auto 28px" }}>
            Пхукет · Самуи · Бангкок · Виза не нужна 30 дней · от $650
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Подобрать тур →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>
      <div className="site-container" style={{ padding: "48px 20px 80px" }}>
        <div style={{ display: "inline-block", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 10, padding: "10px 18px", marginBottom: 40, fontSize: 13, color: "#166534" }}>
          ✅ <strong>Без визы 30 дней</strong> — граждане Узбекистана въезжают в Таиланд без визы
        </div>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Курорты</span>
          <h2 className="section-title">Куда поехать в Таиланде</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 14, marginTop: 22 }}>
            {RESORTS.map(r => (
              <div key={r.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "18px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 8 }}>{r.name}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.55, marginBottom: 12 }}>{r.desc}</p>
                <span style={{ fontSize: 14, fontWeight: 800, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "3px 10px", borderRadius: 6 }}>{r.price}</span>
              </div>
            ))}
          </div>
        </section>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Туры</span>
          <h2 className="section-title">Туры в Таиланд — цены 2025</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 22 }}>
            {TOURS.map(t => (
              <div key={t.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 4 }}>{t.name}</h3>
                  <p style={{ fontSize: 13, color: "#64748b" }}>🏨 {t.hotel}</p>
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
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/visa/thailand",label:"Виза Таиланд"},{href:"/vietnam",label:"Вьетнам"},{href:"/maldives",label:"Мальдивы"},{href:"/dubai",label:"Дубай"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Готовы в Таиланд?" />
      </div>
    </>
  );
}
