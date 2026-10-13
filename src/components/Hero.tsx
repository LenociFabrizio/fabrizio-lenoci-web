"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { stagger, staggerItem } from "@/lib/motion";

export default function Hero() {
  const [first, ...rest] = site.name.split(" ");

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end px-5 pb-28 pt-28 sm:items-center sm:px-8 sm:pb-20"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-5xl"
      >
        {site.available && (
          <motion.p
            variants={staggerItem}
            className="glass mb-7 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {site.location}
          </motion.p>
        )}

        <motion.h1
          variants={staggerItem}
          className="text-[clamp(3.6rem,17vw,9.5rem)] font-semibold leading-[0.88] tracking-[-0.045em]"
        >
          {first}
          <br />
          <span className="text-muted-2">{rest.join(" ")}</span>
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="mt-7 max-w-md text-lg leading-relaxed text-muted"
        >
          Sviluppatore full-stack. Qui raccolgo i siti e le applicazioni che
          progetto e sviluppo, dal frontend al backend.
        </motion.p>

        <motion.div variants={staggerItem} className="mt-9 flex gap-3">
          <a href="#work" className="btn btn-solid">
            Vedi i progetti
          </a>
          <a href="#contact" className="btn btn-glass glass">
            Contatti
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
