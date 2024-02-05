import { OfNumberType } from './number';

/**
 * Check if the given argument is of type number and not an integer.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} Returns true if the argument is a floating-point number, false otherwise.
 */
export function OfFloatType(arg: unknown): arg is number {
  return OfNumberType(arg) && arg % 1 !== 0;
}
