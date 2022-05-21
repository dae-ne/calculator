import { Actions } from '../Actions';
import { ButtonColorType, ButtonWidthType } from '../Button';
import { OperationType } from '../domain';
import { getOperationSymbol } from './operationSymbols';

type KeyboardMapType = {
  text: string,
  color?: ButtonColorType,
  width?: ButtonWidthType,
  action: () => void
};

const setRow = (
  numbers: number[],
  operation: OperationType,
  selectNumberCallback: (n: number) => void,
  selectOperationCallback: (o: OperationType) => void,
): KeyboardMapType[] => {
  const setNumbers = (numbers: number[]) => numbers.map(n => ({
    text: n.toString(),
    action: () => selectNumberCallback(n)
  }));
  return [
    ...setNumbers(numbers),
    {
      text: getOperationSymbol(operation),
      color: 'secondary',
      action: () => selectOperationCallback(operation),
    },
  ];
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
    text: getOperationSymbol('division'),
    color: 'secondary',
    action: () => selectOperation('division')
  },
  ...setRow([7, 8, 9], 'multiplication', selectNumber, selectOperation),
  ...setRow([4, 5, 6], 'subtraction', selectNumber, selectOperation),
  ...setRow([1, 2, 3], 'addition', selectNumber, selectOperation),
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
