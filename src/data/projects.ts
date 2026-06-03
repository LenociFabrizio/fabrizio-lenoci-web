/**
 * ============================================================
 *  PROGETTI DEL PORTFOLIO
 *  Questo è l'UNICO file da modificare per gestire i progetti.
 *
 *  ➜ Per AGGIUNGERE un progetto:
 *      Duplica il blocco "TEMPLATE" qui sotto, decommenta e
 *      compila i campi. La categoria può essere una qualsiasi
 *      stringa: i filtri vengono generati automaticamente.
 *
 *  ➜ Per MODIFICARE un progetto: cambia i suoi campi qui.
 *  ➜ Per RIMUOVERE un progetto: cancella il suo oggetto.
 *
 *  Filtri, animazioni e griglia funzionano in automatico.
 * ============================================================
 */

export interface Project {
  /** Identificatore univoco (usato come key React, in lowercase con trattini) */
  slug: string;
  /** Nome del progetto mostrato nella card */
  title: string;
  /** Categoria libera: "web" | "ecommerce" | "landing" | "dashboard" | "gestionale" | ... */
  category: string;
  /** Breve descrizione (1-2 righe) */
  description: string;
  /** Stack tecnologico — apparirà come chip mono */
  stack: string[];
  /** Percorso dell'anteprima reale, es. "/projects/nome.webp" (opzionale) */
  image?: string;
  /** Gradiente di fallback mostrato se `image` non è impostata */
  gradient: string;
  /** URL del sito live (opzionale, "#" per nascondere il bottone) */
  live?: string;
  /** URL del repository GitHub (opzionale) */
  repo?: string;
  /** Se true, può essere usato in futuro per evidenziare il progetto */
  featured?: boolean;
}

/* ============================================================
 *  ELENCO PROGETTI
 *  ⚠ I progetti seguenti sono PLACEHOLDER dimostrativi.
 *    Sostituiscili man mano con i tuoi lavori reali.
 * ============================================================ */
export const projects: Project[] = [
  /* -------- progetto placeholder #1 -------- */
  {
    slug: "lumen-finance",
    title: "Lumen Finance",
    category: "dashboard",
    description:
      "Dashboard analitica per fintech con grafici realtime e dark mode nativa.",
    stack: ["Next.js", "TypeScript", "D3", "Postgres"],
    gradient: "linear-gradient(135deg,#b6a4ff,#86e6ff)",
    live: "#",
    repo: "#",
    featured: true,
  },

  /* -------- progetto placeholder #2 -------- */
  {
    slug: "atelier-99",
    title: "Atelier 99",
    category: "ecommerce",
    description:
      "E-commerce headless per brand di moda, checkout in 2 step e CMS custom.",
    stack: ["Next.js", "Shopify", "Stripe", "Tailwind"],
    gradient: "linear-gradient(135deg,#ffb3a0,#b6a4ff)",
    live: "#",
    repo: "#",
  },

  /* -------- progetto placeholder #3 -------- */
  {
    slug: "pulse-studio",
    title: "Pulse Studio",
    category: "landing",
    description:
      "Landing cinematica per studio creativo con motion e parallasse leggera.",
    stack: ["React", "Framer Motion", "GSAP"],
    gradient: "linear-gradient(135deg,#86e6ff,#9dffce)",
    live: "#",
    repo: "#",
  },

  /* -------- progetto placeholder #4 -------- */
  {
    slug: "orbit-crm",
    title: "Orbit CRM",
    category: "gestionale",
    description:
      "Software gestionale SaaS per team commerciali: pipeline, automazioni e ruoli.",
    stack: ["Next.js", "tRPC", "Prisma", "Redis"],
    gradient: "linear-gradient(135deg,#9dffce,#86e6ff)",
    live: "#",
    repo: "#",
    featured: true,
  },

  /* -------- progetto placeholder #5 -------- */
  {
    slug: "marea-wellness",
    title: "Marea Wellness",
    category: "landing",
    description:
      "Sito vetrina per centro benessere, prenotazioni integrate e SEO.",
    stack: ["Astro", "Tailwind", "Sanity"],
    gradient: "linear-gradient(135deg,#ffb3a0,#86e6ff)",
    live: "#",
    repo: "#",
  },

  /* -------- progetto placeholder #6 -------- */
  {
    slug: "nebula-notes",
    title: "Nebula Notes",
    category: "web",
    description:
      "Applicazione web di note collaborative in tempo reale con editor a blocchi.",
    stack: ["React", "WebSocket", "Node", "Mongo"],
    gradient: "linear-gradient(135deg,#b6a4ff,#ffb3a0)",
    live: "#",
    repo: "#",
  },

  /* ============================================================
   *  ⬇⬇⬇  COME AGGIUNGERE UN NUOVO PROGETTO  ⬇⬇⬇
   *  Copia il blocco qui sotto, rimuovi i commenti `/_` e `_/`
   *  e compila i campi. Il filtro per categoria apparirà da solo.
   *
   *  {
   *    slug: "nome-progetto",
   *    title: "Nome Progetto",
   *    category: "web",                         // libera
   *    description: "Una breve descrizione del progetto.",
   *    stack: ["Next.js", "TypeScript", "Tailwind"],
   *    image: "/projects/nome-progetto.webp",   // opzionale
   *    gradient: "linear-gradient(135deg,#b6a4ff,#86e6ff)",
   *    live: "https://...",
   *    repo: "https://github.com/...",
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
  web: "Web App",
  ecommerce: "E-commerce",
  landing: "Landing",
  dashboard: "Dashboard",
  gestionale: "Gestionale",
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
