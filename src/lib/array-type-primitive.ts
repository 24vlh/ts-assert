import { TypeofValues } from './24vlh.type';

/**
 * Check if the given argument is an array of a specific primitive type.
 *
 * @template T - The type of elements in the array.
 * @param {unknown} arg - The argument to be checked.
 * @param {TypeofValues} expectedTypeofValue - The expected primitive type of the values in the array.
 * @returns {boolean} True if the argument is an array of the expected primitive type, false otherwise.
 * @example
 *  const value = [1, 2, 3];
 *  const result = ArrayOfGivenTypePrimitive<number>(value, 'number');
 *  // result is true
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

/**
 * Checks if the provided argument is not an array of a specific primitive type.
 *
 * @param {unknown} arg - The argument to be checked.
 * @param {TypeofValues} expectedTypeofValue - The expected primitive type of the values in the array.
 * @returns {boolean} - Returns true if the argument is not an array of the expected primitive type, otherwise false.
 * @example
 *  const value = [1, 2, 3];
 *  const result = NotArrayOfGivenTypePrimitive<number>(value, 'number');
 *  // result is false
 */
export function NotArrayOfGivenTypePrimitive(
  arg: unknown,
  expectedTypeofValue: TypeofValues
): boolean {
  return (
    !Array.isArray(arg) ||
    arg.length === 0 ||
    !arg.every((item: unknown): boolean => typeof item === expectedTypeofValue)
  );
}
