import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type CalloutProps = ComponentPropsWithoutRef<"div"> & {
  type?: "info" | "success" | "warning";
};

const styles = {
  info: "border-sky-200 bg-sky-50 text-sky-900 dark:border-sky-900 dark:bg-sky-950/40 dark:text-sky-100",
  success:
    "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-100",
  warning:
    "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100",
};

export function Callout({
  type = "info",
  className,
  children,
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        "my-6 rounded-xl border px-4 py-3 text-sm leading-6",
        styles[type],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
