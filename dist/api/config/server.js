"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Core */
const http_1 = __importDefault(require("http"));
/* Application Modules */
const app_1 = require("./app");
const requestLogger_1 = require("./requestLogger");
function createServer() {
    const PORT = process.env.PORT;
    app_1.app.set("port", PORT);
    const server = http_1.default.createServer(app_1.app);
    server.listen(PORT);
    server.on("error", requestLogger_1.onError);
    server.on("listening", () => {
        const addr = server.address();
        const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr?.port}`;
        console.log(`Server listening on ${bind}... 🚀`);
        app_1.routes.forEach((route) => {
            console.log(`Routes configured for -> ${route.getName()}`);
        });
    });
    return server;
}
createServer();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL2FwaS9jb25maWcvc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsVUFBVTtBQUNWLGdEQUF3QjtBQUV4Qix5QkFBeUI7QUFDekIsK0JBQW9DO0FBQ3BDLG1EQUEwQztBQUcxQyxTQUFTLFlBQVk7SUFDbkIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFFOUIsU0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFdEIsTUFBTSxNQUFNLEdBQUcsY0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFHLENBQUMsQ0FBQztJQUN0QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLHVCQUFPLENBQUMsQ0FBQztJQUM1QixNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7UUFDMUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLE1BQU0sSUFBSSxHQUFHLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsSUFBSSxRQUFRLENBQUMsQ0FBQztRQUVqRCxZQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBeUIsRUFBRSxFQUFFO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxZQUFZLEVBQUUsQ0FBQyJ9