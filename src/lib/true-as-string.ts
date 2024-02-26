import { OfStringType } from './string';

/**
 * Checks if the provided argument is of type string and has value 'true'.
 *
 * @param {unknown} arg - The argument to be checked.
 * @returns {boolean} Returns true if the argument is of type string with value 'true', otherwise returns false.
 * @example
 *  const value = 'true';
 *  const result = OfTrueTypeAsString(value);
 *  // result is true
 */
export const OfTrueTypeAsString = (arg: unknown): arg is string => {
  return OfStringType(arg) && arg === 'true';
};

/**
 * Checks if the provided argument is not of type string or has value not 'true'.
 *
 * @param {unknown} arg - The argument to be checked.
 * @returns {boolean} Returns true if the argument is not of type string or its value is not 'true', otherwise returns false.
 * @example
 *  const value = 'string';
 *  const result = NotOfTrueTypeAsString(value);
 *  // result is true
 */
export const NotOfTrueTypeAsString = (arg: unknown): boolean => {
  return !OfTrueTypeAsString(arg);
};
