"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const errors_1 = require("../errors");
/**
 * Handles the IO and provides data to the {@link RPNCalculator}
 */
class Gateway {
    constructor(rl, rpn) {
        /** a previx before the user Input */
        this.prefix = 'Enter a rpn queue >: ';
        /** commands that will be handled as SIGINT */
        this.exitAliases = ['q', 'alias'];
        this.log = console.log;
        this.stop = () => {
            this.log(chalk_1.default.cyanBright('Bye bye :)'));
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
        this.log(chalk_1.default.greenBright("Welcome. It's a rpn calculator. \n" +
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
            this.log(chalk_1.default.green('Result is => '), result);
            this.log(chalk_1.default.yellow("Print 'q' or 'exit' if you want to exit the program"));
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
                if (e instanceof errors_1.RPNError) {
                    // allow the user a second chance
                    this.log(chalk_1.default.red(e));
                }
                else {
                    process.exit(1);
                }
            }
        });
    }
}
exports.default = Gateway;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL0dhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEI7QUFHMUIsc0NBQXFDO0FBR3JDOztHQUVHO0FBQ0gsTUFBcUIsT0FBTztJQVUxQixZQUFZLEVBQVksRUFBRSxHQUFrQjtRQVQ1QyxxQ0FBcUM7UUFDOUIsV0FBTSxHQUFXLHVCQUF1QixDQUFDO1FBQ2hELDhDQUE4QztRQUN2QyxnQkFBVyxHQUFhLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRDLFFBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBcUJuQixTQUFJLEdBQUcsR0FBRyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFBO1FBbkJDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxHQUFHO1FBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsV0FBVyxDQUFDLG9DQUFvQztZQUM3RCxvRUFBb0U7WUFDcEUscUNBQXFDLENBQ3RDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBTU8sT0FBTztRQUNiLDhEQUE4RDtRQUM5RCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWpCLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFZLEVBQUUsRUFBRTtZQUM3QyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDeEI7WUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRW5CLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBSyxDQUFDLE1BQU0sQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLENBQUM7WUFFOUUsOEJBQThCO1lBQzlCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSyxPQUFPLENBQUMsSUFBWTtRQUMxQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNuQyxJQUFJO2dCQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQ3ZCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFlBQVksaUJBQVEsRUFBRTtvQkFDekIsaUNBQWlDO29CQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDeEI7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDakI7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUdGO0FBeEVELDBCQXdFQyJ9