import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type MdxImageProps = ComponentPropsWithoutRef<"figure"> & {
  src: string;
  alt: string;
  caption?: string;
};

export function MdxImage({ src, alt, caption, className, ...props }: MdxImageProps) {
  return (
    <figure className={cn("my-8", className)} {...props}>
      <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className="h-auto w-full"
        />
      </div>
      {caption ? (
        <figcaption className="mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
