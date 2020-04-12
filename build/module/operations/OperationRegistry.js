import { UnregisteredOperationError } from '../errors';
import { Operation } from './index';
/**
 * A Registry that keeps our {@link Operation} instances.
 * {@link Node} doesn't contain an operation instance
 * even if it has an operation type otherwise it would
 * waste the memory resources.
 * The node contains only operation Symbol, and the registry
 * based on it provides the relative operation instance
 */
export default class OperationsRegistry {
    constructor(operations) {
        this.registry = operations.reduce((acc, operation) => {
            Operation.isValidOperation(operation);
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
            throw new UnregisteredOperationError(`
        Mate, this operation wasn't registered. Plese check it.
        Got: ${symbol}
      `);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3BlcmF0aW9uUmVnaXN0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb3BlcmF0aW9ucy9PcGVyYXRpb25SZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQU1wQzs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxDQUFDLE9BQU8sT0FBTyxrQkFBa0I7SUFHckMsWUFBWSxVQUF1QjtRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQy9CLENBQUMsR0FBaUIsRUFBRSxTQUFvQixFQUFFLEVBQUU7WUFDMUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXRDLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDdkMsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEVBQ0QsRUFBRSxDQUNILENBQUM7SUFDSixDQUFDO0lBRU0sb0JBQW9CLENBQUMsTUFBYztRQUN4QyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDdEMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEtBQUssTUFBTSxDQUM5QyxDQUFDO0lBQ0osQ0FBQztJQUVNLDRCQUE0QixDQUFDLE1BQWM7UUFDaEQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxNQUFNLElBQUksMEJBQTBCLENBQUM7O2VBRTVCLE1BQU07T0FDZCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FDRiJ9