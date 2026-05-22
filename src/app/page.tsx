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