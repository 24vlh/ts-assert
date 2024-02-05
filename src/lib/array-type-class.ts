import { ReturnConstructor } from './return-constructor';

/**
 * Checks if the given argument is an array of a specific type.
 *
 * @param {unknown} arg - The argument to be checked.
 * @param {function} expectedTypeClass - The class of the expected type.
 * @returns {boolean} - Returns true if the argument is an array of the expected type, false otherwise.
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
