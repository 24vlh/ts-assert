import { OfStringType } from './string';

/**
 * Checks if the given argument is of type string and has value 'undefined'.
 *
 * @param {unknown} arg - The argument to be checked.
 * @returns {boolean} - Returns true if the argument is of type 'string' and its value is 'undefined',
 *                      otherwise returns false.
 * @example
 *  const value = undefined;
 *  const result = OfUndefinedTypeAsString(value);
 *  // result is true
 */
export function OfUndefinedTypeAsString(arg: unknown): arg is string {
  return OfStringType(arg) && arg === 'undefined';
}

/**
 * Checks if the given argument is not of type string or has value not 'undefined'.
 *
 * @param {unknown} arg - The argument to be checked.
 * @returns {boolean} - Returns true if the argument is not of type 'string' or its value is not 'undefined',
 *                      otherwise returns false.
 * @example
 *  const value = null;
 *  const result = NotOfUndefinedTypeAsString(value);
 *  // result is true
 */
export function NotOfUndefinedTypeAsString(arg: unknown): boolean {
  return !OfUndefinedTypeAsString(arg);
}
