import { About } from "@/components/home/about";
import { Achievements } from "@/components/home/achievements";
import { Contact } from "@/components/home/contact";
import { Education } from "@/components/home/education";
import { Experience } from "@/components/home/experience";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Hero } from "@/components/home/hero";
import { Skills } from "@/components/home/skills";
import { getProjects } from "@/lib/projects";

export default function HomePage() {
  const projects = getProjects();

  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects projects={projects} />
      <Skills />
      <Experience />
      <Achievements />
      <Education />
      <Contact />
    </>
  );
}
