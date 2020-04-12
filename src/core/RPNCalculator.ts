import { NoArgumentError, RPNError } from '../errors';
import { Operation, OperationRegistry }  from '../operations';

import { LinkedStack, Node, NodeTypeEnum } from './index';

export interface ConfigType {
  operations: Operation[];
  linkedStack?: LinkedStack;
}

/**
 * Our RPNCalculator
 */
export default class RPNCalculator {

  private linkedStack: LinkedStack;
  private operationsRegistry: OperationRegistry;

  constructor(config: ConfigType) {
    const {
      operations,
      linkedStack
     } = config;

    this.linkedStack = linkedStack || new LinkedStack();
    this.operationsRegistry = new OperationRegistry(operations);
  }

  public pushItem(item: string) {
    const nodeValue = this.prepareItemToNode(item);
    this.linkedStack.addNode(nodeValue);
  }

  /**
   * Fetches the first operand and the node pair before it, proceed them
   * and returns result or recursively calls itself if the stack
   * contains other values
   */
  public calculate() {
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
    const lastNum = ( nodePair.lastNode && nodePair.lastNode.value ) || 0;

    // don't have time for guards
    const res = this.runOperation(firstNum as number, lastNum as number, operationNode.value as string);

    // if the stack contains values we need to calculate them too
    return this.provideResult(res, nodePair.firstNode);
  }

  public reset() {
    this.linkedStack.reset();
  }

  private prepareItemToNode(item: string) {
    let result: string | number = +item;
    if (isNaN(result)) {
      // I'm doing it in this way just to avoid nested if's, etc.
      this.operationsRegistry.throwIfUnregisteredOperation(item);
      // result is a valid operation symbol and can be added to stack
      result = item;
    }

    return result;
  }

  private provideResult(initialResult: number = 0, firstNode: Node | null): number {
    if( this.linkedStack.isExausted() ) {
      return initialResult;
    } 

    const index = ( firstNode && firstNode.index) || 0;
    // need to put at the place of the first Node that was calculated
    this.linkedStack.addNodeToIndex(initialResult, index);
    // recursion is a weak place in TS. let's things simple
    return this.calculate() as number;
  }

  private runOperation(num1: number, num2: number, symbol: string) {
    const operation = this.operationsRegistry.getOperationBySymbol(symbol);
    if (!Boolean(operation)) {
      throw new RPNError(`Impossible but happened. Can't find operation by symbol: ${symbol}`)
    }
    
    return operation?.execute(num1, num2);
  }

  private getFirstOperationNodeInList() {
    const operationNode = this.linkedStack.findAndDrainNodeByCondition((node: Node) => {
       
      return node.type === NodeTypeEnum.operation; 
    });
    
    return operationNode || null;
  }

  private getNodePairBeforeOperation(operationNode: Node) {
    // check if we have some numbers to proceed
    if (!Boolean(operationNode.prevNode)) {
      throw new NoArgumentError()
    };

    const lastNode = this.linkedStack.drainDreviousNode(operationNode);
    const firstNode = lastNode ? this.linkedStack.drainDreviousNode(lastNode) : null;

    return {
        firstNode,
        lastNode
    };
  }

}
