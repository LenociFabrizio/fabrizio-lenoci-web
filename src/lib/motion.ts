import type { Variants } from "framer-motion";

/** Easing cinematico condiviso. */
export const ease: [number, number, number, number] = [0.16, 0.84, 0.32, 1];

/** Reveal verticale base. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

/** Container con stagger per liste/griglie. */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Item figlio di uno stagger container. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/** Scale-in morbido, utile per le card. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease } },
};

/** Viewport condiviso per `whileInView`. */
export const viewport = { once: true, margin: "-80px" } as const;
