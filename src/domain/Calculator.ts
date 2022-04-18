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

export class Calculator {
  private state: State = { type: 'START' };

  get display() {
    const { type } = this.state;
    switch (type) {
      case 'START':
        return '0';
      case 'FIRST_VAR':
        return this.state.firstVar;
      case 'OPERATION':
        return `${this.state.firstVar} ${this.state.operation}`;
      case 'SECOND_VAR':
        return this.state.secondVar;
      case 'RESULT':
        return `= ${this.state.result}`;
    }
  }

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
