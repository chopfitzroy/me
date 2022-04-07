import TM from "next-transpile-modules";
import withPlugins from 'next-compose-plugins';

import { withContentlayer } from 'next-contentlayer';

const withTM = TM(["ui"]);

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
    [withContentlayer]
  ],
  nextConfig
)


