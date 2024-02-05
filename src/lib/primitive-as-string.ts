import { OfNullTypeAsString } from './null-as-string';
import { OfUndefinedTypeAsString } from './undefined-as-string';

/**
 * Checks if the given argument is of primitive type string.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} - True if the argument is of type string, false otherwise.
 */
export function OfPrimitiveTypeAsString(arg: unknown): arg is string {
  return OfNullTypeAsString(arg) || OfUndefinedTypeAsString(arg);
}
