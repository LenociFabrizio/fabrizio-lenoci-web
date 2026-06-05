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
          className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto overscroll-contain bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          {/* Pulsante di chiusura fissato allo schermo: resta sempre
              raggiungibile anche scorrendo schede lunghe su mobile. */}
          <button
            ref={closeRef}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Chiudi"
            style={{ backgroundColor: "#14141f" }}
            className="fixed right-4 top-4 z-[81] flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-lg text-ink shadow-lg transition hover:text-white sm:right-6 sm:top-6"
          >
            ✕
          </button>

          <motion.div
            style={{ backgroundColor: "#0d0d17" }}
            className="border-grad relative my-auto w-full max-w-2xl rounded-4xl border border-[var(--border)] p-6 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9)] sm:p-9"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 0.84, 0.32, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* anteprima */}
            <div
              className="relative mb-6 aspect-[16/9] overflow-hidden rounded-3xl"
              style={{ background: project.gradient }}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageAlt ?? `Anteprima del sito ${project.title}`}
                  fill
                  sizes="(max-width:768px) 100vw, 640px"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-3xl font-semibold text-[rgba(10,10,18,0.85)]">
                    {project.title}
                  </span>
                </div>
              )}
            </div>

            <div className="mb-1 flex flex-wrap items-center gap-2 font-mono text-[11px] text-muted-2">
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
              className="font-display text-3xl font-semibold tracking-tight"
            >
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-muted">{project.client}</p>

            <CaseBlock label="L'obiettivo" text={project.challenge} />
            <CaseBlock label="Come l'ho sviluppato" text={project.solution} />

            <CaseList label="Cosa ho realizzato" items={project.features} />
            <CaseList label="Punti chiave" items={project.results} accent />

            {project.testimonial && (
              <figure className="glass mt-7 rounded-3xl border border-[var(--border)] p-6">
                <blockquote className="text-[15px] leading-relaxed text-ink">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-xs text-muted">
                  — {project.testimonial.author}, {project.testimonial.role}
                </figcaption>
              </figure>
            )}

            <div className="mt-7">
              <div className="mb-2 font-mono text-xs text-lilac">Tecnologie</div>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-[var(--panel-strong)] px-2 py-1 font-mono text-[11px] text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary rounded-full px-5 py-2.5 text-sm font-medium"
                >
                  Visita il sito ↗
                </a>
              )}
              {project.repo && project.repo !== "#" && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost glass rounded-full border border-[var(--border)] px-5 py-2.5 text-sm"
                >
                  Codice su GitHub ↗
                </a>
              )}
            </div>

            {/* Chiusura in fondo: comoda dopo aver scorso la scheda su mobile */}
            <button
              type="button"
              onClick={onClose}
              className="mt-8 w-full rounded-full border border-[var(--border)] py-3 text-sm text-muted transition hover:text-white"
            >
              ← Torna ai progetti
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function CaseBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="mt-6">
      <div className="mb-1.5 font-mono text-xs text-lilac">{label}</div>
      <p className="text-[15px] leading-relaxed text-muted">{text}</p>
    </div>
  );
}

function CaseList({
  label,
  items,
  accent = false,
}: {
  label: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div className="mt-6">
      <div className="mb-2 font-mono text-xs text-lilac">{label}</div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed text-muted">
            <span aria-hidden className={accent ? "text-mint" : "text-cyan"}>
              {accent ? "✦" : "›"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
