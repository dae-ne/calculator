import React from 'react';
import { OperationType } from '../domain';
import { useCalculator } from './useCalculator';

export const App = () => {
  const {
    display,
    clear,
    deleteLast,
    selectZero,
    selectDot,
    selectNumber,
    selectOperation,
    getResult,
  } = useCalculator();

  const renderNumberButtons = () => {
    const range = Array.from({ length: 9 }, (_, i) => i + 1);
    return range.map((n) => (
      <button key={n} onClick={() => selectNumber(n)}>
        {n}
      </button>
    ));
  };

  const renderOperationButtons = () => {
    type OperationSigns = [name: OperationType, sign: string];
    const operationSigns: OperationSigns[] = [
      ['addition', '+'],
      ['subtraction', '-'],
      ['multiplication', '*'],
      ['division', '/'],
    ];
    return operationSigns.map(([name, sign]) => (
      <button key={name} onClick={() => selectOperation(name)}>
        {sign}
      </button>
    ));
  };

  return (
    <div>
      <h1>{display}</h1>
      <div>
        <button onClick={clear}>CE</button>
        <button onClick={deleteLast}>del</button>
        {renderNumberButtons()}
        <button onClick={selectZero}>0</button>
        <button onClick={selectDot}>.</button>
        {renderOperationButtons()}
        <button onClick={getResult}>=</button>
      </div>
    </div>
  );
};
