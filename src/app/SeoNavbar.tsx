// ─────────────────────────────────────────────────────────────
// SeoNavbar.tsx  →  src/app/SeoNavbar.tsx
// Единый navbar для всего сайта turytashkent.com
// ─────────────────────────────────────────────────────────────
"use client";
import { useState } from "react";

const LOGO    = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779385406/pantera_luxe_logo_v0gbmo.png";
const TG_ICON = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779538770/Telegram_logo_kdtfle.svg";
const IG_ICON = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779538594/Instagram_qdbqub.png";
const WA_ICON = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779539173/WhatsApp_wln0nb.png";
const PHONE   = "+998771618888";

const NAV_LINKS = [
  { href: "/",              label: "Главная"    },
  { href: "/directions",    label: "Направления"},
  { href: "/cruise",        label: "Круизы"     },
  { href: "/sanatorium",    label: "🏥 Санаторий"},
  { href: "/",              label: "Видео"      },
];

const UZ_CITIES = [
  { href: "/uzbekistan-tours/tashkent",  label: "Tashkent",  emoji: "🏙️" },
  { href: "/uzbekistan-tours/samarkand", label: "Samarkand", emoji: "🕌" },
  { href: "/uzbekistan-tours/bukhara",   label: "Bukhara",   emoji: "🏛️" },
  { href: "/uzbekistan-tours/khiva",     label: "Khiva",     emoji: "🏰" },
  { href: "/uzbekistan-tours/muynak",    label: "Muynak",    emoji: "🌊" },
];

export default function SeoNavbar() {
  const [mob,    setMob]    = useState(false);
  const [uzOpen, setUzOpen] = useState(false);
  const [lang,   setLang]   = useState<"RU"|"UZ"|"EN"|"ZH">("RU");

  return (
    <>
      <nav className="nav nav-two-row" style={{ position:"fixed", top:0, left:0, right:0, zIndex:100 }}>

        {/* ── Top row ── */}
        <div className="nav-top">
          <a href="/" className="nav-logo" style={{ textDecoration:"none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="PANTERA LUXE" width={38} height={38} />
            <div className="nav-logo-text">
              <span className="name">PANTERA LUXE</span>
              <span className="sub">turytashkent.com</span>
            </div>
          </a>
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <div className="lang-switcher">
              {(["RU","UZ","EN","ZH"] as const).map(l => (
                <button key={l}
                  className={`lang-btn${lang === l ? " active" : ""}`}
                  onClick={() => setLang(l)}>
                  {l}
                </button>
              ))}
            </div>
            <a className="btn-primary nav-cta nav-cta-desktop" href="/contacts"
              style={{ textDecoration:"none" }}>
              Оставить заявку
            </a>
            <button className="hamburger" aria-label="Меню" onClick={() => setMob(v => !v)}>
              <span style={mob ? { transform:"rotate(45deg) translate(5px,5px)" } : {}} />
              <span style={mob ? { opacity:0 } : {}} />
              <span style={mob ? { transform:"rotate(-45deg) translate(5px,-5px)" } : {}} />
            </button>
          </div>
        </div>

        {/* ── Bottom row ── */}
        <div className="nav-bottom">
          <div className="nav-links">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="nav-link"
                style={{ textDecoration:"none" }}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="nav-divider" />
          <a href="/visa" className="nav-link visa-btn" style={{ textDecoration:"none" }}>
            🛂 Визовая поддержка
          </a>
          <div className="nav-divider" />
          {/* Uzbekistan Tours dropdown */}
          <div className="uz-dropdown-wrap"
            onMouseEnter={() => setUzOpen(true)}
            onMouseLeave={() => setUzOpen(false)}>
            <button className={`uz-btn${uzOpen ? " open" : ""}`}>
              🇺🇿 Uzbekistan Tours <span className="uz-arrow">▾</span>
            </button>
            {uzOpen && (
              <div className="uz-menu">
                <div className="uz-menu-inner">
                  <div className="uz-menu-label">Ancient Silk Road Cities</div>
                  {UZ_CITIES.map(c => (
                    <a key={c.href} href={c.href} className="uz-item"
                      style={{ textDecoration:"none" }}>
                      {c.emoji} {c.label}
                    </a>
                  ))}
                  <div className="uz-menu-footer">
                    <a href="/uzbekistan-tours/silk-road" className="uz-all"
                      style={{ textDecoration:"none" }}>
                      View all Uzbekistan tours →
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <div className={`mob-menu${mob ? " open" : ""}`}>
        <button className="mob-close" onClick={() => setMob(false)}>✕</button>
        {NAV_LINKS.map(l => (
          <a key={l.href} href={l.href} className="mob-link"
            style={{ textDecoration:"none" }} onClick={() => setMob(false)}>
            {l.label}
          </a>
        ))}
        <a href="/visa" className="mob-link"
          style={{ textDecoration:"none", color:"rgba(180,210,255,0.85)" }}
          onClick={() => setMob(false)}>
          🛂 Визовая поддержка
        </a>
        <div className="mob-divider" />
        <p className="mob-uz-label">🇺🇿 Uzbekistan Tours</p>
        {UZ_CITIES.map(c => (
          <a key={c.href} href={c.href} className="mob-link"
            style={{ textDecoration:"none", fontSize:20, color:"rgba(255,210,120,0.9)" }}
            onClick={() => setMob(false)}>
            {c.emoji} {c.label}
          </a>
        ))}
        <a href="/contacts" className="btn-primary"
          style={{ marginTop:24, fontSize:15, padding:"12px 32px", textDecoration:"none" }}
          onClick={() => setMob(false)}>
          Оставить заявку
        </a>
      </div>

      {/* ── Floating social buttons ── */}
      <div className="float-w">
        {([
          ["https://t.me/vilet_support",               "#2ca5e0",                                             TG_ICON, "Telegram"  ],
          [`https://wa.me/${PHONE}`,                   "#25d366",                                             WA_ICON, "WhatsApp"  ],
          ["https://www.instagram.com/tury_tashkent/","linear-gradient(135deg,#f09433,#dc2743,#bc1888)",     IG_ICON, "Instagram" ],
        ] as [string, string, string, string][]).map(([href, bg, ico, lbl]) => (
          <a key={lbl} className="f-btn" href={href}
            target="_blank" rel="noopener noreferrer"
            style={{ background: bg }}>
            <span className="f-ico">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ico} alt={lbl} style={{ width:44, height:44, objectFit:"contain" }} />
            </span>
            <span className="f-lbl">{lbl}</span>
          </a>
        ))}
      </div>
    </>
  );
}
