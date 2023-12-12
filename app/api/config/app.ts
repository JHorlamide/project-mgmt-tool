import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import cors, { CorsOptions } from "cors";
import { CommonRoutesConfig } from "../common/CommonRouteConfig";
import { ProjectAnalysesRoute } from "../routeConfig";
import { requestLogger } from "./requestLogger";

dotenv.config();

const app = express();
const routes: CommonRoutesConfig[] = [];

const corsOptions: CorsOptions = {
  origin: "*",
  credentials: true,
}

app.use(cors(corsOptions));

app.use(helmet());

app.use(express.json({ limit: "5mb" }));

app.use(express.urlencoded({ extended: false }));

app.use(requestLogger);

routes.push(new ProjectAnalysesRoute(app));

export { app, routes };
