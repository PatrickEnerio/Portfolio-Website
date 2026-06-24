import { Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/layout/section";

export function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      description="Interested in working together? I'd love to hear from you."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          I&apos;m open to software engineering internship opportunities and collaborative
          project work. Reach out if you&apos;d like to chat about my experience, your team,
          or potential roles.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-sky-600"
          >
            <Mail className="h-4 w-4" />
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
