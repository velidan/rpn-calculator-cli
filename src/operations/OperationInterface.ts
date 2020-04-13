// Interface for Operation

export default interface OperationInterface {
  // TS don't support static methods. 
  // Basically it could be handled with decorators
  // isValidOperation(param: any): void;
  execute(arg1: number, arg2: number): number;
  getSymbol(): string;
}
