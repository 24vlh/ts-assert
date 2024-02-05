import { OfType } from './of-type';

/**
 * Checks if the given argument is of boolean type.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} - Returns true if the argument is of boolean type, false otherwise.
 */
export function OfBooleanType(arg: unknown): arg is boolean {
  return OfType(arg, 'Boolean');
}
