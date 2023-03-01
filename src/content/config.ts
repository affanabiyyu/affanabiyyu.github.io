// 1. Import your utilities and schemas
import { z, defineCollection } from 'astro:content';

// 2. Define your collections
const postCollection = defineCollection({ 
  schema: z.object({
    title: z.string(),
    category: z.array(z.string()),
    tag: z.array(z.string()).optional(),
    type: z.string().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    publishDate: z.date(),
    footnote: z.string().optional(),
    language: z.enum(['id', 'en']),
    author: z.string().default('affan abiyyu'),
  }),
});

const categoryCollection = defineCollection({ 
  schema: z.object({
    name: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
  }),
});

const tagCollection = defineCollection({ 
  schema: z.object({
    name: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
  }),
});

const typeCollection = defineCollection({ 
  schema: z.object({
    name: z.string(),
  }),
});

// 3. Export multiple collections to register them
export const collections = {
  'post': postCollection,
  'category': categoryCollection,
  'tag': tagCollection,
  'type': tagCollection,
};