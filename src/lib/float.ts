import { OfNumberType } from './number';

/**
 * Check if the given argument is of type number and not an integer.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} Returns true if the argument is a floating-point number, false otherwise.
 * @example
 *  const value = 3.14;
 *  const result = OfFloatType(value);
 *  // result is true
 */
export function OfFloatType(arg: unknown): arg is number {
  return OfNumberType(arg) && arg % 1 !== 0;
}

/**
 * Check if the given argument is not of type number or is an integer.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} Returns true if the argument is not a floating-point number, false otherwise.
 * @example
 *  const value = 3;
 *  const result = NotOfFloatType(value);
 *  // result is true
 */
export function NotOfFloatType(arg: unknown): boolean {
  return !OfFloatType(arg);
}
