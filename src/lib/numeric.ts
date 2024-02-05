import { OfNumberType } from './number';
import { OfNumberTypeAsString } from './number-as-string';

/**
 * Checks if the given argument is of numeric type (number or string).
 *
 * @param {unknown} arg - The argument to check.
 * @return {boolean} Whether the argument is of numeric type.
 */
export function OfNumericType(arg: unknown): arg is number | string {
  return OfNumberType(arg) || OfNumberTypeAsString(arg);
}
