import { OfStringType } from './string';

/**
 * Checks if the given argument is of type string and has value 'false'.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} Returns true if argument is of string type with value 'false', otherwise false.
 * @example
 *  const value = 'false';
 *  const result = OfFalseTypeAsString(value);
 *  // result is true
 */
export const OfFalseTypeAsString = (arg: unknown): arg is string => {
  return OfStringType(arg) && arg === 'false';
};

/**
 * Checks if the given argument is not of type string or has value not 'false'.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} Returns true if argument is of string type with value other than 'false', otherwise false.
 * @example
 *  const value = 'true';
 *  const result = NotOfFalseTypeAsString(value);
 *  // result is true
 */
export const NotOfFalseTypeAsString = (arg: unknown): boolean => {
  return !OfFalseTypeAsString(arg);
};
