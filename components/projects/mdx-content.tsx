"use client";

import * as runtime from "react/jsx-runtime";
import { type ComponentType, useMemo } from "react";
import { Callout } from "@/components/projects/mdx/callout";
import { MdxImage } from "@/components/projects/mdx/mdx-image";

const sharedComponents = {
  Callout,
  Image: MdxImage,
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
    <div className="prose prose-zinc max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-a:text-emerald-600 prose-code:text-emerald-700 dark:prose-a:text-emerald-400 dark:prose-code:text-emerald-300">
      {/* eslint-disable-next-line react-hooks/static-components -- Velite compiles MDX to a cached component factory */}
      <Component components={mergedComponents} />
    </div>
  );
}
