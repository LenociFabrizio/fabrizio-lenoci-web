"use client";

import { AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { getCategories, projects, type Project } from "@/data/projects";
import Reveal from "./ui/Reveal";
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
    <section id="work" className="relative z-10 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-8 flex items-baseline justify-between gap-4">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Progetti
          </h2>
          <span className="font-mono text-sm tabular-nums text-muted-2">
            {String(projects.length).padStart(2, "0")}
          </span>
        </Reveal>

        {/* filtri — mostrati solo se c'è più di una categoria reale */}
        {categories.length > 2 && (
          <div className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            {categories.map((c) => (
              <button
                key={c.value}
                type="button"
                onClick={() => setActive(c.value)}
                aria-pressed={active === c.value}
                className={`btn shrink-0 text-sm ${
                  active === c.value ? "btn-solid" : "btn-glass glass text-muted"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        )}

        <div className="grid gap-5 md:grid-cols-2">
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
