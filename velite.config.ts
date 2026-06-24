import { defineCollection, defineConfig, s } from "velite";

const projects = defineCollection({
  name: "Project",
  pattern: "projects/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.slug("projects"),
      description: s.string().max(200),
      date: s.isodate(),
      featured: s.boolean().default(false),
      tags: s.array(s.string()).default([]),
      links: s
        .object({
          live: s.string().url().optional(),
          github: s.string().url().optional(),
          demo: s.string().url().optional(),
        })
        .default({}),
      image: s.string().optional(),
      content: s.mdx(),
    })
    .transform((data) => ({ ...data, permalink: `/projects/${data.slug}` })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { projects },
});
