"use client";

import { TechTagList } from "@/components/home/tech-tag";
import { Modal } from "@/components/ui/modal";
import type { Experience } from "@/data/experience";

type ExperienceDetailModalProps = {
  item: Experience | null;
  dateLabel: string;
  onClose: () => void;
};

export function ExperienceDetailModal({
  item,
  dateLabel,
  onClose,
}: ExperienceDetailModalProps) {
  return (
    <Modal
      open={item !== null}
      onClose={onClose}
      title={item?.title ?? "Experience"}
    >
      {item ? (
        <div className="space-y-5">
          <div className="space-y-1">
            <p className="text-sm font-medium text-sky-600 dark:text-sky-300">
              {item.organization}
            </p>
            <p className="font-mono text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              {dateLabel}
            </p>
          </div>

          {item.technologies.length > 0 ? (
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Technologies & practices
              </p>
              <TechTagList tags={item.technologies} />
            </div>
          ) : null}

          <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {item.description}
          </p>

          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Highlights
            </p>
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
      ) : null}
    </Modal>
  );
}
