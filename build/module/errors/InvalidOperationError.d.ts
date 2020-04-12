import RPNError from './RPNError';
export default class InvalidOperationError extends RPNError {
    static msg: string;
    constructor(incomingMSG?: string);
}
