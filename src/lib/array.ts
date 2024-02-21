/**
 * Checks if the provided argument is of type array.
 *
 * @template T - The type of elements in the array.
 * @param {unknown} arg - The argument to be checked.
 * @returns {boolean} - Returns true if the argument is of type array, otherwise false.
 * @example
 *  const value = [1, 2, 3];
 *  const result = OfArrayType<number>(value);
 *  // result is true
 */
export function OfArrayType<T>(arg: unknown): arg is T[] {
  return Array.isArray(arg);
}

/**
 * Checks if the provided argument is not of type array.
 *
 * @param {unknown} arg - The argument to be checked.
 * @returns {boolean} - Returns true if the argument is not of type array, otherwise false.
 * @example
 *  const value = 'string';
 *  const result = NotOfArrayType(value);
 *  // result is true
 */
export function NotOfArrayType(arg: unknown): boolean {
  return !Array.isArray(arg);
}
