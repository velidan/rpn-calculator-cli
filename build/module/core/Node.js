export var NodeTypeEnum;
(function (NodeTypeEnum) {
    NodeTypeEnum[NodeTypeEnum["operation"] = 0] = "operation";
    NodeTypeEnum[NodeTypeEnum["operand"] = 1] = "operand";
})(NodeTypeEnum || (NodeTypeEnum = {}));
/**
 * A basic node class for {@link LinkedStack}
 * It contains info about type of the stack item,
 * link to the previous node and value of the item.
 *
 */
export default class Node {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL05vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFOLElBQVksWUFHWDtBQUhELFdBQVksWUFBWTtJQUN0Qix5REFBUyxDQUFBO0lBQ1QscURBQU8sQ0FBQTtBQUNULENBQUMsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QjtBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE9BQU8sT0FBTyxJQUFJO0lBV3ZCLFlBQVksS0FBc0IsRUFBRSxRQUEyQjtRQVl4RCxnQkFBVyxHQUFHLENBQUMsS0FBc0IsRUFBRSxFQUFFO1lBQzlDLFFBQVEsT0FBTyxLQUFLLEVBQUU7Z0JBQ3BCLEtBQUssUUFBUTtvQkFDWCxPQUFPLFlBQVksQ0FBQyxTQUFTLENBQUM7Z0JBQ2hDLEtBQUssUUFBUTtvQkFDWCxPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUM7YUFDL0I7UUFDSCxDQUFDLENBQUM7UUFsQkEsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLElBQUksQ0FBQztRQUVqQzs7V0FFRztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FVRiJ9