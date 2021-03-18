import type { AWS } from "@serverless/typescript";

const usersTableAttributes = [{ AttributeName: "userId", AttributeType: "S" }];

export const resources: AWS["resources"] = {
  Resources: {
    UsersDynamoDBTable: {
      Type: "AWS::DynamoDB::Table",
      Properties: {
        AttributeDefinitions: usersTableAttributes,
        KeySchema: [{ AttributeName: "userId", KeyType: "HASH" }],
        BillingMode: "PAY_PER_REQUEST",
        TableName: "${self:provider.environment.USERS_TABLE}",
      },
    },
  },
};
