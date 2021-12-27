import { useState } from "react";
import { Operation } from "../components/domain/buttons";

export const useMath = () => {
  const [result, setResult] = useState(0);

  const calculateWithCallback = (
    callback: (a: number, b: number) => number,
    firstValue: number,
    secondValue: number,
  ) => {
    const newResult = callback(firstValue, secondValue);
    setResult(newResult);
    return newResult;
  }

  const calculate = (firstValue: number, secondValue: number, operation: Operation) => {
    switch (operation) {
      case 'addition':
        return calculateWithCallback((a, b) => a + b, firstValue, secondValue);
      case 'subtraction':
        return calculateWithCallback((a, b) => a - b, firstValue, secondValue);
      case 'multiplication':
        return calculateWithCallback((a, b) => a * b, firstValue, secondValue);
      case 'division':
        return calculateWithCallback((a, b) => a / b, firstValue, secondValue);
    }
  }

  const clear = () => {
    setResult(0);
  }

  return { result, calculate, clear };
}