import { Button, ButtonProps } from '../../ui';

export interface NumberButtonProps extends Pick<ButtonProps, 'onClick' | 'variant'> {
  value: number;
}

export const NumberButton = ({ value, ...props }: NumberButtonProps) => {
  return (
    <Button {...props}>
      {value}
    </Button>
  );
};
