import type { NextPage } from 'next'
import { useMemo } from 'react';
import { Button } from '../Button';
import { createKeyboardMap } from '../keyboardMap';
import { useCalculator } from '../useCalculator';

const Calculator: NextPage = () => {
  const { display, ...actions } = useCalculator();
  const buttons = useMemo(() => createKeyboardMap(actions), [actions]);

  return (
    <div className="container">
      <p className="display">{display}</p>
      <ul className="keyboard">
        {buttons.map(item => {
          const { text, color, width, action } = item;
          return (
            <li key={text}>
              <Button color={color} width={width} onClick={action}>
                {text}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Calculator;
