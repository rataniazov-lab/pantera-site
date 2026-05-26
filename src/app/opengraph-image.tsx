// ─────────────────────────────────────────────────────────────
// opengraph-image.tsx  →  src/app/opengraph-image.tsx
// Автогенерация OG-картинки для соцсетей
// Показывается когда делитесь ссылкой в Telegram/WhatsApp/VK
// Размер: 1200×630px
// ─────────────────────────────────────────────────────────────
import { ImageResponse } from "next/og";

// export const runtime = "edge";  // ← УДАЛЕНО (причина предупреждения)

export const alt     = "PANTERA LUXE — Туры из Ташкента";
export const size    = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0d1b2a 0%, #1a3550 50%, #0d1b2a 100%)",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background pattern */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",  // ← ДОБАВЛЕНО (явный display для div с несколькими детьми)
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,107,53,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,140,66,0.1) 0%, transparent 50%)",
        }} />

        {/* Logo + Name row */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginBottom: 32,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/dass5gqvk/image/upload/v1779385406/pantera_luxe_logo_v0gbmo.png"
            width={80}
            height={80}
            alt="PANTERA LUXE"
            style={{ borderRadius: 16 }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{
              color: "#ffffff",
              fontSize: 42,
              fontWeight: 900,
              letterSpacing: "-1px",
              lineHeight: 1.1,
            }}>
              PANTERA LUXE
            </span>
            <span style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: 18,
              fontWeight: 400,
              letterSpacing: 2,
            }}>
              turytashkent.com
            </span>
          </div>
        </div>

        {/* Main tagline */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          marginBottom: 40,
        }}>
          <span style={{
            color: "#ffffff",
            fontSize: 52,
            fontWeight: 900,
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 900,
          }}>
            Туры из Ташкента
          </span>
          <span style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 24,
            textAlign: "center",
          }}>
            Дубай · Турция · Египет · Мальдивы · Круизы · Санатории
          </span>
        </div>

        {/* Price badge */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}>
          <div style={{
            background: "linear-gradient(135deg, #ff6b35, #ff8c42)",
            color: "#ffffff",
            fontSize: 22,
            fontWeight: 800,
            padding: "12px 32px",
            borderRadius: 50,
          }}>
            ✈️ Туры от $350
          </div>
          <div style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#ffffff",
            fontSize: 18,
            fontWeight: 600,
            padding: "12px 24px",
            borderRadius: 50,
          }}>
            📞 +998 77 161 88 88
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}