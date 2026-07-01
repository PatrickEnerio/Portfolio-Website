import { AboutHighlightCard } from "@/components/home/about-highlight-card";
import { AboutIntroCard } from "@/components/home/about-intro-card";
import { EducationCard } from "@/components/home/education-card";
import { BentoCell, BentoGrid } from "@/components/layout/bento-grid";
import { Section } from "@/components/layout/section";
import { SectionLink } from "@/components/ui/section-link";
import { about } from "@/data/about";
import { education } from "@/data/education";

export function BentoIdentity() {
  return (
    <Section
      id="about"
      variant="default"
      eyebrow="01 · About"
      title="About"
      description="A quick introduction to who I am and what I'm looking for."
    >
      <BentoGrid>
        <BentoCell colSpan={12}>
          {education[0] ? (
            <EducationCard item={education[0]} className="h-full" />
          ) : null}
        </BentoCell>
      </BentoGrid>

      <BentoGrid className="mt-8 md:mt-10">
        <AboutIntroCard intro={about.intro} className="md:col-span-4" />

        {about.highlights.map((highlight, index) => (
          <AboutHighlightCard
            key={highlight.id}
            highlight={highlight}
            index={index + 1}
            className="md:col-span-4"
          />
        ))}
      </BentoGrid>

      <SectionLink href={about.experienceLink.href} className="mt-8">
        {about.experienceLink.label}
        <span aria-hidden="true">→</span>
      </SectionLink>
    </Section>
  );
}
