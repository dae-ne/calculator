import React from 'react';
import { useCalculator } from './useCalculator';

export const App = () => {
  const calculator = useCalculator();

  return (
    <div>
      <h1>{calculator.display}</h1>
      <div>
        <button onClick={() => calculator.selectNumber(1)}>1</button>
        <button onClick={() => calculator.selectOperation('addition')}>+</button>
        <button onClick={calculator.getResult}>=</button>
      </div>
    </div>
  );
};
