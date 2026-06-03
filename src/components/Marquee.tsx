import { site } from "@/data/site";

/** Striscia di tecnologie a scorrimento infinito. */
export default function Marquee() {
  const items = [...site.marquee, ...site.marquee];
  return (
    <div className="relative z-10 overflow-hidden border-y border-[var(--border)] py-6">
      <div className="flex w-max animate-marquee gap-12 font-mono text-sm text-muted-2">
        {items.map((tech, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap">
            {tech} <span aria-hidden>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
