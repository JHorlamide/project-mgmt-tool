import { projectRiskAss } from "./chains/riskAssessmentUtils";


export const analyzeProjectText = async (projectText: string) => {
  if (!projectText) {
    throw new Error('Project text is required for analysis.');
  }

  try {
    const [summarizedDoc, keyAreasOfRisk, ragStatus] = await Promise.all([
      projectRiskAss.summarizeDoc(projectText),
      projectRiskAss.extractKeyAreasOfRisk(projectText),
      projectRiskAss.determineRagStatus(projectText)
    ]);

    return {
      summary: summarizedDoc.text.trim(),
      keyAreasOfRisk: keyAreasOfRisk.text.trim(),
      ragStatus: ragStatus.text.trim()
    };
  } catch (error: any) {
    throw new Error(`Error analyzing project text: ${error.message}`);
  }
}