import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const discounts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/discounts" }),
  schema: z.object({
    school: z.string(),
  }),
});

export const collections = {
  discounts,
};
