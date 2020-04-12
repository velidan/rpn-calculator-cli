"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const operations_1 = require("./operations");
const core_1 = require("./core");
const config = {
    operations: [
        new operations_1.Sum(),
        // just to show that we can redefine the operation symbol
        new operations_1.Substract('-'),
        new operations_1.Multiply(),
        new operations_1.Divide()
    ]
};
const rpnCalculator = new core_1.RPNCalculator(config);
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
const gateway = new core_1.Gateway(rl, rpnCalculator);
process.on('exit', gateway.stop.bind(null, { cleanup: true }));
// catches ctrl+c event
process.on('SIGINT', gateway.stop.bind(null, { exit: true }));
// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', gateway.stop.bind(null, { exit: true }));
process.on('SIGUSR2', gateway.stop.bind(null, { exit: true }));
// catches uncaught exceptions
process.on('uncaughtException', err => {
    console.error('It should not happen. But...', err);
    gateway.stop();
    process.exit(1);
});
gateway.run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBZ0M7QUFFaEMsNkNBQWdFO0FBRWhFLGlDQUE0RDtBQUU1RCxNQUFNLE1BQU0sR0FBZTtJQUN6QixVQUFVLEVBQUU7UUFDVixJQUFJLGdCQUFHLEVBQUU7UUFDVCx5REFBeUQ7UUFDekQsSUFBSSxzQkFBUyxDQUFDLEdBQUcsQ0FBQztRQUNsQixJQUFJLHFCQUFRLEVBQUU7UUFDZCxJQUFJLG1CQUFNLEVBQUU7S0FDYjtDQUNGLENBQUM7QUFFRixNQUFNLGFBQWEsR0FBRyxJQUFJLG9CQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFaEQsTUFBTSxFQUFFLEdBQUcsa0JBQVEsQ0FBQyxlQUFlLENBQUM7SUFDbEMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO0lBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtDQUN2QixDQUFDLENBQUM7QUFFSCxNQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFFL0MsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUUvRCx1QkFBdUI7QUFDdkIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUU5RCxvREFBb0Q7QUFDcEQsT0FBTyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvRCxPQUFPLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRS9ELDhCQUE4QjtBQUM5QixPQUFPLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxFQUFFO0lBQ3BDLE9BQU8sQ0FBQyxLQUFLLENBQUMsOEJBQThCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQixDQUFDLENBQUMsQ0FBQztBQUVILE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyJ9