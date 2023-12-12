import fs from "node:fs/promises";


/**
 * Function to read the content of a file.
 * Note: The file path is hard-coded for the sake of this assessment.
 * In a real-world scenario, it's recommended to pass the file path as a parameter
 * to make the function more flexible and reusable.
 * @returns {Promise<string>} A promise that resolves with the content of the file.
 * @throws {Error} If there is an error reading the file.
 */
export const readFileContent = async () => {
  try {
    const filePath = "../project_text.txt";
    return await fs.readFile(require.resolve(filePath), { encoding: 'utf8' })
  } catch (error: any) {
    throw new Error(`Error reading file: ${error.message}`);
  }
}