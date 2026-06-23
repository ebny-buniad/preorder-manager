import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
// import { indexRouter } from "./app/router/index.routes";

dotenv.config();

const app: Application = express();

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

// Connect all routes
// app.use("/api/v1", indexRouter);

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Pre order server is running!');
});

export default app;