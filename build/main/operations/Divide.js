"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const Operation_1 = __importDefault(require("./Operation"));
class Sum extends Operation_1.default {
    constructor(symbol = '/') {
        super(symbol);
    }
    execute(param1, param2) {
        this.validateParams(param1, param2);
        if (param2 === 0) {
            throw new errors_1.DivideByZeroError();
        }
        return param1 / param2;
    }
}
exports.default = Sum;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGl2aWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29wZXJhdGlvbnMvRGl2aWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0NBQThDO0FBQzlDLDREQUFvQztBQUVwQyxNQUFxQixHQUFJLFNBQVEsbUJBQVM7SUFDeEMsWUFBWSxTQUFpQixHQUFHO1FBQzlCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRU0sT0FBTyxDQUFDLE1BQWMsRUFBRSxNQUFjO1FBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoQixNQUFNLElBQUksMEJBQWlCLEVBQUUsQ0FBQztTQUMvQjtRQUVELE9BQU8sTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBQ0Y7QUFiRCxzQkFhQyJ9