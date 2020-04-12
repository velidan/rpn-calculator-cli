"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Operation_1 = __importDefault(require("./Operation"));
class Substract extends Operation_1.default {
    constructor(symbol = '-') {
        super(symbol);
    }
    execute(param1, param2) {
        this.validateParams(param1, param2);
        return param1 - param2;
    }
}
exports.default = Substract;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic3RyYWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29wZXJhdGlvbnMvU3Vic3RyYWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNERBQW9DO0FBRXBDLE1BQXFCLFNBQVUsU0FBUSxtQkFBUztJQUM5QyxZQUFZLFNBQWlCLEdBQUc7UUFDOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFTSxPQUFPLENBQUMsTUFBYyxFQUFFLE1BQWM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFcEMsT0FBTyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQVZELDRCQVVDIn0=