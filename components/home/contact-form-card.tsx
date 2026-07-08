"use client";

import { FormEvent, useState } from "react";
import { SurfaceCard } from "@/components/ui/surface-card";
import { siteConfig } from "@/data/site";
import { ctaFocusRing, ctaPrimaryClassName } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";

const fieldClassName = cn(
  "w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900",
  "placeholder:text-zinc-400",
  "dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500",
  ctaFocusRing,
);

const labelClassName =
  "text-xs font-medium text-zinc-500 dark:text-zinc-400";

type ContactFormCardProps = {
  className?: string;
};

export function ContactFormCard({ className }: ContactFormCardProps) {
  const { form } = siteConfig.contact;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `From: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <SurfaceCard className={cn("flex h-full flex-col p-5 md:p-6", className)}>
      <div className="space-y-1.5">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
          {form.title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {form.description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-1 flex-col gap-4">
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className={labelClassName}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            className={fieldClassName}
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="contact-email" className={labelClassName}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className={fieldClassName}
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="contact-message" className={labelClassName}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="What would you like to discuss?"
            className={cn(fieldClassName, "resize-y min-h-[120px]")}
          />
        </div>

        <div className="mt-auto pt-2">
          <button type="submit" className={ctaPrimaryClassName}>
            {form.submitLabel}
          </button>
        </div>
      </form>
    </SurfaceCard>
  );
}
