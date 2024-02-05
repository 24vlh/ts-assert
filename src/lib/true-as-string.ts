import { OfStringType } from './string';

/**
 * Checks if the provided argument is of type string and has value 'true'.
 *
 * @param {unknown} arg - The argument to be checked.
 *
 * @returns {boolean} Returns true if the argument is of type string with value 'true', otherwise returns false.
 */
export function OfTrueTypeAsString(arg: unknown): arg is string {
  return OfStringType(arg) && arg === 'true';
}
