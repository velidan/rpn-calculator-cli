import { InvalidOperationError, InvalidParamError } from '../errors';
import { isNumber } from '../utils';

// Interface for Operation

export default abstract class Operation {

  public static isValidOperation(param: any) {
    if (!(param instanceof Operation)) {
      throw new InvalidOperationError();
    }
  }
  private symbol: string;

  constructor(symbol: string) {
    this.symbol = symbol;
  }

  public abstract execute(arg1: number, arg2: number): number;

  public getSymbol = () => this.symbol;

  protected validateParams(param1: number, param2: number) {
    if (!isNumber(param1) || !isNumber(param2)) {
      throw new InvalidParamError(`Params must be a Number. Received:
        param1 => ${param1} | Type: ${typeof param1}
        param2 => ${param2} | Type: ${typeof param2}
      `);
    }
  }
}
