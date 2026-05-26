import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../shared";

export const metadata: Metadata = buildMeta({
  title: "Санатории из Ташкента — Нафталан, Карловы Вары, Железноводск | PANTERA LUXE",
  description:
    "Санаторно-курортное лечение из Ташкента. Нафталан (Азербайджан), Карловы Вары (Чехия), Железноводск (Россия), Мёртвое море. Бронирование + трансфер. ☎ +998 77 161 88 88",
  keywords: [
    "санаторий из Ташкента", "лечение за рубежом", "Нафталан санаторий", "Карловы Вары лечение",
    "Железноводск санаторий", "медицинский туризм Узбекистан", "sanatorium from Tashkent",
    "лечение суставов заграница", "оздоровление за рубежом", "Мёртвое море псориаз",
  ],
  path: "/sanatorium",
});

const SANATORIUMS = [
  {
    href: "/sanatorium/naftalan",
    flag: "🇦🇿", name: "Нафталан",        country: "Азербайджан",
    spec: "Нафталановые ванны",
    tags: ["Суставы", "Псориаз", "Радикулит"],
    desc: "Единственный в мире курорт с нафталановой нефтью. Лечит артрит, псориаз, радикулит.",
    nights: "7–14 ночей", price: "от $350",
  },
  {
    href: "/sanatorium/karlovy-vary",
    flag: "🇨🇿", name: "Карловы Вары",    country: "Чехия",
    spec: "Минеральные воды",
    tags: ["ЖКТ", "Обмен веществ", "Профилактика"],
    desc: "Старейший бальнеологический курорт Европы. 13 минеральных источников, спа-отели.",
    nights: "10–21 ночей", price: "от $1 200",
  },
  {
    href: "/sanatorium/zheleznov odsk",
    flag: "🇷🇺", name: "Железноводск",    country: "Россия, КМВ",
    spec: "Бальнеология КМВ",
    tags: ["Суставы", "ЖКТ", "Сердце"],
    desc: "Кавказские Минеральные Воды. «Машук Аква-Терм», «Плаза СПА», «Источник» 5★.",
    nights: "10–14 ночей", price: "от $2 470",
  },
  {
    href: "/sanatorium/turkey",
    flag: "🇹🇷", name: "Медтуризм Турция", country: "Стамбул",
    spec: "Клиники JCI",
    tags: ["Стоматология", "Волосы", "Эстетика"],
    desc: "Аккредитованные клиники Стамбула. Стоматология в 3–5 раз дешевле Европы.",
    nights: "5–14 дней", price: "от $500",
  },
  {
    href: "/sanatorium/dead-sea",
    flag: "🇮🇱", name: "Мёртвое море",    country: "Израиль",
    spec: "Грязи и соль",
    tags: ["Псориаз", "Дерматология", "Реабилитация"],
    desc: "Самое солёное море мира. Лечебные грязи — лучшее средство при псориазе в мире.",
    nights: "7–14 ночей", price: "от $900",
  },
  {
    href: "/sanatorium/borjomi",
    flag: "🇬🇪", name: "Боржоми",          country: "Грузия",
    spec: "Минеральная вода Боржоми",
    tags: ["ЖКТ", "Отдых", "Горный воздух"],
    desc: "Легендарная минеральная вода прямо у источника. Горный воздух, термальные ванны.",
    nights: "5–10 ночей", price: "от $280",
  },
];

export default function SanatoriumPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0a1f0a,#0d2d1a)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <span className="section-tag" style={{ color: "#ffd166" }}>🏥 Санатории</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "12px 0 14px" }}>
            Санатории и медицинский туризм
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 560, margin: "0 auto 28px" }}>
            Нафталан · Карловы Вары · Железноводск · Мёртвое море · Стамбул · Боржоми
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Получить консультацию →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding: "48px 20px 80px" }}>

        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Направления</span>
          <h2 className="section-title">Санатории из Ташкента — 2025</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 18, marginTop: 24 }}>
            {SANATORIUMS.map(s => (
              <a key={s.name} href={s.href} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "22px", display: "block", transition: "transform 0.2s", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 28 }}>{s.flag}</span>
                  <div>
                    <h2 style={{ fontSize: 16, fontWeight: 800, color: "#1e293b", margin: 0 }}>{s.name}</h2>
                    <p style={{ fontSize: 12, color: "#64748b", margin: 0 }}>{s.country} · {s.spec}</p>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.6, marginBottom: 12 }}>{s.desc}</p>
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 14 }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ background: "rgba(34,197,94,0.1)", color: "#16a34a", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20 }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: "#94a3b8" }}>🌙 {s.nights}</span>
                  <span style={{ fontSize: 14, fontWeight: 800, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "3px 10px", borderRadius: 6 }}>{s.price}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 14 }}>Смотрите также</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { href: "/turkey/medical",  label: "Медтуризм Турция" },
              { href: "/visa",            label: "Визовая поддержка" },
              { href: "/azerbaijan",      label: "Туры в Азербайджан" },
              { href: "/georgia",         label: "Туры в Грузию" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
        </section>

        <CTABlock title="Нужна помощь с выбором санатория?" />
      </div>
    </>
  );
}
