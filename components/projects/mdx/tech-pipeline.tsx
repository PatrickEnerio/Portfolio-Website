import { ChevronDown, ChevronRight } from "lucide-react";
import { SkillIcon } from "@/components/icons/skill-icon";
import { SurfaceCard } from "@/components/ui/surface-card";
import { resolveTechSlug } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";

type TechPipelineStep = {
  label: string;
  slug?: string;
  description?: string;
};

type TechPipelineProps = {
  steps: TechPipelineStep[];
};

function PipelineArrow({ direction }: { direction: "horizontal" | "vertical" }) {
  const Icon = direction === "horizontal" ? ChevronRight : ChevronDown;

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center text-zinc-400 dark:text-zinc-500",
        direction === "horizontal" ? "px-1" : "py-1",
      )}
      aria-hidden
    >
      <Icon className="h-4 w-4" />
    </div>
  );
}

function PipelineNode({ step }: { step: TechPipelineStep }) {
  const slug = step.slug ?? resolveTechSlug(step.label);

  return (
    <SurfaceCard className="flex min-w-0 flex-1 flex-col gap-2.5 p-4">
      <div
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-xl",
          "border border-zinc-200 bg-zinc-100 text-zinc-700",
          "dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
        )}
      >
        <SkillIcon slug={slug} name={step.label} className="h-5 w-5" />
      </div>
      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
        {step.label}
      </p>
      {step.description ? (
        <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
          {step.description}
        </p>
      ) : null}
    </SurfaceCard>
  );
}

export function TechPipeline({ steps }: TechPipelineProps) {
  if (steps.length === 0) {
    return null;
  }

  return (
    <div className="not-prose my-4">
      <div className="hidden items-stretch md:flex">
        {steps.map((step, index) => (
          <div key={step.label} className="flex min-w-0 flex-1 items-center">
            <PipelineNode step={step} />
            {index < steps.length - 1 ? (
              <PipelineArrow direction="horizontal" />
            ) : null}
          </div>
        ))}
      </div>

      <div className="flex flex-col md:hidden">
        {steps.map((step, index) => (
          <div key={step.label}>
            <PipelineNode step={step} />
            {index < steps.length - 1 ? (
              <PipelineArrow direction="vertical" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
