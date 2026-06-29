import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto max-w-6xl px-6 py-10">
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
    </footer>
  );
}
