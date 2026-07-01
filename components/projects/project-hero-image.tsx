import Image from "next/image";
import type { Project } from "#site/content";
import {
  getProjectInitial,
  isPlaceholderImage,
  projectAccentStyles,
} from "@/lib/project-styles";
import { cn } from "@/lib/utils";

type ProjectHeroImageProps = {
  project: Project;
  className?: string;
  priority?: boolean;
  fill?: boolean;
};

export function ProjectHeroImage({
  project,
  className,
  priority = false,
  fill = false,
}: ProjectHeroImageProps) {
  const accent = projectAccentStyles[project.accent];
  const usePlaceholder = isPlaceholderImage(project.image);

  const containerClass = cn(
    "relative overflow-hidden",
    fill
      ? "h-full w-full rounded-none border-0"
      : "aspect-[16/10] rounded-2xl border border-zinc-200 dark:border-zinc-800",
    className,
  );

  if (usePlaceholder) {
    return (
      <div className={containerClass}>
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            accent.gradient,
          )}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={cn(
              "font-mono text-7xl font-bold tracking-tighter opacity-40 md:text-8xl",
              accent.text,
            )}
          >
            {getProjectInitial(project.title)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <Image
        src={project.image!}
        alt={project.title}
        fill
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
