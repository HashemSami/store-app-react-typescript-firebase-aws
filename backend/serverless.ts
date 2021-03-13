import type { AWS } from "@serverless/typescript";
import { custom } from "./serverlessConfigs/costom";
import { plugins } from "./serverlessConfigs/plugins";
import { provider } from "./serverlessConfigs/provider";
import { functions } from "./serverlessConfigs/functions";

const serverlessConfiguration: AWS = {
  service: "store-app",
  frameworkVersion: "2",
  custom,
  plugins,
  provider,
  functions,
};

module.exports = serverlessConfiguration;
