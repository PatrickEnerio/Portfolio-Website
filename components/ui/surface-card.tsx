import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SurfaceCardProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function SurfaceCard<T extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: SurfaceCardProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
