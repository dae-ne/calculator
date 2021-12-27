import { useState } from "react";
import { useSteps } from "./useSteps";

export enum Steps {
  FirstValue,
  SecondValue,
  Result,
}

const steps: Steps[] = Object.values(Steps).filter((step): step is Steps => typeof(step) === 'number');

export const useCalculator = () => {
  const [result, setResult] = useState(0);
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [decimalMode, setDecimalMode] = useState(false);
  const { step, nextStep, goToStep } = useSteps(steps);

  const getCurrentValue = () => {
    switch (step) {
      case Steps.FirstValue:
        return firstValue;
      case Steps.SecondValue:
        return secondValue;
      case Steps.Result:
        return result;
    }
  }

  const onNumberClick = (value: number) => {
    switch (step) {
      case Steps.FirstValue:
        setFirstValue(value);
        break;
      case Steps.SecondValue:
        setSecondValue(value);
        break;
      case Steps.Result:
        nextStep();
        break;
    }
  }

  const clear = () => {
    setFirstValue(0);
    setSecondValue(0);
    setDecimalMode(false);
    setResult(0);
    goToStep(Steps.FirstValue);
  }

  const onDotClick = () => {
    if (step === Steps.Result) {
      nextStep();
    }

    setDecimalMode(true);
  }

  return {
    currentValue: getCurrentValue(),
    onNumberClick,
    onDotClick,
    clear,
  }
}
