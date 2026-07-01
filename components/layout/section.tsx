import type { ReactNode } from "react";
import { SectionHeader } from "@/components/layout/section-header";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";

export const sectionVariants = {
  default: "",
  band: "border-t border-zinc-200 bg-zinc-50/35 dark:border-zinc-800 dark:bg-zinc-950/35",
} as const;

type SectionVariant = keyof typeof sectionVariants;

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  variant?: SectionVariant;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function Section({
  id,
  title,
  eyebrow,
  description,
  variant = "default",
  children,
  className,
  contentClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-16 md:py-20",
        sectionVariants[variant],
        className,
      )}
    >
      <AnimatedSection>
        <div className={cn("mx-auto max-w-6xl px-6", contentClassName)}>
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          {children}
        </div>
      </AnimatedSection>
    </section>
  );
}
