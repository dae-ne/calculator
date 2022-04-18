export type OperationType = 'addition' | 'subtraction' | 'multiplication' | 'division';

const add = (a: number, b: number) => a + b;

const subtract = (a: number, b: number) => a - b;

const multiply = (a: number, b: number) => a * b;

const divide = (a: number, b: number) => a / b;

export const calculate = (a: number, b: number, operation: OperationType) => {
  const operationsMap = {
    addition: add,
    subtraction: subtract,
    multiplication: multiply,
    division: divide,
  };

  return operationsMap[operation](a, b);
};
