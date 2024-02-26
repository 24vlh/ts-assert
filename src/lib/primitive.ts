import { OfNullType } from './null';
import { OfUndefinedType } from './undefined';

/**
 * Checks if the given argument is either null or undefined.
 *
 * @param {unknown} arg - The argument to check.
 * @return {boolean} Returns true if the argument is null or undefined, otherwise returns false.
 * @example
 *  const value = null;
 *  const result = OfPrimitiveType(value);
 *  // result is true
 */
export const OfPrimitiveType = (arg: unknown): arg is null | undefined => {
  return OfNullType(arg) || OfUndefinedType(arg);
};

/**
 * Checks if the given argument is not null or undefined.
 *
 * @param {unknown} arg - The argument to check.
 * @return {boolean} Returns true if the argument is not null or undefined, otherwise returns false.
 * @example
 *  const value = 1;
 *  const result = NotOfPrimitiveType(value);
 *  // result is true
 */
export const NotOfPrimitiveType = (arg: unknown): boolean => {
  return !OfPrimitiveType(arg);
};
