"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RPNError_1 = __importDefault(require("./RPNError"));
class NoArgumentError extends RPNError_1.default {
    constructor(incomingMSG) {
        super(incomingMSG || NoArgumentError.msg);
    }
}
exports.default = NoArgumentError;
NoArgumentError.msg = 'Please, enter some numbers before operation';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9Bcmd1bWVudEVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Vycm9ycy9Ob0FyZ3VtZW50RXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwREFBa0M7QUFFbEMsTUFBcUIsZUFBZ0IsU0FBUSxrQkFBUTtJQUduRCxZQUFZLFdBQW9CO1FBQzlCLEtBQUssQ0FBQyxXQUFXLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O0FBTEgsa0NBTUM7QUFMZSxtQkFBRyxHQUFHLDZDQUE2QyxDQUFDIn0=