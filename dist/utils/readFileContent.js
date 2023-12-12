"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFileContent = void 0;
const promises_1 = __importDefault(require("node:fs/promises"));
/**
 * Function to read the content of a file.
 * Note: The file path is hard-coded for the sake of this assessment.
 * In a real-world scenario, it's recommended to pass the file path as a parameter
 * to make the function more flexible and reusable.
 * @returns {Promise<string>} A promise that resolves with the content of the file.
 * @throws {Error} If there is an error reading the file.
 */
const readFileContent = async () => {
    try {
        const filePath = "../project_text.txt";
        return await promises_1.default.readFile(require.resolve(filePath), { encoding: 'utf8' });
    }
    catch (error) {
        throw new Error(`Error reading file: ${error.message}`);
    }
};
exports.readFileContent = readFileContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZEZpbGVDb250ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYXBwL3V0aWxzL3JlYWRGaWxlQ29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnRUFBa0M7QUFHbEM7Ozs7Ozs7R0FPRztBQUNJLE1BQU0sZUFBZSxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQ3hDLElBQUk7UUFDRixNQUFNLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQztRQUN2QyxPQUFPLE1BQU0sa0JBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO0tBQzFFO0lBQUMsT0FBTyxLQUFVLEVBQUU7UUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDekQ7QUFDSCxDQUFDLENBQUE7QUFQWSxRQUFBLGVBQWUsbUJBTzNCIn0=