import { OfNumberType } from './number';
import { OfNumberTypeAsString } from './number-as-string';

/**
 * Checks if the given argument is of numeric type (number or string).
 *
 * @param {unknown} arg - The argument to check.
 * @return {boolean} Whether the argument is of numeric type.
 * @example
 *  const value = 1;
 *  const result = OfNumericType(value);
 *  // result is true
 */
export const OfNumericType = (arg: unknown): arg is number | string => {
  return OfNumberType(arg) || OfNumberTypeAsString(arg);
};

/**
 * Checks if the given argument is not of numeric type (number or string).
 *
 * @param {unknown} arg - The argument to check.
 * @return {boolean} Whether the argument is not of numeric type.
 * @example
 *  const value = 'string';
 *  const result = NotOfNumericType(value);
 *  // result is true
 */
export const NotOfNumericType = (arg: unknown): boolean => {
  return !OfNumericType(arg);
};
