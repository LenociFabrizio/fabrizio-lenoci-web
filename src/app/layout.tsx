import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/data/site";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Portfolio — ${site.role}`,
    template: `%s · Portfolio`,
  },
  description: site.tagline,
  applicationName: "Portfolio",
  keywords: [
    "portfolio sviluppo web",
    "sviluppatore full-stack",
    "progetti React",
    "progetti Next.js",
    "frontend developer",
    "backend developer",
    "TypeScript",
    "web development",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: site.url,
    siteName: "Portfolio",
    title: `Portfolio — ${site.role}`,
    description: site.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `Portfolio — ${site.role}`,
    description: site.tagline,
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  url: site.url,
  jobTitle: site.role,
  description: site.tagline,
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
};

/**
 * NOTA — Structured data e contesto fiscale.
 * In via prudenziale NON viene dichiarato uno schema "ProfessionalService" o
 * "LocalBusiness": non esiste un'attività d'impresa/struttura organizzata e
 * non c'è una Partita IVA. Si usa quindi solo schema.org/Person (più la
 * FAQPage), corretto per un portfolio personale ed egualmente efficace per la
 * SEO sul nominativo. Vedi la sezione "Valutazione fiscale e legale" del report.
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=general-sans@300,400,500,600&f[]=jetbrains-mono@400,500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans">
        <a href="#main" className="skip-link">
          Salta al contenuto
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
