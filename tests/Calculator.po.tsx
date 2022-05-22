import { getByRole, render } from '@testing-library/react';
import { getOperationSymbol } from '../src/config/operationSymbols';
import Calculator from '../src/pages';

export class CalculatorPageObject {
  elements: {
    rootContainer: HTMLElement;
    output: HTMLOutputElement;
    buttonNumber1: HTMLButtonElement;
    addButton: HTMLButtonElement;
    equalsButton: HTMLButtonElement;
  };

  private constructor(container: HTMLElement) {
    this.elements = {
      rootContainer: container,
      output: getByRole<HTMLOutputElement>(container, 'status'),
      buttonNumber1: getByRole<HTMLButtonElement>(container, 'button', { name: '1' }),
      addButton: getByRole<HTMLButtonElement>(container, 'button', { name: getOperationSymbol('addition') }),
      equalsButton: getByRole<HTMLButtonElement>(container, 'button', { name: '=' }),
    };
  }

  static render() {
    const { container } = render(<Calculator />);
    return new CalculatorPageObject(container);
  }
}
