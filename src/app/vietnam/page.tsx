import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../shared";

const IMG = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779520520/%D0%92%D0%AC%D0%95%D0%A2%D0%9D%D0%90%D0%9C_bstiaw.png";

export const metadata: Metadata = buildMeta({
  title: "Туры во Вьетнам из Ташкента от $600 — Ханой, Хойан, Нячанг | PANTERA LUXE",
  description: "Туры во Вьетнам из Ташкента от $600. Ханой, Хойан, Нячанг, Хошимин, бухта Халонг. eVisa онлайн $25 за 3 дня. Пляжи, рисовые террасы, уличная еда.",
  keywords: ["туры во Вьетнам из Ташкента", "Вьетнам тур", "Vietnam tours Tashkent", "Нячанг тур", "Хойан тур", "бухта Халонг", "Вьетнам eVisa", "туры Вьетнам 2025"],
  path: "/vietnam",
  image: IMG,
});

const REGIONS = [
  { name: "Бухта Халонг",   desc: "2000 известняковых скал из воды. Круиз на джонке — самый романтичный опыт Вьетнама.", price: "от $650" },
  { name: "Хойан",          desc: "Средневековый торговый город. Фонари, таиloры, велосипеды, пляж Ан-Банг.", price: "от $620" },
  { name: "Нячанг",         desc: "Главный пляжный курорт. Белый песок, острова, дайвинг, морепродукты.", price: "от $600" },
  { name: "Ханой",          desc: "Столица. Квартал 36 улиц, мавзолей Хо Ши Мина, озеро Возвращённого Меча.", price: "от $580" },
];

const TOURS = [
  { name: "Нячанг 7 ночей",          hotel: "Vinpearl Resort 5★",          price: "$600", old: "$810" },
  { name: "Хойан + Ханой 10 ночей",  hotel: "Four Seasons + Metropole",     price: "$950", old: "$1 283" },
  { name: "Весь Вьетнам 14 ночей",   hotel: "4★ по маршруту",              price: "$1 299", old: "$1 755" },
];

export default function VietnamPage() {
  return (
    <>
      <section style={{ background: `linear-gradient(to bottom,rgba(13,27,42,0.45),rgba(13,27,42,0.82)),url('${IMG}') center/cover no-repeat`, padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <span className="section-tag" style={{ color: "#ffd166" }}>🇻🇳 Вьетнам</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "12px 0 14px" }}>Туры во Вьетнам из Ташкента</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 520, margin: "0 auto 28px" }}>
            Халонг · Хойан · Нячанг · Ханой · eVisa $25 онлайн · от $600
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Подобрать тур →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>
      <div className="site-container" style={{ padding: "48px 20px 80px" }}>
        <div style={{ display: "inline-block", background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.3)", borderRadius: 10, padding: "10px 18px", marginBottom: 40, fontSize: 13, color: "#5b21b6" }}>
          🌐 <strong>eVisa онлайн — $25</strong> · Оформляется за 3 рабочих дня · Без посольства · <a href="/visa/vietnam" style={{ color: "#7c3aed", textDecoration: "underline" }}>Инструкция →</a>
        </div>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Регионы</span>
          <h2 className="section-title">Куда поехать во Вьетнаме</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 14, marginTop: 22 }}>
            {REGIONS.map(r => (
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
          <h2 className="section-title">Туры во Вьетнам — цены 2025</h2>
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
          {[{href:"/visa/vietnam",label:"Виза Вьетнам"},{href:"/thailand",label:"Таиланд"},{href:"/maldives",label:"Мальдивы"},{href:"/dubai",label:"Дубай"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Готовы во Вьетнам?" />
      </div>
    </>
  );
}
