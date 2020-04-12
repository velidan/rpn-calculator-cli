/// <reference types="node" />
import { ReadLine } from 'readline';
import RPNCalculator from './RPNCalculator';
/**
 * Handles the IO and provides data to the {@link RPNCalculator}
 */
export default class Gateway {
    /** a previx before the user Input */
    prefix: string;
    /** commands that will be handled as SIGINT */
    exitAliases: string[];
    private log;
    private rl;
    private rpn;
    constructor(rl: ReadLine, rpn: RPNCalculator);
    /**
     * Establish the IO, provides data to {@link RPNCalculator}
     * and writes the result.
     * Recursively executes itself.
     */
    run(): void;
    stop: () => void;
    private startIO;
    /**
     * Fills the rpn calculator by queue items
     * @param data - rpn queue string from stdin
     */
    private fillRpn;
}
