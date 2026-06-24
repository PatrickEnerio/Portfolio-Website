import { about } from "@/data/about";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/layout/section";

export function About() {
  const initials = siteConfig.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Section
      id="about"
      title="About"
      description="A quick introduction to who I am and what I'm looking for."
    >
      <div className="grid gap-8 md:grid-cols-[220px_1fr] md:items-start">
        <div
          aria-hidden="true"
          className="mx-auto flex h-52 w-52 items-center justify-center rounded-2xl border border-zinc-200 bg-gradient-to-br from-sky-100 to-zinc-200 text-4xl font-semibold text-sky-600 dark:border-zinc-800 dark:from-sky-950 dark:to-zinc-800 dark:text-sky-200 md:mx-0"
        >
          {initials}
        </div>

        <div className="space-y-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {about.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
