import "source-map-support/register";

import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

import * as middy from "middy";
import { cors } from "middy/middlewares";

import { getUser } from "../../businessLogic/users";
import { createLogger } from "../../utils/logger";
// import { TodoItem } from '../../models/TodoItem'

const logger = createLogger("get user");

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
      const user = await getUser(event);

      logger.info("getUser event", event);
      logger.info("gitting user info", { user });
      if (!user && user.userId) {
        return {
          statusCode: 404,
          body: JSON.stringify({
            user: null,
          }),
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify({
          user,
        }),
      };
    } catch (e) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          user: null,
        }),
      };
    }
  }
);

handler.use(
  cors({
    credentials: true,
  })
);
