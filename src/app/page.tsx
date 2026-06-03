import GlowBackground from "@/components/ui/GlowBackground";
import GrainOverlay from "@/components/ui/GrainOverlay";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <GrainOverlay />
      <GlowBackground />
      <Navbar />
      <Hero />
      <Marquee />
      <Portfolio />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
