import { OfBooleanType } from './boolean';

/**
 * Checks if the given argument is of type true.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} - Returns true if the argument is of type true, otherwise false.
 * @example
 *  const value = true;
 *  const result = OfTrueType(value);
 *  // result is true
 */
export function OfTrueType(arg: unknown): arg is true {
  return OfBooleanType(arg) && arg;
}

/**
 * Checks if the given argument is not of type true.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} - Returns true if the argument is not of type true, otherwise false.
 * @example
 *  const value = false;
 *  const result = NotOfTrueType(value);
 *  // result is true
 */
export function NotOfTrueType(arg: unknown): boolean {
  return !OfTrueType(arg);
}
