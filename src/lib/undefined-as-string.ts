import { OfStringType } from './string';

/**
 * Checks if the given argument is of type 'string'.
 *
 * @param {unknown} arg - The argument to be checked.
 * @returns {boolean} - Returns true if the argument is of type 'string' and its value is 'undefined',
 *                      otherwise returns false.
 */
export function OfUndefinedTypeAsString(arg: unknown): arg is string {
  return OfStringType(arg) && arg === 'undefined';
}
