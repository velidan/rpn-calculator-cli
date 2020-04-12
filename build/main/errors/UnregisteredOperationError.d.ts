import RPNError from './RPNError';
export default class UngeristeredOperationError extends RPNError {
    static msg: string;
    constructor(incomingMSG?: string);
}
