import chalk from 'chalk';
import { ReadLine } from 'readline';

import { RPNError } from '../errors';
import RPNCalculator from './RPNCalculator';

/**
 * Handles the IO and provides data to the {@link RPNCalculator}
 */
export default class Gateway {
  /** a previx before the user Input */
  public prefix: string = 'Enter a rpn queue >: ';
  /** commands that will be handled as SIGINT */
  public exitAliases: string[] = ['q', 'alias'];
  
  private log = console.log;
  private rl: ReadLine;
  private rpn: RPNCalculator;

  constructor(rl: ReadLine, rpn: RPNCalculator) {
    this.rl = rl;
    this.rpn = rpn;
  }

  /**
   * Establish the IO, provides data to {@link RPNCalculator}
   * and writes the result. 
   * Recursively executes itself.
   */
  public run() {
    this.log(chalk.greenBright("Welcome. It's a rpn calculator. \n" +
      "You need to write standard rpn symbols queue separated by spaces\n" +
      "and then hit enter to see result.\n"
    ));
    this.startIO();
  }
  public stop = () => {
    this.log(chalk.cyanBright('Bye bye :)'));
    this.rl.close();
  }

  private startIO() {
    // it's recursive method so need to reset rpn before each call
    this.rpn.reset();

    this.rl.question(this.prefix, (data: string) => {
      if (this.exitAliases.includes(data)) { 
        return this.rl.close();
      }
    
      this.fillRpn(data);

      const result = this.rpn.calculate();
      this.log(chalk.green('Result is => '), result);
      this.log(chalk.yellow("Print 'q' or 'exit' if you want to exit the program"));
  
      // execute the gateway session
      this.startIO();
    })
  }

  /**
   * Fills the rpn calculator by queue items
   * @param data - rpn queue string from stdin
   */
  private fillRpn(data: string) {
    data.trim().split(' ').forEach(arg => {
      try {
        this.rpn.pushItem(arg)
      } catch (e) {
        if (e instanceof RPNError) {
          // allow the user a second chance
          this.log(chalk.red(e));
        } else {
          process.exit(1);
        }
      }
    });
  }

  
}
