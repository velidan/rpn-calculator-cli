import RPNError from './RPNError';
export default class InvalidParamError extends RPNError {
    static msg: string;
    constructor(incomingMSG?: string);
}
