/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Ottimizzazione immagini — formati moderni serviti automaticamente
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Header di sicurezza minimi (ottimi anche per il punteggio SEO/Best Practices)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
