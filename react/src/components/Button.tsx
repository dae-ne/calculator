import React from 'react';

export type ButtonType = 'circle' | 'wide';

export interface ButtonProps {
  type?: ButtonType;
}

export const Button: React.FC<ButtonProps> = ({ type = 'circle' }) => {
  return (
    <button className="button">

    </button>
  );
};
