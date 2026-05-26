import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Silk Road Tour Uzbekistan — Tashkent, Samarkand, Bukhara, Khiva | PANTERA LUXE",
  description: "Classic Silk Road tour through Uzbekistan. Tashkent → Samarkand → Bukhara → Khiva. 7–10 days guided tour. UNESCO cities, ancient architecture, desert landscapes.",
  keywords: ["Silk Road tour Uzbekistan", "Great Silk Road", "Samarkand Bukhara Khiva tour", "Uzbekistan classic tour", "Великий Шёлковый путь тур", "маршрут Шёлкового пути", "UNESCO tour Central Asia"],
  path: "/uzbekistan-tours/silk-road",
});

const ITINERARY = [
  { day: "День 1–2", city: "Tashkent 🏙️",   highlights: "Chorsu Bazaar · Khast Imam · Soviet Metro · Amir Temur Museum" },
  { day: "День 3–5", city: "Samarkand 🕌",   highlights: "Registan · Shah-i-Zinda · Bibi-Khanym · Ulugbek Observatory" },
  { day: "День 6–8", city: "Bukhara 🏛️",     highlights: "Ark Citadel · Kalon Minaret · Lyab-i-Hauz · Trading Domes" },
  { day: "День 9–10", city: "Khiva 🏰",      highlights: "Ichan-Kala · Kalta Minor · Jumа Mosque · City Walls Sunset" },
];

const PACKAGES = [
  {
    name: "Classic Silk Road",
    days: "7 days / 6 nights",
    route: "Tashkent → Samarkand → Bukhara → Khiva",
    price: "$590",
    old: "$797",
    inc: ["English/Russian guide", "All hotels 4★", "All transfers", "Train Tashkent–Samarkand", "Entrance fees"],
  },
  {
    name: "Silk Road Express",
    days: "5 days / 4 nights",
    route: "Tashkent → Samarkand → Bukhara",
    price: "$390",
    old: "$527",
    inc: ["English guide", "Hotels 3★–4★", "All transfers", "Entrance fees"],
  },
  {
    name: "Silk Road + Muynak",
    days: "9 days / 8 nights",
    route: "Full route + Aral Sea expedition",
    price: "$790",
    old: "$1 067",
    inc: ["Expert guide", "All hotels", "4WD Muynak", "All transfers", "Entrance fees"],
  },
];

const WHY = [
  { ico: "🏛️", title: "3 UNESCO sites",       desc: "Samarkand, Bukhara, Khiva — three UNESCO World Heritage cities in one trip." },
  { ico: "📅", title: "2,500 years of history", desc: "Walk the same streets as Alexander the Great, Genghis Khan, and Marco Polo." },
  { ico: "🤝", title: "Warmest hospitality",   desc: "Uzbekistan is one of the most welcoming countries in the world for tourists." },
  { ico: "💰", title: "Incredible value",       desc: "World-class history and culture at a fraction of the cost of Europe." },
];

export default function SilkRoadPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#2d1000,#3d1800)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/uzbekistan-tours" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Uzbekistan Tours</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>Silk Road</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            🛤️ Classic Silk Road Tour
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 560, margin: "0 0 10px" }}>
            Tashkent · Samarkand · Bukhara · Khiva · 7–10 days · UNESCO cities
          </p>
          <p style={{ color: "rgba(255,210,120,0.8)", fontSize: 13, marginBottom: 28 }}>
            English · Russian · Chinese guides available · from $390
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Book Silk Road Tour →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Call us</a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding: "48px 20px 80px" }}>

        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Why Uzbekistan</span>
          <h2 className="section-title">Why travel the Silk Road</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 14, marginTop: 22 }}>
            {WHY.map(w => (
              <div key={w.title} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 12, padding: "20px" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{w.ico}</div>
                <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 5 }}>{w.title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.55 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Itinerary</span>
          <h2 className="section-title">Day by day — Classic Route</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 22, border: "1px solid #e8eef5", borderRadius: 14, overflow: "hidden" }}>
            {ITINERARY.map((d, i) => (
              <div key={d.city} style={{ display: "flex", gap: 20, padding: "16px 22px", background: i % 2 === 0 ? "#fff" : "#f8fafc", borderBottom: i < ITINERARY.length - 1 ? "1px solid #f1f5f9" : "none", alignItems: "flex-start", flexWrap: "wrap" }}>
                <div style={{ minWidth: 90, flexShrink: 0 }}>
                  <span style={{ background: "linear-gradient(135deg,#ff6b35,#ff8c42)", color: "#fff", fontSize: 11, fontWeight: 800, padding: "3px 9px", borderRadius: 20 }}>{d.day}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 4 }}>{d.city}</h3>
                  <p style={{ fontSize: 13, color: "#64748b" }}>{d.highlights}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Packages</span>
          <h2 className="section-title">Tour Packages & Prices</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 22 }}>
            {PACKAGES.map(p => (
              <article key={p.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 16, padding: "22px 26px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16, marginBottom: 14 }}>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 900, marginBottom: 4 }}>{p.name}</h3>
                    <p style={{ fontSize: 13, color: "#64748b" }}>⏱ {p.days} · 🗺️ {p.route}</p>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontSize: 12, color: "#94a3b8", textDecoration: "line-through", textDecorationColor: "#9b3030" }}>{p.old}</div>
                    <div style={{ fontSize: 22, fontWeight: 900, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "3px 12px", borderRadius: 8 }}>{p.price}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                  {p.inc.map(i => (
                    <span key={i} style={{ background: "rgba(34,197,94,0.1)", color: "#16a34a", fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 20 }}>✓ {i}</span>
                  ))}
                </div>
                <a className="btn-primary" href="/contacts" style={{ fontSize: 13, padding: "9px 22px" }}>Book Now →</a>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 14 }}>Explore each city</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { href: "/uzbekistan-tours/tashkent",  label: "Tashkent guide" },
              { href: "/uzbekistan-tours/samarkand", label: "Samarkand guide" },
              { href: "/uzbekistan-tours/bukhara",   label: "Bukhara guide" },
              { href: "/uzbekistan-tours/khiva",     label: "Khiva guide" },
              { href: "/uzbekistan-tours/muynak",    label: "Muynak / Aral Sea" },
              { href: "/visa",                       label: "Visa to Uzbekistan" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
        </section>

        <CTABlock title="Ready to walk the Silk Road?" />
      </div>
    </>
  );
}
