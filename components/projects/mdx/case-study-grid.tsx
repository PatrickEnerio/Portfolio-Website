import type { ReactNode } from "react";
import { BentoGrid } from "@/components/layout/bento-grid";

type CaseStudyGridProps = {
  children: ReactNode;
};

export function CaseStudyGrid({ children }: CaseStudyGridProps) {
  return <BentoGrid className="not-prose">{children}</BentoGrid>;
}
