/**
 * ============================================================
 *  PROGETTI DEL PORTFOLIO  ·  CASI STUDIO
 *  Questo è l'UNICO file da modificare per gestire i progetti.
 *
 *  Ogni progetto è pensato come un piccolo "caso studio" che spiega,
 *  in parole semplici e comprensibili anche a chi non è del settore:
 *    · CHI era il cliente            (client + sector)
 *    · QUAL era il suo problema       (challenge)
 *    · COSA è stato realizzato        (solution + features)
 *    · QUALI vantaggi ne ricava       (results / benefits)
 *
 *  ➜ Per AGGIUNGERE un progetto:
 *      copia il blocco "MODELLO" in fondo al file, decommenta e
 *      compila i campi. La categoria è una stringa libera: i filtri
 *      vengono generati automaticamente.
 *  ➜ Per MODIFICARE un progetto: cambia i suoi campi qui.
 *  ➜ Per RIMUOVERE un progetto: cancella il suo oggetto.
 * ============================================================
 */

export interface Testimonial {
  /** Testo della recensione (SOLO se reale) */
  quote: string;
  /** Nome di chi l'ha rilasciata */
  author: string;
  /** Ruolo e azienda */
  role: string;
}

export interface Project {
  /** Identificatore univoco (usato come key React, in lowercase con trattini) */
  slug: string;
  /** Nome del progetto mostrato nella card */
  title: string;
  /**
   * Tipo di progetto:
   *  - "reale": lavoro realmente realizzato per un cliente
   *  - "demo": esempio dimostrativo / concept (mostra un badge esplicito)
   * Non spacciare mai una demo per un lavoro reale: imposta il valore corretto.
   */
  kind: "reale" | "demo";
  /** Categoria libera: "sito-web" | "ecommerce" | "gestionale" | "web-app" | ... */
  category: string;
  /** Chi è il cliente, in parole semplici (anche anonimo: "Studio dentistico — Bari") */
  client: string;
  /** Settore di attività: "Alimentare", "Sanità", "Ristorazione"… */
  sector: string;
  /** Anno di realizzazione (opzionale) */
  year?: string;
  /** Sintesi breve (1-2 righe) mostrata nella card */
  description: string;
  /** Il problema / l'esigenza di partenza del cliente */
  challenge: string;
  /** Cosa è stato realizzato, spiegato in modo non tecnico */
  solution: string;
  /** Funzionalità principali, in linguaggio comprensibile a tutti */
  features: string[];
  /** Vantaggi concreti per il cliente e per gli utenti del sito */
  results: string[];
  /** Stack tecnologico — apparirà come chip mono nel dettaglio */
  stack: string[];
  /** Percorso dell'anteprima reale, es. "/projects/nome.webp" (opzionale) */
  image?: string;
  /** Testo alternativo descrittivo dell'immagine (SEO/accessibilità, opzionale) */
  imageAlt?: string;
  /** Gradiente di fallback mostrato se `image` non è impostata */
  gradient: string;
  /** URL del sito live (opzionale, "#" o assente per nascondere il bottone) */
  live?: string;
  /** URL del repository GitHub (opzionale) */
  repo?: string;
  /** Testimonianza del cliente — SOLO se reale (opzionale) */
  testimonial?: Testimonial;
  /** Se true, può essere usato in futuro per evidenziare il progetto */
  featured?: boolean;
}

/* ============================================================
 *  ELENCO PROGETTI (casi studio reali)
 * ============================================================ */
