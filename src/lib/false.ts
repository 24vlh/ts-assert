import { OfBooleanType } from './boolean';

/**
 * Checks if the argument is of type `false`.
 *
 * @param {unknown} arg - The argument to check.
 * @return {boolean} - Returns `true` if the argument is of type `false`, otherwise `false`.
 * @example
 *  const value = false;
 *  const result = OfFalseType(value);
 *  // result is true
 */
export const OfFalseType = (arg: unknown): arg is false => {
  return OfBooleanType(arg) && !arg;
};

/**
 * Checks if the argument is not of type `false`.
 *
 * @param {unknown} arg - The argument to check.
 * @return {boolean} - Returns `true` if the argument is not of type `false`, otherwise `false`.
 * @example
 *  const value = 'string';
 *  const result = NotOfFalseType(value);
 *  // result is true
 */
export const NotOfFalseType = (arg: unknown): boolean => {
  return !OfFalseType(arg);
};
