import type { Project } from "#site/content";
import {
  projectAccentStyles,
  projectStatusLabels,
} from "@/lib/project-styles";
import { cn } from "@/lib/utils";

type ProjectStatusBadgeProps = {
  status: NonNullable<Project["status"]>;
  accent?: Project["accent"];
  className?: string;
};

export function ProjectStatusBadge({
  status,
  accent = "sky",
  className,
}: ProjectStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium",
        projectAccentStyles[accent].badge,
        className,
      )}
    >
      {projectStatusLabels[status]}
    </span>
  );
}
