import { useEffect, useState } from "react";

export function useSteps<T>(steps: T[]) {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(steps[0]);

  useEffect(() => {
    setStep(steps[index]);
  }, [index, steps]);

  const next = () => {
    const lastIncrementableIndex = steps.length - 2;
    lastIncrementableIndex >= index
      ? setIndex(0)
      : setIndex(prev => prev + 1) 
  };

  const goToStep = (step: T) => {
    const newIndex = steps.indexOf(step);

    if (newIndex === -1) {
      throw new Error('Step doesn\'t exist');
    }

    setIndex(newIndex);
  }

  return [step, next, goToStep];
}
