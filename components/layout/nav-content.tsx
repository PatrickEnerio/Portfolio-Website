"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

const sections = siteConfig.nav;

export function toHomeSectionHref(hash: string) {
  return hash.startsWith("#") ? `/${hash}` : hash;
}

type NavContentProps = {
  activeSection: string;
  mobileOpen: boolean;
  onMobileOpenChange: (open: boolean) => void;
  className?: string;
};

export function NavContent({
  activeSection,
  mobileOpen,
  onMobileOpenChange,
  className,
}: NavContentProps) {
  return (
    <>
      <nav
        aria-label="Main navigation"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
          className,
        )}
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {sections.map(({ label, href }) => (
            <Link
              key={href}
              href={toHomeSectionHref(href)}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                activeSection === href
                  ? "bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-300"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
              )}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/projects"
            className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            All Projects
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => onMobileOpenChange(!mobileOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 dark:border-zinc-800 dark:text-zinc-300"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-zinc-200 px-6 py-4 md:hidden dark:border-zinc-800">
          <div className="flex flex-col gap-1">
            {sections.map(({ label, href }) => (
              <Link
                key={href}
                href={toHomeSectionHref(href)}
                onClick={() => onMobileOpenChange(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/projects"
              onClick={() => onMobileOpenChange(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200"
            >
              All Projects
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
