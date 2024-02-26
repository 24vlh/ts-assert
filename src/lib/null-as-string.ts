import { OfStringType } from './string';

/**
 * Checks if the given argument is of type string and has value 'null'.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} Returns true if the argument is of null type as a string, false otherwise.
 * @example
 *  const value = 'null';
 *  const result = OfNullTypeAsString(value);
 *  // result is true
 */
export const OfNullTypeAsString = (arg: unknown): arg is string => {
  return OfStringType(arg) && arg === 'null';
};

/**
 * Checks if the given argument is not of type string or has value not 'null'.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} Returns true if the argument is not of null type as a string, false otherwise.
 * @example
 *  const value = 'string';
 *  const result = NotOfNullTypeAsString(value);
 *  // result is true
 */
export const NotOfNullTypeAsString = (arg: unknown): boolean => {
  return !OfNullTypeAsString(arg);
};
