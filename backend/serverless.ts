import type { AWS } from "@serverless/typescript";
import { custom, plugins, provider, functions, resources } from "./serverlessConfigs";

const serverlessConfiguration: AWS = {
  service: "store-app",
  frameworkVersion: "2",
  custom,
  plugins,
  provider,
  functions,
  resources,
};

module.exports = serverlessConfiguration;
