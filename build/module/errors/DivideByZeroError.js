import RPNError from './RPNError';
export default class DivideByZeroError extends RPNError {
    constructor(incomingMSG) {
        super(incomingMSG || DivideByZeroError.msg);
    }
}
DivideByZeroError.msg = 'Divide by zero, huh? ;)';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGl2aWRlQnlaZXJvRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXJyb3JzL0RpdmlkZUJ5WmVyb0Vycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sUUFBUSxNQUFNLFlBQVksQ0FBQztBQUVsQyxNQUFNLENBQUMsT0FBTyxPQUFPLGlCQUFrQixTQUFRLFFBQVE7SUFHckQsWUFBWSxXQUFvQjtRQUM5QixLQUFLLENBQUMsV0FBVyxJQUFJLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7O0FBSmEscUJBQUcsR0FBRyx5QkFBeUIsQ0FBQyJ9