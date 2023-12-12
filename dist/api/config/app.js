"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const routeConfig_1 = require("../routeConfig");
const requestLogger_1 = require("./requestLogger");
dotenv_1.default.config();
const app = (0, express_1.default)();
exports.app = app;
const routes = [];
exports.routes = routes;
const corsOptions = {
    origin: "*",
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.use((0, helmet_1.default)());
app.use(express_1.default.json({ limit: "5mb" }));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(requestLogger_1.requestLogger);
routes.push(new routeConfig_1.ProjectAnalysesRoute(app));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL2FwaS9jb25maWcvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUE4QjtBQUM5QixvREFBNEI7QUFDNUIsb0RBQTRCO0FBQzVCLGdEQUF5QztBQUV6QyxnREFBc0Q7QUFDdEQsbURBQWdEO0FBRWhELGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEIsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFvQmIsa0JBQUc7QUFuQlosTUFBTSxNQUFNLEdBQXlCLEVBQUUsQ0FBQztBQW1CMUIsd0JBQU07QUFqQnBCLE1BQU0sV0FBVyxHQUFnQjtJQUMvQixNQUFNLEVBQUUsR0FBRztJQUNYLFdBQVcsRUFBRSxJQUFJO0NBQ2xCLENBQUE7QUFFRCxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsY0FBSSxFQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFFM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGdCQUFNLEdBQUUsQ0FBQyxDQUFDO0FBRWxCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXhDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRWpELEdBQUcsQ0FBQyxHQUFHLENBQUMsNkJBQWEsQ0FBQyxDQUFDO0FBRXZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxrQ0FBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDIn0=