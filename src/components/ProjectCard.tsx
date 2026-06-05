"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { scaleIn } from "@/lib/motion";

/**
 * Card progetto (caso studio).
 * - Tutta la card è un pulsante che apre il dettaglio (modale).
 * - Animazione di entrata gestita da Framer Motion (scaleIn) per AnimatePresence.
 * - Hover gestito via CSS per non far girare il JS a 60 Hz.
 */
export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  const headline = project.results[0];

  return (
    <motion.article
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      className="group glass border-grad relative flex flex-col overflow-hidden rounded-4xl p-5 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,0.84,0.32,1)] hover:-translate-y-2 hover:shadow-soft"
    >
      {/* preview — apre il dettaglio del caso studio */}
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`Apri il dettaglio del progetto ${project.title}`}
        className="relative mb-5 block aspect-[16/10] overflow-hidden rounded-2xl text-left"
        style={{ background: project.gradient }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? `Anteprima del sito ${project.title}`}
            fill
            sizes="(max-width:640px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,0.84,0.32,1)] group-hover:scale-[1.05]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.16,0.84,0.32,1)] group-hover:scale-[1.05]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_50%)] opacity-40" />
            <span className="px-6 text-center font-display text-2xl font-semibold text-[rgba(10,10,18,0.85)]">
              {project.title}
            </span>
          </div>
        )}
        <span className="absolute bottom-3 left-3 rounded-md bg-[rgba(10,10,18,0.6)] px-2 py-1 font-mono text-[10px] text-white">
          {project.kind === "reale" ? "● progetto reale" : "demo / concept"}
        </span>
      </button>

      {/* meta */}
      <div className="flex items-start justify-between gap-3 px-1">
        <div>
          <h3 className="font-display text-xl font-medium">{project.title}</h3>
          <p className="mt-0.5 font-mono text-[11px] text-muted-2">
            {project.sector}
          </p>
        </div>
      </div>

      <p className="mt-2.5 px-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {headline && (
        <p className="mt-3 flex items-start gap-2 px-1 text-sm text-ink">
          <span aria-hidden className="text-mint">
            ✦
          </span>
          <span>{headline}</span>
        </p>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-3 px-1 pt-1">
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="btn-primary rounded-full px-4 py-2 text-xs font-medium"
        >
          Scopri il progetto →
        </button>
        {project.live && project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost glass rounded-full border border-[var(--border)] px-4 py-2 text-xs"
          >
            Sito live ↗
          </a>
        )}
      </div>
    </motion.article>
  );
}
