import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../shared";

export const metadata: Metadata = buildMeta({
  title: "Uzbekistan Tours — Samarkand, Bukhara, Khiva, Tashkent | PANTERA LUXE",
  description:
    "Uzbekistan tours: Samarkand, Bukhara, Khiva, Tashkent, Muynak. Silk Road travel packages. Expert guides, hotels, transfers. Book from Tashkent.",
  keywords: [
    "Uzbekistan tours",
    "Samarkand tour",
    "Bukhara travel",
    "Khiva tour package",
    "Silk Road tour Uzbekistan",
    "Tashkent tours",
    "туры по Узбекистану",
    "туры Самарканд Бухара",
    "Uzbekistan travel agency",
    "Muynak Aral Sea tour",
  ],
  path: "/uzbekistan-tours",
});

const CITIES = [
  {
    name: "Samarkand",   href: "/uzbekistan-tours/samarkand",
    emoji: "🕌", desc: "Registan Square, Shah-i-Zinda, Bibi-Khanym Mosque. The jewel of the Silk Road.",
    days: "2–3 days", price: "from $120",
    highlights: ["Registan Square", "Shah-i-Zinda necropolis", "Bibi-Khanym Mosque", "Ulugbek Observatory"],
  },
  {
    name: "Bukhara",     href: "/uzbekistan-tours/bukhara",
    emoji: "🏛️", desc: "Ark Citadel, Kalon Minaret, caravanserais. The most preserved medieval city in Central Asia.",
    days: "2–3 days", price: "from $110",
    highlights: ["Ark Citadel", "Kalon Minaret", "Lyab-i-Hauz complex", "Chor Minor"],
  },
  {
    name: "Khiva",       href: "/uzbekistan-tours/khiva",
    emoji: "🏰", desc: "The open-air museum city. Ichan-Kala (inner city) is a UNESCO World Heritage site.",
    days: "1–2 days", price: "from $90",
    highlights: ["Ichan-Kala inner city", "Kalta Minor minaret", "Jumа Mosque", "Tash-Khauli Palace"],
  },
  {
    name: "Tashkent",    href: "/uzbekistan-tours/tashkent",
    emoji: "🏙️", desc: "Modern capital with Soviet architecture, Chorsu Bazaar, and excellent Uzbek cuisine.",
    days: "1–2 days", price: "from $80",
    highlights: ["Chorsu Bazaar", "Khast Imam Complex", "State Museum", "Tashkent Metro (Soviet mosaics)"],
  },
  {
    name: "Muynak",      href: "/uzbekistan-tours/muynak",
    emoji: "🌊", desc: "The Aral Sea disaster — rusting ship graveyard, eerie beauty. A unique eco-tourism destination.",
    days: "2 days", price: "from $150",
    highlights: ["Ship graveyard", "Aral Sea cliff", "Muynak Museum", "Desert drive"],
  },
];

const PACKAGES = [
  { name: "Samarkand & Bukhara", days: "4 days / 3 nights", price: "$290", desc: "Registan, Ark Citadel, overnight train between cities" },
  { name: "Golden Road (Classic)", days: "7 days / 6 nights", price: "$590", desc: "Tashkent → Samarkand → Bukhara → Khiva. Full Silk Road" },
  { name: "Silk Road + Muynak", days: "9 days / 8 nights", price: "$790", desc: "Full route + Aral Sea expedition. Off the beaten path." },
];

export default function UzbekistanToursPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#1a0d00,#3d1a00)", padding: "100px 0 60px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <span className="section-tag" style={{ color: "#ffd166" }}>🇺🇿 Uzbekistan</span>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, margin: "12px 0 16px" }}>
            Uzbekistan Tours
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 18, maxWidth: 600, margin: "0 auto 32px" }}>
            Samarkand · Bukhara · Khiva · Tashkent · Muynak · Silk Road packages · Expert guides
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="/contacts" style={{ fontSize: 16, padding: "14px 32px" }}>Book a Tour →</a>
            <a className="btn-ghost" href={`tel:${PHONE}`}>📞 Call us</a>
          </div>
        </div>
      </section>

      <div className="site-container" style={{ padding: "52px 20px 80px" }}>

        {/* Cities */}
        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Destinations</span>
          <h2 className="section-title">Silk Road Cities</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 18, marginTop: 24 }}>
            {CITIES.map(c => (
              <a key={c.name} href={c.href} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "22px", display: "block" }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{c.emoji}</div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#1e293b", marginBottom: 8 }}>{c.name}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, marginBottom: 14 }}>{c.desc}</p>
                <div style={{ marginBottom: 14 }}>
                  {c.highlights.map(h => (
                    <div key={h} style={{ fontSize: 12, color: "#475569", padding: "3px 0", borderBottom: "1px solid #f1f5f9" }}>→ {h}</div>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: "#94a3b8" }}>⏱ {c.days}</span>
                  <span style={{ fontSize: 14, fontWeight: 800, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "3px 10px", borderRadius: 6 }}>{c.price}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section style={{ marginBottom: 56 }}>
          <span className="section-tag">Packages</span>
          <h2 className="section-title">Silk Road Tour Packages</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 24 }}>
            {PACKAGES.map(p => (
              <div key={p.name} style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 14, padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1e293b", marginBottom: 4 }}>{p.name}</h3>
                  <p style={{ fontSize: 13, color: "#64748b" }}>⏱ {p.days} · {p.desc}</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#bf4b18", background: "rgba(255,205,115,0.55)", padding: "2px 10px", borderRadius: 6 }}>{p.price}</div>
                  <a className="btn-primary" href="/contacts" style={{ display: "inline-block", marginTop: 8, fontSize: 12, padding: "7px 14px" }}>Book Now</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section style={{ marginBottom: 56 }}>
          <h2 className="section-title">Explore more</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
            {[
              { href: "/uzbekistan-tours/samarkand", label: "Samarkand tours" },
              { href: "/uzbekistan-tours/bukhara",   label: "Bukhara tours" },
              { href: "/uzbekistan-tours/khiva",     label: "Khiva tours" },
              { href: "/uzbekistan-tours/tashkent",  label: "Tashkent tours" },
              { href: "/uzbekistan-tours/muynak",    label: "Muynak / Aral Sea" },
              { href: "/visa",                       label: "Visa to Uzbekistan" },
              { href: "/contacts",                   label: "Contact us" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
        </section>

        <CTABlock title="Ready to explore Uzbekistan?" />
      </div>
    </>
  );
}
