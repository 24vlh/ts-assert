import { OfType } from './of-type';

/**
 * Checks if a value is of type undefined.
 *
 * @param {unknown} arg - The value to be checked.
 *
 * @return {boolean} Returns true if the value is of type undefined, otherwise returns false.
 *
 * @example
 *   const value = undefined;
 *   const result = OfUndefinedType(value);
 *   // result is true
 */
export function OfUndefinedType(arg: unknown): arg is undefined {
  return OfType(arg, 'Undefined');
}
