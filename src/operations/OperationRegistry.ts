import { UnregisteredOperationError } from 'src/errors';
import { Operation } from './index';

interface RegistryType {
  [index: string]: Operation;
}

/**
 * A Registry that keeps our {@link Operation} instances.
 * {@link Node} doesn't contain an operation instance 
 * even if it has an operation type otherwise it would
 * waste the memory resources.
 * The node contains only operation Symbol, and the registry
 * based on it provides the relative operation instance
 */
export default class OperationsRegistry {
  public registry: RegistryType;

  constructor(operations: Operation[]) {
    this.registry = operations.reduce(
      (acc: RegistryType, operation: Operation) => {
        Operation.isValidOperation(operation);

        acc[operation.getSymbol()] = operation;
        return acc;
      },
      {}
    );
  }

  public getOperationBySymbol(symbol: string) {
    return Object.values(this.registry).find(
      operation => operation.getSymbol() === symbol
    );
  }

  public throwIfUnregisteredOperation(symbol: string) {
    const operation = this.getOperationBySymbol(symbol);
    if (!operation) {
      throw new UnregisteredOperationError(`
        Mate, this operation wasn't registered. Plese check it.
        Got: ${symbol}
      `);
    }
  }
}
