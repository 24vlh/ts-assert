import { OfType } from './of-type';

/**
 * Checks if the given argument is of type T.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} - True if the argument is of type T, false otherwise.
 */
export function OfFunctionType<T>(arg: unknown): arg is T {
  return OfType(arg, 'Function');
}
