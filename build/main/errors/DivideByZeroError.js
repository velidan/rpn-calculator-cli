"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RPNError_1 = __importDefault(require("./RPNError"));
class DivideByZeroError extends RPNError_1.default {
    constructor(incomingMSG) {
        super(incomingMSG || DivideByZeroError.msg);
    }
}
exports.default = DivideByZeroError;
DivideByZeroError.msg = 'Divide by zero, huh? ;)';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGl2aWRlQnlaZXJvRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXJyb3JzL0RpdmlkZUJ5WmVyb0Vycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMERBQWtDO0FBRWxDLE1BQXFCLGlCQUFrQixTQUFRLGtCQUFRO0lBR3JELFlBQVksV0FBb0I7UUFDOUIsS0FBSyxDQUFDLFdBQVcsSUFBSSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDOztBQUxILG9DQU1DO0FBTGUscUJBQUcsR0FBRyx5QkFBeUIsQ0FBQyJ9