import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "#site/content";
import { BentoGrid } from "@/components/layout/bento-grid";
import { BentoTile } from "@/components/layout/bento-tile";

type ProjectNavProps = {
  previous?: Project;
  next?: Project;
};

export function ProjectNav({ previous, next }: ProjectNavProps) {
  return (
    <nav aria-label="Project navigation" className="mt-10 space-y-4">
      <BentoGrid>
        {previous ? (
          <BentoTile colSpan={5} className="p-0">
            <Link
              href={previous.permalink}
              className="group flex h-full flex-col p-5 no-underline"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                <ArrowLeft className="h-3.5 w-3.5" />
                Previous
              </span>
              <span className="mt-2 text-sm font-semibold text-zinc-900 group-hover:text-sky-600 dark:text-zinc-100 dark:group-hover:text-sky-400">
                {previous.title}
              </span>
            </Link>
          </BentoTile>
        ) : (
          <div className="hidden md:col-span-5 md:block" aria-hidden />
        )}

        {next ? (
          <BentoTile colSpan={5} className="p-0 md:col-start-8">
            <Link
              href={next.permalink}
              className="group flex h-full flex-col p-5 text-right no-underline"
            >
              <span className="inline-flex items-center justify-end gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Next
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <span className="mt-2 text-sm font-semibold text-zinc-900 group-hover:text-sky-600 dark:text-zinc-100 dark:group-hover:text-sky-400">
                {next.title}
              </span>
            </Link>
          </BentoTile>
        ) : null}
      </BentoGrid>

      <BentoGrid>
        <BentoTile
          colSpan={12}
          interactive={false}
          className="flex items-center justify-center p-4"
        >
          <Link
            href="/projects"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-400"
          >
            Back to all projects
          </Link>
        </BentoTile>
      </BentoGrid>
    </nav>
  );
}
