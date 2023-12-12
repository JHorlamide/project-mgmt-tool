"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onError = exports.requestLogger = void 0;
/**
  Logs the incoming requests and outgoing responses of the application to the console.
  This middleware function should be mounted to the Express application using app.use()
  before any route handlers to ensure all requests and responses are logged.
  The logged information includes the request method, path, request body (if any), query parameters (if any),
  and the response status code.
*/
function requestLogger(req, res, next) {
    res.once("finish", () => {
        const log = [req.method, req.path];
        if (req.body && Object.keys(req.body).length > 0) {
            log.push(JSON.stringify(req.body));
        }
        if (req.query && Object.keys(req.query).length > 0) {
            log.push(JSON.stringify(req.query));
        }
        log.push("->", String(res.statusCode));
        console.log(log.join(" "));
    });
    next();
}
exports.requestLogger = requestLogger;
function onError(error) {
    console.error(`Failed to start server:\n${error.stack}`);
    process.exit(1);
}
exports.onError = onError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdExvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9hcGkvY29uZmlnL3JlcXVlc3RMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7Ozs7OztFQU1FO0FBQ0YsU0FBZ0IsYUFBYSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7SUFDM0UsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDaEQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxHQUFHLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbEQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQzVCLENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxFQUFFLENBQUM7QUFDVCxDQUFDO0FBakJELHNDQWlCQztBQUVELFNBQWdCLE9BQU8sQ0FBQyxLQUFVO0lBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsQ0FBQztBQUhELDBCQUdDIn0=