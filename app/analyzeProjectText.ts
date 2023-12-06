import {
  summarizeDoc,
  extractKeyAreasOfRisk,
  determineRagStatus
} from "./chains/riskAssessmentUtils";

export const analyzeProjectText = async (projectText: string) => {
  try {
    const [summarizedDoc, keyAreasOfRisk, ragStatus] = await Promise.all([
      summarizeDoc(projectText),
      extractKeyAreasOfRisk(projectText),
      determineRagStatus(projectText)
    ]);

    return {
      summary: summarizedDoc.text,
      keyAreasOfRisk: keyAreasOfRisk.text,
      ragStatus: ragStatus.text
    };
  } catch (error: any) {
    throw new Error(`Error analyzing project text: ${error.message}`);
  }
}