import Operation from './Operation';
export default class Mltiply extends Operation {
    constructor(symbol?: string);
    execute(param1: number, param2: number): number;
}
