import type { AWS } from "@serverless/typescript";

export const functions: AWS["functions"] = {
  GetUser: {
    handler: "src/lambda/http/getUser.handler",
    events: [
      {
        httpApi: {
          method: "get",
          path: "/users",
          authorizer: {
            name: "firebaseJwtAuthorizer",
          },
        },
      },
    ],
    // @ts-expect-error: Let's ignore a single compiler
    iamRoleStatements: [
      {
        Effect: "Allow",
        Action: ["dynamodb:GetItem", "dynamodb:PutItem"],
        Resource: "arn:aws:dynamodb:${self:provider.region}:*:table/${self:provider.environment.USERS_TABLE}",
      },
    ],
  },
  CreateUser: {
    handler: "src/lambda/http/createUser.handler",
    events: [
      {
        httpApi: {
          method: "post",
          path: "/users",
          authorizer: {
            name: "firebaseJwtAuthorizer",
          },
        },
      },
    ],
    // @ts-expect-error: Let's ignore a single compiler
    iamRoleStatements: [
      {
        Effect: "Allow",
        Action: ["dynamodb:GetItem", "dynamodb:PutItem"],
        Resource: "arn:aws:dynamodb:${self:provider.region}:*:table/${self:provider.environment.USERS_TABLE}",
      },
    ],
  },
};
