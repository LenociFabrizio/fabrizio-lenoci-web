import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/** Web App Manifest — migliora SEO/Best Practices e l'installazione su mobile. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.role}`,
    short_name: site.brand,
    description: site.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#07070c",
    theme_color: "#07070c",
    lang: "it",
  };
}
