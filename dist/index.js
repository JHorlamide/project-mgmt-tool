"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const analyzeProjectText_1 = require("./analyzeProjectText");
const readFileContent_1 = require("./utils/readFileContent");
(async function () {
    try {
        const projectText = await (0, readFileContent_1.readFileContent)();
        const response = await (0, analyzeProjectText_1.analyzeProjectText)(projectText);
        console.log(response);
    }
    catch (error) {
        throw new Error(`Error analyzing project text: ${error.message}`);
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9hcHAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2REFBMEQ7QUFDMUQsNkRBQTBEO0FBRTFELENBQUMsS0FBSztJQUNKLElBQUk7UUFDRixNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUEsaUNBQWUsR0FBRSxDQUFDO1FBQzVDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBQSx1Q0FBa0IsRUFBQyxXQUFXLENBQUMsQ0FBQztRQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3ZCO0lBQUMsT0FBTyxLQUFVLEVBQUU7UUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDbkU7QUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDIn0=