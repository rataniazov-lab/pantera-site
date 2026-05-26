// ─────────────────────────────────────────────────────────────
// global-error.tsx  →  src/app/global-error.tsx
// Перехватывает критические ошибки на уровне layout
// ─────────────────────────────────────────────────────────────
"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ru">
      <body style={{ margin:0, background:"#0d1b2a", fontFamily:"sans-serif" }}>
        <div style={{ minHeight:"100vh", display:"flex", alignItems:"center",
          justifyContent:"center", padding:20 }}>
          <div style={{ textAlign:"center", maxWidth:480 }}>
            <div style={{ fontSize:72, marginBottom:16 }}>🚨</div>
            <h2 style={{ color:"#fff", fontSize:28, fontWeight:900, marginBottom:12 }}>
              Критическая ошибка
            </h2>
            <p style={{ color:"rgba(255,255,255,0.55)", fontSize:14, lineHeight:1.7, marginBottom:32 }}>
              Произошла серьёзная ошибка. Пожалуйста, обновите страницу.
            </p>
            <div style={{ display:"flex", gap:12, justifyContent:"center" }}>
              <button onClick={reset}
                style={{ background:"linear-gradient(135deg,#ff6b35,#ff8c42)", color:"#fff",
                  fontSize:14, fontWeight:700, padding:"12px 28px", borderRadius:10,
                  border:"none", cursor:"pointer" }}>
                Обновить страницу
              </button>
              <a href="/"
                style={{ background:"rgba(255,255,255,0.1)", color:"#fff", fontSize:14,
                  fontWeight:700, padding:"12px 28px", borderRadius:10, textDecoration:"none",
                  border:"1px solid rgba(255,255,255,0.2)" }}>
                На главную
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
