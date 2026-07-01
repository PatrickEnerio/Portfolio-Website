import Image from "next/image";
import Link from "next/link";
import { GitHubIcon } from "@/components/icons/social";
import { ProjectStatusBadge } from "@/components/projects/project-status-badge";
import type { Project } from "#site/content";
import { formatProjectDate } from "@/lib/project-styles";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
  showMetadata?: boolean;
};

const VISIBLE_TAGS = 3;

export function ProjectCard({
  project,
  className,
  showMetadata = false,
}: ProjectCardProps) {
  const visibleTags = project.tags.slice(0, VISIBLE_TAGS);
  const overflowCount = project.tags.length - VISIBLE_TAGS;

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

        {showMetadata ? (
          <div className="mt-4 w-full max-w-md rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-left backdrop-blur-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-white/70">
                {formatProjectDate(project.date)}
              </span>
              {project.status ? (
                <ProjectStatusBadge
                  status={project.status}
                  accent={project.accent}
                  className="border border-white/10"
                />
              ) : null}
            </div>
            {project.role ? (
              <p className="mt-2 text-xs font-medium text-white/90">
                {project.role}
              </p>
            ) : null}
            {visibleTags.length > 0 ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {visibleTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/80"
                  >
                    {tag}
                  </span>
                ))}
                {overflowCount > 0 ? (
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/60">
                    +{overflowCount}
                  </span>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}

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
