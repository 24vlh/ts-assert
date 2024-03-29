import { OfType } from './of-type';

/**
 * Checks if a value is of type undefined.
 *
 * @param {unknown} arg - The value to be checked.
 * @return {boolean} Returns true if the value is of type undefined, otherwise returns false.
 * @example
 *  const value = undefined;
 *  const result = OfUndefinedType(value);
 *  // result is true
 */
export const OfUndefinedType = (arg: unknown): arg is undefined => {
  return OfType(arg, 'Undefined');
};

/**
 * Checks if a value is not of type undefined.
 *
 * @param {unknown} arg - The value to be checked.
 * @return {boolean} Returns true if the value is not of type undefined, otherwise returns false.
 * @example
 *  const value = null;
 *  const result = NotOfUndefinedType(value);
 *  // result is true
 */
export const NotOfUndefinedType = (arg: unknown): boolean => {
  return !OfUndefinedType(arg);
};
