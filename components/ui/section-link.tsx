import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type SectionLinkProps = ComponentPropsWithoutRef<typeof Link>;

export function SectionLink({ className, children, ...props }: SectionLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-medium text-sky-600",
        "transition-colors hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300",
        "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2",
        "dark:focus-visible:ring-offset-zinc-950",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
