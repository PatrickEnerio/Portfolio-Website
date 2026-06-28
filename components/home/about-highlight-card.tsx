import { cn } from "@/lib/utils";

type AboutHighlight = {
  id: string;
  title: string;
  body: string;
};

type AboutHighlightCardProps = {
  highlight: AboutHighlight;
  index: number;
  className?: string;
};

export function AboutHighlightCard({
  highlight,
  index,
  className,
}: AboutHighlightCardProps) {
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
          "border border-zinc-200 bg-zinc-100 text-sm font-semibold text-sky-600",
          "dark:border-zinc-700 dark:bg-zinc-800 dark:text-sky-300",
        )}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="space-y-1.5">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
          {highlight.title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {highlight.body}
        </p>
      </div>
    </article>
  );
}
