"use client";

import { useState } from "react";
import { site } from "@/data/site";
import Reveal from "./ui/Reveal";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      console.error("NEXT_PUBLIC_WEB3FORMS_KEY non configurata");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
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
          message: form.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        throw new Error(data.message ?? "Invio non riuscito");
      }
    } catch (err) {
      console.error("Errore invio form:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative z-10 px-5 py-28 sm:px-8">
      <Reveal className="mx-auto max-w-4xl">
        <div className="glass border-grad relative overflow-hidden rounded-5xl p-8 text-center sm:p-14">
          <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--lilac),transparent_65%)] opacity-25 blur-[40px]" />

          <span className="relative font-mono text-xs text-lilac">
            / 04 — contatti
          </span>
          <h2 className="relative mb-4 mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
            Hai un progetto
            <br />
            <span className="text-grad">in mente?</span>
          </h2>
          <p className="relative mx-auto mb-10 max-w-md text-muted">
            Raccontami la tua idea: rispondo entro 24 ore con un primo punto di
            vista e una stima.
          </p>

          <form
            onSubmit={handleSubmit}
            className="relative mx-auto grid max-w-xl gap-4 text-left sm:grid-cols-2"
          >
            <input
              required
              type="text"
              placeholder="Nome"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="glass rounded-xl border border-[var(--border)] bg-transparent px-4 py-3.5 text-sm"
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="glass rounded-xl border border-[var(--border)] bg-transparent px-4 py-3.5 text-sm"
            />
            <textarea
              required
              rows={4}
              placeholder="Parlami del progetto…"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="glass resize-none rounded-xl border border-[var(--border)] bg-transparent px-4 py-3.5 text-sm sm:col-span-2"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary rounded-xl py-4 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
            >
              {status === "sending"
                ? "Invio in corso…"
                : status === "sent"
                  ? "Messaggio inviato ✦"
                  : "Invia messaggio →"}
            </button>

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
