import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { ProjectGrid } from "@/components/projects/project-grid";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies and project write-ups.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <Section
      id="all-projects"
      variant="band"
      eyebrow="Work"
      title="All Projects"
      description="A collection of things I've built, with deeper write-ups on the problems, solutions, and outcomes."
      className="min-h-[60vh]"
    >
      <ProjectGrid projects={projects} showMetadata variant="bento" />
    </Section>
  );
}
