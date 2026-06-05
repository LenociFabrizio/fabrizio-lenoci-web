"use client";

import { motion } from "framer-motion";
import { services } from "@/data/content";
import { stagger, staggerItem, viewport } from "@/lib/motion";
import SectionHeading from "./ui/SectionHeading";

/** Sezione "Servizi": traduce le competenze tecniche in offerte chiare per il cliente. */
export default function Services() {
  return (
    <section id="services" className="relative z-10 px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          kicker="ambiti"
          title="Cosa sviluppo"
          description="Gli ambiti su cui mi concentro e che continuo ad approfondire, dal frontend al backend."
          align="row"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-6 sm:grid-cols-2"
        >
          {services.map((s) => (
            <motion.div
              key={s.n}
              variants={staggerItem}
              className="glass border-grad flex flex-col rounded-4xl p-7 transition-transform duration-500 ease-[cubic-bezier(0.16,0.84,0.32,1)] hover:-translate-y-1"
            >
              <div className="mb-4 flex items-baseline gap-3">
                <span className="text-grad font-display text-2xl font-semibold">
                  {s.n}
                </span>
                <h3 className="font-display text-xl font-medium">{s.title}</h3>
              </div>
              <p className="mb-5 text-[15px] leading-relaxed text-muted">
                {s.desc}
              </p>
              <p className="mt-auto font-mono text-xs text-muted-2">
                {s.forWho}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
