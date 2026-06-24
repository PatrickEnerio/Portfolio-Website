import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/project-grid";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies and project write-ups.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="mb-10 max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl dark:text-zinc-50">
          All Projects
        </h1>
        <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          A collection of things I&apos;ve built, with deeper write-ups on the
          problems, solutions, and outcomes.
        </p>
      </div>
      <ProjectGrid projects={projects} />
    </div>
  );
}
