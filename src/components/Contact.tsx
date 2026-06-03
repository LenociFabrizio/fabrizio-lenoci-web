"use client";

import { useState } from "react";
import { site } from "@/data/site";
import Reveal from "./ui/Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Sostituisci con la tua integrazione (Resend, Formspree, route /api/contact…)
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
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
              className="btn-primary rounded-xl py-4 text-sm font-medium sm:col-span-2"
            >
              {sent ? "Messaggio inviato ✦" : "Invia messaggio →"}
            </button>
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
