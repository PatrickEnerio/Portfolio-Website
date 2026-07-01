import type { Project } from "#site/content";

export const projectStatusLabels: Record<
  NonNullable<Project["status"]>,
  string
> = {
  shipped: "Shipped",
  prototype: "Prototype",
  "in-progress": "In Progress",
};

export const projectAccentStyles: Record<
  Project["accent"],
  { gradient: string; text: string; badge: string }
> = {
  sky: {
    gradient:
      "from-sky-600 via-sky-500 to-cyan-400 dark:from-sky-900 dark:via-sky-800 dark:to-cyan-900",
    text: "text-sky-100",
    badge: "bg-sky-500/20 text-sky-700 dark:text-sky-300",
  },
  violet: {
    gradient:
      "from-violet-600 via-purple-500 to-fuchsia-400 dark:from-violet-900 dark:via-purple-800 dark:to-fuchsia-900",
    text: "text-violet-100",
    badge: "bg-violet-500/20 text-violet-700 dark:text-violet-300",
  },
  emerald: {
    gradient:
      "from-emerald-600 via-teal-500 to-green-400 dark:from-emerald-900 dark:via-teal-800 dark:to-green-900",
    text: "text-emerald-100",
    badge: "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300",
  },
  amber: {
    gradient:
      "from-amber-600 via-orange-500 to-yellow-400 dark:from-amber-900 dark:via-orange-800 dark:to-yellow-900",
    text: "text-amber-100",
    badge: "bg-amber-500/20 text-amber-700 dark:text-amber-300",
  },
  rose: {
    gradient:
      "from-rose-600 via-pink-500 to-red-400 dark:from-rose-900 dark:via-pink-800 dark:to-red-900",
    text: "text-rose-100",
    badge: "bg-rose-500/20 text-rose-700 dark:text-rose-300",
  },
};

export function isPlaceholderImage(image?: string) {
  return !image || image.endsWith(".svg");
}

export function getProjectInitial(title: string) {
  const match = title.match(/[A-Za-z]/);
  return match ? match[0].toUpperCase() : "?";
}

export function formatProjectDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}
