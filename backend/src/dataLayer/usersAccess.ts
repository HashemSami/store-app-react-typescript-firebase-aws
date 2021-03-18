import * as AWS from "aws-sdk";
import * as AWSXRay from "aws-xray-sdk";

import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { User } from "../models";

const XAWS = AWSXRay.captureAWS(AWS);

export const UsersAccess = () => {
  const docClient: Readonly<DocumentClient> = createDynamoDBClient();
  const usersTable: Readonly<string> = process.env.USERS_TABLE;

  const getUser = async (userId: string): Promise<User> => {
    const result = await docClient
      .get({
        TableName: usersTable,
        Key: {
          userId: userId,
        },
      })
      .promise();

    console.log("Get user: ", result);

    return result.Item as User;
  };

  const createUser = async (newUser: User): Promise<User> => {
    // will create a user if get user is not found
    await docClient
      .put({
        TableName: usersTable,
        Item: newUser,
      })
      .promise();

    return newUser;
  };

  return {
    getUser,
    createUser,
  };
};

function createDynamoDBClient() {
  if (process.env.IS_OFFLINE) {
    console.log("Creating a local DynamoDB instance");
    return new XAWS.DynamoDB.DocumentClient({
      region: "localhost",
      endpoint: "http://localhost:8000",
    });
  }

  return new XAWS.DynamoDB.DocumentClient();
}
