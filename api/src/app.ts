import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import route from "./routes/index.routes.js";
import { setupSwagger } from "./config/swagger.js";
import { validateApiKey } from "./middlware/validateApiKey.js";
import { authenticate } from "./middlware/auth.js";
import { generalLimiter, authLimiter } from "./middlware/rateLimit.js";
import { authRouter } from "./modules/users/authRoutes.js";
import { iaRouter } from "./modules/IAModule/iaRoutes.js";

import {
  frontendUrl,
  frontendUrlWww,
  frontendUrlDevelop1,
  frontendUrlDevelop2,
} from "./config/config.js";
import { weddingRouter } from "./modules/wedding/weddingRoutes.js";

export const app = express();

const corsOptions = {
  origin: [
    frontendUrl,
    frontendUrlWww,
    frontendUrlDevelop1,
    frontendUrlDevelop2,
  ].filter(Boolean) as string[],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "x-api-key"],
  exposedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
  preflightContinue: false,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

setupSwagger(app);

app.use("/health", (_req, res) =>
  res.status(200).json({ status: "OK Polisha" }),
);

app.use("/auth", authLimiter, authRouter);

app.use("/", generalLimiter, route);

app.use("/wedding", validateApiKey, authenticate, weddingRouter);
app.use("/ia", validateApiKey, authenticate, iaRouter);

app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({ error: error.message });
});
