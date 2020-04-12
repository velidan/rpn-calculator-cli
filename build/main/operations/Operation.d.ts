export default abstract class Operation {
    static isValidOperation(param: any): void;
    private symbol;
    constructor(symbol: string);
    abstract execute(arg1: number, arg2: number): number;
    getSymbol: () => string;
    protected validateParams(param1: number, param2: number): void;
}
