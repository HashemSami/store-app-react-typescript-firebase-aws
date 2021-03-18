import type { AWS } from "@serverless/typescript";

export const provider: AWS["provider"] = {
  name: "aws",
  runtime: "nodejs12.x",
  stage: "${opt:stage, 'dev'}",
  region: "ap-south-1",
  tracing: {
    lambda: true,
    apiGateway: true,
  },
  apiGateway: {
    minimumCompressionSize: 1024,
  },
  environment: {
    AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
    USERS_TABLE: "StoreUsers-${self:provider.stage}",
  },
  httpApi: {
    cors: true,
    authorizers: {
      firebaseJwtAuthorizer: {
        identitySource: "$request.header.authorization",
        issuerUrl:
          "https://securetoken.google.com/${self:custom.firebaseStageName}",
        audience: ["${self:custom.firebaseStageName}"],
      },
    },
  },
};
