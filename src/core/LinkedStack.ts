import { InvalidParamError, RPNError } from '../errors';
import Node from './Node';

/**
 * A custom structure to handle the Linked stack.
 * It's a stack where each item is a {@link Node}
 * and each Node linked with the previous.
 * 
 * It's required to receive the previous node and
 * insert the calculated node into some index (where the pair was)
 * and update links between other nodes
 */
export default class LinkedStack {
  public data: Node[] = [];

  public isExausted() {
    return this.data.length === 0;
  }

  public addNode(value: string | number) {
    let node;
    if (this.isExausted()) {
      node = new Node(value);
    } else {
      const lastNode = this.getLastNode();
      node = new Node(value, lastNode);
    }

    this.data.push(node);
  }

  /**
   * Adds a node to the specific index in stack
   * @param value node value
   * @param index index in the stack where node should be placed
   */
  public addNodeToIndex(value: number, index: number) {
    if (!Boolean(value)) {
      throw new InvalidParamError();
    }
    const finalIndex = index || 0;
    let node;
    if (this.isExausted()) {
      node = new Node(value, undefined);
    } else {
      const lastNode = this.getLastNode();
      node = new Node(value, lastNode);
    }

    this.data.splice(finalIndex, 0, node);
    this.updateNodes();
  }

  /**
   * Updates links in all nodes.
   * Required after some node was inserted between stack items
   */
  public updateNodes() {
    for (let i = 0; i < this.data.length; ++i) {
      const isFirstNode = i === 0;

      const prevNode = this.data[i - 1];
      const currentNode = this.data[i];

      currentNode.prevNode = isFirstNode ? null : prevNode;
      currentNode.index = isFirstNode ? 0 : prevNode.index + 1;
    }
  }

  public getLastNode() {
    return this.data[this.data.length - 1];
  }

  /**
   * Finds a node by passed callback via [].find method.
   * This node will be removed from stack.
   * @param callback - a callback for JS [].'find' method
   */
  public findAndDrainNodeByCondition(callback: (node: Node) => boolean) {
    const node = this.data.find(callback);
    if (!node) {
      return null;
    }

    const index = node?.index || 0;
    return this.data.splice(index, 1)[0];
  }

  /**
   * Returns the previous node of the passed node.
   * The previous node will be removed from stack.
   * @param node - previous node {@link Node}
   */
  public drainDreviousNode(node: Node) {
    if (!node) {
      throw new RPNError('Node should be passed');
    }

    const prevNode = node?.prevNode;
    if (!prevNode) {
      return null;
    }

    return this.drainNode(node.prevNode);
  }

  public reset() {
    this.data = [];
  }

  /**
   * Removes the passed node from stack and returns it
   * Yeah, why should we return it if we already received it.
   * Answer: To keep things consistent
   * @param node - {@link Node}
   */
  private drainNode(node: Node | null) {
    if (!node) {
      throw new RPNError('Node should be passed');
    }

    return this.data.splice(node.index, 1)[0];
  }
}
