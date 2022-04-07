import rehypeRaw from "rehype-raw";
import readingTime from "reading-time";
import remarkShikiTwoslash from "remark-shiki-twoslash";

import { nodeTypes } from "@mdx-js/mdx";
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "posts/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    cover: { type: "string", required: true },
    description: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
  },
  computedFields: {
    readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Blog],
  mdx: {
    // @ts-ignore
    // - https://github.com/shikijs/twoslash/issues/147
    remarkPlugins: [[remarkShikiTwoslash.default, { theme: "dark-plus" }]],
    // - Fixes Shiki not being able to handle `raw` type
    // - https://github.com/shikijs/twoslash/issues/125
    //- https://github.com/mdx-js/mdx/issues/1820
    rehypePlugins: [[rehypeRaw, { passThrough: nodeTypes }]],
  },
});
