import { OfStringType } from './string';

/**
 * Checks if the given argument is of type string and represents a number.
 *
 * @param {unknown} arg - The argument to check.
 * @returns {boolean} - Returns true if the argument is a string that represents a number, otherwise returns false.
 * @example
 *  const value = '1';
 *  const result = OfNumberTypeAsString(value);
 *  // result is true
 */
export const OfNumberTypeAsString = (arg: unknown): arg is string => {
  return OfStringType(arg) && /^\d+(\.\d+)?$/.test(arg);
};

/**
 * Checks if the given argument is not of type string and represents a number.
 *
 * @param {unknown} arg - The argument to check.
 * @returns {boolean} - Returns true if the argument is not a string that represents a number, otherwise returns false.
 * @example
 *  const value = 'string';
 *  const result = NotOfNumberTypeAsString(value);
 *  // result is true
 */
export const NotOfNumberTypeAsString = (arg: unknown): boolean => {
  return !OfNumberTypeAsString(arg);
};
