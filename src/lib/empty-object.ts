import { OfObjectType } from './object';

/**
 * Determines if the given argument is an empty object.
 *
 * @param {unknown} arg - The argument to check.
 * @returns {boolean|undefined} - Returns `true` if the argument is an empty object, `false` if it is not an empty object,
 *                                or `undefined` if the argument is not of expected object type.
 */
export function EmptyObject(arg: unknown): boolean | undefined {
  if (!OfObjectType(arg)) {
    return undefined;
  }

  return Object.keys(arg).length === 0;
}

/**
 * Checks if the given argument is a non-empty object.
 *
 * @param {unknown} arg - The argument to be checked.
 * @returns {boolean | undefined} - Returns true if the argument is a non-empty object, otherwise returns undefined.
 */
export function NotEmptyObject(arg: unknown): boolean | undefined {
  if (!OfObjectType(arg)) {
    return undefined;
  }

  return Object.keys(arg).length > 0;
}
