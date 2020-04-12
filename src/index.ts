import readline from 'readline';

import { Divide, Multiply, Substract, Sum } from './operations';

import { ConfigType, RPNCalculator } from './core';
import Gateway from './core/Gateway';

const config: ConfigType = {
  operations: [
    new Sum(),
    // just to show that we can redefine the operation symbol
    new Substract('-'),
    new Multiply(),
    new Divide()
  ]
};

const rpnCalculator = new RPNCalculator(config);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const gateway = new Gateway(rl, rpnCalculator);

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
