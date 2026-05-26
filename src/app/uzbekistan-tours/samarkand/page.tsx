import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Samarkand Tours — Registan, Silk Road, UNESCO Sites | PANTERA LUXE",
  description:
    "Samarkand tours from Tashkent. Registan Square, Shah-i-Zinda, Bibi-Khanym Mosque. 2–3 days guided tours. English, Russian, Chinese guides available.",
  keywords: [
    "Samarkand tour", "Samarkand travel", "Registan Square tour", "Silk Road Samarkand",
    "туры в Самарканд", "Самарканд достопримечательности", "Samarkand UNESCO",
    "Shah-i-Zinda tour", "Uzbekistan Samarkand", "Samarkand day trip from Tashkent",
  ],
  path: "/uzbekistan-tours/samarkand",
});

const SIGHTS = [
  { ico: "🕌", name: "Registan Square",     desc: "Three magnificent madrassas from the 15th–17th century. The heart of Samarkand." },
  { ico: "⚰️", name: "Shah-i-Zinda",        desc: "Avenue of mausoleums. Some of the most beautiful tilework in the world." },
  { ico: "🕌", name: "Bibi-Khanym Mosque",  desc: "Once the largest mosque in the Islamic world, built by Timur in 1404." },
  { ico: "🔭", name: "Ulugbek Observatory", desc: "15th century astronomical observatory. Timur's grandson mapped the stars here." },
  { ico: "🏺", name: "Siab Bazaar",         desc: "Traditional market. Samsa, non bread, spices, dry fruits — authentic Uzbek life." },
  { ico: "🏛️", name: "Gur-e-Amir Mausoleum", desc: "Timur's mausoleum. Stunning blue dome, intricate interior tilework." },
];

const TOURS = [
  { name: "Samarkand Day Trip",         days: "1 day",           price: "$120",  old: "$162", inc: "Guide + Transfer from Tashkent" },
  { name: "Samarkand 2 Days / 1 Night", days: "2 days / 1 night", price: "$220", old: "$297", inc: "Guide + Hotel + Transfer" },
  { name: "Samarkand & Bukhara",        days: "4 days / 3 nights",price: "$390", old: "$527", inc: "Guide + Hotels + Transfers" },
];

export default function SamarkandPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a0800,#3d1500)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/uzbekistan-tours" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Uzbekistan Tours</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>Samarkand</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            🕌 Samarkand Tours
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 540, margin: "0 auto 10px" }}>
            Registan · Shah-i-Zinda · Bibi-Khanym · UNESCO World Heritage · from $120
          </p>
          <p style={{ color: "rgba(255,200,100,0.75)", fontSize: 13, marginBottom: 28 }}>
            English / Russian / Chinese guides · Day trips from Tashkent available
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
          <h2 className="section-title">Samarkand Tour Packages</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 22 }}>
            {TOURS.map(t => (
              <div key={t.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1e293b", marginBottom: 4 }}>{t.name}</h3>
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
          <h2 className="section-title">What to See in Samarkand</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: 14, marginTop: 22 }}>
            {SIGHTS.map(s => (
              <div key={s.name} style={{ background: "#f8fafc", borderRadius: 12, padding: "16px 18px", display: "flex", gap: 12 }}>
                <span style={{ fontSize: 26, flexShrink: 0 }}>{s.ico}</span>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{s.name}</h3>
                  <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 14 }}>Explore more Uzbekistan</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { href: "/uzbekistan-tours",          label: "All Uzbekistan Tours" },
              { href: "/uzbekistan-tours/bukhara",  label: "Bukhara" },
              { href: "/uzbekistan-tours/khiva",    label: "Khiva" },
              { href: "/uzbekistan-tours/tashkent", label: "Tashkent" },
              { href: "/uzbekistan-tours/muynak",   label: "Muynak / Aral Sea" },
              { href: "/visa",                      label: "Visa to Uzbekistan" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
        </section>

        <CTABlock title="Ready to explore Samarkand?" />
      </div>
    </>
  );
}
