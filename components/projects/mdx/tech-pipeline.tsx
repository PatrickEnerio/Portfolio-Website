import { ChevronDown, ChevronRight } from "lucide-react";
import { SkillIcon } from "@/components/icons/skill-icon";
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

function PipelineConnector({
  direction,
}: {
  direction: "horizontal" | "vertical";
}) {
  const Icon = direction === "horizontal" ? ChevronRight : ChevronDown;
  const lineClass = "border-zinc-300 dark:border-zinc-600";

  if (direction === "vertical") {
    return (
      <div className="flex flex-col items-center py-1" aria-hidden>
        <div className={cn("h-4 border-l border-dashed", lineClass)} />
        <Icon className="h-3.5 w-3.5 shrink-0 text-zinc-400 dark:text-zinc-500" />
        <div className={cn("h-4 border-l border-dashed", lineClass)} />
      </div>
    );
  }

  return (
    <div
      className="flex w-10 shrink-0 items-center justify-center self-start px-1 pt-5"
      aria-hidden
    >
      <div className="flex w-full items-center">
        <div className={cn("flex-1 border-t border-dashed", lineClass)} />
        <Icon className="mx-0.5 h-3.5 w-3.5 shrink-0 text-zinc-400 dark:text-zinc-500" />
        <div className={cn("flex-1 border-t border-dashed", lineClass)} />
      </div>
    </div>
  );
}

function PipelineIcon({ step }: { step: TechPipelineStep }) {
  const slug = step.slug ?? resolveTechSlug(step.label);

  return (
    <div
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
        "border border-zinc-200 bg-zinc-50 text-zinc-700",
        "dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300",
      )}
    >
      <SkillIcon slug={slug} name={step.label} className="h-5 w-5" />
    </div>
  );
}

function PipelineNodeText({
  step,
  stepNumber,
  centered = false,
}: {
  step: TechPipelineStep;
  stepNumber: number;
  centered?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-col gap-1.5",
        centered ? "items-center text-center" : "items-start",
      )}
    >
      <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
        {String(stepNumber).padStart(2, "0")}
      </span>
      <p className="text-sm font-semibold leading-snug text-zinc-900 dark:text-zinc-50">
        {step.label}
      </p>
      {step.description ? (
        <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
          {step.description}
        </p>
      ) : null}
    </div>
  );
}

export function TechPipeline({ steps }: TechPipelineProps) {
  if (steps.length === 0) {
    return null;
  }

  return (
    <div className="not-prose my-4">
      <div className="hidden lg:flex lg:items-start">
        {steps.map((step, index) => (
          <div key={step.label} className="contents">
            <div className="flex min-w-0 flex-1 flex-col items-center gap-3 px-2">
              <PipelineIcon step={step} />
              <PipelineNodeText
                step={step}
                stepNumber={index + 1}
                centered
              />
            </div>
            {index < steps.length - 1 ? (
              <PipelineConnector
                key={`${step.label}-connector`}
                direction="horizontal"
              />
            ) : null}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center lg:hidden">
        {steps.map((step, index) => (
          <div key={step.label} className="flex w-full flex-col items-center">
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <PipelineIcon step={step} />
              <p className="text-sm font-semibold leading-snug text-zinc-900 dark:text-zinc-50">
                {step.label}
              </p>
              {step.description ? (
                <p className="max-w-xs text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {step.description}
                </p>
              ) : null}
            </div>
            {index < steps.length - 1 ? (
              <PipelineConnector direction="vertical" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
