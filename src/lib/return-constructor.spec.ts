import { ReturnConstructor } from './return-constructor';

/**
 * Returns the constructor function.
 *
 * @template T - The type of object the constructor function creates.
 *
 * @param {new (...args: never[]) => T} constructor - The constructor function to be returned.
 *
 * @returns {new (...args: never[]) => T} - The constructor function.
 */
describe('ReturnConstructor', () => {
  it('should return the given constructor function', () => {
    class TestClass {
      foo: string;
      constructor() {
        this.foo = 'bar';
      }
    }

    const testConstructor = ReturnConstructor(TestClass);

    const testInstance = new testConstructor();

    expect(testInstance.constructor.name).toBe('TestClass');
    expect(testInstance.foo).toBe('bar');
  });
});
