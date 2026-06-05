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
    "Aiuto aziende e professionisti a crescere online con siti web, e-commerce e software gestionali su misura — curo tutto io, dall'idea alla messa online.",

  /** Bio mostrata nella sezione About (array di paragrafi) */
  bio: [
    "Sono Fabrizio Lenoci, sviluppatore full-stack. Diplomato e laureato in Informatica, progetto e realizzo siti web, e-commerce e software gestionali su misura per aziende e professionisti.",
    "Quello che mi distingue è che hai un unico interlocutore dall'inizio alla fine: niente agenzie con dieci passaggi, niente tecnicismi inutili. Ti ascolto, ti propongo la soluzione più adatta al tuo budget e resto al tuo fianco anche dopo il lancio.",
  ],

  /** Motivi concreti per scegliere di lavorare insieme (sezione Chi sono). */
  reasons: [
    {
      title: "Un solo referente",
      desc: "Parli sempre con me, dalla prima idea all'assistenza dopo il lancio. Nessun call center, nessun passaggio di mano.",
    },
    {
      title: "Preventivi chiari",
      desc: "Tempi, costi e cosa è incluso concordati prima di iniziare. Sai sempre cosa aspettarti, senza sorprese.",
    },
    {
      title: "Il progetto è tuo",
      desc: "Codice, contenuti e dominio restano di tua proprietà al 100%. Dove possibile ti lascio un pannello per aggiornarti da solo.",
    },
    {
      title: "Supporto anche dopo",
      desc: "Non sparisco dopo la consegna: resto disponibile per aggiornamenti e piccole modifiche quando ti servono.",
    },
  ],

  /**
   * Statistiche mostrate nell'hero.
   * Orientate al cliente. Sostituisci con numeri VERI man mano che crescono
   * (es. { value: "12+", label: "Progetti consegnati" }).
   */
  stats: [
    { value: "< 24h", label: "Tempo di risposta" },
    { value: "A → Z", label: "Dal progetto al lancio" },
    { value: "100%", label: "Codice su misura" },
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
  { label: "Servizi", href: "#services" },
  { label: "Progetti", href: "#work" },
  { label: "Come lavoro", href: "#process" },
  { label: "Chi sono", href: "#about" },
  { label: "FAQ", href: "#faq" },
];
