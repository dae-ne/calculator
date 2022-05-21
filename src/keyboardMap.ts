import { Actions } from "./Actions";
import { ButtonColorType, ButtonWidthType } from "./Button";

type KeyboardMapType = {
  text: string,
  color?: ButtonColorType,
  width?: ButtonWidthType,
  action: () => void
};

export const createKeyboardMap = ({
  clear,
  deleteLast,
  selectOperation,
  getResult,
  selectNumber,
  selectZero,
  selectDot,
}: Actions): KeyboardMapType[] => [
  {
    text: 'CE',
    color: 'tertiary',
    width: 'medium',
    action: clear
  },
  {
    text: 'DEL',
    color: 'tertiary',
    width: 'medium',
    action: deleteLast
  },
  {
    text: '/',
    color: 'secondary',
    action: () => selectOperation('division')
  },
  {
    text: '7',
    action: () => selectNumber(7)
  },
  {
    text: '8',
    action: () => selectNumber(8)
  },
  {
    text: '9',
    action: () => selectNumber(9)
  },
  {
    text: '*',
    color: 'secondary',
    action: () => selectOperation('multiplication')
  },
  {
    text: '4',
    action: () => selectNumber(4)
  },
  {
    text: '5',
    action: () => selectNumber(5)
  },
  {
    text: '6',
    action: () => selectNumber(6)
  },
  {
    text: '-',
    color: 'secondary',
    action: () => selectOperation('division')
  },
  {
    text: '1',
    action: () => selectNumber(1)
  },
  {
    text: '2',
    action: () => selectNumber(2)
  },
  {
    text: '3',
    action: () => selectNumber(3)
  },
  {
    text: '+',
    color: 'secondary',
    action: () => selectOperation('addition')
  },
  {
    text: '0',
    width: 'wide',
    action: selectZero
  },
  {
    text: '.',
    action: selectDot
  },
  {
    text: '=',
    color: 'secondary',
    action: getResult
  },
];
