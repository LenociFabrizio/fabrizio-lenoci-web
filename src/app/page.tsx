import GlowBackground from "@/components/ui/GlowBackground";
import GrainOverlay from "@/components/ui/GrainOverlay";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main" className="relative">
      <GrainOverlay />
      <GlowBackground />
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Portfolio />
      <Process />
      <About />
      <Skills />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
