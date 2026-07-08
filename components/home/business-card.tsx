import { FileDown, Globe, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { SocialLinks } from "@/components/home/social-links";
import { SurfaceCard } from "@/components/ui/surface-card";
import { siteConfig } from "@/data/site";
import { ctaFocusRing, ctaSecondaryClassName } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";

type ContactRow = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

type BusinessCardProps = {
  className?: string;
};

export function BusinessCard({ className }: BusinessCardProps) {
  const { card } = siteConfig.contact;
  const { image } = siteConfig.hero;
  const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;
  const websiteDisplay = siteConfig.url.replace(/^https?:\/\//, "");

  const contactRows: ContactRow[] = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.phone,
      href: phoneHref,
    },
    {
      icon: MapPin,
      label: "Location",
      value: siteConfig.location,
    },
    {
      icon: Globe,
      label: "Website",
      value: websiteDisplay,
      href: siteConfig.url,
    },
  ];

  return (
    <SurfaceCard
      interactive
      className={cn("flex h-full flex-col overflow-hidden", className)}
    >
      <div aria-hidden className="h-1 bg-sky-400 dark:bg-sky-500" />

      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-700">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
          <div>
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {siteConfig.name}
            </h3>
            <p className="text-sm font-medium text-sky-600 dark:text-sky-300">
              {card.role}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {card.subtitle}
            </p>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-4 dark:border-zinc-800">
          <ul className="space-y-3">
            {contactRows.map((row) => {
              const Icon = row.icon;
              const rowContent = (
                <>
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg",
                      "border border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800",
                    )}
                  >
                    <Icon className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400" />
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      row.href
                        ? "text-sky-600 dark:text-sky-300"
                        : "text-zinc-600 dark:text-zinc-400",
                    )}
                  >
                    {row.value}
                  </span>
                </>
              );

              return (
                <li key={row.label}>
                  {row.href ? (
                    <a
                      href={row.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg transition-colors",
                        "hover:opacity-80",
                        ctaFocusRing,
                      )}
                    >
                      {rowContent}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3">{rowContent}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-auto space-y-4 pt-2">
          <a href={siteConfig.links.resume} className={ctaSecondaryClassName}>
            <FileDown className="h-4 w-4" />
            {card.resumeLabel}
          </a>
          <SocialLinks />
        </div>
      </div>
    </SurfaceCard>
  );
}
