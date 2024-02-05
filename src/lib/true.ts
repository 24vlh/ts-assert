import { OfBooleanType } from './boolean';

/**
 * Checks if the given argument is of type "true".
 *
 * @param {unknown} arg - The argument to be checked.
 *
 * @return {boolean} - Returns true if the argument is of type "true", otherwise false.
 */
export function OfTrueType(arg: unknown): arg is true {
  return OfBooleanType(arg) && arg;
}
