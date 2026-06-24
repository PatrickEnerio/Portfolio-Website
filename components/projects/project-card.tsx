import Image from "next/image";
import Link from "next/link";
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
        "group relative flex min-h-[420px] flex-col items-center justify-end overflow-hidden rounded-3xl md:min-h-[500px]",
        className,
      )}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-100 to-zinc-200 dark:from-sky-950 dark:to-zinc-900">
          <span className="px-6 text-center text-lg font-semibold text-zinc-600 dark:text-zinc-300">
            {project.title}
          </span>
        </div>
      )}

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10 transition-opacity duration-300 group-hover:from-black/75 group-hover:via-black/30"
      />

      <div className="relative z-10 flex w-full flex-col items-center px-6 pb-10 pt-16 text-center">
        <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {project.title}
        </h3>

        <p className="mt-3 max-w-md text-sm leading-6 text-white/80 md:text-base">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={project.permalink}
            className="text-sm font-medium text-sky-300 transition-colors hover:text-sky-200"
          >
            Learn more ›
          </Link>
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
