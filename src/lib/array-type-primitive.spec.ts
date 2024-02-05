import { ArrayOfGivenTypePrimitive } from './array-type-primitive';

describe('ArrayOfGivenTypePrimitive function', () => {
  it('should return true when all array elements match the given type', () => {
    const arr = [1, 2, 3];
    const expectedTypeofValue = 'number';
    expect(ArrayOfGivenTypePrimitive<number>(arr, expectedTypeofValue)).toBe(true);
  });

  it('should return false when not all array elements match the given type', () => {
    const arr = [1, 'a', 3];
    const expectedTypeofValue = 'number';
    expect(ArrayOfGivenTypePrimitive<number>(arr, expectedTypeofValue)).toBe(false);
  });

  it('should return false when input is not an array', () => {
    const arg = 'test';
    const expectedTypeofValue = 'string';
    expect(ArrayOfGivenTypePrimitive<string>(arg, expectedTypeofValue)).toBe(false);
  });
});
