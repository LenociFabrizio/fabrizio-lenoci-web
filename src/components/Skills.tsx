"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/data/skills";
import { stagger, staggerItem, viewport } from "@/lib/motion";
import SectionHeading from "./ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="05"
          kicker="competenze tecniche"
          title="Tecnologie e strumenti"
          description="La parte tecnica, per chi vuole saperne di più. Tu non devi conoscerla: ci penso io."
          align="row"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-6 md:grid-cols-2"
        >
          {capabilities.map((c) => (
            <motion.div
              key={c.n}
              variants={staggerItem}
              className="glass border-grad rounded-4xl p-7 transition-transform duration-500 ease-[cubic-bezier(0.16,0.84,0.32,1)] hover:-translate-y-1"
            >
              <div className="mb-4 flex items-baseline gap-3">
                <span className="text-grad font-display text-3xl font-semibold">
                  {c.n}
                </span>
                <h3 className="font-display text-xl font-medium">{c.title}</h3>
              </div>
              <p className="mb-5 text-sm text-muted">{c.description}</p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-[var(--panel-strong)] px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
