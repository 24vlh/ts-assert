import { OfNullType } from './null';
import { OfUndefinedType } from './undefined';

/**
 * Checks if the given argument is either null or undefined.
 *
 * @param {unknown} arg - The argument to check.
 * @return {boolean} Returns true if the argument is null or undefined, otherwise returns false.
 */
export function OfPrimitiveType(arg: unknown): arg is null | undefined {
  return OfNullType(arg) || OfUndefinedType(arg);
}
