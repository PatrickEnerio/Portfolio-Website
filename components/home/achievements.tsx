import { AchievementPodium } from "@/components/home/achievement-podium";
import { Section } from "@/components/layout/section";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements"
      description="Hackathons, honors, and certifications."
      contentClassName="max-w-6xl"
    >
      <AchievementPodium items={achievements} />
    </Section>
  );
}
