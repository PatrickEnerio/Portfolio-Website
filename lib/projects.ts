import { projects } from "#site/content";

export function getProjects() {
  return [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getFeaturedProjects() {
  return getProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}

export function getAdjacentProjects(slug: string) {
  const sorted = getProjects();
  const index = sorted.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: index < sorted.length - 1 ? sorted[index + 1] : undefined,
    next: index > 0 ? sorted[index - 1] : undefined,
  };
}
