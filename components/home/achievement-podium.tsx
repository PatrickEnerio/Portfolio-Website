import { StaggerReveal } from "@/components/ui/stagger-reveal";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { Achievement } from "@/data/achievements";

type AchievementPodiumProps = {
  items: Achievement[];
};

type AchievementCardProps = {
  item: Achievement;
};

function AchievementCard({ item }: AchievementCardProps) {
  return (
    <SurfaceCard as="article" className="p-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
          {item.title}
        </h3>
        <span className="shrink-0 text-xs text-zinc-500 dark:text-zinc-400">
          {item.date}
        </span>
      </div>
      <p className="mt-1 text-sm font-medium text-sky-600 dark:text-sky-300">
        {item.organization}
      </p>
      <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {item.description}
      </p>
    </SurfaceCard>
  );
}

export function AchievementPodium({ items }: AchievementPodiumProps) {
  return (
    <StaggerReveal className="grid gap-4 md:grid-cols-2" staggerMs={100}>
      {items.map((item) => (
        <AchievementCard key={`${item.title}-${item.date}`} item={item} />
      ))}
    </StaggerReveal>
  );
}
