import type { ReactNode } from "react";
import { BentoTile } from "@/components/layout/bento-tile";
import { caseStudySectionLayout } from "@/lib/case-study-layout";
import { cn } from "@/lib/utils";

type CaseStudySectionProps = {
  title: string;
  children: ReactNode;
  colSpan?: 4 | 5 | 7 | 12;
  variant?: "default" | "muted";
  className?: string;
};

export function CaseStudySection({
  title,
  children,
  colSpan,
  variant,
  className,
}: CaseStudySectionProps) {
  const layout = caseStudySectionLayout[title];
  const resolvedColSpan = colSpan ?? layout?.colSpan ?? 12;
  const resolvedVariant = variant ?? layout?.variant ?? "default";

  return (
    <BentoTile
      colSpan={resolvedColSpan}
      variant={resolvedVariant}
      interactive={false}
      className={cn("p-6 md:p-8", className)}
    >
      <p className="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        {title}
      </p>
      <div className="prose prose-zinc mt-4 max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-a:text-sky-500 prose-code:text-sky-600 dark:prose-a:text-sky-400 dark:prose-code:text-sky-300">
        {children}
      </div>
    </BentoTile>
  );
}
