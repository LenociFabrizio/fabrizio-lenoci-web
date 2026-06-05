/**
 * ============================================================
 *  CONTENUTI DELLE SEZIONI "DI FIDUCIA"
 *  Servizi · Come lavoro · Domande frequenti · Testimonianze
 *
 *  Tutto scritto in un linguaggio semplice, pensato per clienti
 *  NON tecnici (titolari d'azienda, professionisti, negozianti).
 *  Modifica liberamente i testi qui: i componenti si aggiornano da soli.
 * ============================================================
 */

/* ---------------------------------------------------------------- */
/*  SERVIZI OFFERTI                                                 */
/* ---------------------------------------------------------------- */

export interface Service {
  /** Numero progressivo mostrato come indice */
  n: string;
  /** Titolo del servizio (in parole comprensibili a tutti) */
  title: string;
  /** Descrizione orientata al beneficio per il cliente */
  desc: string;
  /** A chi è rivolto / quando serve */
  forWho: string;
}

export const services: Service[] = [
  {
    n: "01",
    title: "Siti web e interfacce",
    desc: "Interfacce moderne, veloci e responsive, curate nel design, nelle animazioni e nell'esperienza d'uso.",
    forWho: "Frontend, UI e attenzione ai dettagli.",
  },
  {
    n: "02",
    title: "E-commerce e flussi complessi",
    desc: "Cataloghi, carrello, pagamenti e gestione degli ordini: esploro l'intero funzionamento di un negozio online.",
    forWho: "Integrazioni e logiche articolate.",
  },
  {
    n: "03",
    title: "Gestionali e applicazioni",
    desc: "Applicazioni con database, autenticazione e logiche di dominio, per mettere alla prova architetture reali.",
    forWho: "Backend, dati e architettura.",
  },
  {
    n: "04",
    title: "Performance e qualità",
    desc: "Ottimizzazione, SEO tecnica, accessibilità e Core Web Vitals: studio come rendere il web veloce e accessibile.",
    forWho: "Velocità, accessibilità e best practice.",
  },
];

/* ---------------------------------------------------------------- */
/*  COME LAVORO — IL PROCESSO IN 4 PASSI                            */
/* ---------------------------------------------------------------- */

export interface ProcessStep {
  n: string;
  title: string;
  desc: string;
}

export const workProcess: ProcessStep[] = [
  {
    n: "01",
    title: "Idea e analisi",
    desc: "Parto da un'idea o da una tecnologia che voglio approfondire e definisco obiettivi, contenuti e funzionalità.",
  },
  {
    n: "02",
    title: "Design e progettazione",
    desc: "Disegno l'interfaccia e l'architettura del progetto e scelgo gli strumenti più adatti a realizzarlo.",
  },
  {
    n: "03",
    title: "Sviluppo",
    desc: "Scrivo il codice, frontend e backend, curando qualità, performance e dettagli a ogni passaggio.",
  },
  {
    n: "04",
    title: "Deploy e rifinitura",
    desc: "Pubblico il progetto online, lo provo su più dispositivi e continuo a migliorarlo nel tempo.",
  },
];

/* ---------------------------------------------------------------- */
/*  DOMANDE FREQUENTI                                               */
/* ---------------------------------------------------------------- */

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "Che tipo di progetti realizzi?",
    a: "Siti web, interfacce, e-commerce e applicazioni full-stack. Ogni progetto nasce per approfondire una tecnologia, un'idea di design o un aspetto dello sviluppo.",
  },
  {
    q: "Quali tecnologie utilizzi?",
    a: "Principalmente React, Next.js, TypeScript e Node.js, con Tailwind CSS per l'interfaccia e database come PostgreSQL. Mi piace però sperimentare strumenti nuovi a ogni progetto.",
  },
  {
    q: "I progetti sono online?",
    a: "Alcuni progetti sono pubblicati e raggiungibili dal vivo; per ognuno trovi, dove disponibili, il link al sito e al codice.",
  },
  {
    q: "Aggiorni spesso il portfolio?",
    a: "Sì. Aggiungo nuovi progetti man mano che li realizzo, perciò questo spazio cresce e cambia nel tempo.",
  },
  {
    q: "Posso vedere il codice dei progetti?",
    a: "Quando il codice è pubblico trovi il link al repository direttamente nella scheda del progetto.",
  },
  {
    q: "Come posso contattarti?",
    a: "Trovi tutti i miei recapiti nella sezione Contatti: sono sempre disponibile a confrontarmi su idee, tecnologie e sviluppo.",
  },
];

/* ---------------------------------------------------------------- */
/*  TESTIMONIANZE / RECENSIONI                                      */
/*                                                                  */
/*  ⚠ Inserisci SOLO testimonianze REALI dei tuoi clienti.         */
/*    Finché l'array è vuoto, la sezione non viene mostrata:        */
/*    nessuna recensione finta online.                              */
/* ---------------------------------------------------------------- */

export interface Testimonial {
  /** Testo della recensione */
  quote: string;
  /** Nome di chi l'ha rilasciata */
  author: string;
  /** Ruolo e azienda, es. "Titolare, I.L. Carni SRL" */
  role: string;
}

export const testimonials: Testimonial[] = [
  // Esempio di struttura (NON è una recensione reale — rimuovi questo commento
  // e popola l'array quando avrai testimonianze vere dei clienti):
  //
  // {
  //   quote: "Fabrizio ha capito subito cosa volevamo. Sito consegnato nei tempi e oltre le aspettative.",
  //   author: "Vito Gattulli",
  //   role: "Amministratore, I.L. Carni SRL",
  // },
];
