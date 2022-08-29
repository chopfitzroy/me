import remarkGfm from "remark-gfm";
import readingTime from "reading-time";
import rehypeImageLink from "rehype-image-link";

import { createRequire } from "module";
import { remarkCodeHike } from "@code-hike/mdx";

const require = createRequire(import.meta.url);

const theme = require("shiki/themes/nord.json");

import {
  makeSource,
  ComputedFields,
  defineDocumentType,
} from "contentlayer/source-files";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ""),
  },
};

// NOTE: Mostly copied from:
// - https://betterprogramming.pub/building-better-next-js-static-sites-with-mdx-and-contentlayer-9a06ca84e7f7
export const Post = defineDocumentType(() => ({
  name: "Post",
  // NOTE Needs to be `contentType`
  // - https://github.com/contentlayerdev/contentlayer/releases/tag/v0.1.0
  contentType: "mdx",
  filePathPattern: "posts/*.mdx",
  fields: {
    draft: { type: "boolean", required: false },
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
  },
  computedFields: {
    ...computedFields,
    readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  },
}));

const Workshop = defineDocumentType(() => ({
  name: "Workshop",
  filePathPattern: "workshops/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
  },
  computedFields,
}));

const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "pages/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
  },
  computedFields,
}));

export default makeSource({
  disableImportAliasWarning: true,
  contentDirPath: "data",
  documentTypes: [Workshop, Page, Post],
  mdx: {
    rehypePlugins: [rehypeImageLink],
    remarkPlugins: [remarkGfm, [remarkCodeHike, { theme }]],
  },
});
