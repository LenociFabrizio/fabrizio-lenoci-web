import { ImageResponse } from "next/og";
import { site } from "@/data/site";

/**
 * Immagine Open Graph generata automaticamente (1200×630).
 * Viene usata da Next.js per le anteprime su social, WhatsApp e Google.
 * Risolve la mancanza di un og:image (le condivisioni apparivano "vuote").
 */
export const runtime = "edge";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 20% 20%, #1a1530 0%, #07070c 55%)",
          padding: "80px",
          color: "#f5f4fb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: 999,
              background: "linear-gradient(120deg,#b6a4ff,#86e6ff)",
            }}
          />
          <div style={{ fontSize: 30, color: "#9b98b3" }}>{site.url.replace("https://", "")}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 40,
              marginTop: 18,
              color: "#b6a4ff",
              fontWeight: 600,
            }}
          >
            {site.role}
          </div>
          <div
            style={{
              fontSize: 28,
              marginTop: 26,
              color: "#9b98b3",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Portfolio personale di sviluppo web — progetti, codice e
            sperimentazioni.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
