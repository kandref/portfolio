import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";
import Certifications from "@/components/Certifications";
import Speaking from "@/components/Speaking";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <Hero />
        <About />
        <Stats />
        <Experience />
        <Education />
        <TechStack />
        <Certifications />
        <Speaking />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
