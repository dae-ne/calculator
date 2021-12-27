import React from 'react';
import { Button, ButtonProps } from '../ui';

export type ButtonType =
  'number' |
  'operation' |
  'equality' |
  'clear' |
  'dot' |
  'percent' |
  'sign';

export interface DomainButtonProps extends ButtonProps {
  type: ButtonType;
}

export const DomainButton: React.FC<DomainButtonProps> = (props) => {
  const { type, ...buttonProps } = props;
  
  return <Button {...buttonProps} />;
};
