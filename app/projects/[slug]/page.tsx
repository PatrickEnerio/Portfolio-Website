import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/projects/project-case-study";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectHighlights } from "@/components/projects/project-highlights";
import { ProjectNav } from "@/components/projects/project-nav";
import {
  getAdjacentProjects,
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(slug);

  return (
    <article>
      <ProjectHero project={project} />

      <div className="border-t border-zinc-200 bg-zinc-50/35 dark:border-zinc-800 dark:bg-zinc-950/35">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <ProjectHighlights highlights={project.highlights} />

          <ProjectCaseStudy code={project.content} />

          <ProjectNav previous={previous} next={next} />
        </div>
      </div>
    </article>
  );
}
