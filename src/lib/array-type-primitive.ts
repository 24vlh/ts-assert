import { TypeofValues } from './24vlh.type';

/**
 * Check if the given argument is an array of a specific primitive type.
 *
 * @param {unknown} arg - The argument to be checked.
 * @param {TypeofValues} expectedTypeofValue - The expected primitive type of the values in the array.
 * @returns {boolean} True if the argument is an array of the expected primitive type, false otherwise.
 */
export function ArrayOfGivenTypePrimitive<T>(
  arg: unknown,
  expectedTypeofValue: TypeofValues
): arg is T[] {
  return (
    Array.isArray(arg) &&
    arg.length > 0 &&
    arg.every((item: unknown): boolean => typeof item === expectedTypeofValue)
  );
}
