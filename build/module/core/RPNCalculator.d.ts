import { Operation } from '../operations';
import { LinkedStack } from './index';
export interface ConfigType {
    operations: Operation[];
    linkedStack?: LinkedStack;
}
/**
 * Our RPNCalculator
 */
export default class RPNCalculator {
    private linkedStack;
    private operationsRegistry;
    constructor(config: ConfigType);
    pushItem(item: string): void;
    /**
     * Fetches the first operand and the node pair before it, proceed them
     * and returns result or recursively calls itself if the stack
     * contains other values
     */
    calculate(): string | number;
    reset(): void;
    private prepareItemToNode;
    private provideResult;
    private runOperation;
    private getFirstOperationNodeInList;
    private getNodePairBeforeOperation;
}
