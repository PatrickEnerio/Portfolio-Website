import type { Education } from "@/data/education";
import { SurfaceCard } from "@/components/ui/surface-card";
import { cn } from "@/lib/utils";

type EducationCardProps = {
  item: Education;
  className?: string;
};

export function EducationCard({ item, className }: EducationCardProps) {
  return (
    <SurfaceCard as="article" className={cn("flex h-full flex-col p-6", className)}>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {item.degree}
          </h3>
          <p className="text-sm font-medium text-sky-600 dark:text-sky-300">
            {item.school}
          </p>
        </div>
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          <p>{item.period}</p>
          {item.gpa ? <p className="mt-1">GPA: {item.gpa}</p> : null}
        </div>
      </div>
      {item.details ? (
        <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {item.details}
        </p>
      ) : null}
    </SurfaceCard>
  );
}
