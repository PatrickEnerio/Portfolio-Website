"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type HeroVisualProps = {
  className?: string;
};

export function HeroVisual({ className }: HeroVisualProps) {
  const [imageError, setImageError] = useState(false);
  const { image } = siteConfig.hero;

  const initials = siteConfig.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={cn("relative mx-auto w-full max-w-md lg:max-w-none", className)}>
      <div
        aria-hidden
        className="hero-glow-outer hero-glow-pulse pointer-events-none absolute -inset-6 -z-20 rounded-[28px] opacity-70 dark:opacity-90"
      />
      <div
        aria-hidden
        className="hero-glow hero-glow-animate pointer-events-none absolute -inset-3 -z-10 rounded-[24px] opacity-75 dark:opacity-95"
      />

      <div className="hero-photo-enter hero-photo-frame relative aspect-[4/5] overflow-hidden rounded-[20px] border border-zinc-200/80 bg-zinc-100 dark:border-zinc-700/80 dark:bg-zinc-900">
        {!imageError ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 45vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
            <span className="text-5xl font-bold text-zinc-500 dark:text-zinc-400">
              {initials}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
