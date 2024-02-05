import { OfArrayType } from './array';

const testData: [unknown, boolean][] = [
  [[], true],
  [new Array(2), true],
  [Object.keys({}), true],
  [[].keys(), false],
  [true, false],
  [{}, false]
];

describe('OfTypeArray', () => {
  test.each(testData)(
    'OfTypeArray: Expecting %p to be %p',
    (inputValue: unknown, expectedOutput: boolean) => {
      expect(OfArrayType(inputValue)).toBe(expectedOutput);
    }
  );
});
