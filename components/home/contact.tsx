import { BusinessCard } from "@/components/home/business-card";
import { ContactFormCard } from "@/components/home/contact-form-card";
import { BentoCell, BentoGrid } from "@/components/layout/bento-grid";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <Section
      id="contact"
      variant="band"
      eyebrow="04 · Contact"
      title={siteConfig.contact.title}
      description={siteConfig.contact.description}
    >
      <BentoGrid>
        <BentoCell colSpan={5}>
          <BusinessCard className="h-full" />
        </BentoCell>

        <BentoCell colSpan={7}>
          <ContactFormCard className="h-full" />
        </BentoCell>
      </BentoGrid>
    </Section>
  );
}
