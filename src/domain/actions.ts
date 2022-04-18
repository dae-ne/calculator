import { calculate as calc, OperationType } from './operations';
import { State } from './state';

export const clear = (): State => {
  return { type: 'START' };
};

export const deleteLast = (currentState: State): State => {
  const { type } = currentState;
  switch (type) {
    case 'START':
    case 'RESULT':
      return currentState;
    case 'FIRST_VAR':
      return currentState.firstVar.length < 2
        ? { type: 'START' }
        : { ...currentState, firstVar: currentState.firstVar.slice(0, -1) };
    case 'OPERATION':
      return { ...currentState, type: 'FIRST_VAR' };
    case 'SECOND_VAR':
      return currentState.secondVar.length < 2
        ? { ...currentState, type: 'OPERATION' }
        : { ...currentState, secondVar: currentState.secondVar.slice(0, -1) };
  }
};

export const selectOperation = (currentState: State, operation: OperationType): State => {
  const { type } = currentState;
  switch (type) {
    case 'START':
      return { type: 'OPERATION', firstVar: '0', operation };
    case 'FIRST_VAR':
      return { ...currentState, type: 'OPERATION', operation };
    case 'OPERATION':
      return { ...currentState, operation };
    case 'SECOND_VAR':
      return {
        type: 'OPERATION',
        firstVar: calc(
          +currentState.firstVar,
          +currentState.secondVar,
          currentState.operation
        ).toString(),
        operation,
      };
    case 'RESULT':
      return { type: 'OPERATION', firstVar: currentState.result.toString(), operation };
  }
};

export const calculate = (currentState: State): State => {
  const { type } = currentState;
  switch (type) {
    case 'START':
    case 'RESULT':
      return currentState;
    case 'FIRST_VAR':
    case 'OPERATION':
      return { type: 'RESULT', result: +currentState.firstVar };
    case 'SECOND_VAR':
      return {
        type: 'RESULT',
        result: calc(+currentState.firstVar, +currentState.secondVar, currentState.operation),
      };
  }
};

export const selectNumber = (currentState: State, selectedNumber: number): State => {
  const { type } = currentState;
  switch (type) {
    case 'START':
    case 'RESULT':
      return { type: 'FIRST_VAR', firstVar: selectedNumber.toString() };
    case 'FIRST_VAR':
      return { ...currentState, firstVar: currentState.firstVar + selectedNumber };
    case 'OPERATION':
      return { ...currentState, type: 'SECOND_VAR', secondVar: selectedNumber.toString() };
    case 'SECOND_VAR':
      return {
        ...currentState,
        firstVar: currentState.secondVar[0] === '0' ? '0' : currentState.secondVar + selectedNumber,
      };
  }
};

export const selectZero = (currentState: State): State => {
  const { type } = currentState;
  switch (type) {
    case 'START':
    case 'RESULT':
      return { type: 'FIRST_VAR', firstVar: '0' };
    case 'FIRST_VAR':
      return { ...currentState, firstVar: currentState.firstVar + '0' };
    case 'OPERATION':
      return { ...currentState, type: 'SECOND_VAR', secondVar: '0' };
    case 'SECOND_VAR':
      return {
        ...currentState,
        firstVar: currentState.secondVar[0] === '0' ? '0' : currentState.secondVar + '0',
      };
  }
};

export const selectDot = (currentState: State): State => {
  const { type } = currentState;
  switch (type) {
    case 'START':
    case 'RESULT':
      return { type: 'FIRST_VAR', firstVar: '0.' };
    case 'FIRST_VAR':
      return currentState.firstVar.includes('.')
        ? currentState
        : { ...currentState, firstVar: currentState.firstVar + '.' };
    case 'OPERATION':
      return { ...currentState, type: 'SECOND_VAR', secondVar: '0.' };
    case 'SECOND_VAR':
      return currentState.secondVar.includes('.')
        ? currentState
        : { ...currentState, secondVar: currentState.secondVar + '.' };
  }
};
