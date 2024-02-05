import { OfType } from './of-type';

/**
 * Checks if the given argument is of type null.
 *
 * @param {unknown} arg - The argument to check the type of.
 *
 * @return {boolean} - Returns true if the argument is of type null, false otherwise.
 */
export function OfNullType(arg: unknown): arg is null {
  return OfType(arg, 'Null');
}
