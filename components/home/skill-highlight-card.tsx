import { SkillIcon } from "@/components/icons/skill-icon";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { FeaturedSkill } from "@/data/skills";
import { cn } from "@/lib/utils";
import Link from "next/link";

type SkillHighlightCardProps = {
  skill: FeaturedSkill;
  className?: string;
};

export function SkillHighlightCard({ skill, className }: SkillHighlightCardProps) {
  return (
    <SurfaceCard
      as="article"
      interactive
      className={cn("flex flex-col gap-3.5 p-5", className)}
    >
      <div
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-xl",
          "border border-zinc-200 bg-zinc-100 text-zinc-700",
          "dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
        )}
      >
        <SkillIcon slug={skill.slug} name={skill.name} className="h-6 w-6" />
      </div>
      <div className="space-y-1.5">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
          {skill.name}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {skill.description}
        </p>
      </div>
      {skill.usedIn && skill.usedIn.length > 0 ? (
        <div className="mt-auto space-y-1.5 border-t border-zinc-200 pt-3 dark:border-zinc-800">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Used in
          </p>
          <ul className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs">
            {skill.usedIn.map((entry, index) => (
              <li key={entry.label} className="inline-flex items-center gap-1.5">
                {index > 0 ? (
                  <span className="text-zinc-300 dark:text-zinc-600" aria-hidden>
                    ·
                  </span>
                ) : null}
                {entry.href ? (
                  <Link
                    href={entry.href}
                    className="font-medium text-sky-600 hover:text-sky-700 dark:text-sky-300 dark:hover:text-sky-200"
                  >
                    {entry.label}
                  </Link>
                ) : (
                  <span className="font-medium text-zinc-600 dark:text-zinc-400">
                    {entry.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </SurfaceCard>
  );
}
