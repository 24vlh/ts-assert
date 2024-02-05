import { OfBooleanType } from './boolean';

/**
 * Checks if the argument is of type `false`.
 *
 * @param {unknown} arg - The argument to check.
 * @return {boolean} - Returns `true` if the argument is of type `false`, otherwise `false`.
 */
export function OfFalseType(arg: unknown): arg is false {
  return OfBooleanType(arg) && !arg;
}
