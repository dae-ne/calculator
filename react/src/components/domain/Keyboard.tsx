import classNames from 'classnames';
import { useEffect } from 'react';
import { Button } from '../ui';
import { NumberButton, OperationButton } from './buttons';
import { buttons } from './data';
import { useCalculator } from './hooks';

export interface KeyboardProps {
  className?: string;
  setDisplayValue: (value: string) => void;
}

const getNumberButtonVariant = (value: number) => {
  return value === 0 ? 'wide' : 'circle';
}

export const Keyboard = ({ className, setDisplayValue }: KeyboardProps) => {
  const { currentValue, onNumberClick, onOperationClick, onDotClick, getResult, clear } = useCalculator();

  useEffect(() => {
    setDisplayValue(currentValue.toString());
  }, [currentValue, setDisplayValue]);

  return (
    <div className={classNames('keyboard', className)}>
      {buttons.map(button => {
        const { type } = button;
        switch (type) {
          case 'number':
            return (
              <NumberButton
                key={`${button.type}-${button.value}`}
                onClick={() => onNumberClick(button.value)}
                variant={getNumberButtonVariant(button.value)}
                {...button}
              />
            );
          case 'operation':
            return <OperationButton key={`${button.type}-${button.operation}`} onClick={() => onOperationClick(button.operation)} {...button} />;
          case 'dot':
            return <Button key={button.type} onClick={onDotClick} {...button}>.</Button>;
          case 'equals':
            return <Button key={button.type} onClick={getResult} {...button}>=</Button>;
          case 'clear':
            return <Button key={button.type} onClick={clear} {...button}>AC</Button>;
          case 'sign':
            return <Button key={button.type} disabled {...button}>+/-</Button>;
          case 'percent':
            return <Button key={button.type} disabled {...button}>%</Button>;
          default:
            throw new Error(`Button of type ${type} doesn't exist`);
        }
      })}
    </div>
  );
};
