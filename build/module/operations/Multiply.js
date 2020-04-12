import Operation from './Operation';
export default class Mltiply extends Operation {
    constructor(symbol = '*') {
        super(symbol);
    }
    execute(param1, param2) {
        this.validateParams(param1, param2);
        return param1 * param2;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlwbHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb3BlcmF0aW9ucy9NdWx0aXBseS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFNBQVMsTUFBTSxhQUFhLENBQUM7QUFFcEMsTUFBTSxDQUFDLE9BQU8sT0FBTyxPQUFRLFNBQVEsU0FBUztJQUM1QyxZQUFZLFNBQWlCLEdBQUc7UUFDOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFTSxPQUFPLENBQUMsTUFBYyxFQUFFLE1BQWM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFcEMsT0FBTyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Q0FDRiJ9