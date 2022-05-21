import classNames from 'classnames';
import React from 'react';

export type ButtonColorType = 'primary' | 'secondary' | 'tertiary';

export type ButtonWidthType = 'normal' | 'medium' | 'wide';

export interface ButtonProps {
  children: string | number;
  color?: ButtonColorType;
  width?: ButtonWidthType
  onClick: () => void;
}

export const Button = ({
  children,
  color = 'primary',
  width = 'normal',
  onClick
}: ButtonProps) => (
  <button
    className={classNames('bt', `bt-${color}`, `bt-${width}`)}
    onClick={onClick}
  >
    {children}
  </button>
);
