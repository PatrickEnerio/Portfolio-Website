"use client";

import { ExperienceDetailModal } from "@/components/home/experience-detail-modal";
import { TechTagList } from "@/components/home/tech-tag";
import type { Experience } from "@/data/experience";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";

type ExperienceTimelineProps = {
  items: Experience[];
};

const ITEMS_PER_ROW = 3;

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

function chunkItems<T>(items: T[], size: number): T[][] {
  const rows: T[][] = [];

  for (let index = 0; index < items.length; index += size) {
    rows.push(items.slice(index, index + size));
  }

  return rows;
}

type ExperienceCardProps = {
  item: Experience;
  index: number;
  isActive: boolean;
  onLearnMore: () => void;
};

function ExperienceCard({ item, index, isActive, onLearnMore }: ExperienceCardProps) {
  const titleId = `experience-title-${index}`;

  return (
    <article
      id={`experience-${item.slug}`}
      className={cn(
        "flex h-full w-full scroll-mt-24 flex-col rounded-2xl border bg-white dark:bg-zinc-900",
        isActive
          ? "border-sky-300 dark:border-sky-700"
          : "border-zinc-200 dark:border-zinc-800",
      )}
    >
      <div className="flex h-full flex-col p-5">
        <h3
          id={titleId}
          className="text-base font-semibold text-zinc-900 dark:text-zinc-50"
        >
          {item.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-sky-600 dark:text-sky-300">
          {item.organization}
        </p>
        {item.technologies.length > 0 ? (
          <TechTagList tags={item.technologies} className="mt-3" />
        ) : null}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {item.description}
        </p>

        <button
          type="button"
          aria-haspopup="dialog"
          onClick={onLearnMore}
          className="mt-auto inline-flex pt-4 text-sm font-medium text-sky-600 hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
        >
          Learn more
        </button>
      </div>
    </article>
  );
}

type TimelineColumnProps = {
  item: Experience;
  index: number;
  isFirst: boolean;
  isLast: boolean;
  isActive: boolean;
  onLearnMore: () => void;
};

function TimelineColumn({
  item,
  index,
  isFirst,
  isLast,
  isActive,
  onLearnMore,
}: TimelineColumnProps) {
  const dateLabel = parseTimelineDates(item.period);

  return (
    <li className="flex min-w-0 flex-col items-center">
      <div className="text-center">
        <p
          className={cn(
            "font-mono text-xs font-semibold leading-4 transition-colors duration-200 motion-reduce:transition-none",
            isActive
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
            isActive
              ? "border-sky-400 bg-sky-400"
              : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900",
          )}
        />
      </div>

      <div className="mt-6 w-full">
        <ExperienceCard
          item={item}
          index={index}
          isActive={isActive}
          onLearnMore={onLearnMore}
        />
      </div>
    </li>
  );
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const rows = chunkItems(items, ITEMS_PER_ROW);
  const selectedItem = items.find((item) => item.slug === selectedSlug) ?? null;
  const selectedDateLabel = selectedItem
    ? parseTimelineDates(selectedItem.period)
    : "";

  const openModal = useCallback((slug: string) => {
    setSelectedSlug(slug);
    window.history.replaceState(null, "", `#experience-${slug}`);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedSlug(null);
    if (window.location.hash.startsWith("#experience-")) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash;

      if (!hash.startsWith("#experience-")) {
        setSelectedSlug(null);
        return;
      }

      const slug = hash.slice("#experience-".length);
      const item = items.find((entry) => entry.slug === slug);

      if (item) {
        setSelectedSlug(slug);
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);

    return () => {
      window.removeEventListener("hashchange", openFromHash);
    };
  }, [items]);

  return (
    <>
      <div className="space-y-10">
        {rows.map((row, rowIndex) => (
          <ol
            key={row.map((item) => item.slug).join("-")}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
          >
            {row.map((item, columnIndex) => {
              const globalIndex = rowIndex * ITEMS_PER_ROW + columnIndex;

              return (
                <TimelineColumn
                  key={item.slug}
                  item={item}
                  index={globalIndex}
                  isFirst={columnIndex === 0}
                  isLast={columnIndex === row.length - 1}
                  isActive={selectedSlug === item.slug}
                  onLearnMore={() => openModal(item.slug)}
                />
              );
            })}
          </ol>
        ))}
      </div>

      <ExperienceDetailModal
        item={selectedItem}
        dateLabel={selectedDateLabel}
        onClose={closeModal}
      />
    </>
  );
}
