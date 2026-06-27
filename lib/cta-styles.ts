import { cn } from "@/lib/utils";

export const ctaFocusRing = cn(
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2",
  "dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-[#1c1c1c]",
);

export const ctaPrimaryClassName = cn(
  "inline-flex items-center gap-2 rounded-[20px] bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800",
  ctaFocusRing,
);

export const ctaSecondaryClassName = cn(
  "inline-flex items-center gap-2 rounded-[20px] border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800/60",
  ctaFocusRing,
);
