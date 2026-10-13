import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative z-10 px-5 pb-28 sm:px-8 sm:pb-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 border-t border-[var(--line)] pt-6 text-[13px] text-muted-2 sm:flex-row sm:justify-between">
        <span>
          © {site.year} {site.name}
          {site.vatNumber && ` · P.IVA ${site.vatNumber}`}
        </span>
        <a href="/privacy" className="transition hover:text-ink">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
