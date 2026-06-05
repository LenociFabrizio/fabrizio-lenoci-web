"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { ease, stagger, staggerItem } from "@/lib/motion";
import MagneticButton from "./ui/MagneticButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-5 pb-20 pt-28 sm:px-8"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        {site.available && (
          <motion.div
            variants={staggerItem}
            className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-muted"
          >
            <span className="h-2 w-2 animate-floaty rounded-full bg-mint shadow-[0_0_10px_var(--mint)]" />
            Disponibile per nuovi progetti · {site.year}
          </motion.div>
        )}

        <motion.h1
          variants={staggerItem}
          className="font-display text-[clamp(2.6rem,8vw,6.5rem)] font-semibold leading-[0.98] tracking-tight"
        >
          Siti e software su misura
          <br />
          che fanno <span className="text-grad">crescere</span> il tuo{" "}
          <span className="text-grad-2 italic">business</span>.
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="mt-7 max-w-xl text-[17px] leading-relaxed text-muted"
        >
          Ciao, sono <strong className="text-ink">{site.name}</strong>. Progetto
          e realizzo siti web, e-commerce e software gestionali su misura per la
          tua attività. Mi occupo di tutto io — design, sviluppo, performance e
          pubblicazione — così tu pensi solo al tuo lavoro.
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#contact">
            Parliamo del tuo progetto →
          </MagneticButton>
          <MagneticButton href="#work" variant="ghost">
            Guarda i progetti
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="mt-16 grid max-w-md grid-cols-3 gap-6"
        >
          {site.stats.map((s) => (
            <div key={s.label}>
              <div className="text-grad font-display text-2xl font-semibold sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-muted-2">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease }}
        className="pointer-events-none absolute right-[-10%] top-1/2 hidden h-[460px] w-[460px] -translate-y-1/2 animate-floaty rounded-full border border-white/[0.06] lg:block"
      />
    </section>
  );
}
