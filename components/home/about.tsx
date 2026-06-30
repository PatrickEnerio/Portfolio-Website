import { AboutHighlightCard } from "@/components/home/about-highlight-card";
import { AboutIntroCard } from "@/components/home/about-intro-card";
import { EducationCard } from "@/components/home/education-card";
import { Section } from "@/components/layout/section";
import { StaggerReveal } from "@/components/ui/stagger-reveal";
import { about } from "@/data/about";
import { education } from "@/data/education";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <Section
      id="about"
      title="About"
      description="A quick introduction to who I am and what I'm looking for."
    >
      {education[0] ? (
        <div className="mb-6">
          <EducationCard item={education[0]} />
        </div>
      ) : null}

      <StaggerReveal className="grid gap-3 md:grid-cols-3" staggerMs={80}>
        <AboutIntroCard intro={about.intro} />
        {about.highlights.map((highlight, index) => (
          <AboutHighlightCard
            key={highlight.id}
            highlight={highlight}
            index={index + 1}
          />
        ))}
      </StaggerReveal>

      <a
        href={about.experienceLink.href}
        className={cn(
          "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-sky-600",
          "transition-colors hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300",
          "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2",
          "dark:focus-visible:ring-offset-zinc-950",
        )}
      >
        {about.experienceLink.label}
        <span aria-hidden="true">→</span>
      </a>
    </Section>
  );
}
