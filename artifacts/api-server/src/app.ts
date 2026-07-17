import express, { type Express, type Request, type Response, type NextFunction } from "express";
import cors from "cors";
import { logger } from "./lib/logger";
import router from "./routes";

const app: Express = express();

// Simple request logger using pino directly — avoids pino-http CJS interop issues
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  res.on("finish", () => {
    logger.info({
      method: req.method,
      url: req.url.split("?")[0],
      statusCode: res.statusCode,
      ms: Date.now() - start,
    });
  });
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
