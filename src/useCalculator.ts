import { useState } from 'react';
import { Actions } from './Actions';
import {
  State,
  OperationType,
  clear as domainClear,
  deleteLast as domainDeleteLast,
  selectOperation as domainSelectOperation,
  getResult as domainGetResult,
  selectNumber as domainSelectNumber,
  selectZero as domainSelectZero,
  selectDot as domainSelectDot,
} from './domain';
import { getOperationSymbol } from './config/operationSymbols';

const getOutput = (currentState: State) => {
  const { type } = currentState;
  switch (type) {
    case 'START':
      return '0';
    case 'FIRST_VAR':
      return currentState.firstVar;
    case 'OPERATION':
      return getOperationSymbol(currentState.operation);
    case 'SECOND_VAR':
      return `${getOperationSymbol(currentState.operation)} ${currentState.secondVar}`;
    case 'RESULT':
      return `= ${currentState.result}`;
  }
};

export const useCalculator = (): Actions & { output: string } => {
  const [state, setState] = useState<State>({ type: 'START' });

  const clear = () => {
    const newState = domainClear();
    setState(newState);
  };

  const deleteLast = () => {
    const newState = domainDeleteLast(state);
    setState(newState);
  };

  const selectOperation = (operation: OperationType) => {
    const newState = domainSelectOperation(state, operation);
    setState(newState);
  };

  const getResult = () => {
    const newState = domainGetResult(state);
    setState(newState);
  };

  const selectNumber = (selectedNumber: number) => {
    const newState = domainSelectNumber(state, selectedNumber);
    setState(newState);
  };

  const selectZero = () => {
    const newState = domainSelectZero(state);
    setState(newState);
  };

  const selectDot = () => {
    const newState = domainSelectDot(state);
    setState(newState);
  };

  return {
    output: getOutput(state),
    clear,
    deleteLast,
    selectOperation,
    getResult,
    selectNumber,
    selectZero,
    selectDot,
  };
};
