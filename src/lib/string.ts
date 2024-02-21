import { OfType } from './of-type';

/**
 * Check if the given argument is of type string.
 *
 * @param {unknown} arg - The argument to check the type of.
 * @return {boolean} - True if the argument is of type string, false otherwise.
 * @example
 *  const value = 'Hello, World!';
 *  const result = OfStringType(value);
 *  // result is true
 */
export function OfStringType(arg: unknown): arg is string {
  return OfType(arg, 'String');
}

/**
 * Check if the given argument is not of type string.
 *
 * @param {unknown} arg - The argument to check the type of.
 * @return {boolean} - True if the argument is not of type string, false otherwise.
 * @example
 *  const value = 2;
 *  const result = NotOfStringType(value);
 *  // result is true
 */
export function NotOfStringType(arg: unknown): boolean {
  return !OfStringType(arg);
}
