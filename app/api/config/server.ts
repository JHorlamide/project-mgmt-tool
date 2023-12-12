/* Core */
import http from "http";

/* Application Modules */
import { app, routes } from "./app";
import { onError } from "./requestLogger";
import { CommonRoutesConfig } from "../common/CommonRouteConfig";

function createServer(): http.Server {
  const PORT = process.env.PORT;

  app.set("port", PORT);

  const server = http.createServer(app);
  server.listen(PORT);
  server.on("error", onError);
  server.on("listening", () => {
    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr?.port}`;
    console.log(`Server listening on ${bind}... 🚀`);

    routes.forEach((route: CommonRoutesConfig) => {
      console.log(`Routes configured for -> ${route.getName()}`);
    });
  });

  return server;
}

createServer();
