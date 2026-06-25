import type { LucideIcon } from "lucide-react";
import {
  Code2,
  GitBranch,
  Layout,
  Network,
  Radio,
  Shield,
  TestTube,
  Users,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiCplusplus,
  SiFastapi,
  SiFlask,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiOpenjdk,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { cn } from "@/lib/utils";

const cursorIconPath =
  "M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23";

function CursorBrandIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d={cursorIconPath} />
    </svg>
  );
}

const slugIcons: Record<string, IconType | typeof CursorBrandIcon> = {
  cursor: CursorBrandIcon,
  python: SiPython,
  react: SiReact,
  javascript: SiJavascript,
  typescript: SiTypescript,
  openjdk: SiOpenjdk,
  cplusplus: SiCplusplus,
  nextdotjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  flask: SiFlask,
  fastapi: SiFastapi,
  git: SiGit,
};

const nameFallbacks: Record<string, LucideIcon> = {
  "Responsive Design": Layout,
  "REST APIs": Network,
  WebSockets: Radio,
  "OAuth 2.0": Shield,
  "Agile/Scrum": Users,
  "CI/CD": GitBranch,
  "Automated Testing": TestTube,
};

type SkillIconProps = {
  slug?: string;
  name: string;
  className?: string;
};

export function SkillIcon({ slug, name, className }: SkillIconProps) {
  const iconClass = cn("shrink-0", className);

  if (slug && slugIcons[slug]) {
    const BrandIcon = slugIcons[slug];
    return <BrandIcon aria-hidden className={iconClass} />;
  }
  const FallbackIcon = nameFallbacks[name] ?? Code2;
  return <FallbackIcon aria-hidden className={iconClass} />;
}
