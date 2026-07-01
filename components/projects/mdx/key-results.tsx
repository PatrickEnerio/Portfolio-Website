import { CheckCircle2 } from "lucide-react";
import { SurfaceCard } from "@/components/ui/surface-card";

type KeyResultsProps = {
  items: string[];
};

export function KeyResults({ items }: KeyResultsProps) {
  return (
    <div className="not-prose my-4 grid gap-3">
      {items.map((item) => (
        <SurfaceCard key={item} className="flex gap-3 p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-500 dark:text-sky-400" />
          <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            {item}
          </p>
        </SurfaceCard>
      ))}
    </div>
  );
}
