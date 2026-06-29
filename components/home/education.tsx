import { EducationCard } from "@/components/home/education-card";
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
          <EducationCard key={item.school} item={item} className="p-6" />
        ))}
      </div>
    </Section>
  );
}
