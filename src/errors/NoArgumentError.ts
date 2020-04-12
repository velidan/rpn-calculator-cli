import RPNError from './RPNError';

export default class NoArgumentError extends RPNError {
  public static msg = 'Please, enter some numbers before operation';

  constructor(incomingMSG?: string) {
    super(incomingMSG || NoArgumentError.msg);
  }
}
