/**
 * ============================================================
 *  SKILL & CAPABILITIES
 *  Modifica liberamente livelli, tag e descrizioni qui sotto.
 * ============================================================
 */

/** Barre di competenza mostrate nella card About. */
export const stackLevels: { name: string; level: number }[] = [
  { name: "Frontend", level: 95 },
  { name: "Backend & API", level: 88 },
  { name: "Software gestionali", level: 90 },
  { name: "Database & Performance", level: 85 },
];

/** Tag tecnologici della sezione About. */
export const focusTags = [
  "Applicazioni Web",
  "Siti Web Moderni",
  "Software Gestionali",
  "Soluzioni Custom",
  "Full-Stack",
];

export interface Capability {
  n: string;
  title: string;
  description: string;
  tags: string[];
}

/** Sezione Competenze — layout a griglia creativa. */
export const capabilities: Capability[] = [
  {
    n: "01",
    title: "Frontend Development",
    description:
      "Interfacce React/Next.js componibili, accessibili e tipizzate. Architetture scalabili e design system riutilizzabili.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    n: "02",
    title: "Backend & API",
    description:
      "API REST, autenticazione, integrazioni di terze parti e logica di dominio robusta per applicazioni e gestionali.",
    tags: ["Node.js", "Express", "Prisma", "REST"],
  },
  {
    n: "03",
    title: "Software Gestionali",
    description:
      "Applicazioni gestionali: dashboard, CRM, sistemi di gestione interna e strumenti dipartimentali, per esplorare logiche di dominio reali.",
    tags: ["Web App", "SaaS", "Automazioni", "CMS"],
  },
  {
    n: "04",
    title: "Database & Performance",
    description:
      "Modellazione dati, query ottimizzate, caching e Core Web Vitals al massimo per esperienze fluide.",
    tags: ["Postgres", "MySQL", "Redis", "Lighthouse 99"],
  },
];
