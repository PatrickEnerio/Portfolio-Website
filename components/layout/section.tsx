import type { ReactNode } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-16 md:py-20", className)}
    >
      <AnimatedSection>
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl dark:text-zinc-50">
              {title}
            </h2>
            {description ? (
              <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
            ) : null}
          </div>
          {children}
        </div>
      </AnimatedSection>
    </section>
  );
}
