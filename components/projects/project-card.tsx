import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons/social";
import type { Project } from "#site/content";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100/50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-800 dark:hover:shadow-emerald-950/20",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-emerald-50 to-zinc-100 dark:from-emerald-950/30 dark:to-zinc-900">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-zinc-500">
            {project.title}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          <Link href={project.permalink} className="hover:text-emerald-700 dark:hover:text-emerald-300">
            {project.title}
          </Link>
        </h3>

        <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        <div className="mt-5 flex items-center gap-3">
          <Link
            href={project.permalink}
            className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 dark:text-emerald-300"
          >
            Case study
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
            >
              <GitHubIcon className="h-4 w-4" />
              Code
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
