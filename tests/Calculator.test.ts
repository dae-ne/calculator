import { CalculatorPageObject } from './Calculator.po';
import userEvent from '@testing-library/user-event';

it('should add two numbers', async () => {
  // arrange
  const { elements } = CalculatorPageObject.render();
  const { buttonNumber1, addButton, equalsButton, output } = elements;

  // act
  await userEvent.click(buttonNumber1);
  await userEvent.click(addButton);
  await userEvent.click(buttonNumber1);
  await userEvent.click(equalsButton);
  
  // assert
  expect(output.value).toBe('= 2');
});
