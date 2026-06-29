import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BentoColSpan = 4 | 5 | 7 | 12;

type BentoGridProps = {
  children: ReactNode;
  className?: string;
};

export const bentoColSpanClasses: Record<BentoColSpan, string> = {
  4: "md:col-span-4",
  5: "md:col-span-5",
  7: "md:col-span-7",
  12: "md:col-span-12",
};

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

type BentoCellProps = {
  children: ReactNode;
  colSpan?: BentoColSpan;
  className?: string;
};

export function BentoCell({ children, colSpan = 12, className }: BentoCellProps) {
  return (
    <div className={cn(bentoColSpanClasses[colSpan], className)}>{children}</div>
  );
}
