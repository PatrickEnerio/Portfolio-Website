export const caseStudySectionLayout: Record<
  string,
  { colSpan: 4 | 5 | 7 | 12; variant?: "default" | "muted" }
> = {
  Context: { colSpan: 7 },
  Challenge: { colSpan: 5, variant: "muted" },
  Approach: { colSpan: 12 },
  Impact: { colSpan: 5, variant: "muted" },
  "Tech Stack": { colSpan: 12 },
};
