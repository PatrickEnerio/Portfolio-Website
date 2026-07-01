import type { Project } from "#site/content";
import {
  projectAccentStyles,
  projectStatusLabels,
} from "@/lib/project-styles";
import { cn } from "@/lib/utils";

type ProjectStatusBadgeProps = {
  status: NonNullable<Project["status"]>;
  accent?: Project["accent"];
  surface?: "default" | "dark";
  className?: string;
};

export function ProjectStatusBadge({
  status,
  accent = "sky",
  surface = "default",
  className,
}: ProjectStatusBadgeProps) {
  const styles = projectAccentStyles[accent];

  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium",
        surface === "dark" ? styles.onDarkBadge : styles.badge,
        className,
      )}
    >
      {projectStatusLabels[status]}
    </span>
  );
}
