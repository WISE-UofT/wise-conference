import { defineCollection, z } from "astro:content";

const discounts = defineCollection({
  type: "content",
  schema: z.object({
    school: z.string(),
  }),
});

export const collections = {
  discounts,
};
