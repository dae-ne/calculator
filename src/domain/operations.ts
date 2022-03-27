import { OperationsType } from './operations.types';

const add = (a: number, b: number) => a + b;

const subtract = (a: number, b: number) => a - b;

const multiply = (a: number, b: number) => a * b;

const divide = (a: number, b: number) => a / b;

const modulo = (a: number, b: number) => a % b;

export const calculate = (a: number, b: number, operation: OperationsType) => {
  const operationsMap = {
    addition: add,
    subtraction: subtract,
    multiplication: multiply,
    division: divide,
    modulo: modulo,
  };

  return operationsMap[operation](a, b);
};
