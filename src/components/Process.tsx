"use client";

import { motion } from "framer-motion";
import { workProcess } from "@/data/content";
import { stagger, staggerItem, viewport } from "@/lib/motion";
import SectionHeading from "./ui/SectionHeading";

/** Sezione "Come lavoro": spiega il processo in 4 passi per ridurre l'ansia del cliente. */
export default function Process() {
  return (
    <section id="process" className="relative z-10 px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          kicker="come lavoro"
          title="Dal primo contatto al lancio"
          description="Un percorso semplice e trasparente, così sai sempre cosa aspettarti a ogni passo."
          align="row"
        />

        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {workProcess.map((step) => (
            <motion.li
              key={step.n}
              variants={staggerItem}
              className="glass border-grad relative rounded-4xl p-7"
            >
              <span className="text-grad-2 font-display text-4xl font-semibold">
                {step.n}
              </span>
              <h3 className="mt-3 font-display text-lg font-medium">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.desc}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="btn-primary rounded-full px-7 py-3.5 text-sm font-medium"
          >
            Iniziamo dal primo passo →
          </a>
        </div>
      </div>
    </section>
  );
}
