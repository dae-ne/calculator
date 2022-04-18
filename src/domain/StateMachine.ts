import {
  calculate,
  deleteLast,
  selectDot,
  selectNumber,
  selectOperation,
  selectZero,
} from './actions';
import { OperationType } from './operations';
import { State } from './state';

export class StateMachine {
  private state: State = { type: 'START' };

  deleteLast() {
    this.state = deleteLast(this.state);
  }

  selectOperation(operation: OperationType) {
    this.state = selectOperation(this.state, operation);
  }

  calculate() {
    this.state = calculate(this.state);
  }

  selectNumber(selectedNumber: number) {
    this.state = selectNumber(this.state, selectedNumber);
  }

  selectZero() {
    this.state = selectZero(this.state);
  }

  selectDot() {
    this.state = selectDot(this.state);
  }
}
