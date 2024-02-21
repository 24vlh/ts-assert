import { ReturnConstructor } from './return-constructor';

/**
 * Checks if the given argument is an array of a specific type.
 *
 * @template T - The type of elements in the array.
 * @param {unknown} arg - The argument to be checked.
 * @param {function} expectedTypeClass - The class of the expected type.
 * @returns {boolean} - Returns true if the argument is an array of the expected type, false otherwise.
 * @example
 *  const value = [new MyClass(), new MyClass()];
 *  const result = ArrayOfGivenTypeClass(value, MyClass);
 *  // result is true
 */
export function ArrayOfGivenTypeClass<T>(
  arg: unknown,
  expectedTypeClass: new (...args: never[]) => T
): arg is T[] {
  return (
    Array.isArray(arg) &&
    arg.length > 0 &&
    arg.every(
      (item: unknown): boolean =>
        item instanceof ReturnConstructor(expectedTypeClass)
    )
  );
}

/**
 * Checks if the given argument is not an array of a specific type.
 *
 * @template T - The type of elements in the array.
 * @param {unknown} arg - The argument to be checked.
 * @param {function} expectedTypeClass - The class of the expected type.
 * @returns {boolean} - Returns true if the argument is not an array of the expected type, false otherwise.
 * @example
 *  const value = [new MyClass(), new MyClass()];
 *  const result = NotArrayOfGivenTypeClass(value, MyClass);
 *  // result is false
 */
export function NotArrayOfGivenTypeClass<T>(
  arg: unknown,
  expectedTypeClass: new (...args: never[]) => T
): boolean {
  return (
    !Array.isArray(arg) ||
    arg.length === 0 ||
    !arg.every(
      (item: unknown): boolean =>
        item instanceof ReturnConstructor(expectedTypeClass)
    )
  );
}
