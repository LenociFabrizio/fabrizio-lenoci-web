import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--border)] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-2 sm:flex-row">
        <span className="font-display flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-grad-cta" />
          {site.brand}
        </span>
        <span>
          © {site.year} {site.name} — Tutti i diritti riservati.
        </span>
        <span className="font-mono text-xs">Progettato e sviluppato in proprio ✦</span>
      </div>
    </footer>
  );
}
