"use client";

import { X } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Modal({ open, onClose, title, children, className }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-labelledby="modal-title"
      className={cn(
        "fixed inset-0 z-50 m-auto w-[calc(100%-2rem)] max-w-2xl",
        "max-h-[min(90vh,48rem)] overflow-hidden rounded-2xl border border-zinc-200 bg-white p-0 shadow-xl",
        "backdrop:bg-zinc-950/60 backdrop:backdrop-blur-sm",
        "dark:border-zinc-800 dark:bg-zinc-900",
        className,
      )}
    >
      <div className="flex max-h-[min(90vh,48rem)] flex-col">
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-zinc-200 px-5 py-4 dark:border-zinc-800">
          <h2
            id="modal-title"
            className="pr-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50"
          >
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className={cn(
              "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
              "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500",
              "dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
            )}
            aria-label="Close dialog"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>
        <div className="overflow-y-auto px-5 py-5">{children}</div>
      </div>
    </dialog>
  );
}
