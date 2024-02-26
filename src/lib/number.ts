import { OfType } from './of-type';

/**
 * Checks if the given argument is of number type.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} - True if the argument is a number, false otherwise.
 * @example
 *  const value = 1;
 *  const result = OfNumberType(value);
 *  // result is true
 */
export const OfNumberType = (arg: unknown): arg is number => {
  return OfType(arg, 'Number') && Number.isFinite(arg);
};

/**
 * Checks if the given argument is not of number type.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} - True if the argument is not a number, false otherwise.
 * @example
 *  const value = 'string';
 *  const result = NotOfNumberType(value);
 *  // result is true
 */
export const NotOfNumberType = (arg: unknown): boolean => {
  return !OfNumberType(arg);
};
