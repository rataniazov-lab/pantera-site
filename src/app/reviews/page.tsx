// src/app/reviews/page.tsx
import type { Metadata } from "next";
import { buildMeta, CTABlock } from "../shared";

export const metadata: Metadata = buildMeta({
  title: "Отзывы клиентов PANTERA LUXE — туры из Ташкента",
  description: "Отзывы туристов о PANTERA LUXE Ташкент. 5000+ клиентов. Реальные отзывы о турах в Дубай, Турцию, Египет, Мальдивы. turytashkent.com",
  keywords: ["отзывы PANTERA LUXE","отзывы туристическое агентство Ташкент","turytashkent отзывы","туры Ташкент отзывы клиентов"],
  path: "/reviews",
});

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "PANTERA LUXE",
  url: "https://turytashkent.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312",
    bestRating: "5",
  },
};

const REVIEWS = [
  { name: "Нилуфар Р.", dest: "🇦🇪 Дубай", rating: 5, date: "Март 2026",
    text: "Летали с семьёй в Дубай. Всё организовано на высшем уровне — трансфер, отель Atlantis, экскурсии. Дети в восторге от водного парка. Однозначно рекомендую PANTERA LUXE!" },
  { name: "Бахром Т.", dest: "🇹🇷 Стамбул", rating: 5, date: "Февраль 2026",
    text: "Первый раз в Стамбуле — и это было незабываемо. Гид встретил в аэропорту, всё показал. Отель с видом на Босфор. Цена оказалась ниже чем я ожидал. Спасибо!" },
  { name: "Малика С.", dest: "🇪🇬 Шарм", rating: 5, date: "Январь 2026",
    text: "Отдыхали с мужем на Красном море. Коралловые рифы просто фантастика! Виза по прилёту без проблем. Агентство всё чётко организовало, ни одной накладки." },
  { name: "Жамшид К.", dest: "🏥 Нафталан", rating: 5, date: "Декабрь 2025",
    text: "Ездил на лечение суставов в Нафталан. Нафталановые ванны реально помогли — боль значительно уменьшилась. Агентство помогло с оформлением и трансфером." },
  { name: "Зарина Х.", dest: "🇲🇻 Мальдивы", rating: 5, date: "Ноябрь 2025",
    text: "Медовый месяц на Мальдивах — мечта стала реальностью! Водное бунгало, бирюзовое море, закаты... PANTERA LUXE всё организовали идеально. Навсегда запомним!" },
  { name: "Отабек Н.", dest: "🇬🇪 Тбилиси", rating: 5, date: "Октябрь 2025",
    text: "Отличная поездка в Грузию! Тбилиси, Мцхета, Казбеги — успели всё. Гид был профессиональным. Цена очень доступная для такого качества." },
  { name: "Сабина Д.", dest: "🚢 Круиз ОАЭ", rating: 5, date: "Сентябрь 2025",
    text: "Круиз по ОАЭ — это было нечто! За 7 дней посетили 5 стран. Каюта с балконом, закаты на Персидском заливе. Такой формат отдыха открыла для себя впервые — буду ездить ещё!" },
  { name: "Азиз М.", dest: "🇹🇭 Пхукет", rating: 4, date: "Август 2025",
    text: "Таиланд превзошёл ожидания. Пляжи, еда, люди — всё понравилось. Единственное — чуть задержался трансфер, но менеджер сразу решил вопрос. В целом очень доволен." },
];

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }} />

      <section style={{ background: "linear-gradient(135deg,#0d1b2a,#1a3550)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <span className="section-tag" style={{ color: "#ffd166" }}>⭐ Отзывы</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, margin: "12px 0 14px" }}>
            Отзывы наших клиентов
          </h1>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", marginTop: 16 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 42, fontWeight: 900, color: "#ffd166" }}>4.9</div>
              <div style={{ color: "#ffd166", fontSize: 20 }}>★★★★★</div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>средняя оценка</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 42, fontWeight: 900, color: "#ffd166" }}>312</div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>отзывов</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 42, fontWeight: 900, color: "#ffd166" }}>5 000+</div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>туристов</div>
            </div>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding: "52px 20px 80px" }}>
        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Отзывы</span>
          <h2 className="section-title">Что говорят наши туристы</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 18, marginTop: 24 }}>
            {REVIEWS.map(r => (
              <div key={r.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 16, padding: "22px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#1e293b" }}>{r.name}</div>
                    <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>{r.dest} · {r.date}</div>
                  </div>
                  <div style={{ color: "#f59e0b", fontSize: 16 }}>{"★".repeat(r.rating)}</div>
                </div>
                <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.7, fontStyle: "italic" }}>
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: "rgba(255,107,53,0.06)", border: "1px solid rgba(255,107,53,0.2)", borderRadius: 14, padding: "24px 28px", marginBottom: 48, textAlign: "center" }}>
          <p style={{ fontSize: 15, color: "#1e293b", fontWeight: 600, marginBottom: 12 }}>
            Были у нас в туре? Поделитесь впечатлениями!
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer"
              className="btn-primary" style={{ textDecoration: "none", fontSize: 14 }}>
              Написать отзыв в Telegram
            </a>
            <a href="https://www.instagram.com/tury_tashkent/" target="_blank" rel="noopener noreferrer"
              className="btn-outline" style={{ textDecoration: "none", fontSize: 14 }}>
              Instagram @tury_tashkent
            </a>
          </div>
        </div>

        <CTABlock title="Стать нашим следующим довольным туристом?" />
      </div>
    </>
  );
}
