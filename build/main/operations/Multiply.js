"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Operation_1 = __importDefault(require("./Operation"));
class Mltiply extends Operation_1.default {
    constructor(symbol = '*') {
        super(symbol);
    }
    execute(param1, param2) {
        this.validateParams(param1, param2);
        return param1 * param2;
    }
}
exports.default = Mltiply;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlwbHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb3BlcmF0aW9ucy9NdWx0aXBseS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDREQUFvQztBQUVwQyxNQUFxQixPQUFRLFNBQVEsbUJBQVM7SUFDNUMsWUFBWSxTQUFpQixHQUFHO1FBQzlCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRU0sT0FBTyxDQUFDLE1BQWMsRUFBRSxNQUFjO1FBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXBDLE9BQU8sTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBQ0Y7QUFWRCwwQkFVQyJ9