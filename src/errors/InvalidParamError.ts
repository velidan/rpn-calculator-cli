import RPNError from './RPNError';

export default class InvalidParamError extends RPNError {
  public static msg = 'Invalid param';

  constructor(incomingMSG?: string) {
    super(incomingMSG || InvalidParamError.msg);
  }
}
