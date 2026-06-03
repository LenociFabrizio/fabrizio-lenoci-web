import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#07070c",
        "bg-soft": "#0d0d17",
        ink: "#f5f4fb",
        muted: "#9b98b3",
        "muted-2": "#74718c",
        lilac: "#b6a4ff",
        cyan: "#86e6ff",
        peach: "#ffb3a0",
        mint: "#9dffce",
      },
      fontFamily: {
        display: ['var(--font-display)', "sans-serif"],
        sans: ['var(--font-sans)', "sans-serif"],
        mono: ['var(--font-mono)', "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glow: "0 18px 50px -18px rgba(134,230,255,.55)",
        "glow-lilac": "0 0 40px -8px rgba(182,164,255,.5)",
        soft: "0 40px 80px -40px rgba(134,230,255,.35)",
      },
      backgroundImage: {
        "grad-text": "linear-gradient(120deg,#fff 10%, #b6a4ff 45%, #86e6ff 80%)",
        "grad-warm": "linear-gradient(120deg, #ffb3a0, #b6a4ff)",
        "grad-cta": "linear-gradient(120deg, #b6a4ff, #86e6ff)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scrollx: {
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        marquee: "scrollx 50s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
