import { SkillHighlightCard } from "@/components/home/skill-highlight-card";
import { SkillProficiencyBars } from "@/components/home/skill-proficiency-bars";
import { StaggerReveal } from "@/components/ui/stagger-reveal";
import { featuredSkills, skillGroups } from "@/data/skills";
import { Section } from "@/components/layout/section";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      description="Core strengths and proficiency across the tools I use most."
    >
      <StaggerReveal className="grid gap-3 md:grid-cols-3" staggerMs={80}>
        {featuredSkills.map((skill) => (
          <SkillHighlightCard key={skill.slug} skill={skill} />
        ))}
      </StaggerReveal>

      <SkillProficiencyBars groups={skillGroups} className="mt-12" />
    </Section>
  );
}
