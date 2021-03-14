import type { AWS } from "@serverless/typescript";

export const functions: AWS["functions"] = {
  hello: {
    handler: "src/lambda/http/handler.hello",
    events: [
      {
        http: {
          method: "get",
          path: "hello",
        },
      },
    ],
  },
};
