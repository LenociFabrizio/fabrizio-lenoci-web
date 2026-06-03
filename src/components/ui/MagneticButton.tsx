"use client";

import { motion } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
}

/**
 * Bottone con effetto "magnetico": segue leggermente il cursore.
 * Degrada con grazia su touch (nessun movimento del puntatore).
 */
export default function MagneticButton({
  children,
  href = "#",
  variant = "primary",
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.25;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.25;
    setPos({ x, y });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const base =
    variant === "primary"
      ? "btn-primary"
      : "btn-ghost glass border border-[var(--border)]";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.5 }}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium ${base} ${className}`}
    >
      {children}
    </motion.a>
  );
}
