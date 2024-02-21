import { OfType } from './of-type';

/**
 * Checks if the given argument is of type null.
 *
 * @param {unknown} arg - The argument to check the type of.
 * @return {boolean} - Returns true if the argument is of type null, false otherwise.
 * @example
 *  const value = null;
 *  const result = OfNullType(value);
 *  // result is true
 */
export function OfNullType(arg: unknown): arg is null {
  return OfType(arg, 'Null');
}

/**
 * Checks if the given argument is not of type null.
 *
 * @param {unknown} arg - The argument to check the type of.
 * @return {boolean} - Returns true if the argument is not of type null, false otherwise.
 * @example
 *  const value = 'string';
 *  const result = NotOfNullType(value);
 *  // result is true
 */
export function NotOfNullType(arg: unknown): boolean {
  return !OfNullType(arg);
}
