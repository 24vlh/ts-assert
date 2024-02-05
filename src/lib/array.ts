/**
 * Checks if the provided argument is of type array.
 *
 * @template T - The type of elements in the array.
 * @param {unknown} arg - The argument to be checked.
 * @returns {boolean} - Returns true if the argument is of type array, otherwise false.
 */
export function OfArrayType<T>(arg: unknown): arg is T[] {
  return Array.isArray(arg);
}
