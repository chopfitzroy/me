import TM from "next-transpile-modules";
import MDX from '@next/mdx';
import rehypeRaw from 'rehype-raw';
import withPlugins from 'next-compose-plugins';
import remarkShikiTwoslash from 'remark-shiki-twoslash';

import { nodeTypes } from '@mdx-js/mdx';


const withTM = TM(["ui"]);

const withMDX = MDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkShikiTwoslash.default, { theme: "dark-plus" }]],
    rehypePlugins: [rehypeRaw, { passThrough: nodeTypes }],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

const nextConfig = {
  webpack: (config) => {
    // @NOTE odd warning when using `.mjs` file extension
    // - https://github.com/vercel/next.js/issues/33693
    // - https://github.com/vercel/next.js/discussions/30870
    // - https://github.com/webpack/webpack/issues/15574
    config.infrastructureLogging = {
      level: "error",
    }
    return config;
  },
};

export default withPlugins(
  [
    [withTM, {
      reactStrictMode: true,
    }],
    [withMDX, {
      // Append the default value with md extensions
      pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    }]
  ],
  nextConfig
)


