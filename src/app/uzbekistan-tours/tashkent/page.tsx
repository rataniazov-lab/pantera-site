import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Tashkent Tours — Chorsu Bazaar, Soviet Metro, Silk Road Capital | PANTERA LUXE",
  description: "Tashkent city tours. Chorsu Bazaar, Khast Imam, Soviet mosaic metro, Amir Temur Square. Day tours and multi-day packages. English guides.",
  keywords: ["Tashkent tour", "Tashkent city guide", "Chorsu Bazaar tour", "Tashkent metro mosaic", "туры по Ташкенту", "Ташкент достопримечательности", "Tashkent travel guide 2025"],
  path: "/uzbekistan-tours/tashkent",
});

const SIGHTS = [
  { ico: "🏪", name: "Chorsu Bazaar",       desc: "The great dome market of Central Asia. Spices, non bread, fresh produce, textiles." },
  { ico: "🕌", name: "Khast Imam Complex",   desc: "The spiritual heart of Tashkent. Contains one of the world's oldest Qurans." },
  { ico: "🚇", name: "Tashkent Metro",       desc: "Soviet-era stations with stunning mosaics and chandeliers — an underground museum." },
  { ico: "🗿", name: "Amir Temur Museum",    desc: "The great conqueror Tamerlane — his history and legacy told in spectacular exhibits." },
  { ico: "🍽️", name: "Tashkent cuisine",    desc: "Plov, samsa, lagman, shashlik. The best Uzbek food in the country." },
  { ico: "🌳", name: "Alisher Navoi Opera", desc: "Magnificent Soviet-era opera house. Performances in Uzbek and Russian." },
];

const TOURS = [
  { name: "Tashkent Half-Day City Tour", days: "4 hours", price: "$45",  old: "$61",  inc: "Guide + Transport" },
  { name: "Tashkent Full-Day Tour",      days: "8 hours", price: "$75",  old: "$102", inc: "Guide + Transport + Lunch" },
  { name: "Tashkent + Samarkand",        days: "3 days",  price: "$220", old: "$297", inc: "Guide + Hotel + Train" },
];

export default function TashkentPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0d1b2a,#1a2b3c)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/uzbekistan-tours" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Uzbekistan Tours</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>Tashkent</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            🏙️ Tashkent City Tours
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 520, margin: "0 auto 28px" }}>
            Chorsu Bazaar · Soviet Metro · Khast Imam · Uzbek cuisine · from $45
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
          <h2 className="section-title">Tashkent Tour Packages</h2>
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
          <span className="section-tag">Highlights</span>
          <h2 className="section-title">Top Sights in Tashkent</h2>
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
          {[{href:"/uzbekistan-tours",label:"All Uzbekistan"},{href:"/uzbekistan-tours/samarkand",label:"Samarkand"},{href:"/uzbekistan-tours/bukhara",label:"Bukhara"},{href:"/uzbekistan-tours/khiva",label:"Khiva"},{href:"/uzbekistan-tours/muynak",label:"Muynak"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Ready to explore Tashkent?" />
      </div>
    </>
  );
}
