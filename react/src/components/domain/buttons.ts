import { ButtonColor, ButtonFontSize, ButtonVariant } from "../ui";

export interface ButtonInfo {
  content: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  fontSize?: ButtonFontSize,
}

export const buttons: ButtonInfo[] = [
  {
    content: 'AC',
    variant: 'circle',
    color: 'tertiary',
    fontSize: 'small'
  },
  {
    content: '+/-',
    variant: 'circle',
    color: 'tertiary',
    fontSize: 'small'
  },
  {
    content: '%',
    variant: 'circle',
    color: 'tertiary',
    fontSize: 'large'
  },
  {
    content: '÷',
    variant: 'circle',
    color: 'secondary',
    fontSize: 'large'
  },
  {
    content: '7',
    variant: 'circle',
    color: 'primary',
    fontSize: 'large'
  },
  {
    content: '8',
    variant: 'circle',
    color: 'primary',
    fontSize: 'large'
  },
  {
    content: '9',
    variant: 'circle',
    color: 'primary',
    fontSize: 'large'
  },
  {
    content: 'x',
    variant: 'circle',
    color: 'secondary',
    fontSize: 'large'
  },
  {
    content: '4',
    variant: 'circle',
    color: 'primary',
    fontSize: 'large'
  },
  {
    content: '5',
    variant: 'circle',
    color: 'primary',
    fontSize: 'large'
  },
  {
    content: '6',
    variant: 'circle',
    color: 'primary',
    fontSize: 'large'
  },
  {
    content: '-',
    variant: 'circle',
    color: 'secondary',
    fontSize: 'large'
  },
  {
    content: '1',
    variant: 'circle',
    color: 'primary',
    fontSize: 'large'
  },
  {
    content: '2',
    variant: 'circle',
    color: 'primary',
    fontSize: 'large'
  },
  {
    content: '3',
    variant: 'circle',
    color: 'primary',
    fontSize: 'large'
  },
  {
    content: '+',
    variant: 'circle',
    color: 'secondary',
    fontSize: 'large'
  },
  {
    content: '0',
    variant: 'wide',
    color: 'primary',
    fontSize: 'large'
  },
  {
    content: '.',
    variant: 'circle',
    color: 'primary',
    fontSize: 'large'
  },
  {
    content: '=',
    variant: 'circle',
    color: 'secondary',
    fontSize: 'large'
  },
]