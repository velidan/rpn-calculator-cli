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
    registry: RegistryType;
    constructor(operations: Operation[]);
    getOperationBySymbol(symbol: string): Operation | undefined;
    throwIfUnregisteredOperation(symbol: string): void;
}
export {};
