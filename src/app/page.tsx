"use client";
// pantera-site/src/app/page.tsx — v3 plain CSS, no Tailwind
import { useEffect, useState, useCallback } from "react";

type Page = "home" | "directions" | "dest" | "cruise" | "videos" | "contacts";

const LOGO = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779385406/pantera_luxe_logo_v0gbmo.png";

const DESTS_PREVIEW = [
  { key:"dubai", flag:"🇦🇪", title:"Дубай", sub:"Город будущего — небоскрёбы, пустыня, роскошь", img:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=70", tags:["🏖️ Пляж","🏙️ Город","✈️ 5ч","от $499"] },
  { key:"sharm", flag:"🇪🇬", title:"Шарм Эль Шейх", sub:"Жемчужина Красного моря — дайвинг, риф, вечное лето", img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=70", tags:["🏖️ Пляж","🤿 Дайвинг","✈️ 4ч","от $380"] },
  { key:"turkey", flag:"🇹🇷", title:"Турция", sub:"Стамбул, Каппадокия, Анталья — два континента", img:"https://images.unsplash.com/photo-1530838236892-bce9f63a3ef1?w=600&q=70", tags:["🏙️ Стамбул","🏖️ Анталья","🎈 Каппадокия","от $350"] },
];

const DIR_CARDS = [
  { key:"dubai", flag:"🇦🇪", name:"Дубай", sub:"ОАЭ · от $499", cat:"city beach", img:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=65" },
  { key:"sharm", flag:"🇪🇬", name:"Шарм Эль Шейх", sub:"Египет · от $380", cat:"beach", img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=65" },
  { key:"turkey", flag:"🇹🇷", name:"Турция", sub:"Стамбул, Анталья · от $350", cat:"beach city", img:"https://images.unsplash.com/photo-1530838236892-bce9f63a3ef1?w=500&q=65" },
  { key:"maldives", flag:"🇲🇻", name:"Мальдивы", sub:"от $1200", cat:"beach", img:"https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=500&q=65" },
  { key:"thailand", flag:"🇹🇭", name:"Таиланд", sub:"Пхукет · от $650", cat:"beach", img:"https://images.unsplash.com/photo-1528127269322-539801943592?w=500&q=65" },
  { key:"georgia", flag:"🇬🇪", name:"Грузия", sub:"от $290", cat:"city nature", img:"https://images.unsplash.com/photo-1565008576549-57569a49371d?w=500&q=65" },
  { key:"baku", flag:"🇦🇿", name:"Азербайджан", sub:"Баку · от $250", cat:"city", img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=65" },
  { key:"karlovy", flag:"🇨🇿", name:"Карловы Вары", sub:"Чехия", cat:"health city", img:"https://images.unsplash.com/photo-1571406252241-db0280bd36cd?w=500&q=65" },
  { key:"naftalan", flag:"🇦🇿", name:"Нафталан", sub:"Азербайджан", cat:"health", img:"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&q=65" },
  { key:"vietnam", flag:"🇻🇳", name:"Вьетнам", sub:"от $600", cat:"beach", img:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=500&q=65" },
  { key:"qatar", flag:"🇶🇦", name:"Катар", sub:"Доха", cat:"city", img:"https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=500&q=65" },
  { key:"issiyk", flag:"🇰🇬", name:"Иссык-Куль", sub:"от $180", cat:"nature beach", img:"https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&q=65" },
];

const REVIEWS = [
  { av:"А", bg:"linear-gradient(135deg,#ff6b35,#ffd166)", name:"Алишер К.", dest:"✈️ Дубай 2025", text:"«Летели в Дубай всей семьёй. Всё идеально: трансфер, отель 5*, экскурсии!»" },
  { av:"М", bg:"linear-gradient(135deg,#e1306c,#833ab4)", name:"Малика Ю.", dest:"🏥 Медтуризм", text:"«Медтуризм в Турцию — взяли всё в свои руки: визу, клинику, переводчика.»" },
  { av:"Б", bg:"linear-gradient(135deg,#06b6d4,#2196f3)", name:"Бобур Р.", dest:"🇪🇬 Египет", text:"«Горящий тур в Египет за 2 дня до вылета. Отель лучше чем ожидал!»" },
  { av:"Н", bg:"linear-gradient(135deg,#22c55e,#06b6d4)", name:"Нилуфар И.", dest:"🇲🇻 Мальдивы", text:"«Мальдивы — медовый месяц. Водное бунгало, закаты... Незабываемо!»" },
  { av:"З", bg:"linear-gradient(135deg,#ffd166,#ff6b35)", name:"Зафар Н.", dest:"✈️ Таиланд", text:"«Корпоратив 45 человек в Таиланд — всё чётко, команда в восторге!»" },
];

// ── Countdown ──────────────────────────────────────────────────
function useCountdown() {
  const [t, setT] = useState({ h:"23", m:"59", s:"59" });
  useEffect(() => {
    let end = 0;
    try { end = +(localStorage.getItem("pl_end")||0); } catch {}
    if (!end || Date.now() > end) {
      end = Date.now() + 86400000;
      try { localStorage.setItem("pl_end", String(end)); } catch {}
    }
    const tick = () => {
      const d = Math.max(0, end - Date.now());
      setT({ h:String(Math.floor(d/3600000)).padStart(2,"0"), m:String(Math.floor(d%3600000/60000)).padStart(2,"0"), s:String(Math.floor(d%60000/1000)).padStart(2,"0") });
    };
    tick(); const id = setInterval(tick,1000); return () => clearInterval(id);
  }, []);
  return t;
}

// ── Nav ────────────────────────────────────────────────────────
function Nav({ page, onNav, mob, onMob }: { page:Page; onNav:(p:Page)=>void; mob:boolean; onMob:()=>void }) {
  return (
    <>
      <nav className="nav">
        <button className="nav-logo" onClick={()=>onNav("home")}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="PANTERA LUXE" width={38} height={38} />
          <div className="nav-logo-text">
            <span className="name">PANTERA LUXE</span>
            <span className="sub">Туры из Ташкента</span>
          </div>
        </button>
        <div className="nav-links">
          {(["home","directions","cruise","videos"] as Page[]).map(p => (
            <button key={p} className={`nav-link${page===p?" active":""}`} onClick={()=>onNav(p)}>
              {p==="home"?"Главная":p==="directions"?"Направления":p==="cruise"?"🚢 Круизы":"🎬 Видео"}
            </button>
          ))}
          <button className="nav-cta" onClick={()=>onNav("contacts")}>Оставить заявку</button>
        </div>
        <button className="hamburger" onClick={onMob}>
          <span style={mob?{transform:"rotate(45deg) translate(5px,5px)"}:{}} />
          <span style={mob?{opacity:0}:{}} />
          <span style={mob?{transform:"rotate(-45deg) translate(5px,-5px)"}:{}} />
        </button>
      </nav>
      <div className={`mob-menu${mob?" open":""}`}>
        <button className="mob-close" onClick={onMob}>✕</button>
        {(["home","directions","cruise","videos","contacts"] as Page[]).map(p=>(
          <button key={p} className="mob-link" onClick={()=>{onNav(p);onMob();}}>
            {p==="home"?"Главная":p==="directions"?"Направления":p==="cruise"?"🚢 Круизы":p==="videos"?"🎬 Видео":"Контакты"}
          </button>
        ))}
      </div>
    </>
  );
}

// ── Home ───────────────────────────────────────────────────────
function HomePage({ onNav, onDest }: { onNav:(p:Page)=>void; onDest:(k:string)=>void }) {
  const cd = useCountdown();
  return (
    <div style={{paddingTop:60}}>
      {/* Hero */}
      <div className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-badge">✈️ Туристическое агентство в Ташкенте</div>
          <h1>Откройте мир<br/>вместе с <span>PANTERA LUXE</span></h1>
          <p className="hero-sub">Гиды по 14+ направлениям, горящие туры, медицинский туризм, круизы. Всё для идеального путешествия.</p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={()=>onNav("directions")}>🗺️ Выбрать направление</button>
            <button className="btn-ghost" onClick={()=>onNav("contacts")}>Получить консультацию</button>
            <a className="btn-fire" href="https://t.me/tury_iz_tashkenta" target="_blank" rel="noopener noreferrer">🔥 Горящие туры</a>
          </div>
          <div className="hero-stats">
            {[["5000+","Клиентов"],["14+","Направлений"],["10 лет","На рынке"],["24/7","Поддержка"]].map(([v,l])=>(
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
        <button className="btn-primary" style={{padding:"7px 16px",fontSize:12}} onClick={()=>onNav("contacts")}>Успеть →</button>
      </div>

      {/* Directions preview */}
      <div className="sec">
        <div className="site-container">
          <span className="section-tag">Направления</span>
          <h2 className="section-title">Куда полетим?</h2>
          <p className="section-sub">14 направлений с полными гидами — отели, пляжи, культура, советы</p>
          <div className="cards-grid">
            {DESTS_PREVIEW.map(d=>(
              <div key={d.key} className="card" onClick={()=>onDest(d.key)}>
                <div className="card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={d.img} alt={d.title} loading="lazy"/>
                </div>
                <div className="card-body">
                  <h3>{d.flag} {d.title}</h3>
                  <p>{d.sub}</p>
                  <span className="card-link">Полный гид →</span>
                </div>
              </div>
            ))}
            <div className="card" onClick={()=>onNav("directions")}>
              <div className="card-img" style={{background:"linear-gradient(135deg,#0d1b2a,#1a2b3c)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:44}}>🌍</div>
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
              <button className="btn-primary" style={{marginTop:18}} onClick={()=>onNav("cruise")}>Узнать про круизы →</button>
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
            {[["✈️","Туры из Ташкента","Авиабилеты + отель"],["🏥","Медицинский туризм","Турция, Корея"],["🚢","Круизы","Мировые маршруты"],["🏨","Отели по миру","100 000+ вариантов"],["🚗","Трансферы","Аэропорт и авто"],["👥","Групповые туры","Экономия до 30%"]].map(([i,t,s])=>(
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
            {[...REVIEWS,...REVIEWS].map((r,i)=>(
              <div key={i} className="rv-card">
                <div className="rv-stars">★★★★★</div>
                <p className="rv-text">{r.text}</p>
                <div className="rv-author">
                  <div className="rv-av" style={{background:r.bg}}>{r.av}</div>
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

// ── Directions ─────────────────────────────────────────────────
function DirectionsPage({ onDest, onNav }: { onDest:(k:string)=>void; onNav:(p:Page)=>void }) {
  const [filter, setFilter] = useState("all");
  const visible = DIR_CARDS.filter(d=>filter==="all"||d.cat.includes(filter));
  return (
    <div style={{paddingTop:60}}>
      <div className="dir-hero">
        <div className="site-container">
          <span className="section-tag">Все направления</span>
          <h1>Туры из Ташкента</h1>
          <p>Выберите направление — полный гид с отелями, пляжами, советами и локациями</p>
        </div>
      </div>
      <div className="site-container">
        <div className="filters">
          {[["all","Все"],["beach","🏖️ Пляжный"],["city","🏙️ Города"],["health","💆 Лечение"],["nature","🏔️ Природа"]].map(([k,l])=>(
            <button key={k} className={`filter-btn${filter===k?" active":""}`} onClick={()=>setFilter(k)}>{l}</button>
          ))}
        </div>
        <div className="dir-grid">
          {visible.map(d=>(
            <div key={d.key} className="dir-card" onClick={()=>DESTS_PREVIEW.find(x=>x.key===d.key)?onDest(d.key):onNav("contacts")}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.img} alt={d.name} loading="lazy"/>
              <div className="dir-overlay"/>
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

// ── Dest detail ────────────────────────────────────────────────
function DestPage({ destKey, onBack, onNav }: { destKey:string; onBack:()=>void; onNav:(p:Page)=>void }) {
  const [tab, setTab] = useState(0);
  const d = DESTS_PREVIEW.find(x=>x.key===destKey);
  if (!d) return null;

  const hotels5star = ["Burj Al Arab","Atlantis The Palm","Four Seasons","One&Only Royal Mirage","Palazzo Versace"];
  const tabs = ["🏆 Премиум","⭐ Лучшие","📋 Культура","💡 Советы","📍 Локации"];

  const infoData: Record<string,{currency:string;lang:string;religion:string;climate:string;visa:string}> = {
    dubai:{currency:"Дирхам ОАЭ (AED), 1$≈3.67",lang:"Арабский, английский везде",religion:"Ислам. Уважайте правила публично",climate:"Окт-апр: +25°C. Лето: до +48°C!",visa:"Виза не нужна 30 дней"},
    sharm:{currency:"Египетский фунт (EGP), 1$≈50",lang:"Арабский, английский в турзонах",religion:"Ислам. Шарм светский курорт",climate:"Ноябрь-апрель: +24-28°C. Лето: +40°C",visa:"Sinai Only виза $25 в аэропорту"},
    turkey:{currency:"Турецкая лира (TRY)",lang:"Турецкий, русский в туристических зонах",religion:"Ислам (светский). В мечети — с прикрытой головой",climate:"Анталья: +30°C летом. Стамбул: +28°C летом",visa:"Виза не нужна 30 дней"},
  };
  const info = infoData[d.key]||infoData.dubai;

  return (
    <div style={{paddingTop:60}}>
      <div className="dest-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={d.img} alt={d.title} loading="lazy"/>
        <div className="dest-hero-overlay"/>
        <div className="dest-hero-content site-container">
          <button className="back-btn" onClick={onBack} style={{background:"rgba(255,255,255,0.12)",color:"#fff",border:"1px solid rgba(255,255,255,0.25)"}}>← Все направления</button>
          <h1>{d.flag} {d.title}</h1>
          <p>{d.sub}</p>
          <div className="dest-tags">{d.tags.map(t=><span key={t} className="dest-tag">{t}</span>)}</div>
        </div>
      </div>

      <div className="dest-nav">
        <div className="dest-nav-inner site-container">
          {tabs.map((t,i)=><button key={i} className={`dest-tab${tab===i?" active":""}`} onClick={()=>setTab(i)}>{t}</button>)}
        </div>
      </div>

      <div className="site-container" style={{padding:"40px 20px 60px"}}>
        {tab===0&&(
          <>
            <div className="fomo-box"><span className="fi">🏆</span><div><h3>Лучшие номера бронируются за 3-6 месяцев</h3><p>Каждый день ожидания = меньше выбора и выше цена.</p></div></div>
            <div className="hotel-grid">
              {hotels5star.map(h=>(
                <div key={h} className="h-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=65" alt={h} loading="lazy"/>
                  <div className="h-card-body"><div className="h-stars">★★★★★</div><h3>{h}</h3><p>Роскошный 5★ отель уровня люкс. Приватный пляж, spa, ресторан мирового уровня.</p><p className="h-price">💬 Стоимость по запросу</p><button className="btn-primary" style={{padding:"7px 14px",fontSize:12}} onClick={()=>onNav("contacts")}>Узнать стоимость</button></div>
                </div>
              ))}
            </div>
          </>
        )}
        {tab===1&&(
          <div className="hotel-grid">
            {["Jumeirah Beach Hotel","Madinat Jumeirah","Sofitel The Palm","Address Beach Resort","Anantara Palm"].map(h=>(
              <div key={h} className="h-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&q=65" alt={h} loading="lazy"/>
                <div className="h-card-body"><div className="h-stars">★★★★★</div><h3>{h}</h3><p>Отличный 5★ отель. Пляж, бассейны, всё включено, прекрасный сервис.</p><p className="h-price">💬 Стоимость по запросу</p><button className="btn-primary" style={{padding:"7px 14px",fontSize:12}} onClick={()=>onNav("contacts")}>Узнать стоимость</button></div>
              </div>
            ))}
          </div>
        )}
        {tab===2&&(
          <div className="info-grid">
            {[["💵","Валюта",info.currency],["🗣️","Язык",info.lang],["🕌","Религия",info.religion],["☀️","Климат",info.climate],["✈️","Виза",info.visa]].map(([i,n,v])=>(
              <div key={n} className="info-card"><h3>{i} {n}</h3><p>{v}</p></div>
            ))}
          </div>
        )}
        {tab===3&&(
          <div className="tips-list">
            {[["☀️","Жара летом","Всегда вода, SPF50+, гуляйте утром."],["👔","Дресс-код в ТЦ","Закрытые плечи и колени."],["🚇","Метро и такси","Careem/Uber работают. Метро дешевле."],["💳","Карты везде","Наличные почти не нужны."]].map(([i,t,p])=>(
              <div key={t} className="tip-item"><span className="tip-ico">{i}</span><div><h4>{t}</h4><p>{p}</p></div></div>
            ))}
          </div>
        )}
        {tab===4&&(
          <div className="loc-grid">
            {[["🏙️","Burj Khalifa","830м, смотровая на 124-м этаже."],["🛍️","Dubai Mall","Крупнейший ТРЦ мира."],["🏜️","Сафари в пустыне","Джипы, ужин под звёздами — must do."],["🛒","Gold Souk","Дешевейшее золото в мире."]].map(([i,n,desc])=>(
              <div key={n} className="loc-card"><span className="loc-ico">{i}</span><div><h3>{n}</h3><p>{desc}</p></div></div>
            ))}
          </div>
        )}
        <div className="cta-banner">
          <h3>✈️ Готовы лететь?</h3>
          <p>Оставьте заявку — подберём лучший тур и отель</p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={()=>onNav("contacts")}>Оставить заявку</button>
            <a className="btn-outline" href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer">💬 Telegram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Cruise ─────────────────────────────────────────────────────
function CruisePage({ onNav }: { onNav:(p:Page)=>void }) {
  return (
    <div style={{paddingTop:60}}>
      <div className="cruise-hero-page">
        <div className="site-container">
          <div className="cruise-badges">
            {["🌊 Средиземноморье","🏝️ Карибы","🧊 Норвегия","🗺️ Кругосветка"].map(b=><span key={b} className="cruise-badge">{b}</span>)}
          </div>
          <h1>🚢 Круизы по всему миру</h1>
          <p>27 миллионов человек каждый год выбирают круизы. Пока вы читаете — 400 000 плывут на плавучих отелях с видом на закат. А вы?</p>
          <button className="btn-primary" onClick={()=>onNav("contacts")}>Забронировать круиз →</button>
        </div>
      </div>
      <div className="site-container" style={{padding:"44px 20px 60px"}}>
        <div className="fomo-box"><span className="fi">⚡</span><div><h3>Вы теряете лучшие годы без круизов</h3><p>Средний возраст круизного пассажира — <strong>46 лет</strong>. На молодёжных круизах MSC — <strong>28 лет</strong>.</p></div></div>
        <span className="section-tag">Разрушаем мифы</span>
        <h2 className="section-title">«Я думал, круиз — это как Титаник»</h2>
        <div className="myth-grid">
          {[["🚢💥","false","«Корабль может утонуть»","Современные лайнеры — самые безопасные суда. 27 уровней защиты."],["👴","false","«Круиз для пенсионеров»","Norwegian, MSC — ночные клубы, аквапарки, казино на борту."],["💸","false","«Круиз очень дорогой»","Средиземноморье 7 ночей от $599 — включает проживание и 5 стран."],["🍔","true","«На круизе вкусно кормят»","Завтрак-обед-ужин 24/7 включены. Люди набирают 2-3 кг за круиз 😄"]].map(([x,t,title,p])=>(
            <div key={title} className="myth-card"><div className="mx">{x}</div><div className={`myth-label ${t}`}>{t==="true"?"ФАКТ ✓":"МИФ"}</div><h3>{title}</h3><p>{p}</p></div>
          ))}
        </div>
        <div style={{marginTop:40}}>
          <span className="section-tag">Маршруты</span>
          <h2 className="section-title">Куда плыть?</h2>
          <div className="cruise-type-grid">
            {[["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=65","🌊 Средиземноморье","Испания, Италия, Греция. 7-14 ночей.","от $599 / чел."],["https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=500&q=65","🏝️ Карибские острова","Ямайка, Барбадос, Мексика.","от $699 / чел."],["https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=500&q=65","🧊 Норвежские фьорды","Северное сияние, айсберги.","от $899 / чел."],["https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=65","🇦🇪 ОАЭ и Аравия","Дубай, Абу-Даби, Оман.","от $499 / чел."]].map(([img,t,p,price])=>(
              <div key={t} className="ct-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={t} loading="lazy"/>
                <div className="ct-body"><h3>{t}</h3><p>{p}</p><p className="ct-price">{price}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="cta-banner">
          <h3>🚢 Готовы выйти в море?</h3>
          <p>Более 300 клиентов из Ташкента уже плавали с нами.</p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={()=>onNav("contacts")}>Забронировать круиз</button>
            <a className="btn-outline" href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer">💬 Telegram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Videos ─────────────────────────────────────────────────────
function VideosPage() {
  return (
    <div style={{paddingTop:60}}>
      <div style={{background:"linear-gradient(135deg,#0d1b2a,#1a2b3c)",padding:"48px 0",textAlign:"center"}}>
        <div className="site-container">
          <span className="section-tag" style={{color:"#ffd166"}}>Видеообзоры</span>
          <h1 style={{color:"#fff",fontSize:"clamp(1.6rem,4vw,2.4rem)",fontWeight:900,margin:"6px 0 8px"}}>🎬 Видеообзоры отелей и направлений</h1>
          <p style={{color:"rgba(255,255,255,0.68)",fontSize:14,maxWidth:480,margin:"0 auto"}}>Направление → Город → Категория → Видеообзор</p>
        </div>
      </div>
      <div className="site-container" style={{padding:"60px 20px",textAlign:"center"}}>
        <div style={{fontSize:60,marginBottom:16}}>🎬</div>
        <h2 style={{fontSize:20,fontWeight:700,marginBottom:8}}>Видеообзоры скоро появятся</h2>
        <p style={{color:"#64748b",fontSize:13,maxWidth:360,margin:"0 auto 24px",lineHeight:1.6}}>Мы готовим видеообзоры наших направлений. Подпишитесь чтобы не пропустить!</p>
        <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
          <a className="soc-btn" href="https://www.instagram.com/tury_tashkent/" target="_blank" rel="noopener noreferrer" style={{background:"#e1306c"}}>📸 Instagram</a>
          <a className="soc-btn" href="https://t.me/tury_iz_tashkenta" target="_blank" rel="noopener noreferrer" style={{background:"#2ca5e0"}}>✈️ Telegram</a>
        </div>
      </div>
    </div>
  );
}

// ── Contacts ───────────────────────────────────────────────────
function ContactsPage() {
  const [sent, setSent] = useState(false);
  return (
    <div style={{paddingTop:60}}>
      <div className="contacts-hero"><div className="site-container"><h1>Контакты</h1><p>Свяжитесь с нами — ответим в течение 15 минут</p></div></div>
      <div className="site-container">
        <div className="contacts-grid">
          <div style={{paddingTop:36}}>
            {[["📞","rgba(255,107,53,0.1)","Телефон","tel:+998771618888","+998 77 161 88 88"],["✉️","rgba(33,150,243,0.1)","Email","mailto:uz@panteraluxe.travel","uz@panteraluxe.travel"],["📍","rgba(6,182,212,0.1)","Офис",undefined,"Ташкент, Амир Темур 99а"],["⏰","rgba(34,197,94,0.1)","Режим работы",undefined,"10:00 – 21:00, ежедневно"]].map(([ico,bg,label,href,val])=>(
              <div key={label} className="c-item">
                <div className="c-ico" style={{background:bg as string}}>{ico}</div>
                <div><h4>{label}</h4>{href?<a href={href as string}>{val}</a>:<p>{val}</p>}</div>
              </div>
            ))}
            <div className="soc-links">
              <a className="soc-btn" href="https://www.instagram.com/tury_tashkent/" target="_blank" rel="noopener noreferrer" style={{background:"#e1306c"}}>📸 Instagram</a>
              <a className="soc-btn" href="https://t.me/tury_iz_tashkenta" target="_blank" rel="noopener noreferrer" style={{background:"#2ca5e0"}}>✈️ Горящие туры</a>
              <a className="soc-btn" href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer" style={{background:"#2ca5e0"}}>💬 Написать</a>
            </div>
          </div>
          <div className="c-form" style={{margin:"28px 0"}}>
            {sent?(
              <div style={{textAlign:"center",padding:"40px 0"}}>
                <div style={{fontSize:48,marginBottom:10}}>✅</div>
                <h3 style={{fontSize:18,fontWeight:700,marginBottom:6}}>Заявка отправлена!</h3>
                <p style={{color:"#64748b",fontSize:13,marginBottom:16}}>Менеджер свяжется в течение 15 минут.</p>
                <a className="btn-primary" href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer">💬 Написать в Telegram</a>
              </div>
            ):(
              <>
                <h3>Оставить заявку</h3>
                <div className="fg"><label>Имя</label><input type="text" placeholder="Ваше имя" autoComplete="name"/></div>
                <div className="fg"><label>Телефон / WhatsApp</label><input type="tel" placeholder="+998 __ ___" autoComplete="tel"/></div>
                <div className="fg"><label>Направление</label><select><option>Выберите</option>{["Дубай","Шарм Эль Шейх","Турция","Мальдивы","Таиланд","Круиз","Другое"].map(o=><option key={o}>{o}</option>)}</select></div>
                <div className="fg"><label>Сообщение</label><textarea rows={3} placeholder="Пожелания..."/></div>
                <button className="btn-primary" style={{width:"100%",padding:13}} onClick={()=>setSent(true)}>Отправить заявку</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Footer ─────────────────────────────────────────────────────
function Footer({ onNav, onDest }: { onNav:(p:Page)=>void; onDest:(k:string)=>void }) {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="f-brand">
            <div className="f-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO} alt="PANTERA LUXE" width={38} height={38} loading="lazy"/>
              <span>PANTERA LUXE</span>
            </div>
            <p>Туристическое агентство в Ташкенте. 10 лет, 5000+ туристов.</p>
            <p style={{marginTop:8}}>📍 Ташкент, Амир Темур 99а · ⏰ 10:00–21:00</p>
          </div>
          <div className="f-col">
            <h4>Направления</h4>
            <ul>
              {[["dubai","Дубай"],["sharm","Шарм Эль Шейх"],["turkey","Турция"],["maldives","Мальдивы"]].map(([k,l])=>(
                <li key={k}><button onClick={()=>onDest(k)}>{l}</button></li>
              ))}
              <li><button onClick={()=>onNav("cruise")}>🚢 Круизы</button></li>
            </ul>
          </div>
          <div className="f-col">
            <h4>Контакты</h4>
            <ul>
              <li><a href="tel:+998771618888">+998 77 161 88 88</a></li>
              <li><a href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer">Telegram</a></li>
              <li><a href="https://www.instagram.com/tury_tashkent/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://t.me/tury_iz_tashkenta" target="_blank" rel="noopener noreferrer">Горящие туры</a></li>
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

// ── Root ───────────────────────────────────────────────────────
export default function Home() {
  const [page, setPage] = useState<Page>("home");
  const [destKey, setDestKey] = useState("dubai");
  const [mob, setMob] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const nav = useCallback((p:Page)=>{ setPage(p); setMob(false); window.scrollTo({top:0,behavior:"smooth"}); },[]);
  const openDest = useCallback((k:string)=>{ setDestKey(k); setPage("dest"); window.scrollTo({top:0,behavior:"smooth"}); },[]);

  useEffect(()=>{
    const fn = ()=>setShowTop(window.scrollY>400);
    window.addEventListener("scroll",fn,{passive:true});
    return ()=>window.removeEventListener("scroll",fn);
  },[]);

  return (
    <>
      <Nav page={page} onNav={nav} mob={mob} onMob={()=>setMob(v=>!v)}/>
      <main>
        {page==="home"&&<HomePage onNav={nav} onDest={openDest}/>}
        {page==="directions"&&<DirectionsPage onDest={openDest} onNav={nav}/>}
        {page==="dest"&&<DestPage destKey={destKey} onBack={()=>nav("directions")} onNav={nav}/>}
        {page==="cruise"&&<CruisePage onNav={nav}/>}
        {page==="videos"&&<VideosPage/>}
        {page==="contacts"&&<ContactsPage/>}
      </main>
      <Footer onNav={nav} onDest={openDest}/>

      {/* Float buttons */}
      <div className="float-w">
        {[["https://t.me/vilet_support","#2ca5e0","✈️","Telegram"],["https://wa.me/998771618888","#25d366","💬","WhatsApp"],["https://www.instagram.com/tury_tashkent/","linear-gradient(135deg,#f09433,#dc2743,#bc1888)","📸","Instagram"]].map(([href,bg,ico,lbl])=>(
          <a key={lbl} className="f-btn" href={href} target="_blank" rel="noopener noreferrer" style={{background:bg}}>
            <span className="f-ico">{ico}</span>
            <span className="f-lbl">{lbl}</span>
          </a>
        ))}
      </div>
      {showTop&&<button className="scroll-top" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>↑</button>}
    </>
  );
}
"use client";

import { useEffect, useState, useRef, useCallback } from "react";

// ─── Types ───────────────────────────────────────────────────────
type Page = "home" | "directions" | "dest" | "cruise" | "videos" | "contacts";

interface Dest {
  key: string;
  flag: string;
  title: string;
  sub: string;
  img: string;
  tags: string[];
  cats: { label: string; icon: string }[];
}

// ─── Data ────────────────────────────────────────────────────────
const LOGO =
  "https://res.cloudinary.com/dass5gqvk/image/upload/v1779385406/pantera_luxe_logo_v0gbmo.png";

const DESTS: Dest[] = [
  {
    key: "dubai",
    flag: "🇦🇪",
    title: "Дубай",
    sub: "Город будущего — небоскрёбы, пустыня, роскошь",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=75",
    tags: ["🏖️ Пляж", "🏙️ Город", "✈️ 5ч из Ташкента", "от $499"],
    cats: [
      { label: "🏆 Премиум отели", icon: "🏆" },
      { label: "⭐ Лучшие отели", icon: "⭐" },
      { label: "💰 Средние отели", icon: "💰" },
      { label: "📋 Культура & Виза", icon: "📋" },
      { label: "💡 Советы туристу", icon: "💡" },
      { label: "📍 Топ локации", icon: "📍" },
    ],
  },
  {
    key: "sharm",
    flag: "🇪🇬",
    title: "Шарм Эль Шейх",
    sub: "Жемчужина Красного моря — дайвинг, риф, вечное лето",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=75",
    tags: ["🏖️ Пляж", "🤿 Дайвинг", "✈️ 4ч из Ташкента", "от $380"],
    cats: [
      { label: "🏆 Премиум отели", icon: "🏆" },
      { label: "⭐ Лучшие отели", icon: "⭐" },
      { label: "🏖️ Бухты", icon: "🏖️" },
      { label: "📋 Культура & Виза", icon: "📋" },
      { label: "💡 Советы туристу", icon: "💡" },
      { label: "📍 Топ локации", icon: "📍" },
    ],
  },
  {
    key: "turkey",
    flag: "🇹🇷",
    title: "Турция",
    sub: "Два континента — от Стамбула до Каппадокии",
    img: "https://images.unsplash.com/photo-1530838236892-bce9f63a3ef1?w=1200&q=75",
    tags: ["🏙️ Стамбул", "🏖️ Анталья", "🎈 Каппадокия", "от $350"],
    cats: [
      { label: "🏆 Премиум отели", icon: "🏆" },
      { label: "⭐ Лучшие отели", icon: "⭐" },
      { label: "📋 Культура & Виза", icon: "📋" },
      { label: "💡 Советы туристу", icon: "💡" },
      { label: "📍 Топ локации", icon: "📍" },
    ],
  },
  {
    key: "georgia",
    flag: "🇬🇪",
    title: "Грузия",
    sub: "Горы, вино, хинкали и горячее гостеприимство",
    img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=75",
    tags: ["🏔️ Горы", "🍷 Вино", "🏖️ Батуми", "от $290"],
    cats: [
      { label: "🏆 Премиум отели", icon: "🏆" },
      { label: "⭐ Лучшие отели", icon: "⭐" },
      { label: "📋 Культура & Виза", icon: "📋" },
      { label: "💡 Советы туристу", icon: "💡" },
      { label: "📍 Топ локации", icon: "📍" },
    ],
  },
  {
    key: "maldives",
    flag: "🇲🇻",
    title: "Мальдивы",
    sub: "Рай на земле — белый песок, лазурь океана",
    img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=75",
    tags: ["🏖️ Пляж", "🐠 Снорклинг", "🛖 Water Villa", "от $1200"],
    cats: [
      { label: "🏆 Премиум отели", icon: "🏆" },
      { label: "⭐ Лучшие отели", icon: "⭐" },
      { label: "📋 Культура & Виза", icon: "📋" },
      { label: "💡 Советы туристу", icon: "💡" },
      { label: "📍 Топ локации", icon: "📍" },
    ],
  },
  {
    key: "thailand",
    flag: "🇹🇭",
    title: "Таиланд",
    sub: "Страна улыбок — пляжи, храмы, уличная еда",
    img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=75",
    tags: ["🏖️ Пляж", "🛕 Храмы", "🍜 Еда", "от $650"],
    cats: [
      { label: "🏆 Премиум отели", icon: "🏆" },
      { label: "⭐ Лучшие отели", icon: "⭐" },
      { label: "📋 Культура & Виза", icon: "📋" },
      { label: "💡 Советы туристу", icon: "💡" },
      { label: "📍 Топ локации", icon: "📍" },
    ],
  },
];

const DIR_CARDS = [
  { key: "dubai", flag: "🇦🇪", name: "Дубай", sub: "ОАЭ · от $499", cat: "city beach", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=65" },
  { key: "sharm", flag: "🇪🇬", name: "Шарм Эль Шейх", sub: "Египет · от $380", cat: "beach", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=65" },
  { key: "turkey", flag: "🇹🇷", name: "Турция", sub: "Стамбул, Анталья · от $350", cat: "beach city", img: "https://images.unsplash.com/photo-1530838236892-bce9f63a3ef1?w=500&q=65" },
  { key: "maldives", flag: "🇲🇻", name: "Мальдивы", sub: "от $1200", cat: "beach", img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=500&q=65" },
  { key: "thailand", flag: "🇹🇭", name: "Таиланд", sub: "Пхукет · от $650", cat: "beach", img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=500&q=65" },
  { key: "georgia", flag: "🇬🇪", name: "Грузия", sub: "от $290", cat: "city nature", img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=500&q=65" },
  { key: "baku", flag: "🇦🇿", name: "Азербайджан", sub: "Баку · от $250", cat: "city", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=65" },
  { key: "karlovy", flag: "🇨🇿", name: "Карловы Вары", sub: "Чехия", cat: "health city", img: "https://images.unsplash.com/photo-1571406252241-db0280bd36cd?w=500&q=65" },
  { key: "naftalan", flag: "🇦🇿", name: "Нафталан", sub: "Азербайджан", cat: "health", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&q=65" },
  { key: "vietnam", flag: "🇻🇳", name: "Вьетнам", sub: "от $600", cat: "beach", img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=500&q=65" },
  { key: "qatar", flag: "🇶🇦", name: "Катар", sub: "Доха", cat: "city", img: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=500&q=65" },
  { key: "issiyk", flag: "🇰🇬", name: "Иссык-Куль", sub: "от $180", cat: "nature beach", img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&q=65" },
];

const REVIEWS = [
  { av: "А", color: "from-orange-400 to-yellow-300", name: "Алишер К.", dest: "✈️ Дубай 2025", text: "«Летели в Дубай всей семьёй. Всё идеально: трансфер, отель 5*, экскурсии!»" },
  { av: "М", color: "from-pink-500 to-purple-500", name: "Малика Ю.", dest: "🏥 Медтуризм", text: "«Медтуризм в Турцию — взяли всё в свои руки: визу, клинику, переводчика.»" },
  { av: "Б", color: "from-cyan-400 to-blue-500", name: "Бобур Р.", dest: "🇪🇬 Египет", text: "«Горящий тур в Египет за 2 дня до вылета. Отель лучше чем ожидал!»" },
  { av: "Н", color: "from-green-400 to-cyan-400", name: "Нилуфар И.", dest: "🇲🇻 Мальдивы", text: "«Мальдивы — медовый месяц. Водное бунгало, закаты... Незабываемо!»" },
  { av: "З", color: "from-yellow-300 to-orange-400", name: "Зафар Н.", dest: "✈️ Таиланд", text: "«Корпоратив 45 человек в Таиланд — всё чётко, команда в восторге!»" },
];

// ─── Countdown hook ───────────────────────────────────────────────
function useCountdown() {
  const [time, setTime] = useState({ h: "23", m: "59", s: "59" });
  useEffect(() => {
    let end = 0;
    try { end = +(localStorage.getItem("pl_end") || 0); } catch {}
    if (!end || Date.now() > end) {
      end = Date.now() + 86400000;
      try { localStorage.setItem("pl_end", String(end)); } catch {}
    }
    const tick = () => {
      const d = Math.max(0, end - Date.now());
      setTime({
        h: String(Math.floor(d / 3600000)).padStart(2, "0"),
        m: String(Math.floor((d % 3600000) / 60000)).padStart(2, "0"),
        s: String(Math.floor((d % 60000) / 1000)).padStart(2, "0"),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

// ─── Components ──────────────────────────────────────────────────
function Nav({ page, onNav, mobileOpen, onMobile }: {
  page: Page;
  onNav: (p: Page) => void;
  mobileOpen: boolean;
  onMobile: () => void;
}) {
  const links: { p: Page; label: string }[] = [
    { p: "home", label: "Главная" },
    { p: "directions", label: "Направления" },
    { p: "cruise", label: "🚢 Круизы" },
    { p: "videos", label: "🎬 Видео" },
  ];
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1b2a] flex items-center justify-between px-6 h-[60px] shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
        <button onClick={() => onNav("home")} className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="PANTERA LUXE" className="h-9 w-auto" loading="eager" />
          <div className="hidden sm:block text-left">
            <span className="text-white font-extrabold text-sm block leading-tight">PANTERA LUXE</span>
            <span className="text-[#ffd166] text-[10px]">Туры из Ташкента</span>
          </div>
        </button>
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ p, label }) => (
            <button key={p} onClick={() => onNav(p)}
              className={`text-[13px] font-semibold px-3 py-1.5 rounded-lg transition-colors ${page === p ? "text-white bg-white/10" : "text-white/80 hover:text-white hover:bg-white/10"}`}>
              {label}
            </button>
          ))}
          <button onClick={() => onNav("contacts")}
            className="ml-2 text-[13px] font-bold px-4 py-2 rounded-lg bg-gradient-to-br from-[#ff6b35] to-orange-400 text-white shadow-[0_3px_10px_rgba(255,107,53,0.35)] transition-transform hover:-translate-y-px">
            Оставить заявку
          </button>
        </div>
        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={onMobile}>
          <span className={`w-5 h-0.5 bg-white rounded block transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-5 h-0.5 bg-white rounded block transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-white rounded block transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0d1b2a] flex flex-col items-center justify-center gap-2">
          <button className="absolute top-4 right-5 text-white text-xl w-10 h-10 rounded-full bg-white/10 flex items-center justify-center" onClick={onMobile}>✕</button>
          {[...links, { p: "contacts" as Page, label: "Контакты" }].map(({ p, label }) => (
            <button key={p} onClick={() => { onNav(p); onMobile(); }}
              className="text-white text-3xl font-black uppercase tracking-wider py-2 hover:text-[#ff6b35] transition-colors">
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

function CountBox({ val, label }: { val: string; label: string }) {
  return (
    <div className="bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-center min-w-[44px]">
      <strong className="block text-white text-lg font-black leading-none">{val}</strong>
      <span className="text-white/50 text-[9px] uppercase tracking-widest">{label}</span>
    </div>
  );
}

function DirectionCard({ d, onSelect }: { d: typeof DIR_CARDS[0]; onSelect: () => void }) {
  return (
    <div onClick={onSelect}
      className="relative rounded-2xl overflow-hidden h-[210px] cursor-pointer transition-transform duration-200 hover:scale-[1.02]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={d.img} alt={d.name} className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,27,42,0.88)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white font-extrabold text-[17px]">{d.flag} {d.name}</p>
        <p className="text-white/70 text-xs mt-0.5">{d.sub}</p>
      </div>
    </div>
  );
}

// ─── Pages ───────────────────────────────────────────────────────
function HomePage({ onNav, onDest }: { onNav: (p: Page) => void; onDest: (k: string) => void }) {
  const cd = useCountdown();
  return (
    <div className="pt-[60px]">
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-60px)] bg-gradient-to-br from-[#0d1b2a] to-[#1a3550] flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=60')] bg-cover bg-center opacity-25" />
        <div className="relative z-10 text-center px-5 py-16">
          <div className="inline-flex items-center gap-2 bg-[rgba(255,107,53,0.18)] border border-[rgba(255,107,53,0.35)] text-[#ffd166] px-4 py-1.5 rounded-full text-xs font-bold mb-5">
            ✈️ Туристическое агентство в Ташкенте
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 drop-shadow-lg">
            Откройте мир<br />вместе с{" "}
            <span className="text-[#ff6b35]">PANTERA LUXE</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-[520px] mx-auto mb-8 leading-relaxed">
            Гиды по 14+ направлениям, горящие туры, медицинский туризм, круизы. Всё для идеального путешествия.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => onNav("directions")}
              className="bg-gradient-to-br from-[#ff6b35] to-orange-400 text-white font-bold text-sm px-7 py-3 rounded-xl shadow-[0_4px_14px_rgba(255,107,53,0.4)] transition-transform hover:-translate-y-0.5">
              🗺️ Выбрать направление
            </button>
            <button onClick={() => onNav("contacts")}
              className="bg-white/10 border-2 border-white/30 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-all hover:bg-white/20">
              Получить консультацию
            </button>
            <a href="https://t.me/tury_iz_tashkenta" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-br from-[#ff4500] to-[#ff8c00] border-2 border-[rgba(255,200,0,0.4)] animate-[fireGlow_2s_ease-in-out_infinite]">
              🔥 Горящие туры
            </a>
          </div>
          <div className="flex flex-wrap gap-7 justify-center mt-10 pt-7 border-t border-white/10">
            {[["5000+", "Клиентов"], ["14+", "Направлений"], ["10 лет", "На рынке"], ["24/7", "Поддержка"]].map(([v, l]) => (
              <div key={l} className="text-center">
                <strong className="block text-white text-xl font-black">{v}</strong>
                <span className="text-white/55 text-xs">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hot strip */}
      <div className="bg-gradient-to-r from-[#1a0800] to-[#3d1500] px-5 py-3 flex flex-wrap items-center justify-center gap-4">
        <span className="bg-[#ff6b35] text-white text-[11px] font-black px-3 py-0.5 rounded-full">🔥 ГОРИТ</span>
        <p className="text-white text-sm font-semibold">Дубай 7 ночей — <span className="text-[#ffd166]">от $499</span> · Вылет из Ташкента</p>
        <div className="flex items-center gap-1.5">
          <CountBox val={cd.h} label="ч" />
          <span className="text-white/40 text-base">:</span>
          <CountBox val={cd.m} label="м" />
          <span className="text-white/40 text-base">:</span>
          <CountBox val={cd.s} label="с" />
        </div>
        <button onClick={() => onNav("contacts")}
          className="bg-gradient-to-br from-[#ff6b35] to-orange-400 text-white font-bold text-xs px-4 py-2 rounded-lg shadow-[0_3px_10px_rgba(255,107,53,0.35)]">
          Успеть →
        </button>
      </div>

      {/* Directions preview */}
      <section className="py-16">
        <div className="max-w-[1160px] mx-auto px-5">
          <span className="text-[#ff6b35] text-[11px] font-bold tracking-[2px] uppercase">Направления</span>
          <h2 className="text-3xl font-extrabold text-[#1e293b] mt-1 mb-2">Куда полетим?</h2>
          <p className="text-[#64748b] text-sm mb-8">14 направлений с полными гидами — отели, пляжи, культура, советы</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DESTS.slice(0, 3).map((d) => (
              <div key={d.key} onClick={() => onDest(d.key)}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.10)] cursor-pointer transition-transform hover:-translate-y-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.img} alt={d.title} className="w-full h-40 object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-1">{d.flag} {d.title}</h3>
                  <p className="text-[#64748b] text-xs leading-relaxed mb-2">{d.sub}</p>
                  <span className="text-[#ff6b35] font-bold text-xs">Полный гид →</span>
                </div>
              </div>
            ))}
            <div onClick={() => onNav("directions")}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.10)] cursor-pointer transition-transform hover:-translate-y-1 flex flex-col">
              <div className="h-40 bg-gradient-to-br from-[#0d1b2a] to-[#1a2b3c] flex items-center justify-center text-5xl">🌍</div>
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1">Все 14 направлений</h3>
                <p className="text-[#64748b] text-xs mb-2">Мальдивы, Таиланд, Грузия, Китай, Европа...</p>
                <span className="text-[#ff6b35] font-bold text-xs">Смотреть все →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cruise promo */}
      <section className="py-6 bg-[#f8fafc]">
        <div className="max-w-[1160px] mx-auto px-5">
          <div className="bg-gradient-to-br from-[#0a1628] to-[#0d3460] rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <span className="text-[#ffd166] text-[11px] font-bold tracking-[2px] uppercase">Новое направление</span>
              <h2 className="text-white text-2xl font-black mt-1 mb-2">🚢 Круизы по всему миру</h2>
              <p className="text-white/70 text-sm leading-relaxed max-w-md">Забудьте про Титаник — современные круизы это 5★ плавучий отель. 27 миллионов человек каждый год выбирают круизы.</p>
              <button onClick={() => onNav("cruise")}
                className="mt-4 bg-gradient-to-br from-[#ff6b35] to-orange-400 text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow-[0_4px_14px_rgba(255,107,53,0.35)] transition-transform hover:-translate-y-0.5">
                Узнать про круизы →
              </button>
            </div>
            <div className="text-[80px] opacity-60 hidden sm:block">🚢</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-[1160px] mx-auto px-5">
          <span className="text-[#ff6b35] text-[11px] font-bold tracking-[2px] uppercase">Услуги</span>
          <h2 className="text-3xl font-extrabold text-[#1e293b] mt-1 mb-8">Что мы делаем</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { i: "✈️", t: "Туры из Ташкента", s: "Авиабилеты + отель" },
              { i: "🏥", t: "Медицинский туризм", s: "Турция, Корея" },
              { i: "🚢", t: "Круизы", s: "Мировые маршруты" },
              { i: "🏨", t: "Отели по миру", s: "100 000+ вариантов" },
              { i: "🚗", t: "Трансферы", s: "Аэропорт и авто" },
              { i: "👥", t: "Групповые туры", s: "Экономия до 30%" },
            ].map(({ i, t, s }) => (
              <div key={t} className="bg-white rounded-2xl p-5 text-center shadow-[0_3px_12px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-1">
                <div className="text-3xl mb-2">{i}</div>
                <h3 className="font-bold text-xs mb-1">{t}</h3>
                <p className="text-[#64748b] text-[11px]">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-[1160px] mx-auto px-5">
          <span className="text-[#ff6b35] text-[11px] font-bold tracking-[2px] uppercase">Отзывы</span>
          <h2 className="text-3xl font-extrabold text-[#1e293b] mt-1 mb-8">5000+ довольных путешественников</h2>
        </div>
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-4 animate-[scrollReviews_38s_linear_infinite] w-max hover:[animation-play-state:paused]">
            {[...REVIEWS, ...REVIEWS].map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 w-[270px] flex-shrink-0 border border-[#e2e8f0]">
                <div className="text-yellow-400 tracking-widest text-sm mb-2">★★★★★</div>
                <p className="text-[#1e293b] text-xs leading-relaxed mb-3 italic">{r.text}</p>
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white font-black text-sm flex-shrink-0`}>{r.av}</div>
                  <div>
                    <p className="font-bold text-xs">{r.name}</p>
                    <p className="text-[#64748b] text-[11px]">{r.dest}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function DirectionsPage({ onDest, onNav }: { onDest: (k: string) => void; onNav: (p: Page) => void }) {
  const [filter, setFilter] = useState("all");
  const filters = [
    { k: "all", l: "Все" },
    { k: "beach", l: "🏖️ Пляжный" },
    { k: "city", l: "🏙️ Города" },
    { k: "health", l: "💆 Лечение" },
    { k: "nature", l: "🏔️ Природа" },
  ];
  const visible = DIR_CARDS.filter(d => filter === "all" || d.cat.includes(filter));
  return (
    <div className="pt-[60px]">
      <div className="bg-gradient-to-br from-[#0d1b2a] to-[#1a3550] py-12 text-center">
        <span className="text-[#ff6b35] text-[11px] font-bold tracking-[2px] uppercase">Все направления</span>
        <h1 className="text-white text-4xl font-black mt-2 mb-2">Туры из Ташкента</h1>
        <p className="text-white/70 text-sm max-w-md mx-auto">Выберите направление — полный гид с отелями, пляжами, советами и локациями</p>
      </div>
      <div className="max-w-[1160px] mx-auto px-5">
        <div className="flex gap-2 flex-wrap py-7">
          {filters.map(({ k, l }) => (
            <button key={k} onClick={() => setFilter(k)}
              className={`px-4 py-2 rounded-full text-[13px] font-bold border-2 transition-all ${filter === k ? "bg-[#ff6b35] text-white border-[#ff6b35]" : "bg-[#f1f5f9] text-[#64748b] border-transparent hover:border-[rgba(255,107,53,0.3)]"}`}>
              {l}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-16">
          {visible.map((d) => (
            <DirectionCard key={d.key} d={d} onSelect={() => {
              const found = DESTS.find(x => x.key === d.key);
              if (found) onDest(d.key); else onNav("contacts");
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DestPage({ destKey, onBack }: { destKey: string; onBack: () => void }) {
  const [tab, setTab] = useState(0);
  const d = DESTS.find(x => x.key === destKey);
  if (!d) return null;

  const content = [
    <>
      <p className="text-[#64748b] text-sm mb-4">Лучшие люкс отели с приватными пляжами и безупречным сервисом.</p>
      <div className="bg-[linear-gradient(135deg,#fff7ed,#fff3e0)] border-2 border-[rgba(255,107,53,0.25)] rounded-2xl p-5 mb-5 flex gap-3">
        <span className="text-3xl">🏆</span>
        <div><h3 className="font-bold text-[#ff6b35] mb-1">Лучшие номера бронируются за 3-6 месяцев</h3><p className="text-sm text-[#1e293b]">Каждый день ожидания = меньше выбора и выше цена.</p></div>
      </div>
      {["Burj Al Arab", "Atlantis The Palm", "Four Seasons", "One&Only Royal Mirage", "Palazzo Versace"].map((h) => (
        <div key={h} className="bg-[#f8fafc] rounded-2xl p-4 mb-3 border border-[#e2e8f0]">
          <div className="text-yellow-400 text-sm mb-1">★★★★★</div>
          <h3 className="font-bold text-sm mb-1">{h}</h3>
          <p className="text-[#64748b] text-xs mb-2">Роскошный 5★ отель уровня люкс. Приватный пляж, spa, ресторан мирового уровня.</p>
          <p className="text-[#ff6b35] font-bold text-sm">💬 Стоимость по запросу</p>
        </div>
      ))}
    </>,
    <>
      <p className="text-[#64748b] text-sm mb-4">Отличные 5★ отели с лучшим соотношением цены и качества.</p>
      {["Jumeirah Beach Hotel", "Madinat Jumeirah", "Sofitel The Palm", "Address Beach Resort", "Anantara Palm"].map((h) => (
        <div key={h} className="bg-[#f8fafc] rounded-2xl p-4 mb-3 border border-[#e2e8f0]">
          <div className="text-yellow-400 text-sm mb-1">★★★★★</div>
          <h3 className="font-bold text-sm mb-1">{h}</h3>
          <p className="text-[#64748b] text-xs mb-2">Отличный 5★ отель. Пляж, бассейны, всё включено, прекрасный сервис.</p>
          <p className="text-[#ff6b35] font-bold text-sm">💬 Стоимость по запросу</p>
        </div>
      ))}
    </>,
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[{ n: "Валюта", v: "Дирхам ОАЭ (AED), 1$≈3.67" }, { n: "Язык", v: "Арабский, английский везде" }, { n: "Религия", v: "Ислам. Уважайте правила" }, { n: "Климат", v: "Окт-апр: +25°C. Лето: до +48°C" }, { n: "Виза", v: "Не нужна 30 дней" }].map(({ n, v }) => (
          <div key={n} className="bg-[#f8fafc] rounded-2xl p-4 border-l-4 border-[#ff6b35]">
            <h3 className="font-bold text-xs mb-1">{n}</h3>
            <p className="text-[#64748b] text-xs">{v}</p>
          </div>
        ))}
      </div>
    </>,
    <>
      {[{ i: "☀️", t: "Жара до +48°C летом", p: "Всегда вода, SPF50+, гуляйте утром." }, { i: "👔", t: "Дресс-код в ТЦ", p: "Закрытые плечи и колени." }, { i: "🚇", t: "Метро и Careem", p: "Метро дешевле. Careem работает." }, { i: "💳", t: "Карты везде", p: "Наличные почти не нужны." }].map(({ i, t, p }) => (
        <div key={t} className="flex gap-3 bg-[#f8fafc] rounded-xl p-4 mb-2">
          <span className="text-2xl flex-shrink-0">{i}</span>
          <div><h4 className="font-bold text-sm mb-1">{t}</h4><p className="text-[#64748b] text-xs">{p}</p></div>
        </div>
      ))}
    </>,
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[{ i: "🏙️", n: "Burj Khalifa", d: "830м, смотровая на 124-м этаже." }, { i: "🛍️", n: "Dubai Mall", d: "Крупнейший ТРЦ мира." }, { i: "🏜️", n: "Сафари в пустыне", d: "Джипы, ужин под звёздами." }, { i: "🛒", n: "Gold Souk", d: "Дешевейшее золото в мире." }].map(({ i, n, d: desc }) => (
          <div key={n} className="bg-[#f8fafc] rounded-2xl p-4 flex gap-3">
            <span className="text-2xl flex-shrink-0">{i}</span>
            <div><h3 className="font-bold text-sm mb-1">{n}</h3><p className="text-[#64748b] text-xs">{desc}</p></div>
          </div>
        ))}
      </div>
    </>,
  ];

  return (
    <div className="pt-[60px]">
      <div className="h-[340px] sm:h-[400px] relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={d.img} alt={d.title} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,27,42,0.9)] to-[rgba(13,27,42,0.2)]" />
        <div className="absolute bottom-0 left-0 right-0 p-6 max-w-[1160px] mx-auto">
          <button onClick={onBack} className="inline-flex items-center gap-2 text-white/80 text-sm font-semibold bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 mb-3 hover:bg-white/20">
            ← Все направления
          </button>
          <h1 className="text-white text-4xl font-black mb-1">{d.flag} {d.title}</h1>
          <p className="text-white/70 text-sm max-w-md">{d.sub}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {d.tags.map(t => <span key={t} className="bg-white/13 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">{t}</span>)}
          </div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-[#f1f5f9] sticky top-[60px] z-10">
        <div className="max-w-[1160px] mx-auto px-5 flex overflow-x-auto scrollbar-hide">
          {d.cats.map((c, i) => (
            <button key={i} onClick={() => setTab(i)}
              className={`px-5 py-3.5 text-xs font-bold border-b-[3px] whitespace-nowrap transition-colors ${tab === i ? "text-[#ff6b35] border-[#ff6b35]" : "text-[#64748b] border-transparent hover:text-[#1e293b]"}`}>
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-5 py-10 pb-16">
        {content[Math.min(tab, content.length - 1)]}
        <div className="bg-gradient-to-br from-[#0d1b2a] to-[#1a3550] rounded-2xl p-7 text-center mt-8">
          <h3 className="text-white text-xl font-extrabold mb-2">✈️ Готовы лететь?</h3>
          <p className="text-white/70 text-sm mb-5">Оставьте заявку — подберём лучший тур и отель</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button onClick={onBack} className="bg-gradient-to-br from-[#ff6b35] to-orange-400 text-white font-bold text-sm px-6 py-2.5 rounded-xl">Оставить заявку</button>
            <a href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer" className="border-2 border-[#ff6b35] text-[#ff6b35] font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-[#ff6b35] hover:text-white transition-colors">💬 Telegram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CruisePage({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <div className="pt-[60px]">
      <div className="bg-gradient-to-br from-[#0a1628] via-[#0d3460] to-[#1a5276] py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-[200px] opacity-[0.04] pointer-events-none">🚢</div>
        <div className="relative z-10 px-5">
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {["🌊 Средиземноморье", "🏝️ Карибы", "🧊 Норвегия", "🗺️ Кругосветка"].map(b => (
              <span key={b} className="bg-white/8 border border-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full">{b}</span>
            ))}
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-black mb-3">🚢 Круизы по всему миру</h1>
          <p className="text-white/72 text-base max-w-lg mx-auto leading-relaxed mb-6">27 миллионов человек каждый год выбирают круизы. Пока вы читаете — 400 000 плывут на плавучих отелях с видом на закат. А вы?</p>
          <button onClick={() => onNav("contacts")} className="bg-gradient-to-br from-[#ff6b35] to-orange-400 text-white font-bold text-sm px-7 py-3 rounded-xl shadow-[0_4px_14px_rgba(255,107,53,0.4)]">
            Забронировать круиз →
          </button>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-5 py-12">
        <div className="bg-[linear-gradient(135deg,#fff7ed,#fff3e0)] border-2 border-[rgba(255,107,53,0.25)] rounded-2xl p-6 flex gap-4 mb-10">
          <span className="text-3xl flex-shrink-0">⚡</span>
          <div>
            <h3 className="font-bold text-[#ff6b35] mb-1">Вы теряете лучшие годы без круизов</h3>
            <p className="text-sm text-[#1e293b] leading-relaxed">Средний возраст круизного пассажира — <strong>46 лет</strong>. На молодёжных круизах MSC — <strong>28 лет</strong>. Это не для пенсионеров.</p>
          </div>
        </div>

        <span className="text-[#ff6b35] text-[11px] font-bold tracking-[2px] uppercase">Разрушаем мифы</span>
        <h2 className="text-2xl font-extrabold mt-1 mb-6">«Я думал, круиз — это как Титаник»</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { x: "🚢💥", label: "МИФ", labelC: "text-red-500", t: "«Корабль может утонуть»", p: "Современные лайнеры — самые безопасные суда. 27 уровней защиты." },
            { x: "👴", label: "МИФ", labelC: "text-red-500", t: "«Круиз для пенсионеров»", p: "Norwegian, MSC — ночные клубы, аквапарки, казино на борту." },
            { x: "💸", label: "МИФ", labelC: "text-red-500", t: "«Круиз очень дорогой»", p: "Средиземноморье 7 ночей от $599 — включает проживание и 5 стран." },
            { x: "🍔", label: "ФАКТ ✓", labelC: "text-green-500", t: "«На круизе вкусно кормят»", p: "Завтрак-обед-ужин 24/7 включены. Люди набирают 2-3 кг за круиз 😄" },
          ].map(({ x, label, labelC, t, p }) => (
            <div key={t} className="bg-white rounded-2xl p-5 shadow-[0_3px_12px_rgba(0,0,0,0.06)]">
              <div className="text-2xl mb-2">{x}</div>
              <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${labelC}`}>{label}</p>
              <h3 className="font-bold text-sm mb-2">{t}</h3>
              <p className="text-[#64748b] text-xs leading-relaxed">{p}</p>
            </div>
          ))}
        </div>

        <span className="text-[#ff6b35] text-[11px] font-bold tracking-[2px] uppercase">Маршруты</span>
        <h2 className="text-2xl font-extrabold mt-1 mb-6">Куда плыть?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=65", t: "🌊 Средиземноморье", p: "Испания, Италия, Греция. 7-14 ночей.", price: "от $599 / чел." },
            { img: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=500&q=65", t: "🏝️ Карибские острова", p: "Ямайка, Барбадос, Мексика.", price: "от $699 / чел." },
            { img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=500&q=65", t: "🧊 Норвежские фьорды", p: "Северное сияние, айсберги.", price: "от $899 / чел." },
            { img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=65", t: "🇦🇪 ОАЭ и Аравия", p: "Дубай, Абу-Даби, Оман.", price: "от $499 / чел." },
          ].map(({ img, t, p, price }) => (
            <div key={t} className="bg-[#f8fafc] rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt={t} className="w-full h-36 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1">{t}</h3>
                <p className="text-[#64748b] text-xs mb-2">{p}</p>
                <p className="text-[#ff6b35] font-bold text-sm">{price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#0d1b2a] to-[#1a3550] rounded-2xl p-8 text-center">
          <h3 className="text-white text-xl font-extrabold mb-2">🚢 Готовы выйти в море?</h3>
          <p className="text-white/70 text-sm mb-5">Более 300 клиентов из Ташкента уже плавали с нами.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button onClick={() => onNav("contacts")} className="bg-gradient-to-br from-[#ff6b35] to-orange-400 text-white font-bold text-sm px-6 py-2.5 rounded-xl">Забронировать круиз</button>
            <a href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer" className="border-2 border-[#ff6b35] text-[#ff6b35] font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-[#ff6b35] hover:text-white transition-colors">💬 Telegram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideosPage({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <div className="pt-[60px]">
      <div className="bg-gradient-to-br from-[#0d1b2a] to-[#1a2b3c] py-12 text-center">
        <span className="text-[#ffd166] text-[11px] font-bold tracking-[2px] uppercase">Видеообзоры</span>
        <h1 className="text-white text-4xl font-black mt-1 mb-2">🎬 Видеообзоры отелей</h1>
        <p className="text-white/68 text-sm max-w-md mx-auto">Направление → Город → Категория → Видеообзор</p>
      </div>
      <div className="max-w-[1160px] mx-auto px-5 py-12 text-center">
        <div className="text-6xl mb-4">🎬</div>
        <h2 className="text-xl font-bold mb-2">Видеообзоры скоро появятся</h2>
        <p className="text-[#64748b] text-sm max-w-sm mx-auto mb-6">Мы готовим видеообзоры наших направлений. Подпишитесь чтобы не пропустить!</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="https://www.instagram.com/tury_tashkent/" target="_blank" rel="noopener noreferrer"
            className="bg-[#e1306c] text-white font-bold text-sm px-5 py-2.5 rounded-xl">📸 Instagram</a>
          <a href="https://t.me/tury_iz_tashkenta" target="_blank" rel="noopener noreferrer"
            className="bg-[#2ca5e0] text-white font-bold text-sm px-5 py-2.5 rounded-xl">✈️ Telegram</a>
        </div>
      </div>
    </div>
  );
}

function ContactsPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="pt-[60px]">
      <div className="bg-gradient-to-br from-[#0d1b2a] to-[#1a2b3c] py-12 text-center">
        <h1 className="text-white text-4xl font-black mb-2">Контакты</h1>
        <p className="text-white/68 text-sm">Свяжитесь с нами — ответим в течение 15 минут</p>
      </div>
      <div className="max-w-[1160px] mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            {[
              { ico: "📞", bg: "rgba(255,107,53,0.1)", label: "Телефон", val: "+998 77 161 88 88", href: "tel:+998771618888" },
              { ico: "✉️", bg: "rgba(33,150,243,0.1)", label: "Email", val: "uz@panteraluxe.travel", href: "mailto:uz@panteraluxe.travel" },
              { ico: "📍", bg: "rgba(6,182,212,0.1)", label: "Офис", val: "Ташкент, Амир Темур 99а", href: undefined },
              { ico: "⏰", bg: "rgba(34,197,94,0.1)", label: "Режим работы", val: "10:00 – 21:00, ежедневно", href: undefined },
            ].map(({ ico, bg, label, val, href }) => (
              <div key={label} className="flex gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: bg }}>{ico}</div>
                <div>
                  <p className="text-[#64748b] text-xs font-semibold mb-0.5">{label}</p>
                  {href ? <a href={href} className="text-[#1e293b] text-sm font-medium hover:text-[#ff6b35] transition-colors">{val}</a> : <p className="text-[#1e293b] text-sm font-medium">{val}</p>}
                </div>
              </div>
            ))}
            <div className="flex gap-2 flex-wrap mt-6">
              <a href="https://www.instagram.com/tury_tashkent/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#e1306c] text-white font-bold text-xs px-4 py-2 rounded-lg">📸 Instagram</a>
              <a href="https://t.me/tury_iz_tashkenta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#2ca5e0] text-white font-bold text-xs px-4 py-2 rounded-lg">✈️ Горящие туры</a>
              <a href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#2ca5e0] text-white font-bold text-xs px-4 py-2 rounded-lg">💬 Написать</a>
            </div>
          </div>
          <div className="bg-[#f8fafc] rounded-2xl p-7">
            {sent ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-3">✅</div>
                <h3 className="text-lg font-bold mb-2">Заявка отправлена!</h3>
                <p className="text-[#64748b] text-sm">Менеджер свяжется с вами в течение 15 минут.</p>
                <a href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer"
                  className="inline-block mt-4 bg-gradient-to-br from-[#ff6b35] to-orange-400 text-white font-bold text-sm px-6 py-2.5 rounded-xl">💬 Написать в Telegram</a>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold mb-5">Оставить заявку</h3>
                {[
                  { l: "Имя", t: "text", p: "Ваше имя", a: "name" },
                  { l: "Телефон / WhatsApp", t: "tel", p: "+998 __ ___", a: "tel" },
                ].map(({ l, t, p, a }) => (
                  <div key={l} className="mb-3">
                    <label className="block text-xs font-semibold text-[#64748b] mb-1">{l}</label>
                    <input type={t} placeholder={p} autoComplete={a}
                      className="w-full px-3 py-2.5 border-2 border-[#e2e8f0] rounded-lg text-sm outline-none focus:border-[#ff6b35] bg-white transition-colors" />
                  </div>
                ))}
                <div className="mb-3">
                  <label className="block text-xs font-semibold text-[#64748b] mb-1">Направление</label>
                  <select className="w-full px-3 py-2.5 border-2 border-[#e2e8f0] rounded-lg text-sm outline-none focus:border-[#ff6b35] bg-white transition-colors">
                    <option>Выберите</option>
                    {["Дубай", "Шарм Эль Шейх", "Турция", "Мальдивы", "Таиланд", "Круиз", "Другое"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-[#64748b] mb-1">Сообщение</label>
                  <textarea rows={3} placeholder="Пожелания..."
                    className="w-full px-3 py-2.5 border-2 border-[#e2e8f0] rounded-lg text-sm outline-none focus:border-[#ff6b35] bg-white transition-colors resize-none" />
                </div>
                <button onClick={() => setSent(true)}
                  className="w-full bg-gradient-to-br from-[#ff6b35] to-orange-400 text-white font-bold text-sm py-3 rounded-xl shadow-[0_4px_14px_rgba(255,107,53,0.35)] transition-transform hover:-translate-y-0.5">
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

function Footer({ onNav, onDest }: { onNav: (p: Page) => void; onDest: (k: string) => void }) {
  return (
    <footer className="bg-[#0d1b2a] text-white/62 px-6 pt-11 pb-5">
      <div className="max-w-[1160px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO} alt="PANTERA LUXE" className="h-9 w-auto" loading="lazy" />
              <span className="text-white font-extrabold text-sm">PANTERA LUXE</span>
            </div>
            <p className="text-xs leading-relaxed max-w-[240px]">Туристическое агентство в Ташкенте. 10 лет, 5000+ туристов.</p>
            <p className="text-xs mt-2">📍 Амир Темур 99а · ⏰ 10:00–21:00</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs mb-3 tracking-wide">Направления</h4>
            <ul className="space-y-2 text-xs">
              {[["dubai", "Дубай"], ["sharm", "Шарм Эль Шейх"], ["turkey", "Турция"], ["maldives", "Мальдивы"]].map(([k, l]) => (
                <li key={k}><button onClick={() => onDest(k)} className="hover:text-[#ff6b35] transition-colors">{l}</button></li>
              ))}
              <li><button onClick={() => onNav("cruise")} className="hover:text-[#ff6b35] transition-colors">🚢 Круизы</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs mb-3 tracking-wide">Контакты</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="tel:+998771618888" className="hover:text-[#ff6b35] transition-colors">+998 77 161 88 88</a></li>
              <li><a href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b35] transition-colors">Telegram</a></li>
              <li><a href="https://www.instagram.com/tury_tashkent/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b35] transition-colors">Instagram</a></li>
              <li><a href="https://t.me/tury_iz_tashkenta" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b35] transition-colors">Горящие туры</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/8 pt-4 flex flex-wrap justify-between items-center gap-2 text-xs">
          <p>© 2025 PANTERA LUXE. Все права защищены.</p>
          <p>🌍 Туры из Ташкента, Узбекистан</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Float buttons & scroll top ──────────────────────────────────
function FloatButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-2 items-end">
      {[
        { href: "https://t.me/vilet_support", bg: "#2ca5e0", ico: "✈️", lbl: "Telegram" },
        { href: "https://wa.me/998771618888", bg: "#25d366", ico: "💬", lbl: "WhatsApp" },
        { href: "https://www.instagram.com/tury_tashkent/", bg: "linear-gradient(135deg,#f09433,#dc2743,#bc1888)", ico: "📸", lbl: "Instagram" },
      ].map(({ href, bg, ico, lbl }) => (
        <a key={lbl} href={href} target="_blank" rel="noopener noreferrer"
          style={{ background: bg }}
          className="flex items-center gap-2 px-3 py-2.5 rounded-full text-white font-bold text-sm shadow-[0_3px_12px_rgba(0,0,0,0.2)] overflow-hidden max-w-[46px] hover:max-w-[180px] transition-[max-width] duration-300 flex-row-reverse">
          <span className="text-[18px] flex-shrink-0">{ico}</span>
          <span className="whitespace-nowrap opacity-0 max-w-0 overflow-hidden hover:opacity-100 group-hover:max-w-[120px] text-right transition-all duration-300">{lbl}</span>
        </a>
      ))}
    </div>
  );
}

function ScrollTop() {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const fn = () => setVis(window.scrollY > 400);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  if (!vis) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-4 z-50 w-10 h-10 rounded-full bg-[#ff6b35] text-white text-base shadow-[0_3px_12px_rgba(255,107,53,0.4)] flex items-center justify-center hover:-translate-y-0.5 transition-transform">
      ↑
    </button>
  );
}

// ─── Root ─────────────────────────────────────────────────────────
export default function Home() {
  const [page, setPage] = useState<Page>("home");
  const [destKey, setDestKey] = useState<string>("dubai");
  const [mob, setMob] = useState(false);
  const prevPage = useRef<Page>("home");

  const nav = useCallback((p: Page) => {
    prevPage.current = page;
    setPage(p);
    setMob(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const openDest = useCallback((k: string) => {
    setDestKey(k);
    setPage("dest");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <style>{`
        @keyframes scrollReviews {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fireGlow {
          0%, 100% { box-shadow: 0 0 10px 2px rgba(255,100,0,0.55); }
          50% { box-shadow: 0 0 22px 6px rgba(255,80,0,0.85), 0 0 40px 8px rgba(255,160,0,0.4); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>

      <Nav page={page} onNav={nav} mobileOpen={mob} onMobile={() => setMob(v => !v)} />

      <main>
        {page === "home" && <HomePage onNav={nav} onDest={openDest} />}
        {page === "directions" && <DirectionsPage onDest={openDest} onNav={nav} />}
        {page === "dest" && <DestPage destKey={destKey} onBack={() => nav("directions")} />}
        {page === "cruise" && <CruisePage onNav={nav} />}
        {page === "videos" && <VideosPage onNav={nav} />}
        {page === "contacts" && <ContactsPage />}
      </main>

      <Footer onNav={nav} onDest={openDest} />
      <FloatButtons />
      <ScrollTop />
    </>
  );
}