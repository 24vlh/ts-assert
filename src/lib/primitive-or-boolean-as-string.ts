import { OfPrimitiveTypeAsString } from './primitive-as-string';
import { OfBooleanTypeAsString } from './boolean-as-string';

/**
 * Determines if the given argument is of the type boolean, null, or undefined, and returns a boolean value.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} - True if the argument is of primitive type boolean, null, or undefined, otherwise false.
 */
export function OfPrimitiveOrBooleanTypeAsString(
  arg: unknown
): arg is boolean | null | undefined {
  return OfPrimitiveTypeAsString(arg) || OfBooleanTypeAsString(arg);
}
