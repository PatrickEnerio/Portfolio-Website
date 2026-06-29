import { AboutHighlightCard } from "@/components/home/about-highlight-card";
import { EducationCard } from "@/components/home/education-card";
import { BentoCell, BentoGrid } from "@/components/layout/bento-grid";
import { BentoTile } from "@/components/layout/bento-tile";
import { SectionHeader } from "@/components/layout/section-header";
import { SectionLink } from "@/components/ui/section-link";
import { AnimatedSection } from "@/components/ui/animated-section";
import { about } from "@/data/about";
import { education } from "@/data/education";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function BentoIdentity() {
  const chips = [{ label: siteConfig.location }, ...about.chips].filter(
    (chip) => chip.label,
  );
  const summary = about.highlights[0]?.body ?? "";

  return (
    <section id="about" className="scroll-mt-24 py-16 md:py-20">
      <AnimatedSection>
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="01 · About"
            title="About"
            description="A quick introduction to who I am and what I'm looking for."
          />

          <BentoGrid>
            <BentoTile colSpan={7} className="flex flex-col gap-4">
              {chips.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {chips.map((chip) => (
                    <span
                      key={chip.label}
                      className={cn(
                        "rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-500",
                        "dark:border-zinc-700 dark:text-zinc-400",
                      )}
                    >
                      {chip.label}
                    </span>
                  ))}
                </div>
              ) : null}
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {summary}
              </p>
            </BentoTile>

            <BentoCell colSpan={5}>
              {education[0] ? (
                <EducationCard item={education[0]} className="h-full" />
              ) : null}
            </BentoCell>

            {about.highlights.map((highlight, index) => (
              <AboutHighlightCard
                key={highlight.id}
                highlight={highlight}
                index={index}
                className="md:col-span-4"
              />
            ))}
          </BentoGrid>

          <SectionLink href={about.experienceLink.href} className="mt-8">
            {about.experienceLink.label}
            <span aria-hidden="true">→</span>
          </SectionLink>
        </div>
      </AnimatedSection>
    </section>
  );
}
