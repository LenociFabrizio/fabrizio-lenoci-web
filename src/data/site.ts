/**
 * ============================================================
 *  CONFIGURAZIONE GLOBALE DEL SITO
 *  Modifica qui i tuoi dati personali, link, bio e meta.
 *  Tutto il portfolio legge da questo file.
 * ============================================================
 */

export const site = {
  /** Nome completo (usato in header, footer, SEO, structured data) */
  name: "Fabrizio Lenoci",

  /** Brand mostrato in navbar e footer (sintetico) */
  brand: "Fabrizio Lenoci",

  /** Ruolo principale */
  role: "Sviluppatore Software & Web Developer",

  /** Città di base */
  location: "Italia",

  /** Anno di nascita */
  birthYear: 2000,

  /** Mostra il badge "disponibile per nuovi progetti" nell'hero */
  available: true,

  /** Anno di riferimento per copyright e badge */
  year: 2026,

  /** Contatto principale */
  email: "ciao@fabriziolenoci.dev",

  /**
   * URL pubblico del sito (usato per metadata, OG, sitemap).
   * IMPORTANTE: aggiorna con il tuo dominio reale prima del deploy.
   * Es: https://fabriziolenoci.vercel.app oppure https://fabriziolenoci.dev
   */
  url: "https://fabriziolenoci.vercel.app",

  /** Tagline breve (usata in meta description e hero) */
  tagline:
    "Sviluppo applicazioni web, siti moderni, software gestionali e soluzioni digitali personalizzate.",

  /** Bio mostrata nella sezione About (array di paragrafi) */
  bio: [
    "Sono Fabrizio Lenoci, classe 2000. Diplomato in Informatica e laureato in Informatica e Produzione del Software, lavoro come sviluppatore software e web developer.",
    "Progetto e realizzo applicazioni web, siti web moderni, software gestionali e soluzioni digitali su misura. Seguo l'intero ciclo del progetto: dall'analisi al design, dallo sviluppo frontend e backend fino al deploy.",
  ],

  /**
   * Statistiche mostrate nell'hero.
   * Sostituisci pure con i tuoi numeri reali: bastano stringhe brevi.
   */
  stats: [
    { value: "Classe '00", label: "Sviluppatore" },
    { value: "Full-stack", label: "Web & Software" },
    { value: "100%", label: "Codice su misura" },
  ],

  /** Link social — sostituisci con i tuoi profili reali */
  socials: [
    { label: "GitHub", href: "https://github.com/fabriziolenoci" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/fabriziolenoci" },
    { label: "Email", href: "mailto:ciao@fabriziolenoci.dev" },
  ],

  /** Tecnologie a scorrimento nella striscia marquee */
  marquee: [
    "NEXT.JS",
    "REACT",
    "TYPESCRIPT",
    "TAILWIND",
    "NODE",
    "POSTGRES",
    "PRISMA",
    "FIGMA",
  ],
};

/** Link del menu di navigazione */
export const navLinks = [
  { label: "Progetti", href: "#work" },
  { label: "Chi sono", href: "#about" },
  { label: "Competenze", href: "#skills" },
  { label: "Contatti", href: "#contact" },
];
