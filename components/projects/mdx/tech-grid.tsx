import { SurfaceCard } from "@/components/ui/surface-card";

type TechGridItem = {
  category: string;
  tech: string;
};

type TechGridProps = {
  items: TechGridItem[];
};

export function TechGrid({ items }: TechGridProps) {
  return (
    <div className="not-prose my-4 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <SurfaceCard key={item.category} className="p-4">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            {item.category}
          </p>
          <p className="mt-1.5 text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {item.tech}
          </p>
        </SurfaceCard>
      ))}
    </div>
  );
}
