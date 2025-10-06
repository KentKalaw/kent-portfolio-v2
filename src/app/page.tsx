import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
