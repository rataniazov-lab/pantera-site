import type { Metadata } from "next";
import { buildMeta, destinationSchema, CTABlock, TG, PHONE } from "../shared";

const IMG = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779520521/%D0%A1%D0%A2%D0%90%D0%9C%D0%91%D0%A3%D0%9B_xak5js.png";

export const metadata: Metadata = buildMeta({
  title: "Туры в Турцию из Ташкента от $350 — Стамбул, Анталья, Каппадокия",
  description:
    "Туры в Турцию из Ташкента от $350. Стамбул, Анталья, Каппадокия. Пляжный отдых, экскурсии, медицинский туризм. Виза не нужна 30 дней. ☎ +998 77 161 88 88",
  keywords: [
    "туры в Турцию из Ташкента",
    "тур Стамбул Ташкент",
    "Анталья тур цена",
    "Каппадокия тур",
    "Турция из Ташкента",
    "медицинский туризм Турция",
    "Turkey tours Tashkent",
    "туры Турция 2025",
    "горящие туры Турция",
    "Стамбул тур купить",
  ],
  path: "/turkey",
  image: IMG,
});

const schema = destinationSchema({
  name: "Тур в Турцию из Ташкента",
  description: "Туры в Турцию из Ташкента: Стамбул, Анталья, Каппадокия. Виза не нужна 30 дней.",
  url: "/turkey",
  image: IMG,
  price: "350",
});

const CITIES = [
  { name: "Стамбул", href: "/turkey/istanbul", img: IMG, desc: "Собор Айя-София, Босфор, Гранд-Базар. Мост между Европой и Азией.", price: "от $350" },
  { name: "Анталья", href: "/turkey/antalya",  img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&q=70", desc: "Лучшие пляжи Средиземноморья. Кемер, Сиде, Белек — all inclusive.", price: "от $450" },
  { name: "Каппадокия", href: "/turkey/cappadocia", img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400&q=70", desc: "Полёты на воздушном шаре на рассвете. Пещерные отели.", price: "от $599" },
  { name: "Медтуризм", href: "/turkey/medical", img: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=400&q=70", desc: "Клиники Стамбула. Стоматология, трансплантация волос, эстетика.", price: "от $500" },
];

const FACTS = [
  { ico: "🛂", title: "Виза",    text: "Не нужна — 30 дней автоматически" },
  { ico: "✈️", title: "Перелёт", text: "Прямой рейс Ташкент–Стамбул ~5 часов" },
  { ico: "💰", title: "Валюта",  text: "Турецкая лира (TRY). Обменники везде" },
  { ico: "☀️", title: "Климат",  text: "Анталья: +30°C летом. Стамбул: +28°C" },
  { ico: "🗣️", title: "Язык",    text: "Турецкий. Русский понимают в туристических зонах" },
  { ico: "🕌", title: "Культура", text: "Светский ислам. В мечети — прикрытая голова" },
];

export default function TurkeyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section style={{ background: `linear-gradient(to bottom, rgba(13,27,42,0.5) 0%, rgba(13,27,42,0.85) 100%), url('${IMG}') center/cover no-repeat`, padding: "100px 0 60px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <span className="section-tag" style={{ color: "#ffd166" }}>🇹🇷 Турция</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, margin: "12px 0 16px" }}>
            Туры в Турцию из Ташкента
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 18, maxWidth: 580, margin: "0 auto 32px" }}>
            Стамбул · Анталья · Каппадокия · Медтуризм · Виза не нужна · от $350
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 16, padding: "14px 32px" }}>Подобрать тур →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding: "52px 20px 80px" }}>

        {/* Cities grid */}
        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Направления</span>
          <h2 className="section-title">Куда поехать в Турции</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 18, marginTop: 24 }}>
            {CITIES.map(c => (
              <a key={c.name} href={c.href} style={{ textDecoration: "none", display: "block", background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, overflow: "hidden", transition: "transform 0.2s", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.name} loading="lazy" style={{ width: "100%", height: 160, objectFit: "cover" }} />
                <div style={{ padding: "14px 16px" }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1e293b", marginBottom: 5 }}>{c.name}</h3>
                  <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.55, marginBottom: 10 }}>{c.desc}</p>
                  <span style={{ fontSize: 13, fontWeight: 800, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "2px 8px", borderRadius: 6 }}>{c.price}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Facts */}
        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Важно знать</span>
          <h2 className="section-title">Турция — что нужно знать</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14, marginTop: 24 }}>
            {FACTS.map(f => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{f.ico}</div>
                <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO links */}
        <section style={{ marginBottom: 56 }}>
          <h2 className="section-title">Смотрите также</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
            {[
              { href: "/turkey/istanbul",    label: "Туры Стамбул" },
              { href: "/turkey/antalya",     label: "Туры Анталья" },
              { href: "/turkey/cappadocia",  label: "Каппадокия" },
              { href: "/turkey/medical",     label: "Медтуризм Турция" },
              { href: "/visa/turkey",        label: "Виза в Турцию" },
              { href: "/dubai",              label: "Туры в Дубай" },
              { href: "/egypt",              label: "Туры в Египет" },
              { href: "/sanatorium/turkey",  label: "Лечение в Турции" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>
                {l.label}
              </a>
            ))}
          </div>
        </section>

        <CTABlock title="Готовы лететь в Турцию?" />
      </div>
    </>
  );
}
