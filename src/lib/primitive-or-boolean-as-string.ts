import { OfPrimitiveTypeAsString } from './primitive-as-string';
import { OfBooleanTypeAsString } from './boolean-as-string';

/**
 * Determines if the given argument is of the type boolean, null, or undefined, and returns a boolean value.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} - True if the argument is of primitive type boolean, null, or undefined, otherwise false.
 * @example
 *  const value = true;
 *  const result = OfPrimitiveOrBooleanTypeAsString(value);
 *  // result is true
 */
export const OfPrimitiveOrBooleanTypeAsString = (
  arg: unknown
): arg is boolean | null | undefined => {
  return OfPrimitiveTypeAsString(arg) || OfBooleanTypeAsString(arg);
};

/**
 * Determines if the given argument is not of the type boolean, null, or undefined, and returns a boolean value.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} - True if the argument is not of primitive type boolean, null, or undefined, otherwise false.
 * @example
 *  const value = 1;
 *  const result = NotOfPrimitiveOrBooleanTypeAsString(value);
 *  // result is true
 */
export const NotOfPrimitiveOrBooleanTypeAsString = (arg: unknown): boolean => {
  return !OfPrimitiveOrBooleanTypeAsString(arg);
};
