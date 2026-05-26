import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../shared";

const IMG = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779520520/%D0%93%D0%A0%D0%A3%D0%97%D0%98%D0%AF_srbigi.png";

export const metadata: Metadata = buildMeta({
  title: "Туры в Грузию из Ташкента от $290 — Тбилиси, Батуми, Казбеги | PANTERA LUXE",
  description: "Туры в Грузию из Ташкента от $290. Тбилиси, Батуми, Казбеги, Сванетия. 365 дней без визы. Вино, горы, море. ☎ +998 77 161 88 88",
  keywords: ["туры в Грузию из Ташкента", "Тбилиси тур", "Батуми тур", "Казбеги тур", "Georgia tours Tashkent", "Грузия без визы", "туры Грузия цена 2025"],
  path: "/georgia",
  image: IMG,
});

const CITIES = [
  { name: "Тбилиси",   desc: "Старый город, серные бани, Нарикала, Авлабари. Столица с характером.",  price: "от $290" },
  { name: "Батуми",    desc: "Субтропическое Черноморское побережье. Пальмы, казино, пляжи.",         price: "от $320" },
  { name: "Казбеги",   desc: "Церковь Гергети на фоне Казбека 5047м. Одно из лучших фото в мире.",    price: "от $350" },
  { name: "Сванетия",  desc: "Средневековые башни в горах. Местиа — конец цивилизации, начало гор.", price: "от $420" },
];

export default function GeorgiaPage() {
  return (
    <>
      <section style={{ background: `linear-gradient(to bottom,rgba(13,27,42,0.45),rgba(13,27,42,0.82)),url('${IMG}') center/cover no-repeat`, padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <span className="section-tag" style={{ color: "#ffd166" }}>🇬🇪 Грузия</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "12px 0 14px" }}>Туры в Грузию из Ташкента</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 520, margin: "0 auto 28px" }}>Тбилиси · Батуми · Казбеги · 365 дней без визы · от $290</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Подобрать тур →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>
      <div className="site-container" style={{ padding: "48px 20px 80px" }}>
        <div style={{ display: "inline-block", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 10, padding: "12px 20px", marginBottom: 40, fontSize: 14, color: "#166534" }}>
          ✅ <strong>Без визы 365 дней</strong> — граждане Узбекистана въезжают в Грузию без визы на 1 год
        </div>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Направления</span>
          <h2 className="section-title">Куда поехать в Грузии</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14, marginTop: 22 }}>
            {CITIES.map(c => (
              <div key={c.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "20px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 8 }}>{c.name}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, marginBottom: 14 }}>{c.desc}</p>
                <span style={{ fontSize: 14, fontWeight: 800, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "3px 10px", borderRadius: 6 }}>{c.price}</span>
              </div>
            ))}
          </div>
        </section>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/azerbaijan",label:"Азербайджан"},{href:"/sanatorium/borjomi",label:"Боржоми"},{href:"/visa",label:"Визы"},{href:"/turkey",label:"Турция"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Готовы в Грузию?" />
      </div>
    </>
  );
}
