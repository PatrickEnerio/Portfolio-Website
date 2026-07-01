import type { Project } from "#site/content";
import { BentoCell, BentoGrid } from "@/components/layout/bento-grid";
import { ProjectCard } from "@/components/projects/project-card";

type ProjectGridProps = {
  projects: Project[];
  showMetadata?: boolean;
  variant?: "default" | "bento";
};

export function ProjectGrid({
  projects,
  showMetadata = false,
  variant = "default",
}: ProjectGridProps) {
  if (variant === "bento") {
    return (
      <BentoGrid>
        {projects.map((project, index) => {
          const isWide = index % 2 === 0;

          return (
            <BentoCell
              key={project.slug}
              colSpan={isWide ? 7 : 5}
              className={!isWide ? "md:col-start-8" : undefined}
            >
              <ProjectCard
                project={project}
                showMetadata={showMetadata}
                className="h-full min-h-[380px] md:min-h-[440px]"
              />
            </BentoCell>
          );
        })}
      </BentoGrid>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
          showMetadata={showMetadata}
        />
      ))}
    </div>
  );
}
