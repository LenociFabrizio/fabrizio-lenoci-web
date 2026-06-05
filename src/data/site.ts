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

  /** Città / area di base */
  location: "Italia · da remoto in tutta Italia",

  /** Anno di nascita */
  birthYear: 2000,

  /** Mostra il badge "disponibile per nuovi progetti" nell'hero */
  available: true,

  /** Anno di riferimento per copyright e badge */
  year: 2026,

  /** Contatto principale */
  email: "fabriziolenoci@gmail.com",

  /**
   * Telefono e WhatsApp per il contatto diretto (molto apprezzato dai clienti).
   * ➜ Inserisci il tuo numero in formato internazionale SENZA spazi né "+",
   *   es. phone: "393331234567". Se lasci la stringa vuota, i pulsanti
   *   relativi NON vengono mostrati (nessun numero finto online).
   */
  phone: "393913495256", // es. "393331234567"
  whatsapp: "393913495256", // es. "393331234567" — se vuoto il pulsante WhatsApp resta nascosto

  /** Messaggio precompilato per l'apertura della chat WhatsApp */
  whatsappMessage:
    "Ciao Fabrizio! Ho visto il tuo portfolio e vorrei qualche informazione su un progetto.",

  /**
   * Partita IVA — forte segnale di serietà per le PMI italiane.
   * Se vuota non viene mostrata nel footer.
   */
  vatNumber: "", // es. "01234567890"

  /** Tempo di risposta dichiarato (usato in Hero e Contatti) */
  responseTime: "entro 24 ore",

  /**
   * URL pubblico del sito (usato per metadata, OG, sitemap).
   * ⚠ IMPORTANTE: aggiorna con il tuo dominio reale prima del deploy.
   * Es: https://fabriziolenoci.vercel.app oppure https://fabriziolenoci.dev
   */
  url: "https://fabriziolenoci.it",

  /** Tagline breve (usata in meta description e hero) */
  tagline:
    "Portfolio personale di sviluppo web: una raccolta di siti, applicazioni e sperimentazioni che realizzo per approfondire tecnologie, design e sviluppo software.",

  /** Bio mostrata nella sezione About (array di paragrafi) */
  bio: [
    "Sono Fabrizio Lenoci, sviluppatore full-stack. Diplomato e laureato in Informatica, dedico tempo a progettare e realizzare siti web e applicazioni per approfondire tecnologie, design e sviluppo software.",
    "Questo spazio raccoglie i progetti che sviluppo nel tempo: ogni lavoro è un'occasione per sperimentare strumenti nuovi, curare i dettagli e migliorare il mio modo di scrivere codice.",
  ],

  /** Valori e approccio allo sviluppo (sezione Chi sono). */
  reasons: [
    {
      title: "Codice curato",
      desc: "Scrivo codice pulito, tipizzato e organizzato, con attenzione alla qualità e alla manutenibilità.",
    },
    {
      title: "Cura del dettaglio",
      desc: "Design, animazioni e micro-interazioni curati fino all'ultimo pixel, su ogni dispositivo.",
    },
    {
      title: "Studio continuo",
      desc: "Ogni progetto è un'occasione per imparare strumenti e tecniche nuove e mettermi alla prova.",
    },
    {
      title: "Dall'idea al deploy",
      desc: "Seguo l'intero percorso di un progetto: analisi, design, sviluppo frontend e backend, performance e pubblicazione.",
    },
  ],

  /**
   * Statistiche mostrate nell'hero.
   * Neutre, descrittive del profilo da sviluppatore.
   */
  stats: [
    { value: "Full-stack", label: "Frontend + Backend" },
    { value: "A → Z", label: "Dall'idea al deploy" },
    { value: "100%", label: "Codice scritto a mano" },
  ],

  /** Link social — sostituisci con i tuoi profili reali */
  socials: [
    { label: "GitHub", href: "https://github.com/fabriziolenoci" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/fabriziolenoci" },
    { label: "Email", href: "mailto:fabriziolenoci@gmail.com" },
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

/**
 * Link WhatsApp pronto all'uso (vuoto se il numero non è impostato).
 * Usato da Navbar, Contatti e Footer.
 */
export const whatsappLink = site.whatsapp
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`
  : "";

/** Link del menu di navigazione */
export const navLinks = [
  { label: "Cosa faccio", href: "#services" },
  { label: "Progetti", href: "#work" },
  { label: "Come lavoro", href: "#process" },
  { label: "Chi sono", href: "#about" },
  { label: "FAQ", href: "#faq" },
];
