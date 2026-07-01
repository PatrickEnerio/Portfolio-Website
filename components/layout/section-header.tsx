import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 max-w-2xl", className)}>
      {eyebrow ? (
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500 md:text-sm dark:text-zinc-400">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl dark:text-zinc-50",
          eyebrow && "mt-3",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}
