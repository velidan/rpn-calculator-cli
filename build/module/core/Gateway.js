import chalk from 'chalk';
import { RPNError } from '../errors';
/**
 * Handles the IO and provides data to the {@link RPNCalculator}
 */
export default class Gateway {
    constructor(rl, rpn) {
        /** a previx before the user Input */
        this.prefix = 'Enter a rpn queue >: ';
        /** commands that will be handled as SIGINT */
        this.exitAliases = ['q', 'alias'];
        this.log = console.log;
        this.stop = () => {
            this.log(chalk.cyanBright('Bye bye :)'));
            this.rl.close();
        };
        this.rl = rl;
        this.rpn = rpn;
    }
    /**
     * Establish the IO, provides data to {@link RPNCalculator}
     * and writes the result.
     * Recursively executes itself.
     */
    run() {
        this.log(chalk.greenBright("Welcome. It's a rpn calculator. \n" +
            "You need to write standard rpn symbols queue separated by spaces\n" +
            "and then hit enter to see result.\n"));
        this.startIO();
    }
    startIO() {
        // it's recursive method so need to reset rpn before each call
        this.rpn.reset();
        this.rl.question(this.prefix, (data) => {
            if (this.exitAliases.includes(data)) {
                return this.rl.close();
            }
            this.fillRpn(data);
            const result = this.rpn.calculate();
            this.log(chalk.green('Result is => '), result);
            this.log(chalk.yellow("Print 'q' or 'exit' if you want to exit the program"));
            // execute the gateway session
            this.startIO();
        });
    }
    /**
     * Fills the rpn calculator by queue items
     * @param data - rpn queue string from stdin
     */
    fillRpn(data) {
        data.trim().split(' ').forEach(arg => {
            try {
                this.rpn.pushItem(arg);
            }
            catch (e) {
                if (e instanceof RPNError) {
                    // allow the user a second chance
                    this.log(chalk.red(e));
                }
                else {
                    process.exit(1);
                }
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL0dhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRzFCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHckM7O0dBRUc7QUFDSCxNQUFNLENBQUMsT0FBTyxPQUFPLE9BQU87SUFVMUIsWUFBWSxFQUFZLEVBQUUsR0FBa0I7UUFUNUMscUNBQXFDO1FBQzlCLFdBQU0sR0FBVyx1QkFBdUIsQ0FBQztRQUNoRCw4Q0FBOEM7UUFDdkMsZ0JBQVcsR0FBYSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QyxRQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQXFCbkIsU0FBSSxHQUFHLEdBQUcsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQTtRQW5CQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksR0FBRztRQUNSLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxvQ0FBb0M7WUFDN0Qsb0VBQW9FO1lBQ3BFLHFDQUFxQyxDQUN0QyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQU1PLE9BQU87UUFDYiw4REFBOEQ7UUFDOUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBWSxFQUFFLEVBQUU7WUFDN0MsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbkMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3hCO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVuQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMscURBQXFELENBQUMsQ0FBQyxDQUFDO1lBRTlFLDhCQUE4QjtZQUM5QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssT0FBTyxDQUFDLElBQVk7UUFDMUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbkMsSUFBSTtnQkFDRixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUN2QjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRTtvQkFDekIsaUNBQWlDO29CQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDeEI7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDakI7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUdGIn0=