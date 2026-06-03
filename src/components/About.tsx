"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { focusTags, stackLevels } from "@/data/skills";
import { ease, fadeUp, viewport } from "@/lib/motion";
import Reveal from "./ui/Reveal";

export default function About() {
  return (
    <section id="about" className="relative z-10 px-5 py-28 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
        <Reveal>
          <span className="font-mono text-xs text-lilac">/ 02 — chi sono</span>
          <h2 className="mb-6 mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Codice pulito,
            <br />
            risultati su misura.
          </h2>
          {site.bio.map((p, i) => (
            <p
              key={i}
              className="mb-4 text-[17px] leading-relaxed text-muted"
            >
              {p}
            </p>
          ))}

          <div className="mt-9 flex flex-wrap gap-2.5">
            {focusTags.map((t) => (
              <span
                key={t}
                className="glass rounded-full border border-[var(--border)] px-4 py-2 font-mono text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass border-grad rounded-4xl p-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-grad-cta font-display text-2xl font-semibold text-[#0a0a12]">
                {site.name
                  .split(" ")
                  .map((w) => w.charAt(0))
                  .join("")}
              </div>
              <div>
                <div className="font-display text-lg font-medium">
                  {site.name}
                </div>
                <div className="text-sm text-muted">
                  {site.role} · {site.location}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {stackLevels.map((s, i) => (
                <div key={s.name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>{s.name}</span>
                    <span className="font-mono text-muted">{s.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-[var(--panel-strong)]">
                    <motion.span
                      className="block h-full rounded-full bg-gradient-to-r from-lilac to-cyan"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={viewport}
                      transition={{ duration: 1.3, ease, delay: 0.15 * i }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
