"use client";

import {
  Children,
  type ReactElement,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

type StaggerRevealProps = {
  className?: string;
  staggerMs?: number;
  children: ReactNode;
};

export function StaggerReveal({
  className,
  staggerMs = 100,
  children,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const items = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {items.map((child, index) => (
        <div
          key={(child as ReactElement).key ?? index}
          className={cn(
            "transition-all duration-700 ease-out motion-reduce:transition-none",
            visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
          )}
          style={
            visible
              ? { transitionDelay: `${index * staggerMs}ms` }
              : undefined
          }
        >
          {child}
        </div>
      ))}
    </div>
  );
}
