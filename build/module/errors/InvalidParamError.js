import RPNError from './RPNError';
export default class InvalidParamError extends RPNError {
    constructor(incomingMSG) {
        super(incomingMSG || InvalidParamError.msg);
    }
}
InvalidParamError.msg = 'Invalid param';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52YWxpZFBhcmFtRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXJyb3JzL0ludmFsaWRQYXJhbUVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sUUFBUSxNQUFNLFlBQVksQ0FBQztBQUVsQyxNQUFNLENBQUMsT0FBTyxPQUFPLGlCQUFrQixTQUFRLFFBQVE7SUFHckQsWUFBWSxXQUFvQjtRQUM5QixLQUFLLENBQUMsV0FBVyxJQUFJLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7O0FBSmEscUJBQUcsR0FBRyxlQUFlLENBQUMifQ==