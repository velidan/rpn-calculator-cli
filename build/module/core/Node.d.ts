export declare enum NodeTypeEnum {
    operation = 0,
    operand = 1
}
/**
 * A basic node class for {@link LinkedStack}
 * It contains info about type of the stack item,
 * link to the previous node and value of the item.
 *
 */
export default class Node {
    type: NodeTypeEnum;
    index: number;
    value: number | string;
    prevNode: Node | null;
    constructor(value: number | string, prevNode?: Node | undefined);
    getNodeType: (value: string | number) => NodeTypeEnum;
}
