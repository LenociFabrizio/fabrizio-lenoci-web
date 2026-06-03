import Reveal from "./Reveal";

interface SectionHeadingProps {
  index: string;
  kicker: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "row";
}

/** Intestazione di sezione coerente: indice mono + titolo display. */
export default function SectionHeading({
  index,
  kicker,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={
        align === "row"
          ? "mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          : "mb-14"
      }
    >
      <div>
        <span className="font-mono text-xs text-lilac">
          / {index} — {kicker}
        </span>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-sm text-sm text-muted">{description}</p>
      )}
    </Reveal>
  );
}
