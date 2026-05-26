import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Лечение в Турции — медицинский туризм Стамбул из Ташкента | PANTERA LUXE",
  description: "Медицинский туризм в Турции из Ташкента. Клиники Стамбула — стоматология, трансплантация волос, пластическая хирургия, онкология. Стандарты JCI. Переводчик включён.",
  keywords: ["лечение Турция", "медицинский туризм Стамбул", "клиники Стамбула", "стоматология Турция цена", "санаторий Турция", "трансплантация волос Стамбул", "medical tourism Istanbul Tashkent", "лечение Турция из Ташкента"],
  path: "/sanatorium/turkey",
});

const CLINICS = [
  {
    name: "Acibadem Healthcare",
    spec: "Многопрофильная",
    desc: "Крупнейшая частная сеть клиник Турции. 23 госпиталя. JCI аккредитация. Онкология, кардиология, трансплантология.",
    price: "по запросу",
    tag: "Лучшая сеть",
    color: "#06b6d4",
  },
  {
    name: "Memorial Hospitals Group",
    spec: "Онкология / Кардио",
    desc: "Специализация — онкология и кардиология. Робот-хирургия Da Vinci. Международное отделение с переводчиками.",
    price: "по запросу",
    tag: "Онкология",
    color: "#ef4444",
  },
  {
    name: "Dentakay",
    spec: "Стоматология",
    desc: "Лучшая стоматологическая клиника для иностранцев. All On 4, All On 6, виниры, имплантация. В 4–5 раз дешевле Европы.",
    price: "от $300 / имплант",
    tag: "Стоматология",
    color: "#22c55e",
  },
  {
    name: "Dr. Serkan Aygin Clinic",
    spec: "Трансплантация волос",
    desc: "Мировой лидер по трансплантации волос. FUE, DHI метод. 5 000+ пациентов в год. Celebrity clients.",
    price: "от $1 500",
    tag: "Волосы",
    color: "#8b5cf6",
  },
];

const SERVICES = [
  { ico: "🦷", name: "Стоматология",          price: "от $300", desc: "Имплантация, виниры, коронки, All On 4/6. В 3–5 раз дешевле Европы." },
  { ico: "💇", name: "Трансплантация волос",   price: "от $1 500", desc: "FUE/DHI метод. 3 000–5 000 графтов. Стамбул — мировая столица." },
  { ico: "✂️", name: "Пластическая хирургия", price: "от $1 200", desc: "Ринопластика, блефаропластика, липосакция. Опытные хирурги." },
  { ico: "👁️", name: "Офтальмология",         price: "от $600",   desc: "LASIK коррекция зрения. Оба глаза за 1 день." },
  { ico: "❤️", name: "Кардиология",           price: "по запросу", desc: "Диагностика, стентирование, байпас. Florence Nightingale, Acibadem." },
  { ico: "💊", name: "Онкология",             price: "по запросу", desc: "Химиотерапия, лучевая терапия, иммунотерапия. JCI стандарты." },
];

const INCLUDES = [
  "Трансфер аэропорт–клиника–отель",
  "Медицинский переводчик (RU/EN/UZ)",
  "Помощь с выбором клиники под диагноз",
  "Сопровождение на консультации и процедуры",
  "Размещение рядом с клиникой",
  "Послеоперационное наблюдение",
  "Помощь с документами для страховки",
];

export default function SanatoriumTurkeyPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0a1628,#0d2244)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/sanatorium" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Санатории</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>🇹🇷 Медтуризм Турция</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            Медицинский туризм в Турцию
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 560, margin: "0 0 10px" }}>
            Клиники Стамбула · Стандарты JCI · В 3–5 раз дешевле Европы · Переводчик включён
          </p>
          <p style={{ color: "rgba(200,220,255,0.7)", fontSize: 13, marginBottom: 28 }}>
            Стоматология · Волосы · Пластика · Онкология · Кардиология
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Получить консультацию →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding: "48px 20px 80px" }}>

        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Услуги</span>
          <h2 className="section-title">Медицинские услуги — цены</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))", gap: 16, marginTop: 24 }}>
            {SERVICES.map(s => (
              <div key={s.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "20px 22px" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{s.ico}</div>
                <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 6 }}>{s.name}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, marginBottom: 12 }}>{s.desc}</p>
                <span style={{ fontSize: 14, fontWeight: 800, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "3px 10px", borderRadius: 6 }}>{s.price}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Клиники</span>
          <h2 className="section-title">Лучшие клиники Стамбула</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 24 }}>
            {CLINICS.map(c => (
              <div key={c.name} style={{ background: "#fff", border: `1px solid ${c.color}30`, borderLeft: `4px solid ${c.color}`, borderRadius: "0 14px 14px 0", padding: "18px 22px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10, marginBottom: 8 }}>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 800 }}>{c.name}</h3>
                    <span style={{ fontSize: 12, color: "#64748b" }}>{c.spec}</span>
                  </div>
                  <span style={{ background: `${c.color}15`, color: c.color, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>{c.tag}</span>
                </div>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, marginBottom: 8 }}>{c.desc}</p>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#bf4b18" }}>{c.price}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Сервис</span>
          <h2 className="section-title">Что мы организуем для вас</h2>
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
              { href: "/sanatorium",            label: "Все санатории" },
              { href: "/turkey/medical",        label: "Медтуризм Турция (подробно)" },
              { href: "/sanatorium/naftalan",   label: "Нафталан" },
              { href: "/sanatorium/karlovy-vary", label: "Карловы Вары" },
              { href: "/turkey",                label: "Туры Турция" },
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
