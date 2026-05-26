import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Khiva Tours — Ichan-Kala UNESCO World Heritage | PANTERA LUXE",
  description: "Khiva tours from Tashkent. Ichan-Kala inner city, Kalta Minor minaret, Jumа Mosque. The best preserved ancient city in Central Asia. from $90.",
  keywords: ["Khiva tour", "Khiva travel", "Ichan-Kala tour", "Kalta Minor", "туры в Хиву", "Хива достопримечательности", "Khiva Uzbekistan UNESCO", "ancient city Khiva"],
  path: "/uzbekistan-tours/khiva",
});

const SIGHTS = [
  { ico: "🏰", name: "Ichan-Kala",       desc: "The entire inner city is a UNESCO site. 2,500 years of history within mud-brick walls." },
  { ico: "🕌", name: "Kalta Minor",       desc: "The world's widest minaret — never finished, but unforgettable. Built in 1855." },
  { ico: "🏛️", name: "Jumа Mosque",       desc: "213 carved wooden columns from different eras — a forest of history." },
  { ico: "🏯", name: "Tash-Khauli Palace", desc: "The Khan's harem palace — intricate tilework, intimate courtyards." },
  { ico: "🚶", name: "City walls",        desc: "Walk the ancient ramparts for panoramic views of the old city." },
  { ico: "🌅", name: "Sunset from the walls", desc: "The best sunset in Uzbekistan. The whole city glows amber." },
];

const TOURS = [
  { name: "Khiva Day Trip",         days: "1 day",            price: "$90",  old: "$122", inc: "Guide + Transfer" },
  { name: "Khiva 2 Days / 1 Night", days: "2 days / 1 night", price: "$175", old: "$237", inc: "Guide + Hotel inside Ichan-Kala" },
  { name: "Golden Road Complete",   days: "7 days / 6 nights", price: "$590", old: "$797", inc: "Tashkent+Samarkand+Bukhara+Khiva" },
];

export default function KhivaPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a0800,#2d1000)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/uzbekistan-tours" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Uzbekistan Tours</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>Khiva</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            🏰 Khiva Tours — Open-Air Museum City
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 520, margin: "0 auto 28px" }}>
            Ichan-Kala UNESCO · Kalta Minor · Ancient Silk Road · from $90
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Book a Tour →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Call us</a>
          </div>
        </div>
      </section>
      <div className="site-container" style={{ padding: "48px 20px 80px" }}>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Tours</span>
          <h2 className="section-title">Khiva Tour Packages</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 22 }}>
            {TOURS.map(t => (
              <div key={t.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 4 }}>{t.name}</h3>
                  <p style={{ fontSize: 13, color: "#64748b" }}>⏱ {t.days} · ✓ {t.inc}</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 12, color: "#94a3b8", textDecoration: "line-through", textDecorationColor: "#9b3030" }}>{t.old}</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "2px 10px", borderRadius: 6 }}>{t.price}</div>
                  <a className="btn-primary" href="/contacts" style={{ display: "inline-block", marginTop: 8, fontSize: 12, padding: "7px 16px" }}>Book Now</a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Sights</span>
          <h2 className="section-title">What to See in Khiva</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14, marginTop: 22 }}>
            {SIGHTS.map(s => (
              <div key={s.name} style={{ background: "#f8fafc", borderRadius: 12, padding: "16px 18px", display: "flex", gap: 12 }}>
                <span style={{ fontSize: 26, flexShrink: 0 }}>{s.ico}</span>
                <div><h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{s.name}</h3><p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>{s.desc}</p></div>
              </div>
            ))}
          </div>
        </section>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/uzbekistan-tours",label:"All Uzbekistan"},{href:"/uzbekistan-tours/samarkand",label:"Samarkand"},{href:"/uzbekistan-tours/bukhara",label:"Bukhara"},{href:"/uzbekistan-tours/tashkent",label:"Tashkent"},{href:"/visa",label:"Visa info"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Ready to explore Khiva?" />
      </div>
    </>
  );
}
