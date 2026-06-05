import { ImageResponse } from "next/og";

/** Favicon generata automaticamente: iniziali su gradiente del brand. */
export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          fontWeight: 700,
          color: "#0a0a12",
          background: "linear-gradient(120deg,#b6a4ff,#86e6ff)",
          borderRadius: 7,
          fontFamily: "sans-serif",
        }}
      >
        FL
      </div>
    ),
    { ...size }
  );
}
