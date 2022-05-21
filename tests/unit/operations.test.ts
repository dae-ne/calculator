import { calculate, OperationType } from '../../src/domain/operations';

type CaseType = [
  operation: OperationType,
  firstGiven: number,
  secondGiven: number,
  expected: number,
];

const cases: CaseType[] = [['addition', 1, 1, 2]];

it.each(cases)(
  'should calculate %p of two numbers (%p, %p) with result %p',
  (operation, a, b, result) => {
    expect(calculate(a, b, operation)).toBe(result);
  }
);
