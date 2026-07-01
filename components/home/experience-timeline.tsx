"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Experience } from "@/data/experience";
import { cn } from "@/lib/utils";

type ExperienceTimelineProps = {
  items: Experience[];
};

const MONTH_ABBREVS: Record<string, string> = {
  january: "Jan",
  jan: "Jan",
  february: "Feb",
  feb: "Feb",
  march: "Mar",
  mar: "Mar",
  april: "Apr",
  apr: "Apr",
  may: "May",
  june: "Jun",
  jun: "Jun",
  july: "Jul",
  jul: "Jul",
  august: "Aug",
  aug: "Aug",
  september: "Sep",
  sep: "Sep",
  october: "Oct",
  oct: "Oct",
  november: "Nov",
  nov: "Nov",
  december: "Dec",
  dec: "Dec",
};

function parseDatePart(part: string): { month: string; year: string } | null {
  const cleaned = part.replace(/\./g, "").trim();
  const match = cleaned.match(/^([A-Za-z]+)\s+((19|20)\d{2})$/);

  if (!match) {
    return null;
  }

  const month = MONTH_ABBREVS[match[1].toLowerCase()];
  if (!month) {
    return null;
  }

  return { month, year: match[2] };
}

function parseTimelineDates(period: string): string {
  const parts = period.split(/[–-]/).map((part) => part.trim());
  const start = parts[0] ? parseDatePart(parts[0]) : null;
  const endRaw = parts[1];

  if (!start) {
    return period;
  }

  if (!endRaw || endRaw.toLowerCase() === "present") {
    return `${start.month} ${start.year} – Present`;
  }

  const end = parseDatePart(endRaw);
  if (!end) {
    return `${start.month} ${start.year} – Present`;
  }

  if (start.year === end.year) {
    return `${start.month} – ${end.month} ${start.year}`;
  }

  return `${start.month} ${start.year} – ${end.month} ${end.year}`;
}

type ExperienceCardProps = {
  item: Experience;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

function ExperienceCard({ item, index, isOpen, onToggle }: ExperienceCardProps) {
  const titleId = `experience-title-${index}`;
  const panelId = `experience-panel-${index}`;

  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="p-5">
        <h3
          id={titleId}
          className="text-base font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {item.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-sky-600 dark:text-sky-300">
          {item.organization}
        </p>
        <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {item.description}
        </p>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sky-600 hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
        >
          {isOpen ? "Show less" : "Learn more"}
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-300 ease-out motion-reduce:transition-none",
              isOpen && "rotate-180",
            )}
            aria-hidden
          />
        </button>
      </div>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div
            id={panelId}
            role="region"
            aria-labelledby={titleId}
            className={cn(
              "border-t border-zinc-200 px-5 pb-5 pt-4 transition-all duration-300 ease-out motion-reduce:transition-none dark:border-zinc-800",
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-1.5 opacity-0",
            )}
          >
            <ul className="space-y-2.5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400"
                    aria-hidden
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

type TimelineColumnProps = {
  item: Experience;
  index: number;
  isFirst: boolean;
  isLast: boolean;
  isOpen: boolean;
  onToggle: () => void;
};

function TimelineColumn({
  item,
  index,
  isFirst,
  isLast,
  isOpen,
  onToggle,
}: TimelineColumnProps) {
  const dateLabel = parseTimelineDates(item.period);

  return (
    <li
      className={cn(
        "flex w-[min(85vw,20rem)] shrink-0 snap-center flex-col items-center md:w-auto md:shrink",
      )}
    >
      <div className="text-center">
        <p
          className={cn(
            "font-mono text-xs font-semibold leading-4 transition-colors duration-200 motion-reduce:transition-none",
            isOpen
              ? "text-sky-600 dark:text-sky-300"
              : "text-zinc-600 dark:text-zinc-400",
          )}
        >
          {dateLabel}
        </p>
      </div>

      <div className="relative mt-3 flex h-3 w-full items-center justify-center">
        {!isFirst ? (
          <span
            aria-hidden
            className="absolute top-1/2 right-1/2 left-0 h-0.5 -translate-y-1/2 bg-zinc-200 dark:bg-zinc-800"
          />
        ) : null}
        {!isLast ? (
          <span
            aria-hidden
            className="absolute top-1/2 right-0 left-1/2 h-0.5 -translate-y-1/2 bg-zinc-200 dark:bg-zinc-800"
          />
        ) : null}
        <span
          aria-hidden
          className={cn(
            "relative z-10 h-3 w-3 rounded-full border-2 transition-colors duration-200 motion-reduce:transition-none",
            isOpen
              ? "border-sky-400 bg-sky-400"
              : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900",
          )}
        />
      </div>

      <div className="mt-6 w-full">
        <ExperienceCard item={item} index={index} isOpen={isOpen} onToggle={onToggle} />
      </div>
    </li>
  );
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="-mx-6 overflow-x-auto px-6 pb-2 md:mx-0 md:overflow-visible md:px-0 md:pb-0">
      <ol className="flex snap-x snap-mandatory gap-4 md:grid md:grid-cols-3 md:gap-6 md:snap-none">
        {items.map((item, index) => (
          <TimelineColumn
            key={`${item.organization}-${item.title}`}
            item={item}
            index={index}
            isFirst={index === 0}
            isLast={index === items.length - 1}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </ol>
    </div>
  );
}
