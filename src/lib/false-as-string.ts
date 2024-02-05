import { OfStringType } from './string';

/**
 * Checks if the given argument is of type 'string' and has a value of 'false'
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} Returns true if argument is of string type with value 'false', otherwise false.
 */
export function OfFalseTypeAsString(arg: unknown): arg is string {
  return OfStringType(arg) && arg === 'false';
}
