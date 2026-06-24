import { Mail, FileDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { siteConfig } from "@/data/site";
import { AnimatedSection } from "@/components/ui/animated-section";

export function Hero() {
  return (
    <section className="border-b border-zinc-200 bg-gradient-to-b from-sky-50/60 to-white dark:border-zinc-800 dark:from-sky-950/20 dark:to-zinc-950">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <AnimatedSection>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">
            {siteConfig.role}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 md:text-6xl dark:text-zinc-50">
            {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl dark:text-zinc-400">
            {siteConfig.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteConfig.links.resume}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-sky-600"
            >
              <FileDown className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-500">
            {siteConfig.location} · Open to internship opportunities
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
