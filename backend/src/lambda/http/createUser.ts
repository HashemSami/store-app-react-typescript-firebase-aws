import "source-map-support/register";

import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

import * as middy from "middy";
import { cors } from "middy/middlewares";

import { createUser } from "../../businessLogic/users";
import { createLogger } from "../../utils/logger";
// import { TodoItem } from '../../models/TodoItem'

const logger = createLogger("create user");

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const user = await createUser(event);

    logger.info("createUser event", event);
    logger.info("created user info", { user });

    if (user) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          user,
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
