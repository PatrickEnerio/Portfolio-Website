import { FileDown, Mail } from "lucide-react";
import { SocialLinks } from "@/components/home/social-links";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/data/site";
import { ctaPrimaryClassName, ctaSecondaryClassName } from "@/lib/cta-styles";

export function Contact() {
  const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

  return (
    <Section
      id="contact"
      title={siteConfig.contact.title}
      description={siteConfig.contact.description}
      className="border-t border-zinc-200 bg-zinc-50/80 dark:border-zinc-800 dark:bg-zinc-950/80"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${siteConfig.email}`} className={ctaPrimaryClassName}>
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </a>
            <a href={siteConfig.links.resume} className={ctaSecondaryClassName}>
              <FileDown className="h-4 w-4" />
              Resume
            </a>
          </div>

          <SocialLinks className="mt-6" />

          <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-500">
            {siteConfig.location}
            <span aria-hidden="true"> · </span>
            <a
              href={phoneHref}
              className="transition-colors hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              {siteConfig.phone}
            </a>
          </p>
        </div>

        <div aria-hidden="true" className="hidden lg:block" />
      </div>
    </Section>
  );
}
