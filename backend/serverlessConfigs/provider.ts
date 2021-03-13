import type { AWS } from "@serverless/typescript";

export const provider: AWS["provider"] = {
  name: "aws",
  runtime: "nodejs12.x",
  apiGateway: {
    minimumCompressionSize: 1024,
  },
  environment: {
    AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
  },
};
