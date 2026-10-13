import { ImageResponse } from "next/og";

/** Icona per "Aggiungi a Home" su iOS (180×180). */
export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 96,
          fontWeight: 700,
          color: "#0b0b0d",
          background: "#f4f3f1",
          fontFamily: "sans-serif",
        }}
      >
        FL
      </div>
    ),
    { ...size }
  );
}
