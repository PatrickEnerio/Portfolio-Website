import { AchievementPodium } from "@/components/home/achievement-podium";
import { ExperienceTimeline } from "@/components/home/experience-timeline";
import { SkillHighlightCard } from "@/components/home/skill-highlight-card";
import { SkillProficiencyBars } from "@/components/home/skill-proficiency-bars";
import { BentoCell, BentoGrid } from "@/components/layout/bento-grid";
import { BentoTile } from "@/components/layout/bento-tile";
import { Section } from "@/components/layout/section";
import { achievements } from "@/data/achievements";
import { experience } from "@/data/experience";
import { featuredSkills, skillGroups } from "@/data/skills";

export function BentoCredentials() {
  return (
    <Section
      id="experience"
      variant="default"
      eyebrow="03 · Credentials"
      title="Experience"
      description="Internships, teaching, and other hands-on work — plus the skills and achievements that support it."
    >
      <BentoGrid>
        <BentoTile colSpan={7} className="p-4 md:p-5">
          <h3 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Work history
          </h3>
          <ExperienceTimeline items={experience} />
        </BentoTile>

        <BentoCell colSpan={5} className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Featured skills
          </h3>
          {featuredSkills.map((skill) => (
            <SkillHighlightCard key={skill.slug} skill={skill} />
          ))}
        </BentoCell>

        <BentoTile colSpan={5} className="p-4 md:p-5">
          <h3 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Achievements
          </h3>
          <AchievementPodium items={achievements} />
        </BentoTile>

        <BentoTile colSpan={7}>
          <h3 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Proficiency
          </h3>
          <SkillProficiencyBars groups={skillGroups} limitPerGroup={4} />
        </BentoTile>
      </BentoGrid>
    </Section>
  );
}
