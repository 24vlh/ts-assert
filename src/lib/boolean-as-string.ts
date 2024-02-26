import { OfTrueTypeAsString } from './true-as-string';
import { OfFalseTypeAsString } from './false-as-string';

/**
 * Checks if the given argument is of type string and has value 'boolean'.
 *
 * @param {unknown} arg - The argument to check.
 * @return {boolean} - Returns true if the argument is of boolean type as a string, otherwise returns false.
 * @example
 *  const value = 'true';
 *  const result = OfBooleanTypeAsString(value);
 *  // result is true
 */
export const OfBooleanTypeAsString = (arg: unknown): arg is string => {
  return OfTrueTypeAsString(arg) || OfFalseTypeAsString(arg);
};

/**
 * Checks if the given argument is not of type string or has value not 'boolean'.
 *
 * @param {unknown} arg - The argument to check.
 * @return {boolean} - Returns true if the argument is not of boolean type as a string, otherwise returns false.
 * @example
 *  const value = 'string';
 *  const result = NotOfBooleanTypeAsString(value);
 *  // result is true
 */
export const NotOfBooleanTypeAsString = (arg: unknown): boolean => {
  return !OfBooleanTypeAsString(arg);
};
