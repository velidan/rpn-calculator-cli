"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NodeTypeEnum;
(function (NodeTypeEnum) {
    NodeTypeEnum[NodeTypeEnum["operation"] = 0] = "operation";
    NodeTypeEnum[NodeTypeEnum["operand"] = 1] = "operand";
})(NodeTypeEnum = exports.NodeTypeEnum || (exports.NodeTypeEnum = {}));
/**
 * A basic node class for {@link LinkedStack}
 * It contains info about type of the stack item,
 * link to the previous node and value of the item.
 *
 */
class Node {
    constructor(value, prevNode) {
        this.getNodeType = (value) => {
            switch (typeof value) {
                case 'string':
                    return NodeTypeEnum.operation;
                case 'number':
                    return NodeTypeEnum.operand;
            }
        };
        this.value = value;
        this.type = this.getNodeType(value);
        this.prevNode = prevNode || null;
        /* need to save the node index.
         *  if the prev node exists we'll use the prev index + 1 (next position)
         */
        this.index = prevNode ? prevNode.index + 1 : 0;
    }
}
exports.default = Node;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL05vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDdEIseURBQVMsQ0FBQTtJQUNULHFEQUFPLENBQUE7QUFDVCxDQUFDLEVBSFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFHdkI7QUFFRDs7Ozs7R0FLRztBQUNILE1BQXFCLElBQUk7SUFXdkIsWUFBWSxLQUFzQixFQUFFLFFBQTJCO1FBWXhELGdCQUFXLEdBQUcsQ0FBQyxLQUFzQixFQUFFLEVBQUU7WUFDOUMsUUFBUSxPQUFPLEtBQUssRUFBRTtnQkFDcEIsS0FBSyxRQUFRO29CQUNYLE9BQU8sWUFBWSxDQUFDLFNBQVMsQ0FBQztnQkFDaEMsS0FBSyxRQUFRO29CQUNYLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQzthQUMvQjtRQUNILENBQUMsQ0FBQztRQWxCQSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDO1FBRWpDOztXQUVHO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztDQVVGO0FBL0JELHVCQStCQyJ9