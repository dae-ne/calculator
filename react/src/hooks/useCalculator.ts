import { useState } from "react";
// import { useSteps } from ".";

export enum Steps {
  FirstNumber,
  SecondNumber,
  Result,
}

// const steps: Steps[] = Object.values(Steps).filter((step): step is Steps => typeof(step) === 'number');

export const useCalculator = () => {
  const [result, ] = useState(0);
  // const [step, next, goToStep] = useSteps(steps);

  return result;
}
