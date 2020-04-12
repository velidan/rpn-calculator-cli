import { DivideByZeroError } from '../errors';
import Operation from './Operation';

export default class Sum extends Operation {
  constructor(symbol: string = '/') {
    super(symbol);
  }

  public execute(param1: number, param2: number) {
    this.validateParams(param1, param2);
    if (param2 === 0) {
      throw new DivideByZeroError();
    }

    return param1 / param2;
  }
}
