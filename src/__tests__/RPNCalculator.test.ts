import { Sum, Substract, Multiply, Divide } from 'src/operations';

import { UnregisteredOperationError, DivideByZeroError } from 'src/errors';

import RPNCalculator, { ConfigType } from 'src/core/RPNCalculator';
const config: ConfigType = {
  operations: [new Sum(), new Substract(), new Multiply(), new Divide()]
};

let rpnCalculator: RPNCalculator;

beforeEach(() => {
  rpnCalculator = new RPNCalculator(config);
});

// 5 + 8 = 13
test("Input: '5 2 /' : Result => 2.5", () => {
  rpnCalculator.pushItem('5');
  rpnCalculator.pushItem('2');
  rpnCalculator.pushItem('/');

  expect(rpnCalculator.calculate()).toBe(2.5);
});

// 5 + 8 = 13
test("Input: '4 -' : Result => -4", () => {
  rpnCalculator.pushItem('4');
  rpnCalculator.pushItem('-');

  expect(rpnCalculator.calculate()).toBe(-4);
});

// 5 + 8 = 13
test("Input: '5 8 +' : Result => 13", () => {
  rpnCalculator.pushItem('5');
  rpnCalculator.pushItem('8');
  rpnCalculator.pushItem('+');

  expect(rpnCalculator.calculate()).toBe(13);
});

// 5 + 8 = 13.  13 + 5 = 18. 5 - 18 = -13
test("Input: '5 5 5 8 + + -' : Result => -13", () => {
  rpnCalculator.pushItem('5');
  rpnCalculator.pushItem('5');
  rpnCalculator.pushItem('5');
  rpnCalculator.pushItem('8');

  rpnCalculator.pushItem('+');
  rpnCalculator.pushItem('+');
  rpnCalculator.pushItem('-');

  expect(rpnCalculator.calculate()).toBe(-13);
});

// ( -3 * -2 ) + 5 = 11
test("Input: '-3 -2 * 5 +' : Result => 11", () => {
  rpnCalculator.pushItem('-3');
  rpnCalculator.pushItem('-2');
  rpnCalculator.pushItem('*');
  rpnCalculator.pushItem('5');
  rpnCalculator.pushItem('+');

  expect(rpnCalculator.calculate()).toBe(11);
});

// (9 - 1) / 5 = 0.625
test("Input: '5 9 1 - /' : Result => 0.65", () => {
  rpnCalculator.pushItem('5');
  rpnCalculator.pushItem('9');
  rpnCalculator.pushItem('1');

  rpnCalculator.pushItem('-');

  rpnCalculator.pushItem('/');

  expect(rpnCalculator.calculate()).toBe(0.625);
});

// (9 - 1) / 8 = 1. 5 -> omit. We don't have an operation for it
test("Input: '5 9 1 - 8 /' : Result => 1", () => {
  rpnCalculator.pushItem('5');
  rpnCalculator.pushItem('9');
  rpnCalculator.pushItem('1');

  rpnCalculator.pushItem('-');

  rpnCalculator.pushItem('8');

  rpnCalculator.pushItem('/');

  expect(rpnCalculator.calculate()).toBe(1);
});

test(`Throws UnregisteredOperationError when push operation that wasn't
  presented in rpn calculator config.`, () => {
  expect(() => {
    rpnCalculator.pushItem('-=-');
  }).toThrowError(UnregisteredOperationError);
});

test("Input: '5 / 0' : Result => DivideByZeroError", () => {
  rpnCalculator.pushItem('5');
  rpnCalculator.pushItem('0');
  rpnCalculator.pushItem('/');

  expect(() => {
    rpnCalculator.calculate()
  }).toThrowError(DivideByZeroError);

});
