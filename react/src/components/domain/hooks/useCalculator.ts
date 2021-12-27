import { useState } from "react";
import { useMath } from "../../../hooks";
import { useSteps } from "../../../hooks/useSteps";
import { Operation } from "../buttons";

enum Steps {
  FirstValue,
  SecondValue,
  Result,
}

interface State {
  firstValue: number;
  secondValue: number;
  decimalMode: boolean;
  decimals: number;
  operation?: Operation;
}

const initialState: State = {
  firstValue: 0,
  secondValue: 0,
  decimalMode: false,
  decimals: 0,
}

const steps: Steps[] = Object.values(Steps).filter((step): step is Steps => typeof(step) === 'number');

export const useCalculator = () => {
  const [state, setState] = useState<State>(initialState);
  const { result, calculate, clear: clearResult } = useMath();
  const { step, nextStep, goToStep } = useSteps(steps);

  const getCurrentValue = () => {
    switch (step) {
      case Steps.FirstValue:
        return state.firstValue;
      case Steps.SecondValue:
        return state.secondValue;
      case Steps.Result:
        return result;
    };
  };

  const onNumberClick = (value: number) => {
    const calculateDecimals = (decimalMode: boolean, decimals: number) => {
      return decimalMode ? decimals + 1 : decimals;
    };

    const calculateNewValue = (
      decimalMode: boolean,
      previousValue: number,
      decimals: number,
      value: number
    ) => {
      const newValue= decimalMode
        ? previousValue + value / (Math.pow(10, decimals))
        : previousValue * 10 + value;
      return Number.parseFloat(newValue.toFixed(decimals));
    };

    switch (step) {
      case Steps.FirstValue:
        setState(prev => ({
          ...prev,
          decimals: calculateDecimals(prev.decimalMode, prev.decimals),
          firstValue: calculateNewValue(prev.decimalMode, prev.firstValue, prev.decimals, value),
        }));
        break;
      case Steps.SecondValue:
        setState(prev => ({
          ...prev,
          decimals: calculateDecimals(prev.decimalMode, prev.decimals),
          secondValue: calculateNewValue(prev.decimalMode, prev.secondValue, prev.decimals, value),
        }));
        break;
      case Steps.Result:
        setState({
          ...initialState,
          firstValue: value,
        });
        clearResult();
        nextStep();
        break;
    }
  };

  const onOperationClick = (operation: Operation) => {
    switch (step) {
      case Steps.FirstValue:
        setState(prev => ({
          ...prev,
          decimalMode: false,
          decimals: 0,
          operation,
        }));
        nextStep();
        break;
      case Steps.SecondValue:
        setState(prev => ({
          ...prev,
          firstValue: calculate(prev.firstValue, prev.secondValue, operation),
        }));
        break;
      case Steps.Result:
        setState({
          ...initialState,
          firstValue: result,
          operation: operation,
        });
        clear();
        goToStep(Steps.SecondValue);
        break;
    }
  };

  const clear = () => {
    clearResult();
    setState(initialState);
    goToStep(Steps.FirstValue);
  };

  const onDotClick = () => {
    if (step === Steps.Result) {
      clear()
    }

    setState(prev => ({
      ...prev,
      decimalMode: true,
      decimals: prev.decimals > 0 ? prev.decimals : 1,
    }));
  };

  const getResult = () => {
    const { firstValue, secondValue, operation } = state;

    operation
      ? calculate(firstValue, secondValue, operation)
      : calculate(firstValue, 0, 'addition');

    goToStep(Steps.Result);
  };

  return {
    currentValue: getCurrentValue(),
    onNumberClick,
    onOperationClick,
    onDotClick,
    getResult,
    clear,
  };
};
