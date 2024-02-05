import { OfType } from './of-type';

/**
 * Checks if the given argument is of number type.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} - True if the argument is a number, false otherwise.
 */
export function OfNumberType(arg: unknown): arg is number {
  return OfType(arg, 'Number') && Number.isFinite(arg);
}
