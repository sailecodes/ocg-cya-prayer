import "express-async-errors";
import express from "express";
import url from "url";
import path from "path";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import ExpressMongoSanitize from "express-mongo-sanitize";
import { StatusCodes } from "http-status-codes";
import { dirname } from "path";
import * as dotenv from "dotenv";

import silentPrayerRouter from "./routers/silentPrayerRouter.js";

// ==============================================
// Initialization
// ==============================================

dotenv.config();
const app = express();
const port = process.env.PORT || 5100;
const __dirname = dirname(url.fileURLToPath(import.meta.url));

// ==============================================
// Middleware
// ==============================================

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(ExpressMongoSanitize());

// ==============================================
// Routes
// ==============================================

app.get("/", (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "(Server message) Home route" });
});

app.use("/api/v1/silent-prayer", silentPrayerRouter);

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./public", "index.html"));
// });

app.use("*", (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ msg: "(Server message) Route not found" });
});

// app.use(errorMiddleware);

// ==============================================
// Server initialization
// ==============================================

try {
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`(Server message) Server is listening on port ${port}`);
  });
} catch (error) {
  console.error(error);
  process.exit(1);
}
