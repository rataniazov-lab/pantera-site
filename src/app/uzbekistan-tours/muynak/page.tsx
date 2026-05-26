import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Muynak Aral Sea Tour — Ship Graveyard, Eco-Tourism Uzbekistan | PANTERA LUXE",
  description: "Muynak and Aral Sea tours from Tashkent. Rusting ship graveyard, dramatic cliffs, ecological disaster site. Unique off-the-beaten-path experience. from $150.",
  keywords: ["Muynak tour", "Aral Sea tour", "ship graveyard Uzbekistan", "туры Муйнак", "Аральское море тур", "eco tourism Uzbekistan", "Muynak Uzbekistan", "Aral Sea disaster tour"],
  path: "/uzbekistan-tours/muynak",
});

const HIGHLIGHTS = [
  { ico: "🚢", name: "Ship Graveyard",    desc: "Dozens of rusting ships stranded in the desert where the sea once was. Haunting and unforgettable." },
  { ico: "🏔️", name: "Aral Sea Cliffs",  desc: "Walk to the edge of the former sea bed. Vast horizons and eerie silence." },
  { ico: "🏛️", name: "Muynak Museum",    desc: "Documents the ecological disaster that drained one of the world's largest lakes." },
  { ico: "🌅", name: "Desert Sunrise",    desc: "Camp overnight in the desert for a sunrise over the former sea bed." },
  { ico: "🧭", name: "4WD Desert Drive", desc: "Off-road drive through the desiccated lake bottom — a unique landscape on Earth." },
];

const TOURS = [
  { name: "Muynak Day Trip from Nukus",    days: "1 day",  price: "$95",  old: "$129", inc: "4WD + Guide" },
  { name: "Muynak 2-Day Expedition",       days: "2 days", price: "$185", old: "$250", inc: "4WD + Guide + Camp/Hotel" },
  { name: "Tashkent → Khiva → Muynak",    days: "5 days", price: "$420", old: "$568", inc: "Full route + Guides + Hotels" },
];

export default function MuynakPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#0a1a30,#1a2c40)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/uzbekistan-tours" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Uzbekistan Tours</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>Muynak</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            🌊 Muynak — Aral Sea Expedition
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 540, margin: "0 auto 10px" }}>
            Ship Graveyard · Aral Sea Cliffs · Ecological History · Unique on Earth · from $95
          </p>
          <p style={{ color: "rgba(180,200,220,0.7)", fontSize: 13, marginBottom: 28 }}>
            Off-the-beaten-path · Not for everyone · Unforgettable for those who come
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 15, padding: "13px 28px" }}>Book Expedition →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Call us</a>
          </div>
        </div>
      </section>
      <div className="site-container" style={{ padding: "48px 20px 80px" }}>
        <div style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 12, padding: "16px 20px", marginBottom: 40 }}>
          <p style={{ fontSize: 13, color: "#1e40af", lineHeight: 1.6 }}>
            ℹ️ <strong>About Muynak:</strong> The Aral Sea was once the world's 4th largest lake. Since the 1960s it has lost 90% of its volume due to Soviet irrigation projects. The ships of Muynak's fishing fleet now sit in the desert, 150km from the water.
          </p>
        </div>
        <section style={{ marginBottom: 52 }}>
          <span className="section-tag">Expeditions</span>
          <h2 className="section-title">Muynak Tour Packages</h2>
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
          <h2 className="section-title">What You Will See</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14, marginTop: 22 }}>
            {HIGHLIGHTS.map(h => (
              <div key={h.name} style={{ background: "#f8fafc", borderRadius: 12, padding: "16px 18px", display: "flex", gap: 12 }}>
                <span style={{ fontSize: 26, flexShrink: 0 }}>{h.ico}</span>
                <div><h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{h.name}</h3><p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>{h.desc}</p></div>
              </div>
            ))}
          </div>
        </section>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {[{href:"/uzbekistan-tours",label:"All Uzbekistan"},{href:"/uzbekistan-tours/khiva",label:"Khiva nearby"},{href:"/uzbekistan-tours/samarkand",label:"Samarkand"},{href:"/visa",label:"Visa info"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Ready for a unique expedition?" />
      </div>
    </>
  );
}
