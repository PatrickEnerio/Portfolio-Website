import { education } from "@/data/education";
import { Section } from "@/components/layout/section";

export function Education() {
  return (
    <Section
      id="education"
      title="Education"
      description="Academic background and relevant coursework."
    >
      <div className="space-y-4">
        {education.map((item) => (
          <article
            key={item.school}
            className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {item.degree}
                </h3>
                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  {item.school}
                </p>
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                <p>{item.period}</p>
                {item.gpa ? <p className="mt-1">GPA: {item.gpa}</p> : null}
              </div>
            </div>
            {item.details ? (
              <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {item.details}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
