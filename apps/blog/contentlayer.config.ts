import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import readingTime from "reading-time";
import remarkShikiTwoslash from "remark-shiki-twoslash";

import { nodeTypes } from "@mdx-js/mdx";
import { defineDocumentType, makeSource } from "contentlayer/source-files";

// NOTE: Mostly copied from:
// - https://betterprogramming.pub/building-better-next-js-static-sites-with-mdx-and-contentlayer-9a06ca84e7f7
export const Blog = defineDocumentType(() => ({
  name: "Blog",
  // NOTE Needs to be `contentType`
  // - https://github.com/contentlayerdev/contentlayer/releases/tag/v0.1.0
  contentType: "mdx",
  filePathPattern: "posts/*.mdx",
  fields: {
    title: { type: "string", required: true },
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
  disableImportAliasWarning: true,
  contentDirPath: "data",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [
      remarkGfm,
      // @ts-ignore
      // - https://github.com/shikijs/twoslash/issues/147
      [remarkShikiTwoslash.default, { theme: "solarized-light" }],
    ],
    // - Fixes Shiki not being able to handle `raw` type
    // - https://github.com/shikijs/twoslash/issues/125
    //- https://github.com/mdx-js/mdx/issues/1820
    rehypePlugins: [[rehypeRaw, { passThrough: nodeTypes }]],
  },
});
