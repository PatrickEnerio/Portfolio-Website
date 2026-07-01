import type { Project } from "#site/content";
import { SkillIcon } from "@/components/icons/skill-icon";
import { resolveTechSlug, truncateTechLabel } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";

type ProjectTechStackProps = {
  project: Project;
};

export function ProjectTechStack({ project }: ProjectTechStackProps) {
  if (project.tags.length === 0) {
    return null;
  }

  return (
    <>
      <p className="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        Tech stack
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        {project.tags.map((tag) => (
          <div
            key={tag}
            title={tag}
            className="flex min-w-[3.25rem] flex-col items-center gap-1.5"
          >
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl",
                "border border-zinc-200 bg-zinc-100 text-zinc-700",
                "dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
              )}
            >
              <SkillIcon
                slug={resolveTechSlug(tag)}
                name={tag}
                className="h-5 w-5"
              />
            </div>
            <span className="max-w-[4.5rem] text-center text-[10px] font-medium leading-tight text-zinc-500 dark:text-zinc-400">
              {truncateTechLabel(tag)}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
