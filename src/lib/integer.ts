import { OfNumberType } from './number';

/**
 * Check if a given value is of type "number" and also an integer.
 *
 * @param {unknown} arg - The value to be checked.
 * @return {boolean} - Returns true if the value is of type "number" and also an integer, otherwise false.
 * @example
 *  const value = 3;
 *  const result = OfIntegerType(value);
 *  // result is true
 */
export function OfIntegerType(arg: unknown): arg is number {
  return OfNumberType(arg) && Number.isInteger(arg);
}

/**
 * Check if a given value is not of type "number" or is not an integer.
 *
 * @param {unknown} arg - The value to be checked.
 * @return {boolean} - Returns true if the value is not of type "number" or is not an integer, otherwise false.
 * @example
 *  const value = 3.14;
 *  const result = NotOfIntegerType(value);
 *  // result is true
 */
export function NotOfIntegerType(arg: unknown): boolean {
  return !OfIntegerType(arg);
}
