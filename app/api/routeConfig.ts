/* Libraries */
import { Application } from "express";

/* Application Modules */
import { CommonRoutesConfig } from "./common/CommonRouteConfig";
import { analyzeText } from "./controller/projectController";

export class ProjectAnalysesRoute extends CommonRoutesConfig {
  constructor(app: Application) {
    super(app, "ProjectDocAnalysesRoute");
  }

  configureRoutes(): Application {
    /***
    * @route  GET: /api/project-text-analyses
    * @desc   Get insights from project document.
    * @access Public.
    * ***/
    this.app.get("/api/project-text-analyses", analyzeText)

    return this.app;
  }
}