// ─────────────────────────────────────────────────────────────
// loading.tsx  →  src/app/loading.tsx
// Лоадер при переходах между страницами
// ─────────────────────────────────────────────────────────────
export default function Loading() {
  return (
    <div style={{
      position:"fixed", inset:0, background:"#0d1b2a",
      display:"flex", alignItems:"center", justifyContent:"center", zIndex:9999,
    }}>
      <div style={{ textAlign:"center" }}>
        <div style={{ fontSize:52, marginBottom:18,
          animation:"fly 1.2s ease-in-out infinite", display:"inline-block" }}>
          ✈️
        </div>
        <p style={{ color:"rgba(255,255,255,0.6)", fontSize:13, fontWeight:700,
          letterSpacing:3, textTransform:"uppercase", marginBottom:20 }}>
          PANTERA LUXE
        </p>
        <div style={{ width:200, height:2, background:"rgba(255,255,255,0.1)",
          borderRadius:2, margin:"0 auto", overflow:"hidden" }}>
          <div style={{ height:"100%",
            background:"linear-gradient(90deg,#ff6b35,#ff8c42)",
            borderRadius:2, animation:"progress 1.2s ease-in-out infinite" }} />
        </div>
      </div>
      <style>{`
        @keyframes fly {
          0%,100% { transform:translateX(-10px) translateY(0); }
          50%      { transform:translateX(10px) translateY(-8px); }
        }
        @keyframes progress {
          0%   { width:0%;   margin-left:0;    }
          50%  { width:100%; margin-left:0;    }
          100% { width:0%;   margin-left:100%; }
        }
      `}</style>
    </div>
  );
}
