import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/data/site";

/**
 * SEO METADATA
 * Ottimizzato per il nome "Fabrizio Lenoci" e per i servizi offerti.
 * Modifica le keyword e i testi nel file src/data/site.ts.
 */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "Fabrizio Lenoci",
    "Fabrizio Lenoci sviluppatore",
    "Fabrizio Lenoci portfolio",
    "Fabrizio Lenoci web developer",
    "sviluppatore software",
    "web developer Italia",
    "sviluppo applicazioni web",
    "siti web moderni",
    "software gestionali",
    "freelance Next.js",
    "freelance React",
    "sviluppo software su misura",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    creator: "@fabriziolenoci",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#07070c",
  width: "device-width",
  initialScale: 1,
};

/**
 * STRUCTURED DATA (JSON-LD) — schema.org/Person
 * Aiuta Google a riconoscere il portfolio come quello di una persona fisica
 * e a mostrarlo nei knowledge panel per ricerche tipo "Fabrizio Lenoci".
 */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: site.email,
  jobTitle: site.role,
  description: site.tagline,
  birthDate: String(site.birthYear),
  address: { "@type": "PostalAddress", addressCountry: "IT" },
  knowsAbout: [
    "Web Development",
    "Software Development",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Software gestionali",
    "UI/UX Design",
  ],
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Diploma in Informatica" },
    {
      "@type": "EducationalOrganization",
      name: "Laurea in Informatica e Produzione del Software",
    },
  ],
  sameAs: site.socials
    .filter((s) => s.href.startsWith("http"))
    .map((s) => s.href),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=general-sans@300,400,500,600&f[]=jetbrains-mono@400,500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
