declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"category": {
"art.md": {
  id: "art.md",
  slug: "art",
  body: string,
  collection: "category",
  data: InferEntrySchema<"category">
},
"bussiness.md": {
  id: "bussiness.md",
  slug: "bussiness",
  body: string,
  collection: "category",
  data: InferEntrySchema<"category">
},
"dev.md": {
  id: "dev.md",
  slug: "dev",
  body: string,
  collection: "category",
  data: InferEntrySchema<"category">
},
"me.md": {
  id: "me.md",
  slug: "me",
  body: string,
  collection: "category",
  data: InferEntrySchema<"category">
},
"wellbeing.md": {
  id: "wellbeing.md",
  slug: "wellbeing",
  body: string,
  collection: "category",
  data: InferEntrySchema<"category">
},
"writing.md": {
  id: "writing.md",
  slug: "writing",
  body: string,
  collection: "category",
  data: InferEntrySchema<"category">
},
"ygo.md": {
  id: "ygo.md",
  slug: "ygo",
  body: string,
  collection: "category",
  data: InferEntrySchema<"category">
},
},
"post": {
"Text File.md": {
  id: "Text File.md",
  slug: "text-file",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
},
"tag": {
"h2h.md": {
  id: "h2h.md",
  slug: "h2h",
  body: string,
  collection: "tag",
  data: InferEntrySchema<"tag">
},
},
"type": {
"article.md": {
  id: "article.md",
  slug: "article",
  body: string,
  collection: "type",
  data: InferEntrySchema<"type">
},
"log.md": {
  id: "log.md",
  slug: "log",
  body: string,
  collection: "type",
  data: InferEntrySchema<"type">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
