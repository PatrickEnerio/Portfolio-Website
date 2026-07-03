import type { Project } from "#site/content";
import { formatProjectDate } from "@/lib/project-styles";

type ProjectAtAGlanceProps = {
  project: Project;
};

export function ProjectAtAGlance({ project }: ProjectAtAGlanceProps) {
  return (
    <div className="flex h-full flex-col">
      <p className="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        At a glance
      </p>
      <dl className="mt-4 flex flex-1 flex-col justify-center gap-5 text-sm">
        {project.role ? (
          <div>
            <dt className="text-zinc-500 dark:text-zinc-400">Role</dt>
            <dd className="mt-0.5 font-medium text-zinc-900 dark:text-zinc-100">
              {project.role}
            </dd>
          </div>
        ) : null}
        {project.timeline ? (
          <div>
            <dt className="text-zinc-500 dark:text-zinc-400">Timeline</dt>
            <dd className="mt-0.5 font-medium text-zinc-900 dark:text-zinc-100">
              {project.timeline}
            </dd>
          </div>
        ) : null}
        {project.teamSize ? (
          <div>
            <dt className="text-zinc-500 dark:text-zinc-400">Team size</dt>
            <dd className="mt-0.5 font-medium text-zinc-900 dark:text-zinc-100">
              {project.teamSize} people
            </dd>
          </div>
        ) : null}
        <div>
          <dt className="text-zinc-500 dark:text-zinc-400">Date</dt>
          <dd className="mt-0.5 font-medium text-zinc-900 dark:text-zinc-100">
            {formatProjectDate(project.date)}
          </dd>
        </div>
      </dl>
    </div>
  );
}
