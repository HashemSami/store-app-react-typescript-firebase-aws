import type { AWS } from "@serverless/typescript";
import { custom, plugins, provider, functions } from "./serverlessConfigs";

const serverlessConfiguration: AWS = {
  service: "store-app",
  frameworkVersion: "2",
  custom,
  plugins,
  provider,
  functions,
};

module.exports = serverlessConfiguration;
