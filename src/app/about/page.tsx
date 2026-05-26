// src/app/about/page.tsx
import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE, PHONE_DISPLAY, TG } from "../shared";

export const metadata: Metadata = buildMeta({
  title: "О компании PANTERA LUXE — туристическое агентство Ташкент",
  description: "PANTERA LUXE — туристическое агентство в Ташкенте. 10 лет работы, 5000+ довольных туристов. Туры в Дубай, Турцию, Египет, Мальдивы. turytashkent.com",
  keywords: ["о компании PANTERA LUXE","туристическое агентство Ташкент","turytashkent о нас","PANTERA LUXE история","надёжное агентство Ташкент"],
  path: "/about",
});

const STATS = [
  { n: "10+",   label: "лет на рынке"         },
  { n: "5 000+",label: "довольных туристов"    },
  { n: "50+",   label: "направлений"           },
  { n: "24/7",  label: "поддержка клиентов"    },
];

const VALUES = [
  { ico: "🤝", title: "Честность",       desc: "Реальные цены без скрытых доплат. Говорим правду о турах." },
  { ico: "⚡", title: "Скорость",        desc: "Подбираем тур за 30 минут. Бронируем быстро." },
  { ico: "🛡️", title: "Надёжность",      desc: "Работаем только с проверенными отелями и авиакомпаниями." },
  { ico: "💎", title: "Качество",        desc: "Только 4★ и 5★ отели. Комфорт на всех этапах поездки." },
  { ico: "📞", title: "Поддержка",       desc: "На связи 24/7 — до, во время и после поездки." },
  { ico: "💰", title: "Лучшая цена",     desc: "Сравниваем цены и находим самый выгодный вариант." },
];

const DIRECTIONS = [
  "🇦🇪 Дубай и ОАЭ", "🇹🇷 Турция (Стамбул, Анталья, Каппадокия)",
  "🇪🇬 Египет (Шарм Эль Шейх)", "🇲🇻 Мальдивы", "🇬🇪 Грузия",
  "🇦🇿 Азербайджан", "🇹🇭 Таиланд", "🇻🇳 Вьетнам",
  "🚢 Круизы (ОАЭ, Средиземноморье, Азия)",
  "🏥 Санатории (Нафталан, Карловы Вары, Железноводск)",
  "🇺🇿 Туры по Узбекистану (Самарканд, Бухара, Хива)",
];

export default function AboutPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0d1b2a,#1a3550)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <span className="section-tag" style={{ color: "#ffd166" }}>О нас</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, margin: "12px 0 14px" }}>
            PANTERA LUXE — туристическое агентство в Ташкенте
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, maxWidth: 580, margin: "0 auto" }}>
            Помогаем жителям Узбекистана путешествовать комфортно, безопасно и выгодно с 2014 года
          </p>
        </div>
      </section>

      <div className="site-container" style={{ padding: "52px 20px 80px" }}>

        {/* Stats */}
        <section style={{ marginBottom: 56 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 16 }}>
            {STATS.map(s => (
              <div key={s.label} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "24px 20px", textAlign: "center" }}>
                <div style={{ fontSize: 36, fontWeight: 900, color: "#ff6b35", marginBottom: 6 }}>{s.n}</div>
                <div style={{ fontSize: 13, color: "#64748b", fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About text */}
        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">История</span>
          <h2 className="section-title">Кто мы</h2>
          <div style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "28px 32px", marginTop: 22 }}>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#334155", marginBottom: 16 }}>
              <strong>PANTERA LUXE</strong> — туристическое агентство в Ташкенте, работающее с 2014 года.
              Мы специализируемся на турах из Узбекистана в самые популярные направления мира:
              Дубай, Турцию, Египет, Мальдивы, Грузию и другие страны.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#334155", marginBottom: 16 }}>
              За 10 лет работы мы организовали поездки для более чем <strong>5 000 туристов</strong>.
              Каждый клиент получает индивидуальный подход — мы подбираем туры под конкретный бюджет,
              даты и пожелания.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#334155" }}>
              Наш офис находится по адресу: <strong>г.Ташкент, Юнусабадский район, пр. Амир Темур 99а</strong>.
              Работаем <strong>ежедневно с 10:00 до 21:00</strong>.
              Телефон: <a href={`tel:${PHONE}`} style={{ color: "#ff6b35", fontWeight: 700 }}>{PHONE_DISPLAY}</a>
            </p>
          </div>
        </section>

        {/* Values */}
        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Ценности</span>
          <h2 className="section-title">Почему выбирают нас</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 14, marginTop: 22 }}>
            {VALUES.map(v => (
              <div key={v.title} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 12, padding: "20px 22px", display: "flex", gap: 14 }}>
                <span style={{ fontSize: 28, flexShrink: 0 }}>{v.ico}</span>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 5 }}>{v.title}</h3>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.55 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Directions */}
        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Направления</span>
          <h2 className="section-title">Куда мы отправляем</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 10, marginTop: 22 }}>
            {DIRECTIONS.map(d => (
              <div key={d} style={{ background: "#f8fafc", borderRadius: 10, padding: "12px 16px", fontSize: 14, fontWeight: 600, color: "#334155" }}>
                {d}
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 14 }}>Смотрите также</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              {href:"/contacts", label:"📞 Контакты"},
              {href:"/reviews",  label:"⭐ Отзывы"},
              {href:"/dubai",    label:"🇦🇪 Дубай"},
              {href:"/turkey",   label:"🇹🇷 Турция"},
              {href:"/visa",     label:"🛂 Визы"},
            ].map(l => (
              <a key={l.href} href={l.href} style={{ background:"#f1f5f9", color:"#334155", fontSize:13, fontWeight:600, padding:"7px 14px", borderRadius:20, textDecoration:"none" }}>
                {l.label}
              </a>
            ))}
          </div>
        </section>

        <CTABlock title="Готовы к путешествию?" />
      </div>
    </>
  );
}
