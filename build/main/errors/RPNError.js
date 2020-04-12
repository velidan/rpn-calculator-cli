"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RPNError extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, RPNError);
    }
}
exports.default = RPNError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUlBORXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXJyb3JzL1JQTkVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBcUIsUUFBUyxTQUFRLEtBQUs7SUFDekMsWUFBWSxHQUFHLElBQWM7UUFDM0IsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDZixLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDRjtBQUxELDJCQUtDIn0=