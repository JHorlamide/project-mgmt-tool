"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
/**
 * A class for handling HTTP responses with generic data type T.
 * Provides methods for successful, failure, and error responses.
 */
class ResponseHandler {
    successResponse(message, data, res) {
        return res
            .status(http_status_1.default.OK)
            .json({ status: "Success", message, data });
    }
    serverError(message, res) {
        return res
            .status(http_status_1.default.INTERNAL_SERVER_ERROR)
            .json({ status: "Failure", message });
    }
}
exports.default = new ResponseHandler();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2VIYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL2FwaS9jb21tb24vcmVzcG9uc2VIYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsOERBQXFDO0FBRXJDOzs7R0FHRztBQUNILE1BQU0sZUFBZTtJQUNaLGVBQWUsQ0FBQyxPQUFlLEVBQUUsSUFBTyxFQUFFLEdBQWE7UUFDNUQsT0FBTyxHQUFHO2FBQ1AsTUFBTSxDQUFDLHFCQUFVLENBQUMsRUFBRSxDQUFDO2FBQ3JCLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7SUFDL0MsQ0FBQztJQUdNLFdBQVcsQ0FBQyxPQUFlLEVBQUUsR0FBYTtRQUMvQyxPQUFPLEdBQUc7YUFDUCxNQUFNLENBQUMscUJBQVUsQ0FBQyxxQkFBcUIsQ0FBQzthQUN4QyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUNGO0FBRUQsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9