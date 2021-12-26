import React from 'react';
import classNames from 'classnames';

export type ButtonVariant = 'circle' | 'wide';

export type ButtonColor = 'primary' | 'secondary' | 'tertiary';

export type ButtonFontSize = 'small' | 'large';

export interface ButtonProps {
  variant?: ButtonVariant;
  color?: ButtonColor;
  fontSize?: ButtonFontSize;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'circle',
  color = 'primary',
  fontSize = 'large',
  onClick,
  children
}) => {
  return (
    <button
      className={
        classNames(
          'button',
          `button--${variant}`,
          `button--${color}`,
          `button--${fontSize}-font`
        )}
      onClick={onClick}
    >
      <div className="button__inner">
        {children}
      </div>
    </button>
  );
};
