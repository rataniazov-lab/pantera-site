// ─────────────────────────────────────────────────────────────
// not-found.tsx  →  src/app/not-found.tsx
// Страница 404
// ─────────────────────────────────────────────────────────────
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Страница не найдена — PANTERA LUXE",
  robots: { index: false, follow: false },
};
export default function NotFound() {
  return (
    <div style={{ minHeight:"100vh", background:"#0d1b2a",
      display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
      <div style={{ textAlign:"center", maxWidth:480 }}>
        <div style={{ fontSize:72, marginBottom:16 }}>✈️</div>
        <h1 style={{ color:"#fff", fontSize:"clamp(2rem,5vw,3rem)",
          fontWeight:900, marginBottom:12 }}>404</h1>
        <h2 style={{ color:"rgba(255,255,255,0.8)", fontSize:20,
          fontWeight:700, marginBottom:16 }}>Страница не найдена</h2>
        <p style={{ color:"rgba(255,255,255,0.5)", fontSize:14,
          lineHeight:1.7, marginBottom:32 }}>
          Этот рейс улетел без вас. Но у нас ещё много направлений!
        </p>
        <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
          <a href="/" style={{ background:"linear-gradient(135deg,#ff6b35,#ff8c42)",
            color:"#fff", fontSize:14, fontWeight:700, padding:"12px 28px",
            borderRadius:10, textDecoration:"none" }}>
            На главную
          </a>
          <a href="/contacts" style={{ background:"rgba(255,255,255,0.1)",
            color:"#fff", fontSize:14, fontWeight:700, padding:"12px 28px",
            borderRadius:10, textDecoration:"none", border:"1px solid rgba(255,255,255,0.2)" }}>
            Связаться с нами
          </a>
        </div>
        <div style={{ marginTop:40, display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap" }}>
          {[
            {href:"/dubai",      label:"🇦🇪 Дубай"},
            {href:"/turkey",     label:"🇹🇷 Турция"},
            {href:"/egypt",      label:"🇪🇬 Египет"},
            {href:"/cruise",     label:"🚢 Круизы"},
            {href:"/sanatorium", label:"🏥 Санатории"},
            {href:"/visa",       label:"🛂 Визы"},
          ].map(l => (
            <a key={l.href} href={l.href} style={{
              background:"rgba(255,255,255,0.07)", color:"rgba(255,255,255,0.7)",
              fontSize:13, fontWeight:600, padding:"8px 14px", borderRadius:20,
              textDecoration:"none", border:"1px solid rgba(255,255,255,0.1)" }}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
