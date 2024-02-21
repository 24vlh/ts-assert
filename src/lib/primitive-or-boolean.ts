import { OfPrimitiveType } from './primitive';
import { OfBooleanType } from './boolean';

/**
 * Checks whether the given argument is of primitive or boolean type.
 *
 * @param {unknown} arg - The argument to be checked.
 * @returns {boolean} - Returns true if the argument is of primitive or boolean type, otherwise false.
 * @example
 *  const value = true;
 *  const result = OfPrimitiveOrBooleanType(value);
 *  // result is true
 */
export function OfPrimitiveOrBooleanType(
  arg: unknown
): arg is boolean | null | undefined {
  return OfPrimitiveType(arg) || OfBooleanType(arg);
}

/**
 * Checks whether the given argument is not of primitive or boolean type.
 *
 * @param {unknown} arg - The argument to be checked.
 * @returns {boolean} - Returns true if the argument is not of primitive or boolean type, otherwise false.
 * @example
 *  const value = 1;
 *  const result = NotOfPrimitiveOrBooleanType(value);
 *  // result is true
 */
export function NotOfPrimitiveOrBooleanType(arg: unknown): boolean {
  return !OfPrimitiveOrBooleanType(arg);
}
