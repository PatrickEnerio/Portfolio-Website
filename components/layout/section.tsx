import type { ReactNode } from "react";
import { SectionHeader } from "@/components/layout/section-header";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  className,
  contentClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-16 md:py-20", className)}
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
