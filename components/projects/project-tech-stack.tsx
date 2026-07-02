import type { Project } from "#site/content";
import { SkillIcon } from "@/components/icons/skill-icon";
import { projectAccentStyles } from "@/lib/project-styles";
import { abbreviateTechLabel, resolveTechSlug } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";

type ProjectTechStackProps = {
  project: Project;
};

export function ProjectTechStack({ project }: ProjectTechStackProps) {
  if (project.tags.length === 0) {
    return null;
  }

  const accent = projectAccentStyles[project.accent];

  return (
    <div className="flex flex-col items-center text-center">
      <p className="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        Tech stack
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        {project.tags.map((tag) => (
          <div
            key={tag}
            title={tag}
            className="flex flex-col items-center gap-1.5"
          >
            <div
              className={cn(
                "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border",
                "transition-colors duration-200",
                accent.techChip,
              )}
            >
              <SkillIcon
                slug={resolveTechSlug(tag)}
                name={tag}
                className="h-6 w-6"
              />
            </div>
            <span className="w-11 text-center text-[11px] font-medium leading-tight text-zinc-500 dark:text-zinc-400">
              {abbreviateTechLabel(tag)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
