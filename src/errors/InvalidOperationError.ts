import RPNError from './RPNError';

export default class InvalidOperationError extends RPNError {
  // could use backitck but decided to use escape just in case
  public static msg = "Operation doesn't extend the Operation abstract class";

  constructor(incomingMSG?: string) {
    super(incomingMSG || InvalidOperationError.msg);
  }
}
