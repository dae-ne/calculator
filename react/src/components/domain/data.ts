import { ButtonProps } from "../ui";
import { Operation } from "./buttons";

export interface DefaultButtonInfo extends Omit<ButtonProps, 'children' | 'onClick'> {
  type: 'dot' | 'equals' | 'clear' | 'sign' | 'percent';
}

export interface NumberButtonInfo {
  type: 'number';
  value: number;
}

export interface OperationButtonInfo {
  type: 'operation';
  operation: Operation;
}

export type ButtonInfo = DefaultButtonInfo | NumberButtonInfo | OperationButtonInfo;

export const buttons: ButtonInfo[] = [
  {
    type: 'clear',
    variant: 'circle',
    color: 'tertiary',
    fontSize: 'small',
  },
  {
    type: 'sign',
    variant: 'circle',
    color: 'tertiary',
    fontSize: 'small',
  },
  {
    type: 'percent',
    variant: 'circle',
    color: 'tertiary',
    fontSize: 'large',
  },
  {
    type: 'operation',
    operation: 'division',
  },
  {
    type: 'number',
    value: 7,
  },
  {
    type: 'number',
    value: 8,
  },
  {
    type: 'number',
    value: 9,
  },
  {
    type: 'operation',
    operation: 'multiplication',
  },
  {
    type: 'number',
    value: 4,
  },
  {
    type: 'number',
    value: 5,
  },
  {
    type: 'number',
    value: 6,
  },
  {
    type: 'operation',
    operation: 'subtraction',
  },
  {
    type: 'number',
    value: 1,
  },
  {
    type: 'number',
    value: 2,
  },
  {
    type: 'number',
    value: 3,
  },
  {
    type: 'operation',
    operation: 'addition',
  },
  {
    type: 'number',
    value: 0,
  },
  {
    type: 'dot',
    variant: 'circle',
    color: 'primary',
    fontSize: 'large'
  },
  {
    type: 'equals',
    variant: 'circle',
    color: 'secondary',
    fontSize: 'large'
  },
]