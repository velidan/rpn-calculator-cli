import RPNError from './RPNError';
export default class NoArgumentError extends RPNError {
    static msg: string;
    constructor(incomingMSG?: string);
}
