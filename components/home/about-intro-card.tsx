import { SurfaceCard } from "@/components/ui/surface-card";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type AboutIntroFact = {
  label: string;
  value: string;
};

type AboutIntro = {
  id: string;
  title: string;
  body: string;
  facts: readonly AboutIntroFact[];
};

type AboutIntroCardProps = {
  intro: AboutIntro;
  className?: string;
};

export function AboutIntroCard({ intro, className }: AboutIntroCardProps) {
  const facts: AboutIntroFact[] = [
    { label: "Based in", value: `${siteConfig.location} (DFW)` },
    ...intro.facts,
  ];

  return (
    <SurfaceCard
      as="article"
      interactive
      className={cn("flex flex-col gap-3.5 p-5", className)}
    >
      <div
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-xl",
          "border border-zinc-200 bg-zinc-100 font-mono text-sm font-semibold tabular-nums text-sky-600",
          "dark:border-zinc-700 dark:bg-zinc-800 dark:text-sky-300",
        )}
        aria-hidden="true"
      >
        01
      </div>
      <div className="space-y-1.5">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
          {intro.title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {intro.body}
        </p>
      </div>
      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 border-t border-zinc-200 pt-3.5 dark:border-zinc-800">
        {facts.map((fact) => (
          <div key={fact.label} className="contents">
            <dt className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {fact.label}
            </dt>
            <dd className="text-sm text-zinc-600 dark:text-zinc-400">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </SurfaceCard>
  );
}
