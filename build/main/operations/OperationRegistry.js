"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const index_1 = require("./index");
/**
 * A Registry that keeps our {@link Operation} instances.
 * {@link Node} doesn't contain an operation instance
 * even if it has an operation type otherwise it would
 * waste the memory resources.
 * The node contains only operation Symbol, and the registry
 * based on it provides the relative operation instance
 */
class OperationsRegistry {
    constructor(operations) {
        this.registry = operations.reduce((acc, operation) => {
            index_1.Operation.isValidOperation(operation);
            acc[operation.getSymbol()] = operation;
            return acc;
        }, {});
    }
    getOperationBySymbol(symbol) {
        return Object.values(this.registry).find(operation => operation.getSymbol() === symbol);
    }
    throwIfUnregisteredOperation(symbol) {
        const operation = this.getOperationBySymbol(symbol);
        if (!operation) {
            throw new errors_1.UnregisteredOperationError(`
        Mate, this operation wasn't registered. Plese check it.
        Got: ${symbol}
      `);
        }
    }
}
exports.default = OperationsRegistry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3BlcmF0aW9uUmVnaXN0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb3BlcmF0aW9ucy9PcGVyYXRpb25SZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RDtBQUN2RCxtQ0FBb0M7QUFNcEM7Ozs7Ozs7R0FPRztBQUNILE1BQXFCLGtCQUFrQjtJQUdyQyxZQUFZLFVBQXVCO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FDL0IsQ0FBQyxHQUFpQixFQUFFLFNBQW9CLEVBQUUsRUFBRTtZQUMxQyxpQkFBUyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXRDLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDdkMsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEVBQ0QsRUFBRSxDQUNILENBQUM7SUFDSixDQUFDO0lBRU0sb0JBQW9CLENBQUMsTUFBYztRQUN4QyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDdEMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEtBQUssTUFBTSxDQUM5QyxDQUFDO0lBQ0osQ0FBQztJQUVNLDRCQUE0QixDQUFDLE1BQWM7UUFDaEQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxNQUFNLElBQUksbUNBQTBCLENBQUM7O2VBRTVCLE1BQU07T0FDZCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FDRjtBQTlCRCxxQ0E4QkMifQ==