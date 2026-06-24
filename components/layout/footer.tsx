import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Built with Next.js, TypeScript, and MDX.
          </p>
          <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:border-sky-300 hover:text-sky-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-sky-700 dark:hover:text-sky-300"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:border-sky-300 hover:text-sky-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-sky-700 dark:hover:text-sky-300"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:border-sky-300 hover:text-sky-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-sky-700 dark:hover:text-sky-300"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <Link
            href={siteConfig.links.resume}
            className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-600"
          >
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}
