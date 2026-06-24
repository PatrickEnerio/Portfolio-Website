import { experience } from "@/data/experience";
import { Section } from "@/components/layout/section";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      description="Internships, teaching, and other hands-on work."
    >
      <div className="space-y-6">
        {experience.map((item) => (
          <article
            key={`${item.organization}-${item.title}`}
            className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  {item.organization}
                </p>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.period}</p>
            </div>
            <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {item.description}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
