import { useState } from "react";

export function useSteps<T>(steps: T[]) {
  const [state, setState] = useState({ index: 0, step: steps[0] });

  const nextStep = () => {
    const { index } = state;
    const lastIncrementableIndex = steps.length - 2;
    index >= lastIncrementableIndex
      ? setState({ index: 0, step: steps[0] })
      : setState(prev => {
        const newIndex = prev.index + 1;
        return { index: newIndex, step: steps[newIndex] }
      });
  };

  const goToStep = (step: T) => {
    const newIndex = steps.indexOf(step);

    if (newIndex === -1) {
      throw new Error('This step doesn\'t exist');
    }

    setState({ index: newIndex, step: steps[newIndex] });
  }

  return { step: state.step, nextStep, goToStep };
}
