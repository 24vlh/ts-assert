import { ArrayOfGivenTypeClass } from './array-type-class';

describe('ArrayOfGivenTypeClass', () => {
  // Defining simple type classes
  class TypeClass1 {}
  class TypeClass2 {}

  // valid test cases
  it('should return true if the argument is an array of instances of the expected type class', () => {
    const arg = [new TypeClass1(), new TypeClass1()];
    const result = ArrayOfGivenTypeClass(arg, TypeClass1);
    expect(result).toBe(true);
  });

  // invalid test cases
  it('should return false if the argument is not an array of instances of the expected type class', () => {
    const arg = [new TypeClass1(), new TypeClass2()];
    const result = ArrayOfGivenTypeClass(arg, TypeClass1);
    expect(result).toBe(false);
  });

  it('should return false if the argument is empty array', () => {
    const arg: never[] = [];
    const result = ArrayOfGivenTypeClass(arg, TypeClass1);
    expect(result).toBe(false);
  });

  it('should return false if the argument is not an array', () => {
    const arg = 'not an array';
    const result = ArrayOfGivenTypeClass(arg, TypeClass1);
    expect(result).toBe(false);
  });
});
