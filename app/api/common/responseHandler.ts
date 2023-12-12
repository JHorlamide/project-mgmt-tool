import { Response } from "express";
import httpStatus from "http-status";

/**
 * A class for handling HTTP responses with generic data type T.
 * Provides methods for successful, failure, and error responses.
 */
class ResponseHandler<T extends object> {
  public successResponse(message: string, data: T, res: Response): Response {
    return res
      .status(httpStatus.OK)
      .json({ status: "Success", message, data })
  }


  public serverError(message: string, res: Response): Response {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ status: "Failure", message });
  }
}

export default new ResponseHandler();
