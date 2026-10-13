import { site } from "@/data/site";
import Reveal from "./ui/Reveal";

/** Dati sintetici, onesti e verificabili. */
const quickFacts = [
  { label: "Ruolo", value: "Sviluppatore full-stack" },
  { label: "Stack", value: "React · Next.js · Node" },
  { label: "Formazione", value: "Diploma e laurea in Informatica" },
  { label: "Base", value: "Italia" },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Chi sono
          </h2>
          <div className="mt-6 max-w-[60ch] space-y-4 text-[17px] leading-relaxed text-muted">
            {site.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:pt-3">
          <dl className="glass overflow-hidden rounded-3xl">
            {quickFacts.map((f) => (
              <div key={f.label} className="list-row">
                <dt className="text-[15px] text-muted-2">{f.label}</dt>
                <dd className="text-right text-[15px] text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
