import { OfStringType } from './string';

/**
 * Checks if the given argument is of type string and represents a number.
 *
 * @param {*} arg - The argument to check.
 * @returns {boolean} - Returns true if the argument is a string that represents a number, otherwise returns false.
 */
export function OfNumberTypeAsString(arg: unknown): arg is string {
  return OfStringType(arg) && /^\d+(\.\d+)?$/.test(arg);
}
