import { defineCollection, reference } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const ordered = { order: z.number().int().positive() };

const people = defineCollection({
  loader: file("src/content/editions/2026/people.json"),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: image(),
      bio: z.string().optional(),
      pronouns: z.string().optional(),
    }),
});

const participant = z.object({
  person: reference("people"),
  role: z.string(),
  title: z.string().optional(),
  ...ordered,
});

const panels = defineCollection({
  loader: glob({
    base: "./src/content/editions/2026/panels",
    pattern: "*.json",
  }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    participants: z.array(participant),
    ...ordered,
  }),
});

const workshops = defineCollection({
  loader: glob({
    base: "./src/content/editions/2026/workshops",
    pattern: "*.json",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(),
    time: z.string(),
    participants: z.array(participant),
    ...ordered,
  }),
});

const competitions = defineCollection({
  loader: glob({
    base: "./src/content/editions/2026/competitions",
    pattern: "*.json",
  }),
  schema: z.object({
    name: z.string(),
    datetime: z.string(),
    location: z.string(),
    deadline: z.string(),
    signup: z.url(),
    sponsorLogo: z.string(),
    prize: z.string(),
    description: z.string(),
    descriptionBullets: z.array(z.string()),
    participants: z.array(participant),
    ...ordered,
  }),
});

const team = defineCollection({
  loader: glob({
    base: "./src/content/editions/2026",
    pattern: "team.json",
  }),
  schema: z.object({
    year: z.number().int(),
    members: z.array(participant),
  }),
});

const schedule = defineCollection({
  loader: glob({
    base: "./src/content/editions/2026",
    pattern: "schedule.json",
  }),
  schema: z.object({
    year: z.number().int(),
    days: z.array(
      z.object({
        day: z.string(),
        date: z.string(),
        blocks: z.array(
          z.object({
            id: z.string(),
            order: z.number().int().positive(),
            time: z.string(),
            events: z.array(
              z.object({
                id: z.string(),
                order: z.number().int().positive(),
                title: z.string(),
                location: z.string(),
                type: z.enum([
                  "general",
                  "keynote",
                  "panel",
                  "workshop",
                  "competition",
                  "special",
                ]),
              }),
            ),
          }),
        ),
        ...ordered,
      }),
    ),
  }),
});

const recaps = defineCollection({
  loader: glob({ base: "./src/content/recaps", pattern: "*.json" }),
  schema: ({ image }) =>
    z.object({
      year: z.number().int(),
      theme: z.string(),
      keynotes: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          image: image(),
          bio: z.string().optional(),
          pronouns: z.string().optional(),
          title: z.string().optional(),
          role: z.string(),
          order: z.number().int().positive(),
        }),
      ),
      ...ordered,
    }),
});

const faqs = defineCollection({
  loader: file("src/content/faqs/faqs-content.json"),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    ...ordered,
  }),
});

const discounts = defineCollection({
  loader: file("src/content/discounts/discounts-content.json"),
  schema: z.object({
    school: z.string(),
    schoolOrder: z.number().int().positive(),
    department: z.string(),
    departmentOrder: z.number().int().positive(),
    content: z.string(),
    code: z.string().optional(),
    displayCode: z.boolean().optional(),
  }),
});

const discountAvailability = defineCollection({
  loader: file("src/content/discounts/discounts-data.json"),
  schema: z.object({
    code: z.string(),
    used: z.number().int().nonnegative(),
    limit: z.number().int().nonnegative(),
    available: z.number().int().nonnegative(),
  }),
});

const sponsors = defineCollection({
  loader: file("src/content/sponsors/sponsors.json"),
  schema: z.object({
    category: z.enum(["corporate", "academic-sponsor", "academic-contributor"]),
    row: z.number().int().positive(),
    fileName: z.string(),
    size: z.enum(["small", "medium", "large"]),
    ...ordered,
  }),
});

export const collections = {
  people,
  panels,
  workshops,
  competitions,
  team,
  schedule,
  recaps,
  faqs,
  discounts,
  discountAvailability,
  sponsors,
};
