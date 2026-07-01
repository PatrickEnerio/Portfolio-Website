"use client";

import * as runtime from "react/jsx-runtime";
import { type ComponentType, useMemo } from "react";
import { Callout } from "@/components/projects/mdx/callout";
import { CaseStudyGrid } from "@/components/projects/mdx/case-study-grid";
import { CaseStudySection } from "@/components/projects/mdx/case-study-section";
import { KeyResults } from "@/components/projects/mdx/key-results";
import { MdxImage } from "@/components/projects/mdx/mdx-image";
import { TechGrid } from "@/components/projects/mdx/tech-grid";

const sharedComponents = {
  Callout,
  Image: MdxImage,
  KeyResults,
  TechGrid,
  CaseStudyGrid,
  CaseStudySection,
};

type MDXContentProps = {
  code: string;
  components?: Record<string, ComponentType>;
};

const cache = new Map<string, ComponentType<{ components?: object }>>();

type MDXModule = { default: ComponentType<{ components?: object }> };

function getMDXComponent(code: string) {
  let Component = cache.get(code);
  if (!Component) {
    const fn = new Function(code) as (scope: typeof runtime) => MDXModule;
    Component = fn({ ...runtime }).default;
    cache.set(code, Component);
  }
  return Component;
}

export function MDXContent({ code, components }: MDXContentProps) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  const mergedComponents = useMemo(
    () => ({ ...sharedComponents, ...components }),
    [components],
  );

  return (
    <div className="not-prose">
      {/* eslint-disable-next-line react-hooks/static-components -- Velite compiles MDX to a cached component factory */}
      <Component components={mergedComponents} />
    </div>
  );
}
