import { achievements } from "@/data/achievements";
import { Section } from "@/components/layout/section";

export function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements"
      description="Hackathons, honors, and certifications."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((item) => (
          <article
            key={`${item.title}-${item.date}`}
            className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {item.title}
              </h3>
              <span className="shrink-0 text-xs text-zinc-500 dark:text-zinc-400">
                {item.date}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-sky-600 dark:text-sky-300">
              {item.organization}
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
