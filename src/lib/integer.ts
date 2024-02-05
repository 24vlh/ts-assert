import { OfNumberType } from './number';

/**
 * Check if a given value is of type "number" and also an integer.
 *
 * @param {unknown} arg - The value to be checked.
 * @return {boolean} - Returns true if the value is of type "number" and also an integer, otherwise false.
 */
export function OfIntegerType(arg: unknown): arg is number {
  return OfNumberType(arg) && Number.isInteger(arg);
}
