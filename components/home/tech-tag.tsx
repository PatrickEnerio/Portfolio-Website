import { SkillIcon } from "@/components/icons/skill-icon";
import { abbreviateTechLabel, resolveTechSlug } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";

type TechTagProps = {
  label: string;
  className?: string;
  size?: "sm" | "md";
};

export function TechTag({ label, className, size = "sm" }: TechTagProps) {
  const slug = resolveTechSlug(label);
  const isSmall = size === "sm";

  return (
    <span
      title={label}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-700",
        "dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300",
        isSmall ? "px-2 py-1 text-[11px] font-medium" : "px-2.5 py-1.5 text-xs font-medium",
        className,
      )}
    >
      <SkillIcon
        slug={slug}
        name={label}
        className={cn(isSmall ? "h-3 w-3" : "h-3.5 w-3.5")}
      />
      <span>{abbreviateTechLabel(label)}</span>
    </span>
  );
}

type TechTagListProps = {
  tags: string[];
  className?: string;
  size?: "sm" | "md";
};

export function TechTagList({ tags, className, size = "sm" }: TechTagListProps) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {tags.map((tag) => (
        <li key={tag}>
          <TechTag label={tag} size={size} />
        </li>
      ))}
    </ul>
  );
}
