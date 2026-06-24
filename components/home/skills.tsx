import { skills } from "@/data/skills";
import { Section } from "@/components/layout/section";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      description="Technologies and practices I use when building software."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
