import RPNError from './RPNError';
export default class DivideByZeroError extends RPNError {
    static msg: string;
    constructor(incomingMSG?: string);
}
