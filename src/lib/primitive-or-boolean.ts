import { OfPrimitiveType } from './primitive';
import { OfBooleanType } from './boolean';

/**
 * Checks whether the given argument is of primitive or boolean type.
 *
 * @param {unknown} arg - The argument to be checked.
 * @returns {boolean} - Returns true if the argument is of primitive or boolean type, otherwise false.
 */
export function OfPrimitiveOrBooleanType(
  arg: unknown
): arg is boolean | null | undefined {
  return OfPrimitiveType(arg) || OfBooleanType(arg);
}
