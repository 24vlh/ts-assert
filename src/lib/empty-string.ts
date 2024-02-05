import { OfStringType } from './string';

/**
 * Checks if the given argument is an empty string.
 *
 * @param {unknown} arg - The argument to be checked.
 * @returns {boolean | undefined} - True if the argument is an empty string, otherwise undefined.
 */
export function EmptyString(arg: unknown): boolean | undefined {
  if (!OfStringType(arg)) {
    return undefined;
  }

  return arg.length === 0;
}

/**
 * Checks if the given argument is a non-empty string.
 *
 * @param {unknown} arg - The input argument to be checked.
 * @returns {boolean | undefined} - Returns `true` if the argument is a non-empty string,
 *                                `false` if the argument is a string but empty,
 *                                `undefined` if the argument is not of string type.
 */
export function NotEmptyString(arg: unknown): boolean | undefined {
  if (!OfStringType(arg)) {
    return undefined;
  }

  return arg.length > 0;
}
