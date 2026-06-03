"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { scaleIn } from "@/lib/motion";

/**
 * Card progetto.
 * - Animazione di entrata gestita da Framer Motion (scaleIn) per AnimatePresence
 * - Hover gestito interamente via CSS per non far girare il JS a 60 Hz
 */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      className="group glass border-grad relative overflow-hidden rounded-4xl p-5 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,0.84,0.32,1)] hover:-translate-y-2 hover:shadow-soft"
    >
      {/* preview */}
      <div
        className="relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl"
        style={{ background: project.gradient }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`Anteprima di ${project.title}`}
            fill
            sizes="(max-width:640px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,0.84,0.32,1)] group-hover:scale-[1.05]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.16,0.84,0.32,1)] group-hover:scale-[1.05]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_50%)] opacity-40" />
            <span className="font-display text-3xl font-semibold text-[rgba(10,10,18,0.85)]">
              {project.title}
            </span>
          </div>
        )}
        <div className="absolute bottom-3 left-3 flex gap-2 font-mono text-[10px]">
          <span className="rounded-md bg-[rgba(10,10,18,0.55)] px-2 py-1 text-white">
            ● live preview
          </span>
        </div>
      </div>

      {/* meta */}
      <div className="flex items-start justify-between gap-3 px-1">
        <h3 className="font-display text-xl font-medium">{project.title}</h3>
        <span className="glass rounded-full border border-[var(--border)] px-2 py-1 font-mono text-[10px] text-muted">
          {project.category}
        </span>
      </div>

      <p className="mt-2 px-1 text-sm text-muted">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5 px-1">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-md bg-[var(--panel-strong)] px-2 py-1 font-mono text-[11px] text-muted"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-3 px-1">
        {project.live && project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="btn-primary rounded-full px-4 py-2 text-xs font-medium"
          >
            Live ↗
          </a>
        )}
        {project.repo && project.repo !== "#" && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost glass rounded-full border border-[var(--border)] px-4 py-2 text-xs"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.article>
  );
}
