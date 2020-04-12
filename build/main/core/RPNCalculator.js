"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const operations_1 = require("../operations");
const index_1 = require("./index");
/**
 * Our RPNCalculator
 */
class RPNCalculator {
    constructor(config) {
        const { operations, linkedStack } = config;
        this.linkedStack = linkedStack || new index_1.LinkedStack();
        this.operationsRegistry = new operations_1.OperationRegistry(operations);
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
        var _a, _b;
        const operationNode = this.getFirstOperationNodeInList();
        // returns a last number or zero if we don't have any operation
        if (!operationNode) {
            const lastNode = this.linkedStack.getLastNode();
            return lastNode ? lastNode.value : 0;
        }
        // a pair of numbers that the operation should prceed
        const nodePair = this.getNodePairBeforeOperation(operationNode);
        // just to show the ts features
        const firstNum = (_b = (_a = nodePair === null || nodePair === void 0 ? void 0 : nodePair.firstNode) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 0;
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
            throw new errors_1.RPNError(`Impossible but happened. Can't find operation by symbol: ${symbol}`);
        }
        return operation === null || operation === void 0 ? void 0 : operation.execute(num1, num2);
    }
    getFirstOperationNodeInList() {
        const operationNode = this.linkedStack.findAndDrainNodeByCondition((node) => {
            return node.type === index_1.NodeTypeEnum.operation;
        });
        return operationNode || null;
    }
    getNodePairBeforeOperation(operationNode) {
        // check if we have some numbers to proceed
        if (!Boolean(operationNode.prevNode)) {
            throw new errors_1.NoArgumentError();
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
exports.default = RPNCalculator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUlBOQ2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL1JQTkNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0Q7QUFDdEQsOENBQThEO0FBRTlELG1DQUEwRDtBQU8xRDs7R0FFRztBQUNILE1BQXFCLGFBQWE7SUFLaEMsWUFBWSxNQUFrQjtRQUM1QixNQUFNLEVBQ0osVUFBVSxFQUNWLFdBQVcsRUFDWCxHQUFHLE1BQU0sQ0FBQztRQUVaLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxJQUFJLElBQUksbUJBQVcsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLDhCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTSxRQUFRLENBQUMsSUFBWTtRQUMxQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxTQUFTOztRQUNkLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBRXpELCtEQUErRDtRQUMvRCxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2hCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDaEQsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QztRQUVELHFEQUFxRDtRQUNyRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFaEUsK0JBQStCO1FBQy9CLE1BQU0sUUFBUSxlQUFHLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFB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