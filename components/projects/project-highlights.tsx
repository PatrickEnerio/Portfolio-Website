import type { Project } from "#site/content";
import { BentoGrid } from "@/components/layout/bento-grid";
import { BentoTile } from "@/components/layout/bento-tile";

type ProjectHighlightsProps = {
  highlights: string[];
};

export function ProjectHighlights({ highlights }: ProjectHighlightsProps) {
  if (highlights.length === 0) {
    return null;
  }

  return (
    <div className="mb-10">
      <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        Key outcomes
      </p>
      <BentoGrid>
        {highlights.map((highlight, index) => (
          <BentoTile
            key={highlight}
            colSpan={4}
            className="flex flex-col gap-3.5 p-5"
          >
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 font-mono text-sm font-semibold tabular-nums text-sky-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-sky-300"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </div>
            <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              {highlight}
            </p>
          </BentoTile>
        ))}
      </BentoGrid>
    </div>
  );
}
