import type { ReactNode } from "react";
import { bentoColSpanClasses } from "@/components/layout/bento-grid";
import { SurfaceCard } from "@/components/ui/surface-card";
import { cn } from "@/lib/utils";

type BentoColSpan = 4 | 5 | 7 | 12;

type BentoTileProps = {
  children: ReactNode;
  colSpan?: BentoColSpan;
  rowSpan?: 1 | 2;
  variant?: "default" | "muted";
  className?: string;
  id?: string;
};

const colSpanClasses = bentoColSpanClasses;

const rowSpanClasses: Record<1 | 2, string> = {
  1: "md:row-span-1",
  2: "md:row-span-2",
};

export function BentoTile({
  children,
  colSpan = 12,
  rowSpan = 1,
  variant = "default",
  className,
  id,
}: BentoTileProps) {
  return (
    <SurfaceCard
      id={id}
      className={cn(
        "p-5 transition-all duration-200 ease-out motion-reduce:transition-none",
        "hover:-translate-y-0.5 hover:border-zinc-300 dark:hover:border-zinc-700",
        variant === "muted" && "bg-zinc-50 dark:bg-zinc-900/80",
        colSpanClasses[colSpan],
        rowSpanClasses[rowSpan],
        className,
      )}
    >
      {children}
    </SurfaceCard>
  );
}
