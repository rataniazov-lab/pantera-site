"use client";
import { useEffect, useState, useCallback } from "react";

type Page = "home" | "directions" | "dest" | "cruise" | "sanatorium" | "videos" | "contacts" | "visa" | "visadest";

const LOGO = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779385406/pantera_luxe_logo_v0gbmo.png";

const DESTS_PREVIEW = [
  { key:"dubai",   flag:"🇦🇪", title:"Дубай",          sub:"Город будущего — небоскрёбы, пустыня, роскошь",      img:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=70", tags:["🏖️ Пляж","🏙️ Город","✈️ 5ч","от $499"] },
  { key:"sharm",   flag:"🇪🇬", title:"Шарм Эль Шейх",  sub:"Жемчужина Красного моря — дайвинг, риф, вечное лето",img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=70", tags:["🏖️ Пляж","🤿 Дайвинг","✈️ 4ч","от $380"] },
  { key:"turkey",  flag:"🇹🇷", title:"Турция",          sub:"Стамбул, Каппадокия, Анталья — два континента",      img:"https://images.unsplash.com/photo-1530838236892-bce9f63a3ef1?w=600&q=70", tags:["🏙️ Стамбул","🏖️ Анталья","🎈 Каппадокия","от $350"] },
];

const DIR_CARDS = [
  { key:"dubai",   flag:"🇦🇪", name:"Дубай",           sub:"ОАЭ · от $499",            cat:"city beach",  img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779484881/Dubai2_zebzf8.png" },
  { key:"sharm",   flag:"🇪🇬", name:"Шарм Эль Шейх",   sub:"Египет · от $380",          cat:"beach",       img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779524661/%D0%A8%D0%B0%D1%80%D0%BC_enh5kh.png" },
  { key:"turkey",  flag:"🇹🇷", name:"Турция",           sub:"Стамбул, Анталья · от $350",cat:"beach city",  img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520521/%D0%A1%D0%A2%D0%90%D0%9C%D0%91%D0%A3%D0%9B_xak5js.png" },
  { key:"maldives",flag:"🇲🇻", name:"Мальдивы",         sub:"от $1200",                  cat:"beach",       img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520521/%D0%9C%D0%90%D0%9B%D0%AC%D0%94%D0%98%D0%92%D0%AB_nshijd.png" },
  { key:"thailand",flag:"🇹🇭", name:"Таиланд",          sub:"Пхукет · от $650",          cat:"beach",       img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779487245/tai_at5qsu.png" },
  { key:"georgia", flag:"🇬🇪", name:"Грузия",           sub:"от $290",                   cat:"city nature", img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520520/%D0%93%D0%A0%D0%A3%D0%97%D0%98%D0%AF_srbigi.png" },
  { key:"baku",    flag:"🇦🇿", name:"Азербайджан",      sub:"Баку · от $250",            cat:"city",        img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520520/%D0%91%D0%90%D0%9A%D0%A3_vycjoz.png" },
  { key:"karlovy", flag:"🇨🇿", name:"Карловы Вары",     sub:"Чехия",                     cat:"health city", img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520521/%D0%9A%D0%90%D0%A0%D0%9B%D0%9E%D0%92%D0%AB_e4xtis.png" },
  { key:"naftalan",flag:"🇦🇿", name:"Нафталан",         sub:"Азербайджан",               cat:"health",      img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520521/%D0%9D%D0%90%D0%A4%D0%A2%D0%90%D0%9B%D0%90%D0%9D_eihxuc.png" },
  { key:"vietnam", flag:"🇻🇳", name:"Вьетнам",          sub:"от $600",                   cat:"beach",       img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520520/%D0%92%D0%AC%D0%95%D0%A2%D0%9D%D0%90%D0%9C_bstiaw.png" },
  { key:"qatar",   flag:"🇶🇦", name:"Катар",            sub:"Доха",                      cat:"city",        img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520520/%D0%94%D0%9E%D0%A5%D0%90_hgsxss.png" },
  { key:"issiyk",  flag:"🇰🇬", name:"Иссык-Куль",      sub:"от $180",                   cat:"nature beach",img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520520/%D0%98%D0%A1%D0%A1%D0%AB%D0%9A_%D0%9A%D0%A3%D0%9B%D0%AC_lrwgpn.png" },
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


// ─── Price helpers ───────────────────────────────────────────────
function extractPrice(price: string): string {
  // Extract only the number: "от $499 / чел." → "$499", "$290" → "$290"
  const m = price.match(/\$(\d+)/);
  return m ? "$" + m[1] : price;
}
function oldPrice(price: string): string {
  const m = price.match(/\$(\d+)/);
  if (!m) return "";
  return "$" + Math.round(parseInt(m[1]) * 1.35 / 5) * 5;
}
function PriceBlock({ price, dark = false }: { price: string; dark?: boolean }) {
  const op = oldPrice(price);
  const current = extractPrice(price);
  if (!current.includes("$")) return null;
  return (
    <div className="price-block">
      {op && <span className={`price-old${dark ? " price-old-dark" : ""}`}>{op}</span>}
      <span className="price-new">{current}</span>
    </div>
  );
}

// ─────────────────────────── Home ───────────────────────────────
function HomePage({ onNav, onDest }: { onNav:(p:Page)=>void; onDest:(k:string)=>void }) {
  const cd = useCountdown();
  return (
    <div className="page-top">
      {/* Hero */}
      <div className="hero">
        <div className="hero-bg" />
        <div className="hero-after" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/dass5gqvk/image/upload/v1780112905/12_gz72q8.jpg"
          alt="Pantera Luxe Travel группа"
          className="hero-mobile-photo"
          loading="eager"
        />
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
          <div className="cd-box"><span className="cd-num">{cd.h}</span><span className="cd-lbl">ч</span></div>
          <span className="cd-sep">:</span>
          <div className="cd-box"><span className="cd-num">{cd.m}</span><span className="cd-lbl">м</span></div>
          <span className="cd-sep">:</span>
          <div className="cd-box"><span className="cd-num">{cd.s}</span><span className="cd-lbl">с</span></div>
        </div>
        <button className="btn-primary" style={{ padding:"7px 16px", fontSize:12 }} onClick={() => onNav("contacts")}>
          Успеть →
        </button>
      </div>

      {/* Directions tree */}
      <div className="sec">
        <div className="site-container">
          <span className="section-tag">Направления</span>
          <h2 className="section-title">Куда полетим?</h2>
          <p className="section-sub">14 направлений из Ташкента — нажмите чтобы открыть полный гид</p>
          <div className="dest-tree">
            {[
              { label:"🏖️ Пляжный отдых", items:[
                { key:"dubai",    flag:"🇦🇪", name:"Дубай",          sub:"ОАЭ · от $499" },
                { key:"sharm",    flag:"🇪🇬", name:"Шарм Эль Шейх",  sub:"Египет · от $380" },
                { key:"turkey",   flag:"🇹🇷", name:"Турция",          sub:"Стамбул, Анталья · от $350" },
                { key:"maldives", flag:"🇲🇻", name:"Мальдивы",        sub:"от $1200" },
                { key:"thailand", flag:"🇹🇭", name:"Таиланд",         sub:"Пхукет · от $650" },
                { key:"vietnam",  flag:"🇻🇳", name:"Вьетнам",         sub:"от $600" },
                { key:"issiyk",   flag:"🇰🇬", name:"Иссык-Куль",     sub:"от $180" },
              ]},
              { label:"🏙️ Города и культура", items:[
                { key:"turkey",   flag:"🇹🇷", name:"Стамбул",         sub:"Турция · от $350" },
                { key:"georgia",  flag:"🇬🇪", name:"Грузия",          sub:"Тбилиси, Батуми · от $290" },
                { key:"baku",     flag:"🇦🇿", name:"Азербайджан",     sub:"Баку · от $250" },
                { key:"qatar",    flag:"🇶🇦", name:"Катар",           sub:"Доха" },
                { key:"karlovy",  flag:"🇨🇿", name:"Карловы Вары",    sub:"Чехия" },
              ]},
              { label:"💆 Лечение и здоровье", items:[
                { key:"naftalan", flag:"🇦🇿", name:"Нафталан",        sub:"Азербайджан" },
                { key:"karlovy",  flag:"🇨🇿", name:"Карловы Вары",    sub:"Чехия" },
                { key:"turkey",   flag:"🇹🇷", name:"Медтуризм Турция",sub:"Клиники Стамбула" },
              ]},
              { label:"🏔️ Природа и горы", items:[
                { key:"georgia",  flag:"🇬🇪", name:"Грузия",          sub:"Казбеги, Сванетия · от $290" },
                { key:"issiyk",   flag:"🇰🇬", name:"Иссык-Куль",     sub:"Кыргызстан · от $180" },
                { key:"vietnam",  flag:"🇻🇳", name:"Вьетнам",         sub:"от $600" },
              ]},
            ].map(group => (
              <div key={group.label} className="dest-tree-group">
                <div className="dest-tree-label">{group.label}</div>
                <div className="dest-tree-items">
                  {group.items.map((item, i) => (
                    <button key={i} className="dest-tree-item"
                      onClick={() => ["dubai","sharm","turkey","maldives","thailand","georgia"].includes(item.key) ? onDest(item.key) : onNav("directions")}>
                      <span className="dti-flag">{item.flag}</span>
                      <span className="dti-name">{item.name}</span>
                      {item.sub && <div className="dti-price-block"><PriceBlock price={item.sub} /></div>}
                      <span className="dti-arrow">→</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button className="dest-tree-all" onClick={() => onNav("directions")}>
              🌍 Смотреть все 14 направлений →
            </button>
          </div>
        </div>
      </div>

      {/* Cruise promo */}
      <div className="sec sec-gray">
        <div className="site-container">
          <span className="section-tag">Круизы</span>
          <h2 className="section-title">🚢 Круизы из Ташкента</h2>
          <p className="section-sub">Плавучий отель 5★ — вы спите, а вокруг меняются страны</p>
          <div className="cruise-dest-grid">
            {[
              { img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779532300/cr1_kmn3wu.png", title:"Круиз по ОАЭ",    sub:"Дубай, Абу-Даби, Оман",       price:"от $499 / чел.", emoji:"🇦🇪" },
              { img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779532300/cr3_hsa6hc.png", title:"Круиз по Турции", sub:"Стамбул, Измир, Бодрум",       price:"от $549 / чел.", emoji:"🇹🇷" },
              { img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779532300/cr4_dosuax.png", title:"Круиз по Азии",   sub:"Таиланд, Малайзия, Сингапур", price:"от $699 / чел.", emoji:"🌏" },
              { img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779532300/cr2_gosy4b.png", title:"Круиз по Европе", sub:"Италия, Греция, Испания",       price:"от $599 / чел.", emoji:"🇪🇺" },
            ].map(c => (
              <div key={c.title} className="cruise-dest-card" onClick={() => onNav("cruise")}>
                <div className="cruise-dest-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.title} loading="lazy" />
                  <div className="cruise-dest-overlay" />
                  <span className="cruise-dest-emoji">{c.emoji}</span>
                </div>
                <div className="cruise-dest-body">
                  <h3>{c.title}</h3>
                  <div className="cruise-dest-footer">
                    <PriceBlock price={c.price} />
                    <span className="cruise-dest-btn">Подробнее →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="sec">
        <div className="site-container">
          <span className="section-tag">Услуги</span>
          <h2 className="section-title">Что мы делаем</h2>
          <div className="svc-list">
            {[
              ["🎫","Авиабилеты",       "Поиск и бронирование лучших рейсов"],
              ["✈️","Туры из Ташкента", "Авиабилеты + отель + трансфер"],
              ["🏥","Медицинский туризм","Турция, Корея — клиники мирового уровня"],
              ["🚢","Круизы",           "Мировые маршруты — 5 стран за 1 поездку"],
              ["🏨","Отели по миру",    "100 000+ вариантов 4★–5★"],
              ["🚗","Трансферы",        "Аэропорт, авто, сопровождение"],
              ["👥","Групповые туры",   "Экономия до 30% в группе"],
            ].map(([i,t,s]) => (
              <div key={t} className="svc-list-item">
                <span className="svc-list-ico">{i}</span>
                <div className="svc-list-text">
                  <span className="svc-list-title">{t}</span>
                  <span className="svc-list-sub">{s}</span>
                </div>
              </div>
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
    <div className="page-top">
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
              </div>
              {d.sub && d.sub.includes("$") && (
                <div className="dir-price-block">
                  <PriceBlock price={d.sub} dark />
                </div>
              )}
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
    <div className="page-top">
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
            <a className="btn-outline" href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dass5gqvk/image/upload/v1779538770/Telegram_logo_kdtfle.svg" alt="Telegram" className="soc-icon" />Telegram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────── Cruise ─────────────────────────────
const CRUISE_ROUTES = [
  {
    img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=70",
    t:"🌊 Средиземноморье", region:"Испания · Италия · Греция · Франция",
    nights:"7–14 ночей", ship:"MSC Sinfonia / MSC Grandiosa", port:"Барселона",
    tags:["Культура","Пляж","Гастрономия"], price:"от $599 / чел."
  },
  {
    img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=70",
    t:"🇦🇪 ОАЭ и Персидский залив", region:"Дубай · Абу-Даби · Оман · Катар · Бахрейн",
    nights:"7 ночей", ship:"MSC World Europa", port:"Дубай",
    tags:["Роскошь","Шопинг","Архитектура"], price:"от $499 / чел."
  },
  {
    img:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=70",
    t:"🌏 Азия — Дальний Восток", region:"Шанхай · Япония · Южная Корея · Тайвань",
    nights:"5–10 ночей", ship:"MSC Bellissima", port:"Шанхай",
    tags:["Культура","Технологии","Гастрономия"], price:"от $685 / чел."
  },
];

function CruisePage({ onNav }: { onNav:(p:Page)=>void }) {
  const [filter, setFilter] = useState("Все");
  const filters = ["Все","Пляж","Культура","Роскошь","Гастрономия","Технологии"];
  const visible = filter === "Все" ? CRUISE_ROUTES : CRUISE_ROUTES.filter(r => r.tags.includes(filter));

  return (
    <div className="page-top">
      <div className="cruise-hero-page">
        <div className="site-container">
          <div className="cruise-badges">
            {["🌊 Средиземноморье","🇦🇪 ОАЭ и Персидский залив","🌏 Азия"].map(b => <span key={b} className="cruise-badge">{b}</span>)}
          </div>
          <h1>🚢 Круизы по всему миру</h1>
          <p>27 миллионов человек каждый год выбирают круизы. 3 направления из Ташкента — лучшие лайнеры MSC.</p>
          <button className="btn-primary" onClick={() => onNav("contacts")}>Забронировать круиз →</button>
        </div>
      </div>

      <div className="site-container" style={{ padding:"36px 20px 60px" }}>

        <div className="fomo-box">
          <span className="fi">⚡</span>
          <div><h3>Всё включено — отель + транспорт + 5 стран</h3><p>Просыпаетесь в новой стране каждый день. Один чемодан, ноль пересадок.</p></div>
        </div>

        <span className="section-tag">Маршруты</span>
        <h2 className="section-title">Куда плыть?</h2>

        <div className="cruise-filters">
          {filters.map(f => (
            <button key={f} className={`filter-btn${filter===f?" active":""}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>

        <div className="cruise-routes-grid">
          {visible.map(r => (
            <div key={r.t} className="cruise-route-card" onClick={() => onNav("contacts")}>
              <div className="cruise-route-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.img} alt={r.t} loading="lazy" />
                <div className="cruise-route-overlay" />
                <div className="cruise-route-tags">
                  {r.tags.map(tag => <span key={tag} className="cruise-tag">{tag}</span>)}
                </div>
              </div>
              <div className="cruise-route-body">
                <h3>{r.t}</h3>
                <p className="crb-region">{r.region}</p>
                <div className="crb-meta">
                  <span>🚢 {r.ship}</span>
                  <span>🌙 {r.nights}</span>
                  <span>⚓ {r.port}</span>
                </div>
                <div className="crb-footer">
                  <PriceBlock price={r.price} />
                  <span className="crb-book">Забронировать →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-banner" style={{ marginTop:40 }}>
          <h3>🚢 Готовы выйти в море?</h3>
          <p>Более 300 клиентов из Ташкента уже плавали с нами. Подберём маршрут под ваш бюджет.</p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={() => onNav("contacts")}>Забронировать круиз</button>
            <a className="btn-outline" href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dass5gqvk/image/upload/v1779538770/Telegram_logo_kdtfle.svg" alt="Telegram" className="soc-icon" />Telegram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────── Videos ─────────────────────────────
const ADMIN_PASSWORD = "pantera2025";

type VideoItem = { id: string; title: string; dest: string; type: "cloudinary" | "youtube"; url: string };

const VIDEO_STORAGE_KEY = "pl_videos";

function loadVideos(): VideoItem[] {
  try { return JSON.parse(localStorage.getItem(VIDEO_STORAGE_KEY) || "[]"); } catch { return []; }
}
function saveVideos(v: VideoItem[]) {
  try { localStorage.setItem(VIDEO_STORAGE_KEY, JSON.stringify(v)); } catch {}
}

function VideosPage() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [adminOpen, setAdminOpen] = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [form, setForm] = useState({ title:"", dest:"Дубай", type:"youtube" as "cloudinary"|"youtube", url:"" });
  const [formErr, setFormErr] = useState("");

  useEffect(() => { setVideos(loadVideos()); }, []);

  function login() {
    if (pwInput === ADMIN_PASSWORD) { setAuthed(true); setPwError(false); }
    else { setPwError(true); }
  }

  function addVideo() {
    if (!form.title.trim() || !form.url.trim()) { setFormErr("Заполните все поля"); return; }
    const newItem: VideoItem = { id: Date.now().toString(), ...form };
    const updated = [newItem, ...videos];
    setVideos(updated); saveVideos(updated); setForm({ title:"", dest:"Дубай", type:"youtube", url:"" }); setFormErr("");
  }

  function deleteVideo(id: string) {
    const updated = videos.filter(v => v.id !== id);
    setVideos(updated); saveVideos(updated);
  }

  function getEmbedUrl(v: VideoItem) {
    if (v.type === "youtube") {
      const match = v.url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      return match ? `https://www.youtube.com/embed/${match[1]}` : v.url;
    }
    return v.url;
  }

  const DESTS = ["Дубай","Шарм Эль Шейх","Турция","Мальдивы","Таиланд","Грузия","Азербайджан","Другое"];

  return (
    <div className="page-top">
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

      <div className="site-container" style={{ padding:"40px 20px 60px" }}>

        {/* Video grid */}
        {videos.length === 0 ? (
          <div style={{ textAlign:"center", padding:"48px 0" }}>
            <div style={{ fontSize:60, marginBottom:16 }}>🎬</div>
            <h2 style={{ fontSize:20, fontWeight:700, marginBottom:8 }}>Видеообзоры скоро появятся</h2>
            <p style={{ color:"#64748b", fontSize:13, maxWidth:360, margin:"0 auto 24px", lineHeight:1.6 }}>
              Мы готовим видеообзоры наших направлений. Подпишитесь чтобы не пропустить!
            </p>
            <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap" }}>
              <a className="soc-btn soc-btn-ig" href="https://www.instagram.com/tury_tashkent/" target="_blank" rel="noopener noreferrer" style={{ background:"#e1306c" }}><img src="https://res.cloudinary.com/dass5gqvk/image/upload/v1779538594/Instagram_qdbqub.png" alt="Instagram" className="soc-icon" />Instagram</a>
              <a className="soc-btn" href="https://t.me/tury_iz_tashkenta" target="_blank" rel="noopener noreferrer" style={{ background:"#2ca5e0" }}><img src="https://res.cloudinary.com/dass5gqvk/image/upload/v1779538770/Telegram_logo_kdtfle.svg" alt="Telegram" className="soc-icon" />Telegram</a>
            </div>
          </div>
        ) : (
          <div className="videos-grid">
            {videos.map(v => (
              <div key={v.id} className="video-card">
                <div className="video-frame">
                  {v.type === "youtube" ? (
                    <iframe src={getEmbedUrl(v)} title={v.title} frameBorder="0" allowFullScreen style={{ width:"100%", height:"100%", border:"none" }} />
                  ) : (
                    <video src={v.url} controls style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                  )}
                </div>
                <div className="video-info">
                  <span className="video-dest">{v.dest}</span>
                  <h3>{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Admin button */}
        <div style={{ textAlign:"center", marginTop:40 }}>
          <button className="admin-toggle-btn" onClick={() => setAdminOpen(o => !o)}>
            🔐 Управление видео
          </button>
        </div>

        {/* Admin panel */}
        {adminOpen && (
          <div className="admin-panel">
            {!authed ? (
              <div className="admin-login">
                <h3>🔒 Вход для администратора</h3>
                <input type="password" placeholder="Пароль" value={pwInput}
                  onChange={e => setPwInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && login()}
                  className={pwError ? "input-err" : ""} />
                {pwError && <p className="err-msg">Неверный пароль</p>}
                <button className="btn-primary" onClick={login}>Войти</button>
              </div>
            ) : (
              <div className="admin-form">
                <h3>➕ Добавить видео</h3>
                <div className="admin-row">
                  <input type="text" placeholder="Название видео" value={form.title}
                    onChange={e => setForm(f => ({...f, title:e.target.value}))} />
                  <select value={form.dest} onChange={e => setForm(f => ({...f, dest:e.target.value}))}>
                    {DESTS.map(d => <option key={d}>{d}</option>)}
                  </select>
                  <select value={form.type} onChange={e => setForm(f => ({...f, type:e.target.value as "cloudinary"|"youtube"}))}>
                    <option value="youtube">YouTube</option>
                    <option value="cloudinary">Cloudinary (mp4)</option>
                  </select>
                </div>
                <div className="admin-row">
                  <input type="text" placeholder={form.type === "youtube" ? "Ссылка YouTube" : "Ссылка Cloudinary (.mp4)"}
                    value={form.url} onChange={e => setForm(f => ({...f, url:e.target.value}))} style={{ flex:1 }} />
                  <button className="btn-primary" onClick={addVideo}>Добавить</button>
                </div>
                {formErr && <p className="err-msg">{formErr}</p>}

                {videos.length > 0 && (
                  <div className="admin-list">
                    <h4>Загруженные видео ({videos.length})</h4>
                    {videos.map(v => (
                      <div key={v.id} className="admin-list-item">
                        <span className="ali-dest">{v.dest}</span>
                        <span className="ali-title">{v.title}</span>
                        <span className="ali-type">{v.type}</span>
                        <button className="ali-del" onClick={() => deleteVideo(v.id)}>✕</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────── Contacts ───────────────────────────
function ContactsPage() {
  const [sent, setSent] = useState(false);
  const contactItems: [string,string,string,string|undefined,string][] = [
    ["📞","rgba(255,107,53,0.1)","Телефон","tel:+998771618888","+998 77 161 88 88"],
    ["✉️","rgba(33,150,243,0.1)","Email","mailto:uz@exploremore.travel","uz@exploremore.travel"],
    ["📍","rgba(6,182,212,0.1)","Офис",undefined,"г.Ташкент, Юнусабадский район, пр. Амир Темур 99а"],
    ["⏰","rgba(34,197,94,0.1)","Режим работы",undefined,"10:00 – 21:00, ежедневно"],
  ];
  return (
    <div className="page-top">
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
              <a className="soc-btn" href="https://t.me/tury_iz_tashkenta"            target="_blank" rel="noopener noreferrer" style={{ background:"#2ca5e0" }}><img src="https://res.cloudinary.com/dass5gqvk/image/upload/v1779538770/Telegram_logo_kdtfle.svg" alt="Telegram" className="soc-icon" />Горящие туры</a>
              <a className="soc-btn" href="https://t.me/vilet_support"                target="_blank" rel="noopener noreferrer" style={{ background:"#2ca5e0" }}><img src="https://res.cloudinary.com/dass5gqvk/image/upload/v1779538770/Telegram_logo_kdtfle.svg" alt="Telegram" className="soc-icon" />Написать</a>
            </div>
          </div>

          <div className="c-form" style={{ margin:"28px 0" }}>
            {sent ? (
              <div style={{ textAlign:"center", padding:"40px 0" }}>
                <div style={{ fontSize:48, marginBottom:10 }}>✅</div>
                <h3 style={{ fontSize:18, fontWeight:700, marginBottom:6 }}>Заявка отправлена!</h3>
                <p style={{ color:"#64748b", fontSize:13, marginBottom:16 }}>Менеджер свяжется в течение 15 минут.</p>
                <a className="btn-primary" href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dass5gqvk/image/upload/v1779538770/Telegram_logo_kdtfle.svg" alt="Telegram" className="soc-icon" />Написать в Telegram</a>
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

// ─────────────────────────── Root ───────────────────────────────
export default function Home() {
  const [page,    setPage]    = useState<Page>("home");
  const [destKey, setDestKey] = useState("dubai");
  const [showTop, setShowTop] = useState(false);

  const nav = useCallback((p: Page) => {
    setPage(p); window.scrollTo({ top:0, behavior:"smooth" });
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

      <main>
        {page === "home"       && <HomePage       onNav={nav} onDest={openDest} />}
        {page === "directions" && <DirectionsPage onDest={openDest} onNav={nav} />}
        {page === "dest"       && <DestPage       destKey={destKey} onBack={() => nav("directions")} onNav={nav} />}
        {page === "cruise"     && <CruisePage     onNav={nav} />}
        {page === "sanatorium" && <SanatoriumPage onNav={nav} />}
        {page === "videos"     && <VideosPage />}
        {page === "contacts"   && <ContactsPage />}
        {page === "visa"       && <VisaPage       onNav={nav} onVisaDest={(k) => { setDestKey(k); nav("visadest"); }} />}
        {page === "visadest"  && <VisaDestPage    destKey={destKey} onBack={() => nav("visa")} onNav={nav} />}
      </main>


      {/* Floating buttons */}
      <div className="float-w">
        {([
          ["https://t.me/vilet_support",                              "#2ca5e0",                                          "TG","Telegram"  ],
          ["https://wa.me/998771618888",                              "#25d366",                                          "WA","WhatsApp"  ],
          ["https://www.instagram.com/tury_tashkent/",               "linear-gradient(135deg,#f09433,#dc2743,#bc1888)",  "IG","Instagram" ],
        ] as [string,string,string,string][]).map(([href,bg,ico,lbl]) => (
          <a key={lbl} className="f-btn" href={href} target="_blank" rel="noopener noreferrer" style={{ background:bg }}>
            <span className="f-ico">{ico === "IG" ? <img src="https://res.cloudinary.com/dass5gqvk/image/upload/v1779538594/Instagram_qdbqub.png" alt="Instagram" style={{width:20,height:20,objectFit:"contain"}} /> : ico === "TG" ? <img src="https://res.cloudinary.com/dass5gqvk/image/upload/v1779538770/Telegram_logo_kdtfle.svg" alt="Telegram" style={{width:20,height:20,objectFit:"contain"}} /> : ico === "WA" ? <img src="https://res.cloudinary.com/dass5gqvk/image/upload/v1779539173/WhatsApp_wln0nb.png" alt="WhatsApp" style={{width:20,height:20,objectFit:"contain"}} /> : ico}</span>
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

// ─────────────────────────── Visa Data ──────────────────────────
const VISA_FROM_UZ = [
  { region:"🌍 СНГ и ближнее зарубежье", color:"#22c55e", items:[
    { flag:"🇷🇺", name:"Россия",       days:"без ограничений", note:"Без визы" },
    { flag:"🇹🇷", name:"Турция",       days:"до 30 дней",      note:"Без визы" },
    { flag:"🇬🇪", name:"Грузия",       days:"до 365 дней",     note:"Без визы" },
    { flag:"🇦🇿", name:"Азербайджан",  days:"до 30 дней",      note:"Без визы" },
    { flag:"🇰🇿", name:"Казахстан",    days:"до 30 дней",      note:"Без визы" },
    { flag:"🇰🇬", name:"Кыргызстан",   days:"до 30 дней",      note:"Без визы" },
    { flag:"🇧🇾", name:"Беларусь",     days:"до 30 дней",      note:"Без визы" },
  ]},
  { region:"🌏 Азия", color:"#06b6d4", items:[
    { flag:"🇨🇳", name:"Китай",        days:"до 30 дней",      note:"Без визы (с 2025)" },
    { flag:"🇹🇭", name:"Таиланд",      days:"до 30 дней",      note:"Без визы" },
    { flag:"🇮🇩", name:"Индонезия",    days:"до 30 дней",      note:"Без визы" },
    { flag:"🇰🇭", name:"Камбоджа",     days:"до 30 дней",      note:"Без визы" },
    { flag:"🇲🇻", name:"Мальдивы",     days:"до 30 дней",      note:"Виза по прилёту" },
    { flag:"🇳🇵", name:"Непал",        days:"до 30 дней",      note:"Виза по прилёту" },
    { flag:"🇯🇴", name:"Иордания",     days:"до 30 дней",      note:"Без визы" },
    { flag:"🇱🇧", name:"Ливан",        days:"до 30 дней",      note:"Без визы" },
    { flag:"🇲🇾", name:"Малайзия",     days:"до 30 дней",      note:"Виза по прилёту" },
    { flag:"🇻🇳", name:"Вьетнам",      days:"до 45 дней",      note:"eVisa онлайн" },
  ]},
  { region:"🇦🇪 Ближний Восток", color:"#f59e0b", items:[
    { flag:"🇦🇪", name:"ОАЭ",          days:"до 30 дней",      note:"Без визы (с 2024)" },
    { flag:"🇶🇦", name:"Катар",        days:"до 30 дней",      note:"Без визы" },
    { flag:"🇸🇦", name:"Саудовская Аравия", days:"до 30 дней", note:"Без визы" },
    { flag:"🇴🇲", name:"Оман",         days:"до 30 дней",      note:"Без визы" },
  ]},
  { region:"🌐 eVisa / Виза онлайн", color:"#8b5cf6", items:[
    { flag:"🇮🇳", name:"Индия",        days:"до 60 дней",      note:"eVisa онлайн" },
    { flag:"🇪🇬", name:"Египет",       days:"до 30 дней",      note:"Виза по прилёту / eVisa" },
    { flag:"🇪🇹", name:"Эфиопия",      days:"до 30 дней",      note:"eVisa онлайн" },
    { flag:"🇷🇼", name:"Руанда",       days:"до 30 дней",      note:"Без визы" },
  ]},
];

const VISA_TO_UZ = [
  { region:"🌍 Европа", color:"#3b82f6", items:[
    "Германия","Франция","Италия","Испания","Нидерланды",
    "Австрия","Швейцария","Польша","Чехия","Венгрия","Румыния",
    "Швеция","Норвегия","Финляндия","Дания","Бельгия","Португалия",
  ]},
  { region:"🌏 Азия", color:"#06b6d4", items:[
    "Япония","Южная Корея","Китай","Индия","Израиль",
    "Сингапур","Малайзия","Индонезия","Таиланд","Вьетнам",
  ]},
  { region:"🇦🇲 СНГ", color:"#22c55e", items:[
    "Россия","Казахстан","Кыргызстан","Таджикистан","Армения",
    "Азербайджан","Беларусь","Украина","Молдова","Грузия",
  ]},
  { region:"🇺🇸 Америка", color:"#f59e0b", items:[
    "США","Канада","Мексика","Бразилия","Аргентина",
  ]},
  { region:"🇦🇪 Ближний Восток", color:"#f97316", items:[
    "ОАЭ","Саудовская Аравия","Катар","Кувейт","Бахрейн","Оман","Иордания",
  ]},
];

const VISA_DEST_GUIDES: Record<string, {
  flag:string; name:string; type:string; days:string; color:string;
  steps:string[]; docs:string[]; tips:string[]; price:string;
}> = {
  "ОАЭ":     { flag:"🇦🇪", name:"ОАЭ (Дубай)", type:"Без визы", days:"до 30 дней", color:"#06b6d4", price:"бесплатно", steps:["Купить авиабилет","Забронировать отель","Лететь — виза не нужна","На паспортном контроле получить штамп 30 дней"], docs:["Загранпаспорт (срок действия 6+ мес.)","Обратный билет","Бронь отеля","$100+ на счету"], tips:["Нельзя пить алкоголь публично","Рамадан — ограничения в дневное время","Дресс-код в торговых центрах"] },
  "Турция":  { flag:"🇹🇷", name:"Турция", type:"Без визы", days:"до 30 дней", color:"#ef4444", price:"бесплатно", steps:["Купить авиабилет","Забронировать отель","Лететь — виза не нужна","На паспортном контроле штамп 30 дней"], docs:["Загранпаспорт","Обратный билет","Бронь отеля"], tips:["Можно продлить до 60 дней","Медстраховка рекомендуется","Обменный курс лучше в банках Турции"] },
  "Таиланд": { flag:"🇹🇭", name:"Таиланд", type:"Без визы", days:"до 30 дней", color:"#8b5cf6", price:"бесплатно", steps:["Купить авиабилет","Заполнить TM30 онлайн (необязательно)","Лететь — виза не нужна","Штамп на 30 дней"], docs:["Загранпаспорт (6+ мес.)","Обратный билет","$50+ наличными или на карте"], tips:["В храмы — закрытая одежда","Виза-ран для продления","Лучший сезон ноябрь-март"] },
  "Китай":   { flag:"🇨🇳", name:"Китай", type:"Без визы (с 2025)", days:"до 30 дней", color:"#ef4444", price:"бесплатно", steps:["Купить авиабилет","Забронировать отель","Лететь — с 2025 виза не нужна 30 дней","Заполнить таможенную декларацию"], docs:["Загранпаспорт","Обратный билет","Подтверждение проживания"], tips:["VPN нужен для Google/Instagram","WeChat Pay обязателен для оплат","Рекомендуется международная SIM"] },
  "Вьетнам": { flag:"🇻🇳", name:"Вьетнам", type:"eVisa онлайн", days:"до 45 дней", color:"#ef4444", price:"$25", steps:["Подать заявку на evisa.xuatnhapcanh.gov.vn","Оплатить $25","Получить eVisa за 3 рабочих дня","Распечатать и лететь"], docs:["Загранпаспорт (6+ мес.)","Фото 4×6","Кредитная карта для оплаты","Обратный билет"], tips:["Оформляйте за 2 недели","eVisa действует однократно","Можно продлить внутри страны"] },
  "Египет":  { flag:"🇪🇬", name:"Египет (Шарм)", type:"Виза по прилёту", days:"до 30 дней", color:"#f59e0b", price:"$25", steps:["Купить авиабилет","На паспортном контроле заполнить анкету","Оплатить $25 наличными","Получить визу — занимает 10-20 мин"], docs:["Загранпаспорт","$25 наличными USD","Заполненная анкета (выдают на борту)"], tips:["Только Sinai Only — бесплатно до курортной зоны","Полная виза $25 — весь Египет","Торговаться в сувенирных лавках нормально"] },
  "Индия":   { flag:"🇮🇳", name:"Индия", type:"eVisa онлайн", days:"до 60 дней", color:"#f97316", price:"$25–80", steps:["Подать заявку на indianvisaonline.gov.in","Заполнить анкету","Оплатить $25-80","Получить eVisa за 72 часа"], docs:["Загранпаспорт (6+ мес.)","Цифровое фото","Кредитная карта","Обратный билет"], tips:["Подавайте за 4+ дня","eVisa двукратная — можно въехать дважды","Прививки от гепатита рекомендуются"] },
  "Мальдивы":{ flag:"🇲🇻", name:"Мальдивы", type:"Виза по прилёту", days:"до 30 дней", color:"#06b6d4", price:"бесплатно", steps:["Купить авиабилет","Забронировать отель или бунгало","Виза выдаётся при прилёте бесплатно","Срок — 30 дней автоматически"], docs:["Загранпаспорт","Обратный билет","Подтверждение проживания","$100+ на счету"], tips:["Алкоголь только на курортах","Перелёт на острова — гидроплан или катер","Забронируйте трансфер заранее"] },
};

// ─────────────────────────── Visa Pages ─────────────────────────
function VisaPage({ onNav, onVisaDest }: { onNav:(p:Page)=>void; onVisaDest:(k:string)=>void }) {
  const [tab, setTab] = useState<"from"|"to">("from");

  return (
    <div className="page-top">
      <div className="visa-hero">
        <div className="site-container">
          <span className="section-tag">Визовая поддержка</span>
          <h1>🛂 Визовый гид для граждан Узбекистана</h1>
          <p>Актуальная информация на 2025–2026 · Источники: МИД Узбекистана, Visaguide.world, Kursiv.media</p>
          <div className="visa-tabs">
            <button className={`visa-tab${tab==="from"?" active":""}`} onClick={() => setTab("from")}>
              ✈️ Из Узбекистана — куда можно без визы
            </button>
            <button className={`visa-tab${tab==="to"?" active":""}`} onClick={() => setTab("to")}>
              🌍 В Узбекистан — кто приезжает без визы
            </button>
          </div>
        </div>
      </div>

      <div className="site-container" style={{ padding:"36px 20px 60px" }}>
        {tab === "from" && (
          <>
            <div className="visa-info-bar">
              <span>📊 Паспорт Узбекистана — рейтинг <strong>#80</strong> в мире</span>
              <span>🌍 Доступно <strong>~60 стран</strong> без визы или виза по прилёту</span>
              <span>📅 Обновлено: <strong>2025–2026</strong></span>
            </div>
            {VISA_FROM_UZ.map(group => (
              <div key={group.region} className="visa-group">
                <div className="visa-group-title" style={{ borderLeftColor: group.color }}>
                  {group.region}
                </div>
                <div className="visa-list">
                  {group.items.map(item => {
                    const hasGuide = !!VISA_DEST_GUIDES[item.name];
                    return (
                      <div key={item.name}
                        className={`visa-item${hasGuide ? " clickable" : ""}`}
                        onClick={() => hasGuide && onVisaDest(item.name)}>
                        <span className="vi-flag">{item.flag}</span>
                        <span className="vi-name">{item.name}</span>
                        <span className="vi-days">{item.days}</span>
                        <span className="vi-badge" style={{ background: item.note.includes("eVisa") ? "rgba(139,92,246,0.15)" : item.note.includes("прилёту") ? "rgba(245,158,11,0.15)" : "rgba(34,197,94,0.15)", color: item.note.includes("eVisa") ? "#8b5cf6" : item.note.includes("прилёту") ? "#d97706" : "#16a34a" }}>
                          {item.note}
                        </span>
                        {hasGuide && <span className="vi-guide">Полный гид →</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </>
        )}

        {tab === "to" && (
          <>
            <div className="visa-info-bar">
              <span>🌍 Узбекистан открыт для <strong>86+ стран</strong> без визы</span>
              <span>📅 С октября 2025 добавлены: Китай, ОАЭ, Катар, Саудовская Аравия</span>
            </div>
            {VISA_TO_UZ.map(group => (
              <div key={group.region} className="visa-group">
                <div className="visa-group-title" style={{ borderLeftColor: group.color }}>
                  {group.region}
                </div>
                <div className="visa-list visa-list-compact">
                  {group.items.map((country: string) => (
                    <div key={country} className="visa-item-simple">
                      <span className="vi-dot" style={{ background: group.color }} />
                      <span className="vi-name">{country}</span>
                      <span className="vi-badge" style={{ background:"rgba(34,197,94,0.12)", color:"#16a34a" }}>Без визы 30 дней</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}

        <div className="cta-banner" style={{ marginTop:40 }}>
          <h3>🛂 Нужна помощь с визой?</h3>
          <p>Мы помогаем с оформлением виз, приглашений и страховок для выезда</p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={() => onNav("contacts")}>Получить консультацию</button>
            <a className="btn-outline" href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer">💬 Telegram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisaDestPage({ destKey, onBack, onNav }: { destKey:string; onBack:()=>void; onNav:(p:Page)=>void }) {
  const g = VISA_DEST_GUIDES[destKey];
  if (!g) return <div className="page-top"><div className="site-container"><p>Информация не найдена</p></div></div>;
  return (
    <div className="page-top">
      <div className="visa-dest-hero" style={{ borderBottom:`3px solid ${g.color}` }}>
        <div className="site-container">
          <button className="back-btn" onClick={onBack}>← Визовый гид</button>
          <h1>{g.flag} {g.name}</h1>
          <div className="visa-dest-meta">
            <span className="vdm-badge" style={{ background:`${g.color}22`, color:g.color, border:`1px solid ${g.color}44` }}>
              {g.type}
            </span>
            <span className="vdm-badge" style={{ background:"rgba(255,255,255,0.08)", color:"rgba(255,255,255,0.8)" }}>
              📅 {g.days}
            </span>
            <span className="vdm-badge" style={{ background:"rgba(255,255,255,0.08)", color:"rgba(255,255,255,0.8)" }}>
              💰 {g.price}
            </span>
          </div>
        </div>
      </div>

      <div className="site-container" style={{ padding:"36px 20px 60px" }}>
        <div className="visa-dest-grid">
          <div className="vd-card">
            <h3>📋 Как получить</h3>
            <ol className="vd-steps">
              {g.steps.map((s,i) => (
                <li key={i}><span className="vd-step-num">{i+1}</span>{s}</li>
              ))}
            </ol>
          </div>
          <div className="vd-card">
            <h3>📁 Документы</h3>
            <ul className="vd-docs">
              {g.docs.map((d,i) => <li key={i}>✓ {d}</li>)}
            </ul>
          </div>
          <div className="vd-card vd-card-full">
            <h3>💡 Важные советы</h3>
            <div className="vd-tips">
              {g.tips.map((t,i) => <div key={i} className="vd-tip">⚡ {t}</div>)}
            </div>
          </div>
        </div>

        <div className="cta-banner" style={{ marginTop:32 }}>
          <h3>Нужна помощь с оформлением?</h3>
          <p>Поможем с документами, страховкой и подготовкой к поездке в {g.name}</p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={() => onNav("contacts")}>Оставить заявку</button>
            <a className="btn-outline" href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer">💬 Telegram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────── Sanatorium ─────────────────────────
const SANATORIUMS = [
  {
    key:"zheleznov",
    flag:"🇷🇺", name:"Железноводск", country:"Россия · КМВ",
    img:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=70",
    spec:"Бальнеология · Минеральные воды · КМВ",
    tags:["Суставы","ЖКТ","Сердечно-сосудистые","Реабилитация"],
    desc:"Курортный город Кавказских Минеральных Вод. Три ведущих санатория с полным санаторно-курортным лечением, шведским столом и бассейном. Трансфер аэропорт–отель–аэропорт включён.",
    nights:"10–14 ночей", price:"от $2 470 / 2 чел.",
    includes:["Проживание в номере","3-разовое питание (шведский стол)","Санаторно-курортное лечение","Бассейн и тренажёрный зал","Трансфер аэропорт–отель (бизнес-класс)"],
    hotels:[
      {
        name:"«Машук Аква-Терм» санаторий",
        rooms:[
          { type:"Стандарт 2-мест. 1-комн. (корпус А,Б)", dates:"10.06–20.06.2026", price:"~$2 470" },
          { type:"Джуниор Сюит 2-мест. 1-комн. (корпус С)", dates:"10.06–20.06.2026", price:"~$2 690" },
          { type:"Стандарт 2-мест. 1-комн. (корпус А,Б)", dates:"10.06–24.06.2026", price:"~$3 470" },
          { type:"Джуниор Сюит 2-мест. 1-комн. (корпус С)", dates:"10.06–24.06.2026", price:"~$3 750" },
        ],
        includes:"Проживание, 3-разовое питание «шведский стол», санаторно-курортное лечение, бассейн"
      },
      {
        name:"«Плаза СПА Железноводск» санаторий 4★",
        rooms:[
          { type:"Стандарт 2-мест. 1-комн.", dates:"10.06–20.06.2026", price:"~$2 555" },
          { type:"Стандарт 2-мест. 1-комн. (Бештау)", dates:"10.06–20.06.2026", price:"~$2 730" },
          { type:"Стандарт 2-мест. 1-комн.", dates:"10.06–24.06.2026", price:"~$3 560" },
          { type:"Стандарт 2-мест. 1-комн. (Бештау)", dates:"10.06–24.06.2026", price:"~$3 805" },
        ],
        includes:"САНКУР базовый: проживание, 3-разовое питание «шведский стол», лечение. Бесплатно: бассейн, тренажёрный зал, детская комната, банный комплекс, интернет"
      },
      {
        name:"«Источник» санаторий 5★",
        rooms:[
          { type:"Джуниор 2-мест. 1-комн. (вид на Бештау)", dates:"10.06–20.06.2026", price:"~$3 070" },
          { type:"Джуниор 2-мест. 1-комн. (вид на Бештау)", dates:"10.06–24.06.2026", price:"~$4 300" },
        ],
        includes:"Проживание, 3-разовое питание (шв.стол), лечение по программе, Wi-Fi, анимационные программы"
      },
    ],
    transfer:"Трансфер аэропорт–отель–аэропорт: бизнес-класс (Toyota Camry) — ~$165"
  },
  {
    key:"naftalan",
    flag:"🇦🇿", name:"Нафталан", country:"Азербайджан",
    img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520521/%D0%9D%D0%90%D0%A4%D0%A2%D0%90%D0%9B%D0%90%D0%9D_eihxuc.png",
    spec:"Нефтяные ванны · Уникальное лечение",
    tags:["Суставы","Кожные болезни","Нервная система"],
    desc:"Единственный в мире курорт с нафталановой нефтью. Лечит артрит, псориаз, радикулит. Советские санатории обновлены до 4★.",
    nights:"7–14 ночей", price:"от $350 / чел.",
    includes:["Проживание","Нафталановые ванны","Консультация врача","Питание 3 раза"],
  },
  {
    key:"karlovy",
    flag:"🇨🇿", name:"Карловы Вары", country:"Чехия",
    img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520521/%D0%9A%D0%90%D0%A0%D0%9B%D0%9E%D0%92%D0%AB_e4xtis.png",
    spec:"Минеральные воды · Европейский стандарт",
    tags:["ЖКТ","Обмен веществ","Профилактика"],
    desc:"Старейший бальнеологический курорт Европы. 13 минеральных источников. Питьевое лечение, ванны, грязевые обёртывания.",
    nights:"10–21 ночей", price:"от $1200 / чел.",
    includes:["Проживание в санатории","Минеральные процедуры","Медицинская программа","Питание"],
  },
  {
    key:"turkey-med",
    flag:"🇹🇷", name:"Медицинский туризм Турция", country:"Стамбул",
    img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520521/%D0%A1%D0%A2%D0%90%D0%9C%D0%91%D0%A3%D0%9B_xak5js.png",
    spec:"Клиники Стамбула · Мировой уровень",
    tags:["Стоматология","Трансплантация волос","Эстетика","Онкология"],
    desc:"Стамбул — медицинская столица региона. Аккредитованные клиники JCI. Стоматология в 3–5 раз дешевле Европы, волосы — в 10 раз.",
    nights:"5–14 дней", price:"от $500 / чел.",
    includes:["Трансфер аэропорт-клиника","Переводчик","Консультация","Гостиница"],
  },
  {
    key:"israel",
    flag:"🇮🇱", name:"Мёртвое море", country:"Израиль",
    img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=70",
    spec:"Соляные ванны · Псориаз · Дерматология",
    tags:["Псориаз","Кожные болезни","Реабилитация"],
    desc:"Самое солёное море мира — уникальная природная лечебница. Грязи Мёртвого моря признаны самыми эффективными при псориазе.",
    nights:"7–14 ночей", price:"от $900 / чел.",
    includes:["Проживание у моря","Процедуры с грязями","Соляные ванны","Консультация дерматолога"],
  },
  {
    key:"georgia-borjomi",
    flag:"🇬🇪", name:"Боржоми-Харагаули", country:"Грузия",
    img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520520/%D0%93%D0%A0%D0%A3%D0%97%D0%98%D0%AF_srbigi.png",
    spec:"Минеральные воды Боржоми · Эко-курорт",
    tags:["ЖКТ","Отдых","Реабилитация"],
    desc:"Легендарная минеральная вода Боржоми прямо у источника. Горный воздух, термальные ванны, спа-отели. Рядом с Тбилиси.",
    nights:"5–10 ночей", price:"от $280 / чел.",
    includes:["Проживание","Минеральные ванны","Питание","Экскурсии"],
  },
  {
    key:"uzbek-charvak",
    flag:"🇺🇿", name:"Чарвак · Узбекистан", country:"Ташкентская область",
    img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=70",
    spec:"Горный воздух · Реабилитация · Близко",
    tags:["Отдых","Горный воздух","Реабилитация"],
    desc:"Санаторно-курортная зона рядом с Ташкентом. Чарвакское водохранилище, горный чистый воздух, лечебные санатории.",
    nights:"5–10 ночей", price:"от $150 / чел.",
    includes:["Проживание","Процедуры","Питание 3 раза","Бассейн"],
  },
];

function SanatoriumPage({ onNav }: { onNav:(p:Page)=>void }) {
  const [active, setActive] = useState<string|null>(null);
  const detail = active ? SANATORIUMS.find(s => s.key === active) : null;

  if (detail) return (
    <div className="page-top">
      <div className="san-detail-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={detail.img} alt={detail.name} loading="lazy" />
        <div className="san-detail-overlay" />
        <div className="san-detail-content site-container">
          <button className="back-btn" onClick={() => setActive(null)}>← Все санатории</button>
          <h1>{detail.flag} {detail.name}</h1>
          <p>{detail.country} · {detail.spec}</p>
          <div className="san-tags">{detail.tags.map(t => <span key={t} className="san-tag">{t}</span>)}</div>
        </div>
      </div>
      <div className="site-container" style={{ padding:"36px 20px 60px" }}>
        <div className="san-detail-grid">
          <div className="san-detail-main">
            <div className="vd-card">
              <h3>🏥 О курорте</h3>
              <p style={{ fontSize:15, lineHeight:1.7, color:"var(--text)" }}>{detail.desc}</p>
            </div>
            <div className="vd-card" style={{ marginTop:16 }}>
              <h3>✅ Что включено</h3>
              <ul className="vd-docs">
                {detail.includes.map((item,i) => <li key={i}>✓ {item}</li>)}
              </ul>
            </div>

            {/* Hotels with pricing table — shown for Zheleznov odsk */}
            {(detail as any).hotels && (
              <div style={{ marginTop:16 }}>
                {(detail as any).hotels.map((hotel: any, hi: number) => (
                  <div key={hi} className="vd-card" style={{ marginBottom:16 }}>
                    <h3>🏨 {hotel.name}</h3>
                    <div className="san-rooms-table">
                      <div className="san-rooms-header">
                        <span>Номер</span>
                        <span>Дата заезда</span>
                        <span>Стоимость</span>
                      </div>
                      {hotel.rooms.map((room: any, ri: number) => (
                        <div key={ri} className="san-rooms-row">
                          <span>{room.type}</span>
                          <span className="san-room-dates">{room.dates}</span>
                          <span className="san-room-price">{room.price}</span>
                        </div>
                      ))}
                    </div>
                    <p style={{ marginTop:12, fontSize:12, color:"var(--text2)", lineHeight:1.55 }}>
                      <strong>В стоимость входит:</strong> {hotel.includes}
                    </p>
                  </div>
                ))}
                {(detail as any).transfer && (
                  <div className="san-transfer-box">
                    🚗 {(detail as any).transfer}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="san-detail-side">
            <div className="san-booking-card">
              <div className="san-booking-price">
                <PriceBlock price={detail.price} />
              </div>
              <div className="san-booking-meta">
                <span>🌙 {detail.nights}</span>
              </div>
              <button className="btn-primary" style={{ width:"100%", padding:13, fontSize:14 }} onClick={() => onNav("contacts")}>
                Забронировать
              </button>
              <a className="btn-outline" href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer"
                style={{ display:"block", textAlign:"center", marginTop:10, padding:"11px", fontSize:13 }}>
                <img src="https://res.cloudinary.com/dass5gqvk/image/upload/v1779538770/Telegram_logo_kdtfle.svg" alt="Telegram" className="soc-icon" />Написать в Telegram
              </a>
            </div>
          </div>
        </div>
        <div className="cta-banner" style={{ marginTop:32 }}>
          <h3>💬 Нужна консультация?</h3>
          <p>Подберём программу лечения, поможем с документами и трансфером</p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={() => onNav("contacts")}>Получить консультацию</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="page-top">
      <div className="san-hero">
        <div className="site-container">
          <span className="section-tag">Санаторно-курортное лечение</span>
          <h1>🏥 Санатории и медицинский туризм</h1>
          <p>Лечение, реабилитация, профилактика — подберём курорт под ваш диагноз и бюджет</p>
        </div>
      </div>
      <div className="site-container" style={{ padding:"36px 20px 60px" }}>
        <div className="san-grid">
          {SANATORIUMS.map(s => (
            <div key={s.key} className="san-card" onClick={() => setActive(s.key)}>
              <div className="san-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.name} loading="lazy" />
                <div className="san-card-overlay" />
                <div className="san-card-country">{s.flag} {s.country}</div>
              </div>
              <div className="san-card-body">
                <h3>{s.name}</h3>
                <p className="san-card-spec">{s.spec}</p>
                <div className="san-tags">{s.tags.slice(0,2).map(t => <span key={t} className="san-tag">{t}</span>)}</div>
                <div className="san-card-footer">
                  <PriceBlock price={s.price} />
                  <span className="san-card-nights">{s.nights}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cta-banner" style={{ marginTop:40 }}>
          <h3>🏥 Нужна помощь с выбором?</h3>
          <p>Расскажите о диагнозе — подберём оптимальный курорт и программу лечения</p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={() => onNav("contacts")}>Получить консультацию</button>
            <a className="btn-outline" href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer">
              <img src="https://res.cloudinary.com/dass5gqvk/image/upload/v1779538770/Telegram_logo_kdtfle.svg" alt="Telegram" className="soc-icon" />Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
