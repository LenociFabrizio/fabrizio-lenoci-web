"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/data/site";
import Reveal from "./ui/Reveal";

type Status = "idle" | "sending" | "sent" | "error";

const projectTypes = [
  "Sito web / vetrina",
  "E-commerce",
  "Gestionale / software su misura",
  "Manutenzione di un sito esistente",
  "Altro / non so ancora",
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: projectTypes[0],
    message: "",
  });
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      console.error("NEXT_PUBLIC_WEB3FORMS_KEY non configurata");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Nuovo messaggio dal portfolio — ${form.name}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          "Tipo di progetto": form.projectType,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", projectType: projectTypes[0], message: "" });
        setConsent(false);
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        throw new Error(data.message ?? "Invio non riuscito");
      }
    } catch (err) {
      console.error("Errore invio form:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const fieldClass =
    "glass rounded-xl border border-[var(--border)] bg-transparent px-4 py-3.5 text-sm";

  return (
    <section id="contact" className="relative z-10 px-5 py-28 sm:px-8">
      <Reveal className="mx-auto max-w-4xl">
        <div className="glass border-grad relative overflow-hidden rounded-5xl p-8 text-center sm:p-14">
          <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--lilac),transparent_65%)] opacity-25 blur-[40px]" />

          <span className="relative font-mono text-xs text-lilac">
            / 08 — contatti
          </span>
          <h2 className="relative mb-4 mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
            Hai un progetto
            <br />
            <span className="text-grad">in mente?</span>
          </h2>
          <p className="relative mx-auto mb-8 max-w-lg text-muted">
            Raccontami la tua idea, anche in due righe. Ti rispondo personalmente{" "}
            {site.responseTime} con un primo parere, le possibili soluzioni e una
            stima indicativa di tempi e costi. La prima chiamata è gratuita e
            senza impegno.
          </p>

          {/* contatto diretto rapido */}
          {(whatsappLink || site.phone) && (
            <div className="relative mb-10 flex flex-wrap items-center justify-center gap-3">
              {whatsappLink && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost glass inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm"
                >
                  <span aria-hidden className="text-mint">
                    ●
                  </span>
                  Scrivimi su WhatsApp
                </a>
              )}
              {site.phone && (
                <a
                  href={`tel:+${site.phone}`}
                  className="btn-ghost glass inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm"
                >
                  Chiamami
                </a>
              )}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="relative mx-auto grid max-w-xl gap-4 text-left sm:grid-cols-2"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="c-name" className="sr-only">
                Nome
              </label>
              <input
                id="c-name"
                required
                type="text"
                autoComplete="name"
                placeholder="Nome"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="c-email" className="sr-only">
                Email
              </label>
              <input
                id="c-email"
                required
                type="email"
                autoComplete="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="c-type" className="sr-only">
                Tipo di progetto
              </label>
              <select
                id="c-type"
                value={form.projectType}
                onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                className={`${fieldClass} appearance-none`}
              >
                {projectTypes.map((t) => (
                  <option key={t} value={t} className="bg-bg-soft text-ink">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="c-message" className="sr-only">
                Messaggio
              </label>
              <textarea
                id="c-message"
                required
                rows={4}
                placeholder="Parlami del progetto…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${fieldClass} resize-none`}
              />
            </div>

            <label className="flex items-start gap-2.5 text-xs leading-relaxed text-muted sm:col-span-2">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--lilac)]"
              />
              <span>
                Ho letto la{" "}
                <a href="/privacy" className="underline hover:text-white">
                  Privacy Policy
                </a>{" "}
                e acconsento al trattamento dei miei dati per essere
                ricontattato. I dati vengono usati solo per risponderti e non
                sono condivisi con terzi.
              </span>
            </label>

            <button
              type="submit"
              disabled={status === "sending" || !consent}
              className="btn-primary rounded-xl py-4 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
            >
              {status === "sending"
                ? "Invio in corso…"
                : status === "sent"
                  ? "Messaggio inviato ✦"
                  : "Invia messaggio →"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-mint sm:col-span-2">
                Grazie! Ho ricevuto il tuo messaggio e ti rispondo{" "}
                {site.responseTime}. Controlla anche lo spam, per sicurezza.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400 sm:col-span-2">
                Ops, qualcosa è andato storto. Riprova o scrivimi direttamente a{" "}
                <a href={`mailto:${site.email}`} className="underline">
                  {site.email}
                </a>
                .
              </p>
            )}
          </form>

          <div className="relative mt-10 flex items-center justify-center gap-6 text-sm text-muted">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="nav-link transition hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
