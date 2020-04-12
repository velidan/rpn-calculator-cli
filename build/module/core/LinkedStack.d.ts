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
    data: Node[];
    isExausted(): boolean;
    addNode(value: string | number): void;
    /**
     * Adds a node to the specific index in stack
     * @param value node value
     * @param index index in the stack where node should be placed
     */
    addNodeToIndex(value: number, index: number): void;
    /**
     * Updates links in all nodes.
     * Required after some node was inserted between stack items
     */
    updateNodes(): void;
    getLastNode(): Node;
    /**
     * Finds a node by passed callback via [].find method.
     * This node will be removed from stack.
     * @param callback - a callback for JS [].'find' method
     */
    findAndDrainNodeByCondition(callback: (node: Node) => boolean): Node | null;
    /**
     * Returns the previous node of the passed node.
     * The previous node will be removed from stack.
     * @param node - previous node {@link Node}
     */
    drainDreviousNode(node: Node): Node | null;
    reset(): void;
    /**
     * Removes the passed node from stack and returns it
     * Yeah, why should we return it if we already received it.
     * Answer: To keep things consistent
     * @param node - {@link Node}
     */
    private drainNode;
}
