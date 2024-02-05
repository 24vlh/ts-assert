import { OfTrueTypeAsString } from './true-as-string';
import { OfFalseTypeAsString } from './false-as-string';

/**
 * Determines if the given argument is of boolean type as a string.
 *
 * @param {unknown} arg - The argument to check.
 * @return {boolean} - Returns true if the argument is of boolean type as a string, otherwise returns false.
 */
export function OfBooleanTypeAsString(arg: unknown): arg is string {
  return OfTrueTypeAsString(arg) || OfFalseTypeAsString(arg);
}
