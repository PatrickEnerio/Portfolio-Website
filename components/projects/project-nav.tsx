import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "#site/content";

type ProjectNavProps = {
  previous?: Project;
  next?: Project;
};

export function ProjectNav({ previous, next }: ProjectNavProps) {
  return (
    <nav
      aria-label="Project navigation"
      className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800"
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="min-w-0 justify-self-start">
          {previous ? (
            <Link
              href={previous.permalink}
              className="group inline-flex min-w-0 max-w-full items-center gap-2 no-underline"
            >
              <ArrowLeft className="h-3 w-3 shrink-0 text-zinc-400 transition-colors group-hover:text-sky-600 dark:group-hover:text-sky-400" />
              <span className="min-w-0">
                <span className="block text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  Previous
                </span>
                <span className="block truncate text-xs font-medium text-zinc-700 transition-colors group-hover:text-sky-600 dark:text-zinc-300 dark:group-hover:text-sky-400">
                  {previous.title}
                </span>
              </span>
            </Link>
          ) : null}
        </div>

        <Link
          href="/projects"
          className="justify-self-center whitespace-nowrap text-xs font-medium text-zinc-500 transition-colors hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-400"
        >
          Back to all projects
        </Link>

        <div className="min-w-0 justify-self-end">
          {next ? (
            <Link
              href={next.permalink}
              className="group inline-flex min-w-0 max-w-full items-center justify-end gap-2 no-underline"
            >
              <span className="min-w-0 text-right">
                <span className="block text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  Next
                </span>
                <span className="block truncate text-xs font-medium text-zinc-700 transition-colors group-hover:text-sky-600 dark:text-zinc-300 dark:group-hover:text-sky-400">
                  {next.title}
                </span>
              </span>
              <ArrowRight className="h-3 w-3 shrink-0 text-zinc-400 transition-colors group-hover:text-sky-600 dark:group-hover:text-sky-400" />
            </Link>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
