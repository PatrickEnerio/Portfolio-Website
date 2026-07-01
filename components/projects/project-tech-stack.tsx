import type { Project } from "#site/content";

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
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}