export const projects: Project[] = [
  /* -------- CASO STUDIO #1 — I.L. Carni SRL -------- */
  {
    slug: "il-carni-srl",
    title: "Vetrina multilingue — settore alimentare",
    kind: "reale",
    category: "sito-web",
    client: "Progetto personale · sito vetrina multilingue",
    sector: "Settore alimentare",
    year: "2025",
    description:
      "Sito vetrina multilingue per il settore alimentare: un progetto in cui ho curato design, animazioni e ottimizzazione tecnica.",
    challenge:
      "Progettare e sviluppare una vetrina online elegante e veloce, capace di raccontare storia e prodotti di un'attività del settore alimentare, curando ogni dettaglio di design, performance e accessibilità.",
    solution:
      "Ho costruito un sito statico leggerissimo, con layout one-page, animazioni fluide e versioni in tre lingue. Ho curato la struttura semantica, i dati strutturati per la SEO e l'ottimizzazione delle immagini.",
    features: [
      "Sezione storia presentata come un percorso nel tempo, dal 1971 a oggi",
      "Catalogo delle specialità con schede dei singoli prodotti",
      "Sezione dedicata a qualità e certificazioni",
      "Galleria fotografica di ambienti, produzione e prodotti",
      "Interfaccia disponibile in italiano, inglese e spagnolo",
      "Contatto diretto tramite telefono, email e WhatsApp",
    ],
    results: [
      "Sito statico velocissimo, senza framework lato client",
      "Design responsive curato per smartphone, tablet e desktop",
      "Supporto multilingua: italiano, inglese e spagnolo",
      "Ottimizzazione SEO con dati strutturati e immagini in formato WebP",
    ],
    stack: [
      "HTML/CSS",
      "Tailwind CSS",
      "JavaScript",
      "WebP",
      "SEO / Schema.org",
      "Multilingua",
    ],
    image: "/projects/il-carni-srl.png",
    imageAlt:
      "Anteprima della homepage di un sito vetrina multilingue per il settore alimentare",
    gradient: "linear-gradient(135deg,#ffb3a0,#b6a4ff)",
    live: "https://www.ilcarnisrl.it",
    featured: true,
  },

  /* ============================================================
   *  ⬇⬇⬇  MODELLO — COME AGGIUNGERE UN NUOVO PROGETTO  ⬇⬇⬇
   *  Copia il blocco qui sotto (togli i delimitatori di commento)
   *  e compila i campi. I filtri per categoria si creano da soli.
   *
   *  {
   *    slug: "nome-progetto",
   *    title: "Nome Progetto",
   *    kind: "reale",                            // "reale" | "demo"
   *    category: "sito-web",                     // libera
   *    client: "Nome cliente — Città",
   *    sector: "Settore di attività",
   *    year: "2026",
   *    description: "Sintesi in una riga per la card.",
   *    challenge: "Qual era il problema / l'esigenza del cliente.",
   *    solution: "Cosa hai realizzato, spiegato in parole semplici.",
   *    features: ["Funzionalità 1", "Funzionalità 2", "Funzionalità 3"],
   *    results: ["Vantaggio concreto 1", "Vantaggio concreto 2"],
   *    stack: ["Next.js", "TypeScript", "Tailwind"],
   *    image: "/projects/nome-progetto.webp",    // opzionale
   *    gradient: "linear-gradient(135deg,#b6a4ff,#86e6ff)",
   *    live: "https://...",                      // opzionale
   *    repo: "https://github.com/...",           // opzionale
   *    testimonial: {                            // opzionale, SOLO se reale
   *      quote: "Testo della recensione del cliente.",
   *      author: "Nome Cognome",
   *      role: "Ruolo, Azienda",
   *    },
   *  },
   * ============================================================ */
];

/* ============================================================
 *  CATEGORIE AUTOMATICHE
 *  Vengono ricavate dai progetti: non serve aggiornarle a mano.
 *  Puoi sovrascrivere l'etichetta visualizzata mappandola qui.
 * ============================================================ */

/** Etichette personalizzate (chiave = valore di `category`) */
const categoryLabels: Record<string, string> = {
  "sito-web": "Siti web",
  ecommerce: "E-commerce",
  gestionale: "Gestionali",
  "web-app": "Web App",
};

export interface CategoryItem {
  value: string;
  label: string;
}

/** Costruisce dinamicamente l'elenco filtri dai progetti */
export function getCategories(items: Project[] = projects): CategoryItem[] {
  const unique = Array.from(new Set(items.map((p) => p.category)));
  const formatted = unique.map((value) => ({
    value,
    label:
      categoryLabels[value] ??
      value.charAt(0).toUpperCase() + value.slice(1),
  }));
  return [{ value: "all", label: "Tutti" }, ...formatted];
}
