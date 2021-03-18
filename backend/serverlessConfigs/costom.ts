import type { AWS } from "@serverless/typescript";

export const custom: AWS["custom"] = {
  webpack: {
    webpackConfig: "./webpack.config.js",
    includeModules: true,
  },
  firebaseName: {
    dev: "store-app-react-b5c13",
  },
  firebaseStageName: "${self:custom.firebaseName.${self:provider.stage}}",
};
