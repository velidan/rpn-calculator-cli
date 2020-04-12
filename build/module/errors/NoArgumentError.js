import RPNError from './RPNError';
export default class NoArgumentError extends RPNError {
    constructor(incomingMSG) {
        super(incomingMSG || NoArgumentError.msg);
    }
}
NoArgumentError.msg = 'Please, enter some numbers before operation';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9Bcmd1bWVudEVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Vycm9ycy9Ob0FyZ3VtZW50RXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxRQUFRLE1BQU0sWUFBWSxDQUFDO0FBRWxDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sZUFBZ0IsU0FBUSxRQUFRO0lBR25ELFlBQVksV0FBb0I7UUFDOUIsS0FBSyxDQUFDLFdBQVcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7QUFKYSxtQkFBRyxHQUFHLDZDQUE2QyxDQUFDIn0=