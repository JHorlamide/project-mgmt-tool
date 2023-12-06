/* Libraries */
import { Request, Response } from "express";

/* Application Modules */
import responseHandler from "../common/responseHandler";
import { readFileContent } from "../../utils/readFileContent";
import { analyzeProjectText } from "../../analyzeProjectText";

export const analyzeText = async (req: Request, res: Response) => {
  try {
    const projectText = await readFileContent();
    const response = await analyzeProjectText(projectText);
    responseHandler.successResponse("Project analyses result", response, res);
  } catch (error: any) {
    responseHandler.serverError(error.message, res);
  }
}