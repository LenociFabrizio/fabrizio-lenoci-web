"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { getCategories, projects, type Project } from "@/data/projects";
import SectionHeading from "./ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Portfolio() {
  const categories = getCategories();
  const [active, setActive] = useState<string>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="work" className="relative z-10 px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          kicker="progetti"
          title="Progetti e sperimentazioni"
          description="Una selezione di siti e applicazioni che ho sviluppato. Apri un progetto per vedere com'è nato e le tecnologie che ho usato."
          align="row"
        />

        {/* filtri — mostrati solo se c'è più di una categoria reale */}
        {categories.length > 2 && (
          <div className="mb-10 flex flex-wrap gap-2.5">
            {categories.map((c) => {
              const isActive = active === c.value;
              return (
                <button
                  key={c.value}
                  onClick={() => setActive(c.value)}
                  className={`glass relative rounded-full border px-4 py-2 text-sm transition ${
                    isActive
                      ? "border-transparent text-[#0a0a12]"
                      : "border-[var(--border)] text-muted hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="chip"
                      className="absolute inset-0 -z-10 rounded-full bg-grad-cta"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {c.label}
                </button>
              );
            })}
          </div>
        )}

        {/* griglia */}
        <div className="grid gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} onOpen={setSelected} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
