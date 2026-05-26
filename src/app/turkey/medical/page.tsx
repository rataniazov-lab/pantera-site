import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Медицинский туризм в Турцию из Ташкента — клиники Стамбула | PANTERA LUXE",
  description:
    "Медицинский туризм в Турцию из Ташкента. Стоматология, трансплантация волос, пластическая хирургия, онкология. Клиники JCI. Цены в 3–5 раз ниже Европы.",
  keywords: ["медицинский туризм Турция", "лечение в Турции", "клиники Стамбула", "стоматология Турция", "трансплантация волос Стамбул", "пластическая хирургия Турция", "medical tourism Turkey Tashkent", "онкология Турция"],
  path: "/turkey/medical",
});

const SERVICES = [
  {
    ico: "🦷", name: "Стоматология",
    desc: "Имплантация, виниры, отбеливание. В 3–5 раз дешевле Европы. Клиники All On 4, All On 6.",
    price: "от $300 за имплант",
    popular: true,
  },
  {
    ico: "💇", name: "Трансплантация волос",
    desc: "Метод FUE/DHI. Стамбул — мировая столица трансплантации волос. 3 000–5 000 графтов.",
    price: "от $1 500",
    popular: true,
  },
  {
    ico: "💊", name: "Онкология",
    desc: "Диагностика и лечение в клиниках Acibadem, Memorial. Международные стандарты JCI.",
    price: "по запросу",
    popular: false,
  },
  {
    ico: "✂️", name: "Пластическая хирургия",
    desc: "Ринопластика, блефаропластика, липосакция. Опытные хирурги, европейские стандарты.",
    price: "от $1 200",
    popular: false,
  },
  {
    ico: "❤️", name: "Кардиология",
    desc: "Диагностика, стентирование, байпас. Клиника Florence Nightingale, Acibadem.",
    price: "по запросу",
    popular: false,
  },
  {
    ico: "👁️", name: "Офтальмология",
    desc: "Лазерная коррекция зрения LASIK, лечение катаракты. Результат за 1 день.",
    price: "от $600 оба глаза",
    popular: false,
  },
];

const INCLUDES = [
  "Трансфер аэропорт–клиника–отель",
  "Медицинский переводчик",
  "Помощь с выбором клиники",
  "Сопровождение на консультации",
  "Размещение в отеле рядом с клиникой",
  "Послеоперационное наблюдение",
];

export default function TurkeyMedicalPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0a2040,#0d1b2a)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/turkey" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Турция</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>Медтуризм</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            Медицинский туризм в Турцию
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 560, margin: "0 auto 28px" }}>
            Клиники Стамбула · Стандарты JCI · Цены в 3–5 раз ниже Европы · Переводчик включён
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Получить консультацию →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding: "48px 20px 80px" }}>

        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Услуги</span>
          <h2 className="section-title">Медицинские услуги в Турции</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 16, marginTop: 24 }}>
            {SERVICES.map(s => (
              <div key={s.name} style={{ background: "#fff", border: s.popular ? "2px solid rgba(255,107,53,0.4)" : "1px solid #e8eef5", borderRadius: 14, padding: "20px 22px", position: "relative" }}>
                {s.popular && <span style={{ position: "absolute", top: -10, right: 16, background: "#ff6b35", color: "#fff", fontSize: 10, fontWeight: 800, padding: "3px 10px", borderRadius: 20 }}>ПОПУЛЯРНО</span>}
                <div style={{ fontSize: 28, marginBottom: 10 }}>{s.ico}</div>
                <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 6 }}>{s.name}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, marginBottom: 12 }}>{s.desc}</p>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#bf4b18", background: "rgba(255,205,115,0.5)", padding: "4px 10px", borderRadius: 6, display: "inline-block" }}>{s.price}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Сервис</span>
          <h2 className="section-title">Что мы организуем</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 10, marginTop: 22 }}>
            {INCLUDES.map(item => (
              <div key={item} style={{ background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 10, padding: "12px 16px", display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ color: "#16a34a", fontSize: 16, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#1e293b" }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 14 }}>Смотрите также</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { href: "/turkey",            label: "Туры Турция" },
              { href: "/turkey/istanbul",   label: "Стамбул" },
              { href: "/sanatorium/turkey", label: "Санатории Турция" },
              { href: "/sanatorium",        label: "Все санатории" },
              { href: "/visa/turkey",       label: "Виза Турция" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
        </section>

        <CTABlock title="Нужна консультация по медтуризму?" />
      </div>
    </>
  );
}
