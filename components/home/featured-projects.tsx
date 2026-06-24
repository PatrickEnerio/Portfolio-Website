import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "#site/content";
import { Section } from "@/components/layout/section";
import { ProjectGrid } from "@/components/projects/project-grid";

type FeaturedProjectsProps = {
  projects: Project[];
};

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      description="Selected work with links to deeper case studies."
    >
      <ProjectGrid projects={featured} />
      <div className="mt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800 dark:text-emerald-300 dark:hover:text-emerald-200"
        >
          View all projects
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
