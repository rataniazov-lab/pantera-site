import type { Metadata } from "next";
import { buildMeta, CTABlock, PHONE } from "../../shared";

export const metadata: Metadata = buildMeta({
  title: "Bukhara Tours — Ark Citadel, Kalon Minaret, Silk Road | PANTERA LUXE",
  description: "Bukhara tours from Tashkent. Ark Citadel, Kalon Minaret, Lyab-i-Hauz, Chor Minor. The most preserved medieval city in Central Asia. from $110.",
  keywords: ["Bukhara tour", "Bukhara travel", "Ark Citadel tour", "Kalon Minaret", "туры в Бухару", "Бухара достопримечательности", "Bukhara Uzbekistan", "Silk Road Bukhara"],
  path: "/uzbekistan-tours/bukhara",
});

const SIGHTS = [
  { ico: "🏰", name: "Ark Citadel",         desc: "2,500-year-old fortress. Once the residence of the emirs of Bukhara." },
  { ico: "🕌", name: "Kalon Minaret",        desc: "46-meter minaret from 1127. One of the tallest buildings in medieval Central Asia." },
  { ico: "🏊", name: "Lyab-i-Hauz complex",  desc: "Central pool surrounded by mulberry trees. The heart of old Bukhara." },
  { ico: "🕌", name: "Chor Minor",           desc: "Unique 4-towered gateway. A must-photograph in Bukhara." },
  { ico: "🛍️", name: "Trading domes",        desc: "Toki-Sarrofon, Toki-Tilpak Furushon — medieval covered bazaars still in use." },
  { ico: "🌙", name: "Evening Bukhara",      desc: "At night the old city glows golden. A magical atmosphere unlike anywhere else." },
];

const TOURS = [
  { name: "Bukhara Day Trip",          days: "1 day",           price: "$110", old: "$149", inc: "Guide + Transfer" },
  { name: "Bukhara 2 Days / 1 Night",  days: "2 days / 1 night", price: "$195", old: "$264", inc: "Guide + Hotel + Transfer" },
  { name: "Samarkand & Bukhara",       days: "4 days / 3 nights",price: "$390", old: "$527", inc: "Both cities + Guides + Hotels" },
];

export default function BukharaPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg,#2d1000,#4a1a00)", padding: "100px 0 56px" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <nav style={{ marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <a href="/uzbekistan-tours" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Uzbekistan Tours</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#ffd166" }}>Bukhara</span>
          </nav>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: "0 0 14px" }}>
            🏛️ Bukhara Tours
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, maxWidth: 520, margin: "0 auto 28px" }}>
            Ark Citadel · Kalon Minaret · Lyab-i-Hauz · UNESCO city · from $110
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
          <h2 className="section-title">Bukhara Tour Packages</h2>
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
          <h2 className="section-title">What to See in Bukhara</h2>
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
          {[{href:"/uzbekistan-tours",label:"All Uzbekistan"},{href:"/uzbekistan-tours/samarkand",label:"Samarkand"},{href:"/uzbekistan-tours/khiva",label:"Khiva"},{href:"/uzbekistan-tours/tashkent",label:"Tashkent"},{href:"/visa",label:"Visa info"}].map(l => (
            <a key={l.href} href={l.href} style={{ background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
        <CTABlock title="Ready to explore Bukhara?" />
      </div>
    </>
  );
}
