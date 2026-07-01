import { ArrowRight } from "lucide-react";
import type { Project } from "#site/content";
import { Section } from "@/components/layout/section";
import { ProjectGrid } from "@/components/projects/project-grid";
import { SectionLink } from "@/components/ui/section-link";

type FeaturedProjectsProps = {
  projects: Project[];
};

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <Section
      id="projects"
      variant="band"
      eyebrow="02 · Work"
      title="Featured Projects"
      description="Selected work with links to deeper case studies."
    >
      <ProjectGrid projects={featured} />
      <SectionLink href="/projects" className="mt-8 gap-2">
        View all projects
        <ArrowRight className="h-4 w-4" />
      </SectionLink>
    </Section>
  );
}
