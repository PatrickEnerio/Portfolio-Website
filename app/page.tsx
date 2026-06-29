import { BentoCredentials } from "@/components/home/bento-credentials";
import { BentoIdentity } from "@/components/home/bento-identity";
import { Contact } from "@/components/home/contact";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Hero } from "@/components/home/hero";
import { getProjects } from "@/lib/projects";

export default function HomePage() {
  const projects = getProjects();

  return (
    <>
      <Hero />
      <BentoIdentity />
      <FeaturedProjects projects={projects} />
      <BentoCredentials />
      <Contact />
    </>
  );
}
