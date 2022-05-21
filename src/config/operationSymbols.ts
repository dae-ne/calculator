import { OperationType } from '../domain';

export const getOperationSymbol = (operation: OperationType) => {
  const symbols = {
    addition: '+',
    subtraction: '-',
    multiplication: '*',
    division: '/',
  };
  return symbols[operation];
};
