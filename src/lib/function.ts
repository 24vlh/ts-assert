import { OfType } from './of-type';

/**
 * This function checks if the given argument is of a specific type T.
 * It uses the OfType function to perform the type check.
 *
 * @template T The expected type of the argument.
 * @param {unknown} arg - The argument whose type is to be checked.
 * @returns {boolean} - Returns true if the argument is of type T, false otherwise.
 */
export function OfFunctionType<T>(arg: unknown): arg is T {
  return OfType(arg, 'Function');
}

/**
 * This function checks if the given argument is a function.
 * It uses the typeof operator to perform the type check.
 *
 * @template T The expected type of the argument.
 * @param {unknown} arg - The argument whose type is to be checked.
 * @returns {boolean} - Returns true if the argument is a function, false otherwise.
 */
export function OfFunctionType2<T>(arg: unknown): arg is T {
  return typeof arg === 'function';
}
