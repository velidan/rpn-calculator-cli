"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RPNError_1 = __importDefault(require("./RPNError"));
class UngeristeredOperationError extends RPNError_1.default {
    constructor(incomingMSG) {
        super(incomingMSG || UngeristeredOperationError.msg);
    }
}
exports.default = UngeristeredOperationError;
UngeristeredOperationError.msg = `This operation wasn't registered`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5yZWdpc3RlcmVkT3BlcmF0aW9uRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXJyb3JzL1VucmVnaXN0ZXJlZE9wZXJhdGlvbkVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMERBQWtDO0FBRWxDLE1BQXFCLDBCQUEyQixTQUFRLGtCQUFRO0lBRzlELFlBQVksV0FBb0I7UUFDOUIsS0FBSyxDQUFDLFdBQVcsSUFBSSwwQkFBMEIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RCxDQUFDOztBQUxILDZDQU1DO0FBTGUsOEJBQUcsR0FBRyxrQ0FBa0MsQ0FBQyJ9