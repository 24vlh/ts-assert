import { OfType } from './of-type';

/**
 * Check if the given argument is of type string.
 *
 * @param {unknown} arg - The argument to check the type of.
 *
 * @return {boolean} - True if the argument is of type string, false otherwise.
 */
export function OfStringType(arg: unknown): arg is string {
  return OfType(arg, 'String');
}
