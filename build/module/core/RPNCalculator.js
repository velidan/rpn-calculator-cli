import { NoArgumentError, RPNError } from '../errors';
import { OperationRegistry } from '../operations';
import { LinkedStack, NodeTypeEnum } from './index';
/**
 * Our RPNCalculator
 */
export default class RPNCalculator {
    constructor(config) {
        const { operations, linkedStack } = config;
        this.linkedStack = linkedStack || new LinkedStack();
        this.operationsRegistry = new OperationRegistry(operations);
    }
    pushItem(item) {
        const nodeValue = this.prepareItemToNode(item);
        this.linkedStack.addNode(nodeValue);
    }
    /**
     * Fetches the first operand and the node pair before it, proceed them
     * and returns result or recursively calls itself if the stack
     * contains other values
     */
    calculate() {
        const operationNode = this.getFirstOperationNodeInList();
        // returns a last number or zero if we don't have any operation
        if (!operationNode) {
            const lastNode = this.linkedStack.getLastNode();
            return lastNode ? lastNode.value : 0;
        }
        // a pair of numbers that the operation should prceed
        const nodePair = this.getNodePairBeforeOperation(operationNode);
        // just to show the ts features
        const firstNum = nodePair?.firstNode?.value ?? 0;
        // the standard way
        const lastNum = (nodePair.lastNode && nodePair.lastNode.value) || 0;
        // don't have time for guards
        const res = this.runOperation(firstNum, lastNum, operationNode.value);
        // if the stack contains values we need to calculate them too
        return this.provideResult(res, nodePair.firstNode);
    }
    reset() {
        this.linkedStack.reset();
    }
    prepareItemToNode(item) {
        let result = +item;
        if (isNaN(result)) {
            // I'm doing it in this way just to avoid nested if's, etc.
            this.operationsRegistry.throwIfUnregisteredOperation(item);
            // result is a valid operation symbol and can be added to stack
            result = item;
        }
        return result;
    }
    provideResult(initialResult = 0, firstNode) {
        if (this.linkedStack.isExausted()) {
            return initialResult;
        }
        const index = (firstNode && firstNode.index) || 0;
        // need to put at the place of the first Node that was calculated
        this.linkedStack.addNodeToIndex(initialResult, index);
        // recursion is a weak place in TS. let's things simple
        return this.calculate();
    }
    runOperation(num1, num2, symbol) {
        const operation = this.operationsRegistry.getOperationBySymbol(symbol);
        if (!Boolean(operation)) {
            throw new RPNError(`Impossible but happened. Can't find operation by symbol: ${symbol}`);
        }
        return operation?.execute(num1, num2);
    }
    getFirstOperationNodeInList() {
        const operationNode = this.linkedStack.findAndDrainNodeByCondition((node) => {
            return node.type === NodeTypeEnum.operation;
        });
        return operationNode || null;
    }
    getNodePairBeforeOperation(operationNode) {
        // check if we have some numbers to proceed
        if (!Boolean(operationNode.prevNode)) {
            throw new NoArgumentError();
        }
        ;
        const lastNode = this.linkedStack.drainDreviousNode(operationNode);
        const firstNode = lastNode ? this.linkedStack.drainDreviousNode(lastNode) : null;
        return {
            firstNode,
            lastNode
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUlBOQ2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL1JQTkNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdEQsT0FBTyxFQUFhLGlCQUFpQixFQUFFLE1BQU8sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxXQUFXLEVBQVEsWUFBWSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBTzFEOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE9BQU8sT0FBTyxhQUFhO0lBS2hDLFlBQVksTUFBa0I7UUFDNUIsTUFBTSxFQUNKLFVBQVUsRUFDVixXQUFXLEVBQ1gsR0FBRyxNQUFNLENBQUM7UUFFWixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsSUFBSSxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTSxRQUFRLENBQUMsSUFBWTtRQUMxQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxTQUFTO1FBQ2QsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFFekQsK0RBQStEO1FBQy9ELElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNoRCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQscURBQXFE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