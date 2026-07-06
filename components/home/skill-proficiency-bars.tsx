import { SkillIcon } from "@/components/icons/skill-icon";
import type { SkillGroup, SkillItem, SkillTier } from "@/data/skills";
import { TIER_LABELS } from "@/data/skills";
import { cn } from "@/lib/utils";

type SkillProficiencyBarsProps = {
  groups: SkillGroup[];
  className?: string;
  limitPerGroup?: number;
};

function TierIndicator({ tier }: { tier: SkillTier }) {
  const label = TIER_LABELS[tier];

  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={`${label} proficiency`}
    >
      {([1, 2, 3, 4] as const).map((level) => (
        <span
          key={level}
          aria-hidden
          className={cn(
            "h-2 w-5 rounded-full transition-colors",
            level <= tier
              ? "bg-sky-600 dark:bg-sky-300"
              : "bg-zinc-100 dark:bg-zinc-800",
          )}
        />
      ))}
    </div>
  );
}

function ProficiencyRow({ skill }: { skill: SkillItem }) {
  const label = TIER_LABELS[skill.tier];

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
      <div className="min-w-0 flex-1">
        <TierIndicator tier={skill.tier} />
      </div>
      <span className="w-20 shrink-0 text-right text-xs font-medium text-zinc-500 dark:text-zinc-400">
        {label}
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
