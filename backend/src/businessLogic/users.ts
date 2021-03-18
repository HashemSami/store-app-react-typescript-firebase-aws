import { APIGatewayProxyEvent } from "aws-lambda";

import { getUserId } from "../lambda/utils";

import { UsersAccess } from "../dataLayer/usersAccess";
import { User } from "../models";

const usersAccess = UsersAccess();

export const getUser = async (event: APIGatewayProxyEvent) => {
  const userId = getUserId(event);
  const existingUser = await usersAccess.getUser(userId);
  console.log("existingUser", existingUser);
  return existingUser;
};

export const createUser = async (event: APIGatewayProxyEvent) => {
  const userId = getUserId(event);
  try {
    const createdAt = new Date().toISOString();

    const newUser: User = {
      userId,
      createdAt,
    };

    const createdUser = await usersAccess.createUser(newUser);

    return createdUser;
  } catch (e) {
    console.log("Creating user error", e.message);
    return e;
  }
};
