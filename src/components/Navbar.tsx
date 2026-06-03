"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 0.84, 0.32, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-5 pt-4 sm:px-8"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass border-grad" : "border border-transparent"
        }`}
      >
        <a
          href="#hero"
          className="flex items-center gap-2 font-display text-[15px] font-semibold tracking-tight"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-grad-cta shadow-glow-lilac" />
          {site.brand}
        </a>

        <div className="hidden items-center gap-8 text-sm text-muted md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link transition hover:text-white">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="btn-ghost glass hidden rounded-full border border-[var(--border)] px-4 py-2 text-sm sm:inline-flex"
        >
          Lavoriamo insieme
        </a>

        <button
          aria-label="Apri menu"
          onClick={() => setOpen((v) => !v)}
          className="glass flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] md:hidden"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-4 bg-ink" />
            <span className="block h-0.5 w-4 bg-ink" />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass border-grad mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-muted transition hover:bg-[var(--panel-strong)] hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
