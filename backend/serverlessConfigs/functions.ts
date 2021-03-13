import type { AWS } from "@serverless/typescript";

export const functions: AWS["functions"] = {
  hello: {
    handler: "handler.hello",
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
