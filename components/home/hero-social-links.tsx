import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const socialLinkClassName = cn(
  "inline-flex h-11 w-11 items-center justify-center rounded-full text-zinc-600 transition-colors",
  "hover:bg-zinc-100 hover:text-zinc-900",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2",
  "dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100",
  "dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-[#1c1c1c]",
);

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
} as const;

export function HeroSocialLinks() {
  return (
    <div className="mt-4 flex items-center gap-2">
      {siteConfig.hero.social.map(({ platform, href, ariaLabel }) => {
        const Icon = socialIcons[platform];

        return (
          <a
            key={platform}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className={socialLinkClassName}
          >
            <Icon className="h-6 w-6" />
          </a>
        );
      })}
    </div>
  );
}
