import { analyzeProjectText } from "./analyzeProjectText";
import { readFileContent } from "./utils/readFileContent";

(async function () {
  try {
    const projectText = await readFileContent();
    const response = await analyzeProjectText(projectText);
    console.log(response);
  } catch (error: any) {
    throw new Error(`Error analyzing project text: ${error.message}`);
  }
})();