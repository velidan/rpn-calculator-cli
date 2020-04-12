import RPNError from './RPNError';
export default class InvalidOperationError extends RPNError {
    constructor(incomingMSG) {
        super(incomingMSG || InvalidOperationError.msg);
    }
}
// could use backitck but decided to use escape just in case
InvalidOperationError.msg = "Operation doesn't extend the Operation abstract class";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52YWxpZE9wZXJhdGlvbkVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Vycm9ycy9JbnZhbGlkT3BlcmF0aW9uRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxRQUFRLE1BQU0sWUFBWSxDQUFDO0FBRWxDLE1BQU0sQ0FBQyxPQUFPLE9BQU8scUJBQXNCLFNBQVEsUUFBUTtJQUl6RCxZQUFZLFdBQW9CO1FBQzlCLEtBQUssQ0FBQyxXQUFXLElBQUkscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7QUFMRCw0REFBNEQ7QUFDOUMseUJBQUcsR0FBRyx1REFBdUQsQ0FBQyJ9