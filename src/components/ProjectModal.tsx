"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

/**
 * Dettaglio del progetto in stile "caso studio".
 * Modale accessibile: chiusura con Esc / click sullo sfondo, focus iniziale
 * sul pulsante di chiusura e blocco dello scroll della pagina sottostante.
 */
export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  // onClose può cambiare identità a ogni render del genitore: lo teniamo in un
  // ref così l'effetto di apertura/chiusura dipende solo da `project`.
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  // Il modale viene montato via portal in <body>: così esce dal contesto di
  // impilamento della sezione "Progetti" (position:relative + z-index) e non
  // può essere coperto dalle sezioni successive. `mounted` evita il portal in SSR.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!project) return;
    const close = () => onCloseRef.current();

    // Aggiunge una voce nella cronologia: così il tasto "indietro" del
    // telefono (o il gesto di ritorno) chiude il modale invece di uscire dal sito.
    window.history.pushState({ projectModal: true }, "");
    const onPop = () => close();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("popstate", onPop);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      window.removeEventListener("popstate", onPop);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      // Se la chiusura è avvenuta dall'interfaccia (X, sfondo, Esc) e non dal
      // tasto indietro, rimuoviamo la voce di cronologia che avevamo aggiunto.
      if (window.history.state?.projectModal) {
        window.history.back();
      }
    };
  }, [project]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 sm:items-center sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          {/* Sheet in vetro: sale dal basso su smartphone, centrato su desktop */}
          <motion.div
            className="glass-sheet relative flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-[2rem] sm:rounded-[2rem]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Barra superiore fissa: chiusura sempre raggiungibile */}
            <div className="flex items-center justify-between px-5 pb-2 pt-3">
              <span aria-hidden className="h-1 w-9 rounded-full bg-white/20 sm:invisible" />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Chiudi"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm text-ink transition hover:bg-white/15"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto overscroll-contain px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-8 sm:pb-8">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-white/5">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? `Anteprima del sito ${project.title}`}
                    fill
                    sizes="(max-width:768px) 100vw, 640px"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-semibold text-muted">
                      {project.title}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-[13px] text-muted-2">
                <span>{project.sector}</span>
                {project.year && (
                  <>
                    <span aria-hidden>·</span>
                    <span>{project.year}</span>
                  </>
                )}
              </div>
              <h2
                id="project-modal-title"
                className="mt-1.5 text-3xl font-semibold tracking-[-0.03em]"
              >
                {project.title}
              </h2>
              <p className="mt-1 text-sm text-muted">{project.client}</p>

              <CaseBlock label="Obiettivo" text={project.challenge} />
              <CaseBlock label="Come l'ho sviluppato" text={project.solution} />
              <CaseList label="Funzionalità" items={project.features} />
              <CaseList label="Punti chiave" items={project.results} />

              {project.testimonial && (
                <figure className="mt-8 border-l-2 border-accent pl-4">
                  <blockquote className="text-[15px] leading-relaxed text-ink">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-2 text-xs text-muted">
                    {project.testimonial.author}, {project.testimonial.role}
                  </figcaption>
                </figure>
              )}

              <div className="mt-8">
                <h3 className="mb-2.5 text-[13px] font-medium text-muted-2">
                  Tecnologie
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg bg-white/[0.06] px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-2 sm:flex-row">
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-solid"
                  >
                    Visita il sito ↗
                  </a>
                )}
                {project.repo && project.repo !== "#" && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-glass bg-white/[0.06]"
                  >
                    Codice su GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function CaseBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="mt-7">
      <h3 className="mb-1.5 text-[13px] font-medium text-muted-2">{label}</h3>
      <p className="text-[15px] leading-relaxed text-muted">{text}</p>
    </div>
  );
}

function CaseList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="mt-7">
      <h3 className="mb-2 text-[13px] font-medium text-muted-2">{label}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-muted">
            <span aria-hidden className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
