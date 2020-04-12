"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const utils_1 = require("../utils");
// Interface for Operation
class Operation {
    constructor(symbol) {
        this.getSymbol = () => this.symbol;
        this.symbol = symbol;
    }
    static isValidOperation(param) {
        if (!(param instanceof Operation)) {
            throw new errors_1.InvalidOperationError();
        }
    }
    validateParams(param1, param2) {
        if (!utils_1.isNumber(param1) || !utils_1.isNumber(param2)) {
            throw new errors_1.InvalidParamError(`Params must be a Number. Received:
        param1 => ${param1} | Type: ${typeof param1}
        param2 => ${param2} | Type: ${typeof param2}
      `);
        }
    }
}
exports.default = Operation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3BlcmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29wZXJhdGlvbnMvT3BlcmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXFFO0FBQ3JFLG9DQUFvQztBQUVwQywwQkFBMEI7QUFFMUIsTUFBOEIsU0FBUztJQVNyQyxZQUFZLE1BQWM7UUFNbkIsY0FBUyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFMbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQVRNLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFVO1FBQ3ZDLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxTQUFTLENBQUMsRUFBRTtZQUNqQyxNQUFNLElBQUksOEJBQXFCLEVBQUUsQ0FBQztTQUNuQztJQUNILENBQUM7SUFXUyxjQUFjLENBQUMsTUFBYyxFQUFFLE1BQWM7UUFDckQsSUFBSSxDQUFDLGdCQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFDLE1BQU0sSUFBSSwwQkFBaUIsQ0FBQztvQkFDZCxNQUFNLFlBQVksT0FBTyxNQUFNO29CQUMvQixNQUFNLFlBQVksT0FBTyxNQUFNO09BQzVDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztDQUNGO0FBekJELDRCQXlCQyJ9