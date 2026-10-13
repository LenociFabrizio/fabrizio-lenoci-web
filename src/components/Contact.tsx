"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/data/site";
import Reveal from "./ui/Reveal";

type Status = "idle" | "sending" | "sent" | "error";

const projectTypes = [
  "Un progetto del portfolio",
  "Tecnologie e sviluppo",
  "Una proposta o un'idea",
  "Altro",
];

/** Numero leggibile: "393331234567" → "+39 333 123 4567" */
const formatPhone = (n: string) =>
  `+${n.slice(0, 2)} ${n.slice(2, 5)} ${n.slice(5, 8)} ${n.slice(8)}`;

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
          Oggetto: form.projectType,
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
    "w-full rounded-2xl border border-[var(--line)] bg-white/[0.04] px-4 py-3.5 text-base text-ink placeholder:text-muted-2";

  const channels = [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    whatsappLink && { label: "WhatsApp", value: "Apri la chat", href: whatsappLink, external: true },
    site.phone && { label: "Telefono", value: formatPhone(site.phone), href: `tel:+${site.phone}` },
    ...site.socials
      .filter((s) => s.href.startsWith("http"))
      .map((s) => ({
        label: s.label,
        value: s.href.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, ""),
        href: s.href,
        external: true,
      })),
  ].filter(Boolean) as { label: string; value: string; href: string; external?: boolean }[];

  return (
    <section id="contact" className="relative z-10 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Contatti
          </h2>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-muted">
            Per informazioni o per approfondire un progetto, scrivimi o
            chiamami. Rispondo {site.responseTime}.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-8 grid gap-4 md:grid-cols-2 md:items-start">
          <ul className="glass overflow-hidden rounded-3xl">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="list-row"
                >
                  <span className="text-[15px] text-muted-2">{c.label}</span>
                  <span className="flex min-w-0 items-center gap-2 text-[15px] text-ink">
                    <span className="truncate">{c.value}</span>
                    <span aria-hidden className="text-muted-2">
                      {c.external ? "↗" : "›"}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Modulo secondario: chiuso di default per non appesantire la pagina */}
          <details className="glass group overflow-hidden rounded-3xl">
            <summary className="list-row">
              <span className="text-[15px] text-ink">Scrivimi un messaggio</span>
              <span
                aria-hidden
                className="text-lg text-muted-2 transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>

            <form
              onSubmit={handleSubmit}
              className="grid gap-3 border-t border-[var(--line)] p-4 sm:p-5"
            >
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
              <label htmlFor="c-type" className="sr-only">
                Motivo del contatto
              </label>
              <select
                id="c-type"
                value={form.projectType}
                onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                className={`${fieldClass} appearance-none`}
              >
                {projectTypes.map((t) => (
                  <option key={t} value={t} className="bg-bg text-ink">
                    {t}
                  </option>
                ))}
              </select>
              <label htmlFor="c-message" className="sr-only">
                Messaggio
              </label>
              <textarea
                id="c-message"
                required
                rows={4}
                placeholder="Messaggio"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${fieldClass} resize-none`}
              />

              <label className="flex items-start gap-2.5 text-xs leading-relaxed text-muted">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--accent)]"
                />
                <span>
                  Ho letto la{" "}
                  <a href="/privacy" className="underline hover:text-ink">
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
                className="btn btn-solid w-full disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "sending"
                  ? "Invio in corso…"
                  : status === "sent"
                    ? "Messaggio inviato"
                    : "Invia"}
              </button>

              <p role="status" className="text-sm empty:hidden">
                {status === "sent" &&
                  "Grazie, ho ricevuto il tuo messaggio. Ti rispondo appena possibile: controlla anche lo spam."}
                {status === "error" && (
                  <span className="text-red-300">
                    Invio non riuscito. Riprova o scrivimi a{" "}
                    <a href={`mailto:${site.email}`} className="underline">
                      {site.email}
                    </a>
                    .
                  </span>
                )}
              </p>
            </form>
          </details>
        </Reveal>
      </div>
    </section>
  );
}
