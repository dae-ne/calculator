import React from 'react';
import { Button, ButtonColor, ButtonFontSize, ButtonVariant } from './Button';

export interface KeyboardProps {}

interface ButtonInfo {
  content: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  fontSize?: ButtonFontSize
}

const buttons: ButtonInfo[] = [
  {
    content: 'AC',
    color: 'tertiary',
    fontSize: 'small'
  },
  {
    content: '+/-',
    color: 'tertiary',
    fontSize: 'small'
  },
  {
    content: '%',
    color: 'tertiary',
  },
  {
    content: '÷',
    color: 'secondary',
  },
  {
    content: '7',
  },
  {
    content: '8',
  },
  {
    content: '9',
  },
  {
    content: 'x',
    color: 'secondary',
  },
  {
    content: '4',
    variant: 'circle',
    color: 'primary',
  },
  {
    content: '5',
  },
  {
    content: '6',
    variant: 'circle',
    color: 'primary',
  },
  {
    content: '-',
    variant: 'circle',
    color: 'secondary',
  },
  {
    content: '1',
  },
  {
    content: '2',
  },
  {
    content: '3',
  },
  {
    content: '+',
    color: 'secondary',
  },
  {
    content: '0',
    variant: 'wide',
  },
  {
    content: '.',
  },
  {
    content: '=',
    color: 'secondary',
  },
]

export const Keyboard: React.FC<KeyboardProps> = () => {
  return (
    <div className="keyboard">
      {buttons.map(button => (
        <Button
          variant={button.variant}
          color={button.color}
          fontSize={button.fontSize}
        >
          {button.content}
        </Button>
      ))}
    </div>
  );
};
