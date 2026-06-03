"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewport } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Wrapper "reveal on scroll" riutilizzabile.
 * Anima i figli con un fade-up cinematico quando entrano nel viewport.
 */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
