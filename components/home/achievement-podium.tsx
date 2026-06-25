"use client";

import { StaggerReveal } from "@/components/ui/stagger-reveal";
import type { Achievement } from "@/data/achievements";
import { cn } from "@/lib/utils";

type AchievementPodiumProps = {
  items: Achievement[];
};

type PodiumPlace = 1 | 2 | 3;

const PODIUM_SLOTS: Array<{ place: PodiumPlace; dataIndex: number }> = [
  { place: 2, dataIndex: 1 },
  { place: 1, dataIndex: 0 },
  { place: 3, dataIndex: 2 },
];

const PLACE_STYLES: Record<
  PodiumPlace,
  { heightClass: string; surfaceClass: string; titleClass: string; widthClass: string }
> = {
  1: {
    heightClass: "h-60 max-md:h-[211px]",
    surfaceClass:
      "border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-950",
    titleClass: "text-base",
    widthClass: "w-[min(82vw,260px)] max-md:shrink-0 md:w-full md:max-w-[300px]",
  },
  2: {
    heightClass: "h-[190px] max-md:h-[167px]",
    surfaceClass:
      "border-zinc-300 bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-800",
    titleClass: "text-[15px] max-md:text-sm",
    widthClass: "w-[min(82vw,260px)] max-md:shrink-0 md:w-full md:max-w-[260px]",
  },
  3: {
    heightClass: "h-[150px] max-md:h-[132px]",
    surfaceClass:
      "border-orange-300 bg-orange-50 dark:border-orange-700 dark:bg-orange-950",
    titleClass: "text-[15px] max-md:text-sm",
    widthClass: "w-[min(82vw,260px)] max-md:shrink-0 md:w-full md:max-w-[260px]",
  },
};

type PodiumPillarProps = {
  item: Achievement;
  place: PodiumPlace;
};

function PodiumPillar({ item, place }: PodiumPillarProps) {
  const styles = PLACE_STYLES[place];

  return (
    <article
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-b-4 px-6 py-6 max-md:snap-center",
        styles.heightClass,
        styles.surfaceClass,
        styles.widthClass,
      )}
    >
      <div className="flex w-full max-w-[240px] flex-col items-center text-center">
        <h3
          className={cn(
            "font-semibold leading-snug text-zinc-900 dark:text-zinc-50",
            styles.titleClass,
          )}
        >
          {item.title}
        </h3>
        <p className="mt-2.5 text-[11px] leading-4 text-zinc-500 dark:text-zinc-400">
          {item.date}
        </p>
        <p className="mt-3 text-xs font-medium text-sky-600 dark:text-sky-300">
          {item.organization}
        </p>
      </div>
    </article>
  );
}

type OverflowCardProps = {
  item: Achievement;
};

function OverflowCard({ item }: OverflowCardProps) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
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
    </article>
  );
}

export function AchievementPodium({ items }: AchievementPodiumProps) {
  const podiumItems = items.slice(0, 3);
  const overflowItems = items.slice(3);
  const activeSlots = PODIUM_SLOTS.filter((slot) => podiumItems[slot.dataIndex]);

  return (
    <div className="space-y-6">
      <div className="-mx-6 overflow-x-auto px-6 pb-2 md:mx-0 md:overflow-visible md:pb-0">
        <StaggerReveal
          className="flex min-h-[211px] snap-x snap-mandatory items-end justify-center gap-4 md:min-h-60 md:gap-6 md:snap-none"
          staggerMs={120}
        >
          {activeSlots.map((slot) => {
            const item = podiumItems[slot.dataIndex];
            if (!item) return null;

            return (
              <PodiumPillar
                key={`${item.title}-${slot.place}`}
                item={item}
                place={slot.place}
              />
            );
          })}
        </StaggerReveal>
      </div>

      {overflowItems.length > 0 ? (
        <div className="space-y-3">
          <p className="text-center text-sm font-semibold text-zinc-500 dark:text-zinc-400">
            More achievements
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {overflowItems.map((item) => (
              <OverflowCard key={`${item.title}-${item.date}`} item={item} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
