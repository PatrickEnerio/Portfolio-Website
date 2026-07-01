import Link from "next/link";
import { ArrowLeft, ExternalLink, Play } from "lucide-react";
import type { Project } from "#site/content";
import { GitHubIcon } from "@/components/icons/social";
import { ProjectAtAGlance } from "@/components/projects/project-at-a-glance";
import { ProjectHeroImage } from "@/components/projects/project-hero-image";
import { ProjectStatusBadge } from "@/components/projects/project-status-badge";
import { ProjectTechStack } from "@/components/projects/project-tech-stack";
import { BentoGrid } from "@/components/layout/bento-grid";
import { BentoTile } from "@/components/layout/bento-tile";
import { AnimatedSection } from "@/components/ui/animated-section";
import { formatProjectDate } from "@/lib/project-styles";

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  const hasLinks =
    project.links.live || project.links.demo || project.links.github;

  return (
    <AnimatedSection>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <BentoGrid className="mt-8">
          <BentoTile
            colSpan={7}
            className="flex flex-col justify-center p-6 md:p-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              {project.status ? (
                <ProjectStatusBadge
                  status={project.status}
                  accent={project.accent}
                />
              ) : null}
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {formatProjectDate(project.date)}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl dark:text-zinc-50">
              {project.title}
            </h1>
            <p className="mt-4 text-base leading-7 text-zinc-600 md:text-lg md:leading-8 dark:text-zinc-400">
              {project.description}
            </p>

            {hasLinks ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.live ? (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-600"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live demo
                  </a>
                ) : null}
                {project.links.demo ? (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-600"
                  >
                    <Play className="h-4 w-4" />
                    Demo
                  </a>
                ) : null}
                {project.links.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    Source code
                  </a>
                ) : null}
              </div>
            ) : null}
          </BentoTile>

          <BentoTile colSpan={5} variant="muted" className="p-5 md:p-6">
            <ProjectAtAGlance project={project} />
          </BentoTile>

          <BentoTile
            colSpan={7}
            rowSpan={2}
            className="relative min-h-[280px] overflow-hidden p-0 motion-reduce:hover:translate-y-0 hover:translate-y-0 md:min-h-[360px]"
          >
            <ProjectHeroImage
              project={project}
              fill
              priority
              className="h-full min-h-[280px] md:min-h-[360px]"
            />
          </BentoTile>

          <BentoTile colSpan={5} variant="muted" className="p-5 md:p-6">
            <ProjectTechStack project={project} />
          </BentoTile>

          {project.teamSize ? (
            <BentoTile
              colSpan={5}
              className="flex flex-col justify-between p-5 md:p-6"
            >
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Team
                </p>
                <p className="mt-3 text-4xl font-semibold tabular-nums tracking-tight text-zinc-900 dark:text-zinc-50">
                  {project.teamSize}
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  team members
                </p>
              </div>
              {project.status ? (
                <ProjectStatusBadge
                  status={project.status}
                  accent={project.accent}
                  className="mt-4 self-start"
                />
              ) : null}
            </BentoTile>
          ) : null}
        </BentoGrid>
      </div>
    </AnimatedSection>
  );
}
