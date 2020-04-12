export enum NodeTypeEnum {
  operation,
  operand
}

/**
 * A basic node class for {@link LinkedStack}
 * It contains info about type of the stack item,
 * link to the previous node and value of the item.
 * 
 */
export default class Node {
  // type of node. Opration | Operand or unknown
  public type: NodeTypeEnum;
  // node index in the stack
  public index: number;

  public value: number | string;

  // a node before the current in the stack.
  public prevNode: Node | null;

  constructor(value: number | string, prevNode?: Node | undefined) {
    this.value = value;
    this.type = this.getNodeType(value);

    this.prevNode = prevNode || null;

    /* need to save the node index.
     *  if the prev node exists we'll use the prev index + 1 (next position)
     */
    this.index = prevNode ? prevNode.index + 1 : 0;
  }

  public getNodeType = (value: number | string) => {
    switch (typeof value) {
      case 'string':
        return NodeTypeEnum.operation;
      case 'number':
        return NodeTypeEnum.operand;
    }
  };
}
