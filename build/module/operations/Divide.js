import { DivideByZeroError } from '../errors';
import Operation from './Operation';
export default class Sum extends Operation {
    constructor(symbol = '/') {
        super(symbol);
    }
    execute(param1, param2) {
        this.validateParams(param1, param2);
        if (param2 === 0) {
            throw new DivideByZeroError();
        }
        return param1 / param2;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGl2aWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29wZXJhdGlvbnMvRGl2aWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLFNBQVMsTUFBTSxhQUFhLENBQUM7QUFFcEMsTUFBTSxDQUFDLE9BQU8sT0FBTyxHQUFJLFNBQVEsU0FBUztJQUN4QyxZQUFZLFNBQWlCLEdBQUc7UUFDOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFTSxPQUFPLENBQUMsTUFBYyxFQUFFLE1BQWM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1NBQy9CO1FBRUQsT0FBTyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Q0FDRiJ9