import express, { type Express } from "express";
import cors from "cors";
import { createRequire } from "node:module";
import type { IncomingMessage, ServerResponse } from "node:http";
import router from "./routes";
import { logger } from "./lib/logger";

// pino-http uses `export =` (CJS) which is incompatible with moduleResolution:bundler.
// Using createRequire bypasses TypeScript's static import analysis entirely so there
// are no TS2349 "not callable" errors regardless of the pino-http type definitions.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pinoHttp: any = createRequire(import.meta.url)("pino-http");

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: IncomingMessage & { id?: unknown }) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: ServerResponse) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
