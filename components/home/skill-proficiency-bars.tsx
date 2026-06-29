import { SkillIcon } from "@/components/icons/skill-icon";
import type { SkillGroup, SkillItem } from "@/data/skills";
import { cn } from "@/lib/utils";

type SkillProficiencyBarsProps = {
  groups: SkillGroup[];
  className?: string;
  limitPerGroup?: number;
};

function ProficiencyRow({ skill }: { skill: SkillItem }) {
  const clamped = Math.max(0, Math.min(100, skill.proficiency));

  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <div
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg",
          "border border-zinc-200 bg-zinc-100 text-zinc-700",
          "dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
        )}
      >
        <SkillIcon slug={skill.slug} name={skill.name} className="h-4 w-4" />
      </div>
      <span className="w-24 shrink-0 text-sm text-zinc-900 sm:w-36 dark:text-zinc-50">
        {skill.name}
      </span>
      <div
        className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name} proficiency`}
      >
        <div
          className="h-full rounded-full bg-sky-600 dark:bg-sky-300"
          style={{ width: `${clamped}%` }}
        />
      </div>
      <span className="w-9 shrink-0 text-right text-xs text-zinc-400 dark:text-zinc-500">
        {clamped}%
      </span>
    </div>
  );
}

export function SkillProficiencyBars({
  groups,
  className,
  limitPerGroup,
}: SkillProficiencyBarsProps) {
  return (
    <div className={cn("space-y-6 sm:space-y-7", className)}>
      {groups.map((group) => {
        const items = limitPerGroup
          ? group.items.slice(0, limitPerGroup)
          : group.items;

        return (
          <div key={group.category}>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
              {group.category}
            </h3>
            <div className="mt-3 space-y-3">
              {items.map((skill) => (
                <ProficiencyRow key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
