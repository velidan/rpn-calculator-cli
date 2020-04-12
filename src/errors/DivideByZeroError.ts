import RPNError from './RPNError';

export default class DivideByZeroError extends RPNError {
  public static msg = 'Divide by zero, huh? ;)';

  constructor(incomingMSG?: string) {
    super(incomingMSG || DivideByZeroError.msg);
  }
}
