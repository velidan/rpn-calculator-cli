import RPNError from './RPNError';

export default class UngeristeredOperationError extends RPNError {
  public static msg = `This operation wasn't registered`;

  constructor(incomingMSG?: string) {
    super(incomingMSG || UngeristeredOperationError.msg);
  }
}
