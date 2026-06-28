import { AboutHighlightCard } from "@/components/home/about-highlight-card";
import { Section } from "@/components/layout/section";
import { StaggerReveal } from "@/components/ui/stagger-reveal";
import { about } from "@/data/about";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function About() {
  const chips = [{ label: siteConfig.location }, ...about.chips];

  return (
    <Section
      id="about"
      title="About"
      description="A quick introduction to who I am and what I'm looking for."
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span
            key={chip.label}
            className={cn(
              "rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-500",
              "dark:border-zinc-800 dark:text-zinc-400",
            )}
          >
            {chip.label}
          </span>
        ))}
      </div>

      <StaggerReveal className="grid gap-3 md:grid-cols-3" staggerMs={80}>
        {about.highlights.map((highlight, index) => (
          <AboutHighlightCard
            key={highlight.id}
            highlight={highlight}
            index={index}
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
