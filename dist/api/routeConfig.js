"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectAnalysesRoute = void 0;
/* Application Modules */
const CommonRouteConfig_1 = require("./common/CommonRouteConfig");
const projectController_1 = require("./controller/projectController");
class ProjectAnalysesRoute extends CommonRouteConfig_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "ProjectDocAnalysesRoute");
    }
    configureRoutes() {
        /***
        * @route  GET: /api/project-text-analyses
        * @desc   Get insights from project document.
        * @access Public.
        * ***/
        this.app.get("/api/project-text-analyses", projectController_1.analyzeText);
        return this.app;
    }
}
exports.ProjectAnalysesRoute = ProjectAnalysesRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9hcHAvYXBpL3JvdXRlQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLHlCQUF5QjtBQUN6QixrRUFBZ0U7QUFDaEUsc0VBQTZEO0FBRTdELE1BQWEsb0JBQXFCLFNBQVEsc0NBQWtCO0lBQzFELFlBQVksR0FBZ0I7UUFDMUIsS0FBSyxDQUFDLEdBQUcsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxlQUFlO1FBQ2I7Ozs7Y0FJTTtRQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLDRCQUE0QixFQUFFLCtCQUFXLENBQUMsQ0FBQTtRQUV2RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBZkQsb0RBZUMifQ==