"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Rispetta la preferenza di sistema "riduci animazioni":
 * con reducedMotion="user" Framer Motion disattiva automaticamente
 * le animazioni di transform/layout per chi ha attivato l'opzione.
 */
export default function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
