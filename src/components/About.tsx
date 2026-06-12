"use client";

import { site } from "@/data/site";
import Reveal from "./ui/Reveal";

/** Dati sintetici, onesti e verificabili mostrati nella card profilo. */
const quickFacts = [
  { label: "Ruolo", value: "Sviluppatore full-stack" },
  { label: "Stack", value: "React · Next.js · Node" },
  { label: "Base", value: "Italia" },
  { label: "Formazione", value: "Diploma + Laurea in Informatica" },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 px-5 py-28 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
        <Reveal>
          <span className="font-mono text-xs text-lilac">/ 04 — chi sono</span>
          <h2 className="mb-6 mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Imparo costruendo,
            <br />
            dall'idea al deploy.
          </h2>
          {site.bio.map((p, i) => (
            <p key={i} className="mb-4 text-[17px] leading-relaxed text-muted">
              {p}
            </p>
          ))}

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {site.reasons.map((r) => (
              <div
                key={r.title}
                className="glass rounded-2xl border border-[var(--border)] p-5"
              >
                <div className="flex items-center gap-2 font-display text-[15px] font-medium">
                  <span aria-hidden className="text-grad">
                    ✦
                  </span>
                  {r.title}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass border-grad rounded-4xl p-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-grad-cta font-display text-xl font-semibold text-[#0a0a12]">
                {"</>"}
              </div>
              <div>
                <div className="text-sm text-muted">{site.role}</div>
              </div>
            </div>

            <dl className="divide-y divide-[var(--border)]">
              {quickFacts.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center justify-between gap-4 py-3.5"
                >
                  <dt className="font-mono text-xs uppercase tracking-wide text-muted-2">
                    {f.label}
                  </dt>
                  <dd className="text-right text-sm text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>

            <a
              href="#contact"
              className="btn-primary mt-7 flex justify-center rounded-full py-3 text-sm font-medium"
            >
              I miei contatti →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
