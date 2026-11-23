import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal direction="up">
        <About />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={50}>
        <Services />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={50}>
        <WhyChooseUs />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={50}>
        <TechStack />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={50}>
        <Projects />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={50}>
        <FAQ />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={50}>
        <Contact />
      </ScrollReveal>
    </>
  );
}
