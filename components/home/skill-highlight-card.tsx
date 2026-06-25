import { SkillIcon } from "@/components/icons/skill-icon";
import type { FeaturedSkill } from "@/data/skills";
import { cn } from "@/lib/utils";

type SkillHighlightCardProps = {
  skill: FeaturedSkill;
  className?: string;
};

export function SkillHighlightCard({ skill, className }: SkillHighlightCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col gap-3.5 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900",
        className,
      )}
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
    </article>
  );
}
