import { OperationType } from './operations';

export type State =
  | { type: 'START' }
  | { type: 'FIRST_VAR'; firstVar: string }
  | { type: 'OPERATION'; firstVar: string; operation: OperationType }
  | { type: 'SECOND_VAR'; firstVar: string; operation: OperationType; secondVar: string }
  | { type: 'RESULT'; result: number };
