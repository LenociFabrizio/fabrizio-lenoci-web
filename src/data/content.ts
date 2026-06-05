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
    title: "Siti web e landing page",
    desc: "Siti veloci, curati e ottimizzati per Google e per il mobile, che trasformano i visitatori in contatti e clienti.",
    forWho: "Per chi vuole presentarsi online in modo professionale.",
  },
  {
    n: "02",
    title: "E-commerce e negozi online",
    desc: "Negozi online completi di pagamenti, spedizioni e gestione degli ordini. Vendi i tuoi prodotti 24 ore su 24, anche mentre dormi.",
    forWho: "Per chi vuole vendere prodotti o servizi online.",
  },
  {
    n: "03",
    title: "Gestionali e software su misura",
    desc: "Software costruito sui tuoi processi reali: prenotazioni, magazzino, clienti, automazioni. Meno lavoro manuale, meno errori, più tempo.",
    forWho: "Per chi perde tempo con fogli Excel e procedure manuali.",
  },
  {
    n: "04",
    title: "Supporto dopo il lancio",
    desc: "Non ti lascio solo dopo la consegna: quando ti servono, mi occupo di aggiornamenti e piccole modifiche al sito.",
    forWho: "Per chi vuole un punto di riferimento anche dopo la pubblicazione.",
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
    title: "Ascolto e analisi",
    desc: "Una prima chiamata gratuita e senza impegno per capire i tuoi obiettivi, il tuo pubblico e il budget a disposizione.",
  },
  {
    n: "02",
    title: "Proposta e preventivo",
    desc: "Ti invio una proposta chiara con tempi, costi e cosa è incluso. Tutto concordato in anticipo, senza sorprese.",
  },
  {
    n: "03",
    title: "Design e sviluppo",
    desc: "Realizzo il progetto tenendoti aggiornato a ogni passo, con anteprime che puoi provare in prima persona prima del lancio.",
  },
  {
    n: "04",
    title: "Lancio e supporto",
    desc: "Pubblico il progetto online, ti spiego come usarlo e resto disponibile per eventuali modifiche e aggiornamenti.",
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
    q: "Quanto costa un sito o un'applicazione?",
    a: "Ogni progetto è su misura, quindi il prezzo dipende dalle funzionalità che ti servono. Dopo una prima chiamata gratuita ti invio un preventivo chiaro e dettagliato, senza costi nascosti.",
  },
  {
    q: "Quanto tempo serve per realizzarlo?",
    a: "Una landing page richiede in genere 1-2 settimane, un sito completo 3-5 settimane, un gestionale dipende dalla complessità. Ti do una stima precisa fin dall'inizio.",
  },
  {
    q: "Il sito sarà mio? Posso modificarlo da solo?",
    a: "Sì. Il progetto, i contenuti e il dominio sono tuoi al 100%. Dove possibile inserisco un pannello semplice per aggiornare testi e immagini in autonomia, senza chiamare un tecnico.",
  },
  {
    q: "Cosa serve da parte mia per iniziare?",
    a: "Bastano la tua idea e qualche informazione sulla tua attività. Al resto — testi, struttura, grafica e aspetti tecnici — ti guido io passo passo.",
  },
  {
    q: "Posso chiederti modifiche dopo la consegna?",
    a: "Certo. Anche dopo la consegna posso occuparmi di aggiornamenti e piccole modifiche al sito, in base alle tue esigenze del momento.",
  },
  {
    q: "Lavori anche con clienti fuori dalla mia città?",
    a: "Certo. Lavoro da remoto con clienti in tutta Italia: chiamate, email e anteprime online rendono tutto semplice e comodo anche a distanza.",
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
