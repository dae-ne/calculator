import { OperationType } from './domain';

export interface Actions {
  clear: () => void,
  deleteLast: () => void,
  selectOperation: (operation: OperationType) => void,
  getResult: () => void,
  selectNumber: (selectedNumber: number) => void,
  selectZero: () => void,
  selectDot: () => void,
}
