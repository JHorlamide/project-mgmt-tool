"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeProjectText = void 0;
const riskAssessmentUtils_1 = require("./chains/riskAssessmentUtils");
const analyzeProjectText = async (projectText) => {
    if (!projectText) {
        throw new Error('Project text is required for analysis.');
    }
    try {
        const [summarizedDoc, keyAreasOfRisk, ragStatus] = await Promise.all([
            riskAssessmentUtils_1.projectRiskAss.summarizeDoc(projectText),
            riskAssessmentUtils_1.projectRiskAss.extractKeyAreasOfRisk(projectText),
            riskAssessmentUtils_1.projectRiskAss.determineRagStatus(projectText)
        ]);
        return {
            summary: summarizedDoc.text.trim(),
            keyAreasOfRisk: keyAreasOfRisk.text.trim(),
            ragStatus: ragStatus.text.trim()
        };
    }
    catch (error) {
        throw new Error(`Error analyzing project text: ${error.message}`);
    }
};
exports.analyzeProjectText = analyzeProjectText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl6ZVByb2plY3RUZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwL2FuYWx5emVQcm9qZWN0VGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzRUFLc0M7QUFHL0IsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLEVBQUUsV0FBbUIsRUFBRSxFQUFFO0lBQzlELElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0tBQzNEO0lBRUQsSUFBSTtRQUNGLE1BQU0sQ0FBQyxhQUFhLEVBQUUsY0FBYyxFQUFFLFNBQVMsQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNuRSxvQ0FBYyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7WUFDeEMsb0NBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUM7WUFDakQsb0NBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7U0FDL0MsQ0FBQyxDQUFDO1FBRUgsT0FBTztZQUNMLE9BQU8sRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNsQyxjQUFjLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDMUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1NBQ2pDLENBQUM7S0FDSDtJQUFDLE9BQU8sS0FBVSxFQUFFO1FBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQ25FO0FBQ0gsQ0FBQyxDQUFBO0FBcEJZLFFBQUEsa0JBQWtCLHNCQW9COUIifQ==