import { AchievementPodium } from "@/components/home/achievement-podium";
import { ExperienceTimeline } from "@/components/home/experience-timeline";
import { SkillHighlightCard } from "@/components/home/skill-highlight-card";
import { SkillProficiencyBars } from "@/components/home/skill-proficiency-bars";
import { BentoCell, BentoGrid } from "@/components/layout/bento-grid";
import { BentoTile } from "@/components/layout/bento-tile";
import { SectionHeader } from "@/components/layout/section-header";
import { AnimatedSection } from "@/components/ui/animated-section";
import { achievements } from "@/data/achievements";
import { experience } from "@/data/experience";
import { featuredSkills, skillGroups } from "@/data/skills";

export function BentoCredentials() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-zinc-200 bg-zinc-50/50 py-16 md:py-20 dark:border-zinc-800 dark:bg-zinc-950/50"
    >
      <AnimatedSection>
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="03 · Credentials"
            title="Experience"
            description="Internships, teaching, and other hands-on work — plus the skills and achievements that support it."
          />

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
        </div>
      </AnimatedSection>
    </section>
  );
}
