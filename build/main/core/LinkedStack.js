"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const Node_1 = __importDefault(require("./Node"));
/**
 * A custom structure to handle the Linked stack.
 * It's a stack where each item is a {@link Node}
 * and each Node linked with the previous.
 *
 * It's required to receive the previous node and
 * insert the calculated node into some index (where the pair was)
 * and update links between other nodes
 */
class LinkedStack {
    constructor() {
        this.data = [];
    }
    isExausted() {
        return this.data.length === 0;
    }
    addNode(value) {
        let node;
        if (this.isExausted()) {
            node = new Node_1.default(value);
        }
        else {
            const lastNode = this.getLastNode();
            node = new Node_1.default(value, lastNode);
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
            throw new errors_1.InvalidParamError();
        }
        const finalIndex = index || 0;
        let node;
        if (this.isExausted()) {
            node = new Node_1.default(value, undefined);
        }
        else {
            const lastNode = this.getLastNode();
            node = new Node_1.default(value, lastNode);
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
        const index = (node === null || node === void 0 ? void 0 : node.index) || 0;
        return this.data.splice(index, 1)[0];
    }
    /**
     * Returns the previous node of the passed node.
     * The previous node will be removed from stack.
     * @param node - previous node {@link Node}
     */
    drainDreviousNode(node) {
        if (!node) {
            throw new errors_1.RPNError('Node should be passed');
        }
        const prevNode = node === null || node === void 0 ? void 0 : node.prevNode;
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
            throw new errors_1.RPNError('Node should be passed');
        }
        return this.data.splice(node.index, 1)[0];
    }
}
exports.default = LinkedStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlua2VkU3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZS9MaW5rZWRTdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNDQUF3RDtBQUN4RCxrREFBMEI7QUFFMUI7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFxQixXQUFXO0lBQWhDO1FBQ1MsU0FBSSxHQUFXLEVBQUUsQ0FBQztJQThHM0IsQ0FBQztJQTVHUSxVQUFVO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLE9BQU8sQ0FBQyxLQUFzQjtRQUNuQyxJQUFJLElBQUksQ0FBQztRQUNULElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3JCLElBQUksR0FBRyxJQUFJLGNBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QjthQUFNO1lBQ0wsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3BDLElBQUksR0FBRyxJQUFJLGNBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbEM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGNBQWMsQ0FBQyxLQUFhLEVBQUUsS0FBYTtRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLE1BQU0sSUFBSSwwQkFBaUIsRUFBRSxDQUFDO1NBQy9CO1FBQ0QsTUFBTSxVQUFVLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQztRQUNULElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3JCLElBQUksR0FBRyxJQUFJLGNBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNMLE1BQU0s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