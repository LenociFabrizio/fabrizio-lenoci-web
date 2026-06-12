import { navLinks, site, whatsappLink } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--border)] px-5 pt-16 pb-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* mini-CTA finale */}
        <div className="mb-12 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Vuoi approfondire un progetto?
          </h2>
          <a
            href="#contact"
            className="btn-primary rounded-full px-6 py-3 text-sm font-medium"
          >
            Contattami →
          </a>
        </div>

        <div className="grid gap-8 border-t border-[var(--border)] pt-10 sm:grid-cols-3">
          {/* brand */}
          <div>
            <span className="font-display flex items-center gap-2 text-[15px] font-semibold">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-grad-cta" />
              {site.brand}
            </span>
            <p className="mt-3 max-w-xs text-sm text-muted-2">{site.role}</p>
          </div>

          {/* navigazione */}
          <nav className="flex flex-col gap-2 text-sm text-muted">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>

          {/* contatti */}
          <div className="flex flex-col gap-2 text-sm text-muted">
            <a href={`mailto:${site.email}`} className="transition hover:text-white">
              {site.email}
            </a>
            {whatsappLink && (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                WhatsApp
              </a>
            )}
            {site.phone && (
              <a href={`tel:+${site.phone}`} className="transition hover:text-white">
                +{site.phone}
              </a>
            )}
            <a href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] pt-8 text-xs text-muted-2 sm:flex-row">
          <span>
            © {site.year} {site.name} — Tutti i diritti riservati.
          </span>
          {site.vatNumber && <span>P.IVA {site.vatNumber}</span>}
          <span className="font-mono">Progettato e sviluppato in proprio ✦</span>
        </div>
      </div>
    </footer>
  );
}
