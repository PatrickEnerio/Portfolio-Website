import { ChevronDown, FileDown, FolderOpen } from "lucide-react";
import { HeroNavbar } from "@/components/home/hero-navbar";
import { HeroVisual } from "@/components/home/hero-visual";
import { StaggerReveal } from "@/components/ui/stagger-reveal";
import { about } from "@/data/about";
import { siteConfig } from "@/data/site";
import { ctaPrimaryClassName, ctaSecondaryClassName } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";

const { hero } = siteConfig;

export function Hero() {
  const metaParts = [hero.meta.location, hero.meta.availability].filter(Boolean);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-24 border-b border-zinc-200 dark:border-zinc-800"
    >
      <HeroNavbar />
      <div className="mx-auto flex min-h-[calc(85svh-4rem)] max-w-6xl flex-col justify-center px-6 py-12 md:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <HeroVisual className="order-1 lg:order-2" />

          <div className="order-2 lg:order-1">
            <StaggerReveal staggerMs={100}>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 md:text-sm dark:text-zinc-400">
                {hero.eyebrow}
              </p>

              <h1
                id="hero-heading"
                className="mt-4 text-5xl font-bold tracking-tight text-zinc-900 md:text-6xl lg:text-7xl dark:text-zinc-50"
              >
                {hero.headline.map((line, index) => (
                  <span key={line}>
                    {index > 0 ? <br /> : null}
                    {line}
                  </span>
                ))}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 md:text-xl dark:text-zinc-400">
                {hero.subhead}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {about.chips.map((chip) => (
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

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={hero.ctas.primary.href} className={ctaPrimaryClassName}>
                  <FolderOpen className="h-4 w-4" />
                  {hero.ctas.primary.label}
                </a>
                <a href={hero.ctas.secondary.href} className={ctaSecondaryClassName}>
                  <FileDown className="h-4 w-4" />
                  {hero.ctas.secondary.label}
                </a>
              </div>

              {metaParts.length > 0 ? (
                <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-500">
                  {metaParts.join(" · ")}
                </p>
              ) : null}
            </StaggerReveal>
          </div>
        </div>

        <a
          href={hero.scrollTarget}
          aria-label="Scroll to about section"
          className={cn(
            "mt-10 flex justify-center text-zinc-400 transition-colors hover:text-zinc-600 lg:mt-12 dark:hover:text-zinc-300",
            "rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2",
            "dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-[#1c1c1c]",
          )}
        >
          <ChevronDown className="h-6 w-6 animate-bounce motion-reduce:animate-none" />
        </a>
      </div>
    </section>
  );
}
