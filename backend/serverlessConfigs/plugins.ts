import type { AWS } from "@serverless/typescript";

export const plugins: AWS["plugins"] = ["serverless-webpack", "serverless-iam-roles-per-function"];
