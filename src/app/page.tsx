import GlowBackground from "@/components/ui/GlowBackground";
import GrainOverlay from "@/components/ui/GrainOverlay";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main" className="relative">
      <GrainOverlay />
      <GlowBackground />
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
