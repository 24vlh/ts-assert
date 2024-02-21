import { OfType } from './of-type';

/**
 * Checks if the given argument is of boolean type.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} - Returns true if the argument is of boolean type, false otherwise.
 * @example
 *  const value = true;
 *  const result = OfBooleanType(value);
 *  // result is true
 */
export function OfBooleanType(arg: unknown): arg is boolean {
  return OfType(arg, 'Boolean');
}

/**
 * Checks if the given argument is not of boolean type.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} - Returns true if the argument is not of boolean type, false otherwise.
 * @example
 *  const value = 'string';
 *  const result = NotOfBooleanType(value);
 *  // result is true
 */
export function NotOfBooleanType(arg: unknown): boolean {
  return !OfType(arg, 'Boolean');
}
