import { OfNullTypeAsString } from './null-as-string';
import { OfUndefinedTypeAsString } from './undefined-as-string';

/**
 * Checks if the given argument is of primitive type string.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} - True if the argument is of type string, false otherwise.
 * @example
 *  const value = 'Hello, World!';
 *  const result = OfPrimitiveTypeAsString(value);
 *  // result is true
 */
export function OfPrimitiveTypeAsString(arg: unknown): arg is string {
  return OfNullTypeAsString(arg) || OfUndefinedTypeAsString(arg);
}

/**
 * Checks if the given argument is not of primitive type string.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} - True if the argument is not of type string, false otherwise.
 * @example
 *  const value = 2;
 *  const result = NotOfPrimitiveTypeAsString(value);
 *  // result is true
 */
export function NotOfPrimitiveTypeAsString(arg: unknown): boolean {
  return !OfPrimitiveTypeAsString(arg);
}
