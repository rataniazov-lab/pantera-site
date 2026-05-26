import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

const IMG = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779520520/%D0%93%D0%A0%D0%A3%D0%97%D0%98%D0%AF_srbigi.png";

export const metadata: Metadata = buildMeta({
  title: "Боржоми санаторий — минеральные воды, лечение ЖКТ из Ташкента | PANTERA LUXE",
  description: "Санаторно-курортное лечение в Боржоми (Грузия) из Ташкента от $280. Легендарная минеральная вода у источника. Горный воздух, термальные ванны, ЖКТ.",
  keywords: ["Боржоми санаторий", "лечение Боржоми", "минеральная вода Боржоми", "Borjomi spa resort", "санаторий Грузия из Ташкента", "Боржоми тур", "ЖКТ лечение Грузия"],
  path: "/sanatorium/borjomi",
  image: IMG,
});

const TREATMENTS = [
  { ico: "🥤", name: "Питьевое лечение",    desc: "Легендарная вода Боржоми прямо из источника. Лечит гастрит, язву, рефлюкс, диабет. 3 источника." },
  { ico: "🛁", name: "Термальные ванны",    desc: "Сульфатные и гидрокарбонатные ванны. Улучшают обмен веществ, снимают воспаление." },
  { ico: "💆", name: "Грязелечение",        desc: "Целебные грязи Грузии. Показания: суставы, кожные заболевания, нервная система." },
  { ico: "🌲", name: "Климатолечение",      desc: "Хвойный воздух горного курорта на высоте 800м. Мощный оздоровительный эффект." },
];

const HOTELS = [
  { name: "Crown Plaza Borjomi 5★",    price: "от $280 / 5 ночей", desc: "Лучший спа-отель Боржоми. Термальный бассейн, спа, прямой доступ к источникам." },
  { name: "Borjomi Palace Hotel 4★",   price: "от $220 / 5 ночей", desc: "Исторический отель в центре. Процедурный центр, ресторан грузинской кухни." },
  { name: "Green Borjomi Hotel 3★",    price: "от $140 / 5 ночей", desc: "Бюджетный вариант. Чистые номера, завтраки, рядом парк с источниками." },
];

export default function BorjomiPage() {
  return (
    <>
      <section style={{ background: `linear-gradient(to bottom,rgba(13,27,42,0.45),rgba(13,27,42,0.82)),url('${IMG}') center/cover no-repeat`, padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/sanatorium" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Санатории</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>🇬🇪 Боржоми</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            Боржоми — лечение у источника
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 520, margin: "0 0 10px" }}>
            Грузия · Минеральная вода Боржоми · Горный воздух · от $140
          </p>
          <p style={{ color: "rgba(200,255,200,0.7)", fontSize: 13, marginBottom: 28 }}>
            ЖКТ · Обмен веществ · Суставы · Реабилитация
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Забронировать →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Позвонить</a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding: "48px 20px 80px" }}>

        <div style={{ display: "inline-block", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 10, padding: "10px 18px", marginBottom: 40, fontSize: 13, color: "#166534" }}>
          ✅ <strong>Виза не нужна 365 дней</strong> — граждане Узбекистана въезжают в Грузию без визы
        </div>

        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Лечение</span>
          <h2 className="section-title">Что лечат в Боржоми</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14, marginTop: 22 }}>
            {TREATMENTS.map(t => (
              <div key={t.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{t.ico}</div>
                <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 5 }}>{t.name}</h3>
                <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.55 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Отели</span>
          <h2 className="section-title">Спа-отели Боржоми — цены</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 22 }}>
            {HOTELS.map(h => (
              <div key={h.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 4 }}>{h.name}</h3>
                  <p style={{ fontSize: 13, color: "#64748b" }}>{h.desc}</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "3px 10px", borderRadius: 6 }}>{h.price}</div>
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
              { href: "/sanatorium",              label: "Все санатории" },
              { href: "/sanatorium/naftalan",     label: "Нафталан" },
              { href: "/sanatorium/karlovy-vary", label: "Карловы Вары" },
              { href: "/georgia",                 label: "Туры в Грузию" },
              { href: "/visa",                    label: "Визы" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
        </section>

        <CTABlock title="Хотите поехать в Боржоми?" />
      </div>
    </>
  );
}
