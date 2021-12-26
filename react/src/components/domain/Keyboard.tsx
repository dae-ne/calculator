import classNames from 'classnames';
import React from 'react';
import { Button } from '../ui';
import { buttons } from './buttons';

export interface KeyboardProps {
  className?: string;
}

export const Keyboard: React.FC<KeyboardProps> = ({ className }) => {
  return (
    <div className={classNames('keyboard', className)}>
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
