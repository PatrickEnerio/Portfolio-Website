import { ExperienceTimeline } from "@/components/home/experience-timeline";
import { experience } from "@/data/experience";
import { Section } from "@/components/layout/section";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      description="Internships, teaching, and other hands-on work."
      contentClassName="max-w-6xl"
    >
      <ExperienceTimeline items={experience} />
    </Section>
  );
}
