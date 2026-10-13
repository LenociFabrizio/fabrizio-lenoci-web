"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { scaleIn } from "@/lib/motion";

/**
 * Card progetto: anteprima, nome, a cosa serve e stack.
 * L'intera card apre il dettaglio; il link al sito live resta separato.
 */
export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  const hasLive = project.live && project.live !== "#";

  return (
    <motion.article
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.96 }}
      className="group glass relative overflow-hidden rounded-4xl p-2"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`Apri il dettaglio del progetto ${project.title}`}
        className="relative block aspect-[4/3] w-full overflow-hidden rounded-[1.6rem] bg-white/5 sm:aspect-[16/10]"
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? `Anteprima del sito ${project.title}`}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center px-6 text-center text-2xl font-semibold text-muted">
            {project.title}
          </span>
        )}
        {project.kind === "demo" && (
          <span className="glass-thick absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] text-ink">
            Demo
          </span>
        )}
      </button>

      <div className="px-4 pb-4 pt-5">
        <div className="flex items-baseline justify-between gap-3 text-[13px] text-muted-2">
          <span>{project.sector}</span>
          {project.year && <span className="tabular-nums">{project.year}</span>}
        </div>
        <h3 className="mt-1.5 text-[22px] font-semibold leading-tight tracking-[-0.02em]">
          {project.title}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="btn btn-solid flex-1 sm:flex-none"
          >
            Dettagli
          </button>
          {hasLive && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn btn-glass glass flex-1 sm:flex-none"
            >
              Sito live ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
