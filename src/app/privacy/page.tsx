import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Come vengono trattati i dati inviati tramite il modulo di contatto del sito.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

/**
 * Pagina Privacy minima ma conforme: spiega quali dati raccoglie il form,
 * con quale finalità e i diritti dell'utente (GDPR). Personalizza i testi
 * con i tuoi dati reali (titolare del trattamento, P.IVA, sede).
 */
export default function PrivacyPage() {
  return (
    <main id="main" className="relative z-10 mx-auto max-w-3xl px-5 py-32 sm:px-8">
      <Link
        href="/"
        className="font-mono text-xs text-lilac transition hover:text-white"
      >
        ← Torna al sito
      </Link>

      <h1 className="mb-3 mt-6 font-display text-4xl font-semibold tracking-tight">
        Privacy Policy
      </h1>
      <p className="mb-10 text-sm text-muted-2">
        Ultimo aggiornamento: {site.year}
      </p>

      <div className="space-y-8 text-[15px] leading-relaxed text-muted">
        <section>
          <h2 className="mb-2 font-display text-xl font-medium text-ink">
            Titolare del trattamento
          </h2>
          <p>
            {site.name}
            {site.vatNumber ? ` — P.IVA ${site.vatNumber}` : ""}. Per qualsiasi
            richiesta puoi scrivere a{" "}
            <a href={`mailto:${site.email}`} className="underline hover:text-white">
              {site.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-xl font-medium text-ink">
            Quali dati raccolgo
          </h2>
          <p>
            Tramite il modulo di contatto raccolgo solo i dati che inserisci
            volontariamente: nome, indirizzo email, tipo di progetto e il
            contenuto del messaggio. Il sito non utilizza cookie di profilazione
            né strumenti di tracciamento pubblicitario.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-xl font-medium text-ink">
            Perché li uso
          </h2>
          <p>
            I dati vengono utilizzati esclusivamente per rispondere alla tua
            richiesta e per ricontattarti. Non vengono ceduti né venduti a
            terzi. L'invio del modulo avviene tramite il servizio Web3Forms, che
            inoltra il messaggio alla mia casella email.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-xl font-medium text-ink">
            Per quanto tempo
          </h2>
          <p>
            Conservo i messaggi solo per il tempo necessario a gestire la tua
            richiesta.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-xl font-medium text-ink">
            I tuoi diritti
          </h2>
          <p>
            Puoi chiedere in qualsiasi momento di accedere ai tuoi dati,
            correggerli o cancellarli, scrivendo a{" "}
            <a href={`mailto:${site.email}`} className="underline hover:text-white">
              {site.email}
            </a>
            . Hai inoltre diritto di proporre reclamo all'autorità di controllo
            (Garante per la protezione dei dati personali).
          </p>
        </section>
      </div>
    </main>
  );
}
