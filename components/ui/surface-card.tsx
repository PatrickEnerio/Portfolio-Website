import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SurfaceCardProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  interactive?: boolean;
} & Omit<
  ComponentPropsWithoutRef<T>,
  "as" | "children" | "className" | "interactive"
>;

export function SurfaceCard<T extends ElementType = "div">({
  as,
  children,
  className,
  interactive = false,
  ...props
}: SurfaceCardProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900",
        interactive &&
          "transition-all duration-200 ease-out motion-reduce:transition-none hover:-translate-y-0.5 hover:border-zinc-300 motion-reduce:hover:translate-y-0 dark:hover:border-zinc-700",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
