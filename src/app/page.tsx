"use client";
import { useEffect, useState, useCallback } from "react";

type Page = "home" | "directions" | "dest" | "cruise" | "videos" | "contacts";

const LOGO = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779385406/pantera_luxe_logo_v0gbmo.png";

const DESTS_PREVIEW = [
  { key:"dubai",   flag:"🇦🇪", title:"Дубай",          sub:"Город будущего — небоскрёбы, пустыня, роскошь",      img:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=70", tags:["🏖️ Пляж","🏙️ Город","✈️ 5ч","от $499"] },
  { key:"sharm",   flag:"🇪🇬", title:"Шарм Эль Шейх",  sub:"Жемчужина Красного моря — дайвинг, риф, вечное лето",img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=70", tags:["🏖️ Пляж","🤿 Дайвинг","✈️ 4ч","от $380"] },
  { key:"turkey",  flag:"🇹🇷", title:"Турция",          sub:"Стамбул, Каппадокия, Анталья — два континента",      img:"https://images.unsplash.com/photo-1530838236892-bce9f63a3ef1?w=600&q=70", tags:["🏙️ Стамбул","🏖️ Анталья","🎈 Каппадокия","от $350"] },
];

const DIR_CARDS = [
  { key:"dubai",   flag:"🇦🇪", name:"Дубай",           sub:"ОАЭ · от $499",            cat:"city beach",  img:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=65" },
  { key:"sharm",   flag:"🇪🇬", name:"Шарм Эль Шейх",   sub:"Египет · от $380",          cat:"beach",       img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=65" },
  { key:"turkey",  flag:"🇹🇷", name:"Турция",           sub:"Стамбул, Анталья · от $350",cat:"beach city",  img:"https://images.unsplash.com/photo-1530838236892-bce9f63a3ef1?w=500&q=65" },
  { key:"maldives",flag:"🇲🇻", name:"Мальдивы",         sub:"от $1200",                  cat:"beach",       img:"https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=500&q=65" },
  { key:"thailand",flag:"🇹🇭", name:"Таиланд",          sub:"Пхукет · от $650",          cat:"beach",       img:"https://images.unsplash.com/photo-1528127269322-539801943592?w=500&q=65" },
  { key:"georgia", flag:"🇬🇪", name:"Грузия",           sub:"от $290",                   cat:"city nature", img:"https://images.unsplash.com/photo-1565008576549-57569a49371d?w=500&q=65" },
  { key:"baku",    flag:"🇦🇿", name:"Азербайджан",      sub:"Баку · от $250",            cat:"city",        img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=65" },
  { key:"karlovy", flag:"🇨🇿", name:"Карловы Вары",     sub:"Чехия",                     cat:"health city", img:"https://images.unsplash.com/photo-1571406252241-db0280bd36cd?w=500&q=65" },
  { key:"naftalan",flag:"🇦🇿", name:"Нафталан",         sub:"Азербайджан",               cat:"health",      img:"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&q=65" },
  { key:"vietnam", flag:"🇻🇳", name:"Вьетнам",          sub:"от $600",                   cat:"beach",       img:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=500&q=65" },
  { key:"qatar",   flag:"🇶🇦", name:"Катар",            sub:"Доха",                      cat:"city",        img:"https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=500&q=65" },
  { key:"issiyk",  flag:"🇰🇬", name:"Иссык-Куль",      sub:"от $180",                   cat:"nature beach",img:"https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&q=65" },
];

const REVIEWS = [
  { av:"А", bg:"linear-gradient(135deg,#ff6b35,#ffd166)", name:"Алишер К.",  dest:"✈️ Дубай 2025", text:"«Летели в Дубай всей семьёй. Всё идеально: трансфер, отель 5*, экскурсии!»" },
  { av:"М", bg:"linear-gradient(135deg,#e1306c,#833ab4)", name:"Малика Ю.",   dest:"🏥 Медтуризм",  text:"«Медтуризм в Турцию — взяли всё в свои руки: визу, клинику, переводчика.»" },
  { av:"Б", bg:"linear-gradient(135deg,#06b6d4,#2196f3)", name:"Бобур Р.",    dest:"🇪🇬 Египет",    text:"«Горящий тур в Египет за 2 дня до вылета. Отель лучше чем ожидал!»" },
  { av:"Н", bg:"linear-gradient(135deg,#22c55e,#06b6d4)", name:"Нилуфар И.",  dest:"🇲🇻 Мальдивы",  text:"«Мальдивы — медовый месяц. Водное бунгало, закаты... Незабываемо!»" },
  { av:"З", bg:"linear-gradient(135deg,#ffd166,#ff6b35)", name:"Зафар Н.",    dest:"✈️ Таиланд",    text:"«Корпоратив 45 человек в Таиланд — всё чётко, команда в восторге!»" },
];

const INFO_DATA: Record<string,{currency:string;lang:string;religion:string;climate:string;visa:string}> = {
  dubai:   { currency:"Дирхам ОАЭ (AED), 1$≈3.67",      lang:"Арабский, английский везде",                      religion:"Ислам. Уважайте правила публично",             climate:"Окт-апр: +25°C. Лето: до +48°C!",              visa:"Виза не нужна 30 дней" },
  sharm:   { currency:"Египетский фунт (EGP), 1$≈50",    lang:"Арабский, английский в турзонах",                 religion:"Ислам. Шарм светский курорт",                 climate:"Ноябрь-апрель: +24-28°C. Лето: +40°C",         visa:"Sinai Only виза $25 в аэропорту" },
  turkey:  { currency:"Турецкая лира (TRY)",              lang:"Турецкий, русский в туристических зонах",         religion:"Ислам (светский). В мечети — прикрытая голова",climate:"Анталья: +30°C летом. Стамбул: +28°C летом",   visa:"Виза не нужна 30 дней" },
  georgia: { currency:"Грузинский лари (GEL), 1$≈2.7",   lang:"Грузинский, русский понимают все",                religion:"Православное христианство",                   climate:"Тбилиси: +32°C летом. Батуми: субтропики",     visa:"30 дней без визы" },
  maldives:{ currency:"Мальдивская руфия, USD везде",     lang:"Дивехи и английский",                             religion:"Ислам — уважайте в деревнях",                 climate:"Тропический, +28°C круглый год",               visa:"Виза по прилёту бесплатно" },
  thailand:{ currency:"Тайский бат (THB), 1$≈35",         lang:"Тайский, английский в турзонах",                  religion:"Буддизм — в храмы в закрытой одежде",         climate:"+32°C тропический. Лучший сезон: ноябрь-март", visa:"30 дней без визы" },
};

// ─────────────────────────── Countdown ──────────────────────────
function useCountdown() {
  const [t, setT] = useState({ h:"23", m:"59", s:"59" });
  useEffect(() => {
    let end = 0;
    try { end = +(localStorage.getItem("pl_end") || 0); } catch {}
    if (!end || Date.now() > end) {
      end = Date.now() + 86_400_000;
      try { localStorage.setItem("pl_end", String(end)); } catch {}
    }
    const tick = () => {
      const d = Math.max(0, end - Date.now());
      setT({
        h: String(Math.floor(d / 3_600_000)).padStart(2, "0"),
        m: String(Math.floor((d % 3_600_000) / 60_000)).padStart(2, "0"),
        s: String(Math.floor((d % 60_000) / 1_000)).padStart(2, "0"),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

// ─────────────────────────── Nav ────────────────────────────────
function Nav({ page, onNav, mob, onMob }: {
  page: Page; onNav: (p: Page) => void; mob: boolean; onMob: () => void;
}) {
  const links: [Page, string][] = [
    ["home","Главная"], ["directions","Направления"], ["cruise","🚢 Круизы"], ["videos","🎬 Видео"],
  ];
  return (
    <>
      <nav className="nav">
        <button className="nav-logo" onClick={() => onNav("home")}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="PANTERA LUXE" width={38} height={38} />
          <div className="nav-logo-text">
            <span className="name">PANTERA LUXE</span>
            <span className="sub">Туры из Ташкента</span>
          </div>
        </button>

        <div className="nav-links">
          {links.map(([p, l]) => (
            <button key={p} className={`nav-link${page === p ? " active" : ""}`} onClick={() => onNav(p)}>{l}</button>
          ))}
          <button className="nav-cta" onClick={() => onNav("contacts")}>Оставить заявку</button>
        </div>

        <button className="hamburger" onClick={onMob}>
          <span style={mob ? { transform:"rotate(45deg) translate(5px,5px)" } : {}} />
          <span style={mob ? { opacity:0 } : {}} />
          <span style={mob ? { transform:"rotate(-45deg) translate(5px,-5px)" } : {}} />
        </button>
      </nav>

      <div className={`mob-menu${mob ? " open" : ""}`}>
        <button className="mob-close" onClick={onMob}>✕</button>
        {([...links, ["contacts","Контакты"]] as [Page,string][]).map(([p,l]) => (
          <button key={p} className="mob-link" onClick={() => { onNav(p); onMob(); }}>{l}</button>
        ))}
      </div>
    </>
  );
}

// ─────────────────────────── Home ───────────────────────────────
function HomePage({ onNav, onDest }: { onNav:(p:Page)=>void; onDest:(k:string)=>void }) {
  const cd = useCountdown();
  return (
    <div style={{ paddingTop: 60 }}>
      {/* Hero */}
      <div className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-badge">✈️ Туристическое агентство в Ташкенте</div>
          <h1>Откройте мир<br />вместе с <span>PANTERA LUXE</span></h1>
          <p className="hero-sub">Гиды по 14+ направлениям, горящие туры, медицинский туризм, круизы.</p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => onNav("directions")}>🗺️ Выбрать направление</button>
            <button className="btn-ghost"   onClick={() => onNav("contacts")}>Получить консультацию</button>
            <a className="btn-fire" href="https://t.me/tury_iz_tashkenta" target="_blank" rel="noopener noreferrer">🔥 Горящие туры</a>
          </div>
          <div className="hero-stats">
            {[["5000+","Клиентов"],["14+","Направлений"],["10 лет","На рынке"],["24/7","Поддержка"]].map(([v,l]) => (
              <div key={l} className="hero-stat"><strong>{v}</strong><span>{l}</span></div>
            ))}
          </div>
        </div>
      </div>

      {/* Hot strip */}
      <div className="hot-strip">
        <span className="hot-badge">🔥 ГОРИТ</span>
        <p className="hot-text">Дубай 7 ночей — <span>от $499</span> · Вылет из Ташкента</p>
        <div className="cd">
          <div className="cd-box"><strong>{cd.h}</strong><span>ч</span></div>
          <span className="cd-sep">:</span>
          <div className="cd-box"><strong>{cd.m}</strong><span>м</span></div>
          <span className="cd-sep">:</span>
          <div className="cd-box"><strong>{cd.s}</strong><span>с</span></div>
        </div>
        <button className="btn-primary" style={{ padding:"7px 16px", fontSize:12 }} onClick={() => onNav("contacts")}>
          Успеть →
        </button>
      </div>

      {/* Directions preview */}
      <div className="sec">
        <div className="site-container">
          <span className="section-tag">Направления</span>
          <h2 className="section-title">Куда полетим?</h2>
          <p className="section-sub">14 направлений с полными гидами — отели, пляжи, культура, советы</p>
          <div className="cards-grid">
            {DESTS_PREVIEW.map(d => (
              <div key={d.key} className="card" onClick={() => onDest(d.key)}>
                <div className="card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={d.img} alt={d.title} loading="lazy" />
                </div>
                <div className="card-body">
                  <h3>{d.flag} {d.title}</h3>
                  <p>{d.sub}</p>
                  <span className="card-link">Полный гид →</span>
                </div>
              </div>
            ))}
            <div className="card" onClick={() => onNav("directions")}>
              <div className="card-img" style={{ background:"linear-gradient(135deg,#0d1b2a,#1a2b3c)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:44 }}>🌍</div>
              <div className="card-body">
                <h3>Все 14 направлений</h3>
                <p>Мальдивы, Таиланд, Грузия, Китай, Европа...</p>
                <span className="card-link">Смотреть все →</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cruise promo */}
      <div className="sec sec-gray">
        <div className="site-container">
          <div className="cruise-box">
            <div>
              <span className="tag">Новое направление</span>
              <h2>🚢 Круизы по всему миру</h2>
              <p>Забудьте про Титаник — современные круизы это 5★ плавучий отель. 27 миллионов человек каждый год выбирают круизы.</p>
              <button className="btn-primary" style={{ marginTop:18 }} onClick={() => onNav("cruise")}>Узнать про круизы →</button>
            </div>
            <div className="cruise-emoji">🚢</div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="sec">
        <div className="site-container">
          <span className="section-tag">Услуги</span>
          <h2 className="section-title">Что мы делаем</h2>
          <div className="svc-grid">
            {[["✈️","Туры из Ташкента","Авиабилеты + отель"],["🏥","Медицинский туризм","Турция, Корея"],["🚢","Круизы","Мировые маршруты"],["🏨","Отели по миру","100 000+ вариантов"],["🚗","Трансферы","Аэропорт и авто"],["👥","Групповые туры","Экономия до 30%"]].map(([i,t,s]) => (
              <div key={t} className="svc-card"><div className="ico">{i}</div><h3>{t}</h3><p>{s}</p></div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="sec sec-gray">
        <div className="site-container">
          <span className="section-tag">Отзывы</span>
          <h2 className="section-title">5000+ довольных путешественников</h2>
        </div>
        <div className="reviews-wrap">
          <div className="reviews-track">
            {[...REVIEWS, ...REVIEWS].map((r, i) => (
              <div key={i} className="rv-card">
                <div className="rv-stars">★★★★★</div>
                <p className="rv-text">{r.text}</p>
                <div className="rv-author">
                  <div className="rv-av" style={{ background:r.bg }}>{r.av}</div>
                  <div><p className="rv-name">{r.name}</p><p className="rv-dest">{r.dest}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────── Directions ─────────────────────────
function DirectionsPage({ onDest, onNav }: { onDest:(k:string)=>void; onNav:(p:Page)=>void }) {
  const [filter, setFilter] = useState("all");
  const visible = DIR_CARDS.filter(d => filter === "all" || d.cat.includes(filter));
  return (
    <div style={{ paddingTop:60 }}>
      <div className="dir-hero">
        <div className="site-container">
          <span className="section-tag">Все направления</span>
          <h1>Туры из Ташкента</h1>
          <p>Выберите направление — полный гид с отелями, пляжами, советами и локациями</p>
        </div>
      </div>
      <div className="site-container">
        <div className="filters">
          {[["all","Все"],["beach","🏖️ Пляжный"],["city","🏙️ Города"],["health","💆 Лечение"],["nature","🏔️ Природа"]].map(([k,l]) => (
            <button key={k} className={`filter-btn${filter===k?" active":""}`} onClick={() => setFilter(k)}>{l}</button>
          ))}
        </div>
        <div className="dir-grid">
          {visible.map(d => (
            <div key={d.key} className="dir-card"
              onClick={() => DESTS_PREVIEW.find(x => x.key===d.key) ? onDest(d.key) : onNav("contacts")}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.img} alt={d.name} loading="lazy" />
              <div className="dir-overlay" />
              <div className="dir-info">
                <p className="dir-name">{d.flag} {d.name}</p>
                <p className="dir-sub">{d.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────── Destination detail ──────────────────
function DestPage({ destKey, onBack, onNav }: { destKey:string; onBack:()=>void; onNav:(p:Page)=>void }) {
  const [tab, setTab] = useState(0);
  const d = DESTS_PREVIEW.find(x => x.key === destKey);
  if (!d) return null;

  const info = INFO_DATA[d.key] ?? INFO_DATA.dubai;
  const tabs = ["🏆 Премиум","⭐ Лучшие","📋 Культура","💡 Советы","📍 Локации"];
  const premiumHotels = ["Burj Al Arab","Atlantis The Palm","Four Seasons","One&Only Royal Mirage","Palazzo Versace"];
  const topHotels     = ["Jumeirah Beach Hotel","Madinat Jumeirah","Sofitel The Palm","Address Beach Resort","Anantara Palm"];

  return (
    <div style={{ paddingTop:60 }}>
      <div className="dest-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={d.img} alt={d.title} loading="lazy" />
        <div className="dest-hero-overlay" />
        <div className="dest-hero-content site-container">
          <button className="back-btn" onClick={onBack}
            style={{ background:"rgba(255,255,255,0.12)", color:"#fff", border:"1px solid rgba(255,255,255,0.25)" }}>
            ← Все направления
          </button>
          <h1>{d.flag} {d.title}</h1>
          <p>{d.sub}</p>
          <div className="dest-tags">{d.tags.map(t => <span key={t} className="dest-tag">{t}</span>)}</div>
        </div>
      </div>

      <div className="dest-nav">
        <div className="dest-nav-inner site-container">
          {tabs.map((t, i) => (
            <button key={i} className={`dest-tab${tab===i?" active":""}`} onClick={() => setTab(i)}>{t}</button>
          ))}
        </div>
      </div>

      <div className="site-container" style={{ padding:"40px 20px 60px" }}>
        {tab === 0 && (
          <>
            <div className="fomo-box">
              <span className="fi">🏆</span>
              <div><h3>Лучшие номера бронируются за 3-6 месяцев</h3><p>Каждый день ожидания = меньше выбора и выше цена.</p></div>
            </div>
            <div className="hotel-grid">
              {premiumHotels.map(h => (
                <div key={h} className="h-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=65" alt={h} loading="lazy" />
                  <div className="h-card-body">
                    <div className="h-stars">★★★★★</div>
                    <h3>{h}</h3>
                    <p>Роскошный 5★ отель уровня люкс. Приватный пляж, spa, ресторан мирового уровня.</p>
                    <p className="h-price">💬 Стоимость по запросу</p>
                    <button className="btn-primary" style={{ padding:"7px 14px", fontSize:12, marginTop:8 }}
                      onClick={() => onNav("contacts")}>Узнать стоимость</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === 1 && (
          <div className="hotel-grid">
            {topHotels.map(h => (
              <div key={h} className="h-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&q=65" alt={h} loading="lazy" />
                <div className="h-card-body">
                  <div className="h-stars">★★★★★</div>
                  <h3>{h}</h3>
                  <p>Отличный 5★ отель. Пляж, бассейны, всё включено, прекрасный сервис.</p>
                  <p className="h-price">💬 Стоимость по запросу</p>
                  <button className="btn-primary" style={{ padding:"7px 14px", fontSize:12, marginTop:8 }}
                    onClick={() => onNav("contacts")}>Узнать стоимость</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div className="info-grid">
            {([["💵","Валюта",info.currency],["🗣️","Язык",info.lang],["🕌","Религия",info.religion],["☀️","Климат",info.climate],["✈️","Виза",info.visa]] as [string,string,string][]).map(([ic,n,v]) => (
              <div key={n} className="info-card"><h3>{ic} {n}</h3><p>{v}</p></div>
            ))}
          </div>
        )}

        {tab === 3 && (
          <div className="tips-list">
            {([["☀️","Жара летом","Всегда вода, SPF50+, гуляйте утром и вечером."],["👔","Дресс-код в ТЦ","Закрытые плечи и колени обязательны."],["🚇","Метро и такси","Careem/Uber работают. Метро дешевле такси."],["💳","Карты везде","Наличные почти не нужны. Visa/MC принимают везде."]] as [string,string,string][]).map(([ic,t,p]) => (
              <div key={t} className="tip-item"><span className="tip-ico">{ic}</span><div><h4>{t}</h4><p>{p}</p></div></div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div className="loc-grid">
            {([["🏙️","Burj Khalifa","830м, смотровая на 124-м этаже. Билеты бронировать заранее!"],["🛍️","Dubai Mall","Крупнейший ТРЦ мира. Аквариум, каток, кинотеатр."],["🏜️","Сафари в пустыне","Джипы, ужин под звёздами — must do в Дубае."],["🛒","Gold Souk","Дешевейшее золото в мире."]] as [string,string,string][]).map(([ic,n,desc]) => (
              <div key={n} className="loc-card"><span className="loc-ico">{ic}</span><div><h3>{n}</h3><p>{desc}</p></div></div>
            ))}
          </div>
        )}

        <div className="cta-banner">
          <h3>✈️ Готовы лететь?</h3>
          <p>Оставьте заявку — подберём лучший тур и отель</p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={() => onNav("contacts")}>Оставить заявку</button>
            <a className="btn-outline" href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer">💬 Telegram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────── Cruise ─────────────────────────────
function CruisePage({ onNav }: { onNav:(p:Page)=>void }) {
  const cruiseRoutes = [
    { img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=65", t:"🌊 Средиземноморье", p:"Испания, Италия, Греция. 7-14 ночей.", price:"от $599 / чел." },
    { img:"https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=500&q=65",   t:"🏝️ Карибские острова",p:"Ямайка, Барбадос, Мексика.",            price:"от $699 / чел." },
    { img:"https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=500&q=65", t:"🧊 Норвежские фьорды",p:"Северное сияние, айсберги.",             price:"от $899 / чел." },
    { img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=65",    t:"🇦🇪 ОАЭ и Аравия",   p:"Дубай, Абу-Даби, Оман.",                 price:"от $499 / чел." },
  ];
  const myths = [
    { x:"🚢💥", type:"false", title:"«Корабль может утонуть»",   p:"Современные лайнеры — самые безопасные суда. 27 уровней защиты." },
    { x:"👴",   type:"false", title:"«Круиз для пенсионеров»",    p:"Norwegian, MSC — ночные клубы, аквапарки, казино на борту." },
    { x:"💸",   type:"false", title:"«Круиз очень дорогой»",      p:"Средиземноморье 7 ночей от $599 — проживание и 5 стран." },
    { x:"🍔",   type:"true",  title:"«На круизе вкусно кормят»",  p:"Завтрак-обед-ужин 24/7 включены. Люди набирают 2-3 кг за круиз 😄" },
  ];
  return (
    <div style={{ paddingTop:60 }}>
      <div className="cruise-hero-page">
        <div className="site-container">
          <div className="cruise-badges">
            {["🌊 Средиземноморье","🏝️ Карибы","🧊 Норвегия","🗺️ Кругосветка"].map(b => <span key={b} className="cruise-badge">{b}</span>)}
          </div>
          <h1>🚢 Круизы по всему миру</h1>
          <p>27 миллионов человек каждый год выбирают круизы. Пока вы читаете — 400 000 плывут на плавучих отелях с видом на закат.</p>
          <button className="btn-primary" onClick={() => onNav("contacts")}>Забронировать круиз →</button>
        </div>
      </div>

      <div className="site-container" style={{ padding:"44px 20px 60px" }}>
        <div className="fomo-box">
          <span className="fi">⚡</span>
          <div><h3>Вы теряете лучшие годы без круизов</h3><p>Средний возраст круизного пассажира — <strong>46 лет</strong>. На молодёжных круизах MSC — <strong>28 лет</strong>.</p></div>
        </div>

        <span className="section-tag">Разрушаем мифы</span>
        <h2 className="section-title">«Я думал, круиз — это как Титаник»</h2>
        <div className="myth-grid">
          {myths.map(m => (
            <div key={m.title} className="myth-card">
              <div className="mx">{m.x}</div>
              <div className={`myth-label ${m.type}`}>{m.type==="true" ? "ФАКТ ✓" : "МИФ"}</div>
              <h3>{m.title}</h3>
              <p>{m.p}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop:40 }}>
          <span className="section-tag">Маршруты</span>
          <h2 className="section-title">Куда плыть?</h2>
          <div className="cruise-type-grid">
            {cruiseRoutes.map(r => (
              <div key={r.t} className="ct-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.img} alt={r.t} loading="lazy" />
                <div className="ct-body"><h3>{r.t}</h3><p>{r.p}</p><p className="ct-price">{r.price}</p></div>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-banner">
          <h3>🚢 Готовы выйти в море?</h3>
          <p>Более 300 клиентов из Ташкента уже плавали с нами.</p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={() => onNav("contacts")}>Забронировать круиз</button>
            <a className="btn-outline" href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer">💬 Telegram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────── Videos ─────────────────────────────
function VideosPage() {
  return (
    <div style={{ paddingTop:60 }}>
      <div style={{ background:"linear-gradient(135deg,#0d1b2a,#1a2b3c)", padding:"48px 0", textAlign:"center" }}>
        <div className="site-container">
          <span className="section-tag" style={{ color:"#ffd166" }}>Видеообзоры</span>
          <h1 style={{ color:"#fff", fontSize:"clamp(1.6rem,4vw,2.4rem)", fontWeight:900, margin:"6px 0 8px" }}>
            🎬 Видеообзоры отелей и направлений
          </h1>
          <p style={{ color:"rgba(255,255,255,0.68)", fontSize:14, maxWidth:480, margin:"0 auto" }}>
            Направление → Город → Категория → Видеообзор
          </p>
        </div>
      </div>
      <div className="site-container" style={{ padding:"60px 20px", textAlign:"center" }}>
        <div style={{ fontSize:60, marginBottom:16 }}>🎬</div>
        <h2 style={{ fontSize:20, fontWeight:700, marginBottom:8 }}>Видеообзоры скоро появятся</h2>
        <p style={{ color:"#64748b", fontSize:13, maxWidth:360, margin:"0 auto 24px", lineHeight:1.6 }}>
          Мы готовим видеообзоры наших направлений. Подпишитесь чтобы не пропустить!
        </p>
        <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap" }}>
          <a className="soc-btn" href="https://www.instagram.com/tury_tashkent/" target="_blank" rel="noopener noreferrer" style={{ background:"#e1306c" }}>📸 Instagram</a>
          <a className="soc-btn" href="https://t.me/tury_iz_tashkenta" target="_blank" rel="noopener noreferrer" style={{ background:"#2ca5e0" }}>✈️ Telegram</a>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────── Contacts ───────────────────────────
function ContactsPage() {
  const [sent, setSent] = useState(false);
  const contactItems: [string,string,string,string|undefined,string][] = [
    ["📞","rgba(255,107,53,0.1)","Телефон","tel:+998771618888","+998 77 161 88 88"],
    ["✉️","rgba(33,150,243,0.1)","Email","mailto:uz@panteraluxe.travel","uz@panteraluxe.travel"],
    ["📍","rgba(6,182,212,0.1)","Офис",undefined,"Ташкент, Амир Темур 99а"],
    ["⏰","rgba(34,197,94,0.1)","Режим работы",undefined,"10:00 – 21:00, ежедневно"],
  ];
  return (
    <div style={{ paddingTop:60 }}>
      <div className="contacts-hero">
        <div className="site-container"><h1>Контакты</h1><p>Свяжитесь с нами — ответим в течение 15 минут</p></div>
      </div>
      <div className="site-container">
        <div className="contacts-grid">
          <div style={{ paddingTop:36 }}>
            {contactItems.map(([ico,bg,label,href,val]) => (
              <div key={label} className="c-item">
                <div className="c-ico" style={{ background:bg }}>{ico}</div>
                <div><h4>{label}</h4>{href ? <a href={href}>{val}</a> : <p>{val}</p>}</div>
              </div>
            ))}
            <div className="soc-links">
              <a className="soc-btn" href="https://www.instagram.com/tury_tashkent/"  target="_blank" rel="noopener noreferrer" style={{ background:"#e1306c" }}>📸 Instagram</a>
              <a className="soc-btn" href="https://t.me/tury_iz_tashkenta"            target="_blank" rel="noopener noreferrer" style={{ background:"#2ca5e0" }}>✈️ Горящие туры</a>
              <a className="soc-btn" href="https://t.me/vilet_support"                target="_blank" rel="noopener noreferrer" style={{ background:"#2ca5e0" }}>💬 Написать</a>
            </div>
          </div>

          <div className="c-form" style={{ margin:"28px 0" }}>
            {sent ? (
              <div style={{ textAlign:"center", padding:"40px 0" }}>
                <div style={{ fontSize:48, marginBottom:10 }}>✅</div>
                <h3 style={{ fontSize:18, fontWeight:700, marginBottom:6 }}>Заявка отправлена!</h3>
                <p style={{ color:"#64748b", fontSize:13, marginBottom:16 }}>Менеджер свяжется в течение 15 минут.</p>
                <a className="btn-primary" href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer">💬 Написать в Telegram</a>
              </div>
            ) : (
              <>
                <h3>Оставить заявку</h3>
                <div className="fg"><label>Имя</label><input type="text" placeholder="Ваше имя" autoComplete="name" /></div>
                <div className="fg"><label>Телефон / WhatsApp</label><input type="tel" placeholder="+998 __ ___" autoComplete="tel" /></div>
                <div className="fg">
                  <label>Направление</label>
                  <select>
                    <option>Выберите</option>
                    {["Дубай","Шарм Эль Шейх","Турция","Мальдивы","Таиланд","Круиз","Другое"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="fg"><label>Сообщение</label><textarea rows={3} placeholder="Пожелания..." /></div>
                <button className="btn-primary" style={{ width:"100%", padding:13 }} onClick={() => setSent(true)}>
                  Отправить заявку
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────── Footer ─────────────────────────────
function Footer({ onNav, onDest }: { onNav:(p:Page)=>void; onDest:(k:string)=>void }) {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="f-brand">
            <div className="f-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO} alt="PANTERA LUXE" width={38} height={38} loading="lazy" />
              <span>PANTERA LUXE</span>
            </div>
            <p>Туристическое агентство в Ташкенте. 10 лет, 5000+ туристов.</p>
            <p style={{ marginTop:8 }}>📍 Ташкент, Амир Темур 99а · ⏰ 10:00–21:00</p>
          </div>
          <div className="f-col">
            <h4>Направления</h4>
            <ul>
              {(["dubai","sharm","turkey","maldives"] as const).map(k => (
                <li key={k}><button onClick={() => onDest(k)}>
                  {k==="dubai"?"Дубай":k==="sharm"?"Шарм Эль Шейх":k==="turkey"?"Турция":"Мальдивы"}
                </button></li>
              ))}
              <li><button onClick={() => onNav("cruise")}>🚢 Круизы</button></li>
            </ul>
          </div>
          <div className="f-col">
            <h4>Контакты</h4>
            <ul>
              <li><a href="tel:+998771618888">+998 77 161 88 88</a></li>
              <li><a href="https://t.me/vilet_support"                target="_blank" rel="noopener noreferrer">Telegram</a></li>
              <li><a href="https://www.instagram.com/tury_tashkent/"  target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://t.me/tury_iz_tashkenta"            target="_blank" rel="noopener noreferrer">Горящие туры</a></li>
            </ul>
          </div>
        </div>
        <div className="f-bottom">
          <p>© 2025 PANTERA LUXE. Все права защищены.</p>
          <p>🌍 Туры из Ташкента, Узбекистан</p>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────── Root ───────────────────────────────
export default function Home() {
  const [page,    setPage]    = useState<Page>("home");
  const [destKey, setDestKey] = useState("dubai");
  const [mob,     setMob]     = useState(false);
  const [showTop, setShowTop] = useState(false);

  const nav = useCallback((p: Page) => {
    setPage(p); setMob(false); window.scrollTo({ top:0, behavior:"smooth" });
  }, []);

  const openDest = useCallback((k: string) => {
    setDestKey(k); setPage("dest"); window.scrollTo({ top:0, behavior:"smooth" });
  }, []);

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <Nav page={page} onNav={nav} mob={mob} onMob={() => setMob(v => !v)} />

      <main>
        {page === "home"       && <HomePage       onNav={nav} onDest={openDest} />}
        {page === "directions" && <DirectionsPage onDest={openDest} onNav={nav} />}
        {page === "dest"       && <DestPage       destKey={destKey} onBack={() => nav("directions")} onNav={nav} />}
        {page === "cruise"     && <CruisePage     onNav={nav} />}
        {page === "videos"     && <VideosPage />}
        {page === "contacts"   && <ContactsPage />}
      </main>

      <Footer onNav={nav} onDest={openDest} />

      {/* Floating buttons */}
      <div className="float-w">
        {([
          ["https://t.me/vilet_support",                              "#2ca5e0",                                          "✈️","Telegram"  ],
          ["https://wa.me/998771618888",                              "#25d366",                                          "💬","WhatsApp"  ],
          ["https://www.instagram.com/tury_tashkent/",               "linear-gradient(135deg,#f09433,#dc2743,#bc1888)",  "📸","Instagram" ],
        ] as [string,string,string,string][]).map(([href,bg,ico,lbl]) => (
          <a key={lbl} className="f-btn" href={href} target="_blank" rel="noopener noreferrer" style={{ background:bg }}>
            <span className="f-ico">{ico}</span>
            <span className="f-lbl">{lbl}</span>
          </a>
        ))}
      </div>

      {showTop && (
        <button className="scroll-top" onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}>↑</button>
      )}
    </>
  );
}
