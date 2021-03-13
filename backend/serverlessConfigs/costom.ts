import type { AWS } from "@serverless/typescript";

export const custom: AWS["custom"] = {
  webpack: {
    webpackConfig: "./webpack.config.js",
    includeModules: true,
  },
};
