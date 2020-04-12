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
    constructor() {
        this.data = [];
    }
    isExausted() {
        return this.data.length === 0;
    }
    addNode(value) {
        let node;
        if (this.isExausted()) {
            node = new Node(value);
        }
        else {
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
    addNodeToIndex(value, index) {
        if (!Boolean(value)) {
            throw new InvalidParamError();
        }
        const finalIndex = index || 0;
        let node;
        if (this.isExausted()) {
            node = new Node(value, undefined);
        }
        else {
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
    updateNodes() {
        for (let i = 0; i < this.data.length; ++i) {
            const isFirstNode = i === 0;
            const prevNode = this.data[i - 1];
            const currentNode = this.data[i];
            currentNode.prevNode = isFirstNode ? null : prevNode;
            currentNode.index = isFirstNode ? 0 : prevNode.index + 1;
        }
    }
    getLastNode() {
        return this.data[this.data.length - 1];
    }
    /**
     * Finds a node by passed callback via [].find method.
     * This node will be removed from stack.
     * @param callback - a callback for JS [].'find' method
     */
    findAndDrainNodeByCondition(callback) {
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
    drainDreviousNode(node) {
        if (!node) {
            throw new RPNError('Node should be passed');
        }
        const prevNode = node?.prevNode;
        if (!prevNode) {
            return null;
        }
        return this.drainNode(node.prevNode);
    }
    reset() {
        this.data = [];
    }
    /**
     * Removes the passed node from stack and returns it
     * Yeah, why should we return it if we already received it.
     * Answer: To keep things consistent
     * @param node - {@link Node}
     */
    drainNode(node) {
        if (!node) {
            throw new RPNError('Node should be passed');
        }
        return this.data.splice(node.index, 1)[0];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlua2VkU3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZS9MaW5rZWRTdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3hELE9BQU8sSUFBSSxNQUFNLFFBQVEsQ0FBQztBQUUxQjs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sQ0FBQyxPQUFPLE9BQU8sV0FBVztJQUFoQztRQUNTLFNBQUksR0FBVyxFQUFFLENBQUM7SUE4RzNCLENBQUM7SUE1R1EsVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSxPQUFPLENBQUMsS0FBc0I7UUFDbkMsSUFBSSxJQUFJLENBQUM7UUFDVCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUNyQixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEI7YUFBTTtZQUNMLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNwQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2xDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxjQUFjLENBQUMsS0FBYSxFQUFFLEtBQWE7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixNQUFNLElBQUksaUJBQWlCLEVBQUUsQ0FBQztTQUMvQjtRQUNELE1BQU0sVUFBVSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUM7UUFDVCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUNyQixJQUFJ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