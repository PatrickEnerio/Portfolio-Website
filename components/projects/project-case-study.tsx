import { MDXContent } from "@/components/projects/mdx-content";

type ProjectCaseStudyProps = {
  code: string;
};

export function ProjectCaseStudy({ code }: ProjectCaseStudyProps) {
  return <MDXContent code={code} />;
}
