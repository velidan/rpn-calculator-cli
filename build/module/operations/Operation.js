import { InvalidOperationError, InvalidParamError } from '../errors';
import { isNumber } from '../utils';
// Interface for Operation
export default class Operation {
    constructor(symbol) {
        this.getSymbol = () => this.symbol;
        this.symbol = symbol;
    }
    static isValidOperation(param) {
        if (!(param instanceof Operation)) {
            throw new InvalidOperationError();
        }
    }
    validateParams(param1, param2) {
        if (!isNumber(param1) || !isNumber(param2)) {
            throw new InvalidParamError(`Params must be a Number. Received:
        param1 => ${param1} | Type: ${typeof param1}
        param2 => ${param2} | Type: ${typeof param2}
      `);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3BlcmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29wZXJhdGlvbnMvT3BlcmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNyRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXBDLDBCQUEwQjtBQUUxQixNQUFNLENBQUMsT0FBTyxPQUFnQixTQUFTO0lBU3JDLFlBQVksTUFBYztRQU1uQixjQUFTLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUxuQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBVE0sTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQVU7UUFDdkMsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLFNBQVMsQ0FBQyxFQUFFO1lBQ2pDLE1BQU0sSUFBSSxxQkFBcUIsRUFBRSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQVdTLGNBQWMsQ0FBQyxNQUFjLEVBQUUsTUFBYztRQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFDLE1BQU0sSUFBSSxpQkFBaUIsQ0FBQztvQkFDZCxNQUFNLFlBQVksT0FBTyxNQUFNO29CQUMvQixNQUFNLFlBQVksT0FBTyxNQUFNO09BQzVDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztDQUNGIn0=