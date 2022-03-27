import { calculate } from './operations';
import { OperationsType } from './operations.types';

type CaseType = [OperationsType, number, number, number];

const cases: CaseType[] = [['addition', 1, 1, 2]];

it.each(cases)(
  'should calculate %p of two numbers (%p, %p) with result %p',
  (operation, a, b, result) => {
    expect(calculate(a, b, operation)).toBe(result);
  }
);
