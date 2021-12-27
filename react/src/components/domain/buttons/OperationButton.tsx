import { Button, ButtonProps } from '../../ui';

export type Operation = 'addition' | 'subtraction' | 'multiplication' | 'division';

export interface OperationButtonProps extends Pick<ButtonProps, 'onClick'> {
  operation: Operation
}

const getOperationSign = (operation: Operation) => {
  switch (operation) {
    case 'addition':
      return '+';
    case 'subtraction':
      return '-';
    case 'multiplication':
      return 'x';
    case 'division':
      return '÷';
    default:
      throw new Error(`Operation "${operation}" is not allowed`);
  }
}

export const OperationButton = ({ operation, ...props }: OperationButtonProps) => {
  return (
    <Button {...props} color="secondary">
      {getOperationSign(operation)}
    </Button>
  );
};
