"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RPNError_1 = __importDefault(require("./RPNError"));
class InvalidOperationError extends RPNError_1.default {
    constructor(incomingMSG) {
        super(incomingMSG || InvalidOperationError.msg);
    }
}
exports.default = InvalidOperationError;
// could use backitck but decided to use escape just in case
InvalidOperationError.msg = "Operation doesn't extend the Operation abstract class";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52YWxpZE9wZXJhdGlvbkVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Vycm9ycy9JbnZhbGlkT3BlcmF0aW9uRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwREFBa0M7QUFFbEMsTUFBcUIscUJBQXNCLFNBQVEsa0JBQVE7SUFJekQsWUFBWSxXQUFvQjtRQUM5QixLQUFLLENBQUMsV0FBVyxJQUFJLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7O0FBTkgsd0NBT0M7QUFOQyw0REFBNEQ7QUFDOUMseUJBQUcsR0FBRyx1REFBdUQsQ0FBQyJ9