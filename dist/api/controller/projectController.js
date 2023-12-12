"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeText = void 0;
/* Application Modules */
const responseHandler_1 = __importDefault(require("../common/responseHandler"));
const readFileContent_1 = require("../../utils/readFileContent");
const analyzeProjectText_1 = require("../../analyzeProjectText");
const analyzeText = async (req, res) => {
    try {
        const projectText = await (0, readFileContent_1.readFileContent)();
        const response = await (0, analyzeProjectText_1.analyzeProjectText)(projectText);
        responseHandler_1.default.successResponse("Project analyses result", response, res);
    }
    catch (error) {
        responseHandler_1.default.serverError(error.message, res);
    }
};
exports.analyzeText = analyzeText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvYXBpL2NvbnRyb2xsZXIvcHJvamVjdENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EseUJBQXlCO0FBQ3pCLGdGQUF3RDtBQUN4RCxpRUFBOEQ7QUFDOUQsaUVBQThEO0FBRXZELE1BQU0sV0FBVyxHQUFHLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDL0QsSUFBSTtRQUNGLE1BQU0sV0FBVyxHQUFHLE1BQU0sSUFBQSxpQ0FBZSxHQUFFLENBQUM7UUFDNUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFBLHVDQUFrQixFQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZELHlCQUFlLENBQUMsZUFBZSxDQUFDLHlCQUF5QixFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUMzRTtJQUFDLE9BQU8sS0FBVSxFQUFFO1FBQ25CLHlCQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDakQ7QUFDSCxDQUFDLENBQUE7QUFSWSxRQUFBLFdBQVcsZUFRdkIifQ==