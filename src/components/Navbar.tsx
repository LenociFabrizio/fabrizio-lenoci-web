"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";

/**
 * Navigazione in vetro:
 *  - in alto una barra compatta con il nome (e i link su desktop);
 *  - su smartphone un dock fluttuante in basso, raggiungibile col pollice.
 * La sezione visibile viene evidenziata tramite IntersectionObserver.
 */
export default function Navbar() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6">
        <nav
          aria-label="Principale"
          className="glass-thick mx-auto flex h-12 max-w-5xl items-center justify-between rounded-full pl-5 pr-1.5"
        >
          <a href="#top" className="text-[15px] font-semibold tracking-tight">
            {site.brand}
          </a>

          <div className="hidden items-center gap-1 sm:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                aria-current={active === l.href ? "true" : undefined}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active === l.href
                    ? "bg-white/10 text-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href={`mailto:${site.email}`}
            className="btn btn-solid min-h-[36px] px-4 text-sm sm:hidden"
          >
            Scrivimi
          </a>
        </nav>
      </header>

      {/* Dock mobile */}
      <nav
        aria-label="Sezioni"
        className="glass-thick fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-50 flex -translate-x-1/2 gap-1 rounded-full p-1.5 sm:hidden"
      >
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            aria-current={active === l.href ? "true" : undefined}
            className={`flex min-h-[44px] items-center whitespace-nowrap rounded-full px-4 text-sm font-medium transition-colors ${
              active === l.href ? "bg-white/[0.14] text-ink" : "text-muted"
            }`}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </>
  );
}
