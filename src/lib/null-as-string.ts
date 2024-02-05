import { OfStringType } from './string';

/**
 * Determines if the provided argument is of null type as a string.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} Returns true if the argument is of null type as a string, false otherwise.
 */
export function OfNullTypeAsString(arg: unknown): arg is string {
  return OfStringType(arg) && arg === 'null';
}
