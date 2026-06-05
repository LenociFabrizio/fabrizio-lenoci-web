"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/content";
import { stagger, staggerItem, viewport } from "@/lib/motion";
import SectionHeading from "./ui/SectionHeading";

/**
 * Sezione "Dicono di me".
 * Si mostra SOLO se esistono testimonianze reali: finché l'array
 * `testimonials` è vuoto, il componente non renderizza nulla.
 */
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="relative z-10 px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="06"
          kicker="dicono di me"
          title="La parola ai clienti"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-6 md:grid-cols-2"
        >
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              variants={staggerItem}
              className="glass border-grad flex flex-col rounded-4xl p-8"
            >
              <span aria-hidden className="text-grad font-display text-5xl leading-none">
                &ldquo;
              </span>
              <blockquote className="mt-2 text-[17px] leading-relaxed text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-grad-cta font-display text-sm font-semibold text-[#0a0a12]">
                  {t.author
                    .split(" ")
                    .map((w) => w.charAt(0))
                    .join("")
                    .slice(0, 2)}
                </span>
                <span>
                  <span className="block font-display text-sm font-medium">
                    {t.author}
                  </span>
                  <span className="block text-xs text-muted">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
