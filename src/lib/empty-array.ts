import { OfArrayType } from './array';

/**
 * Checks if the given argument is an empty array.
 * @param {unknown} arg - The argument to check.
 * @return {boolean | undefined} - Returns true if the argument is an empty array,
 *   otherwise returns undefined.
 */
export function EmptyArray(arg: unknown): boolean | undefined {
  if (!OfArrayType(arg)) {
    return undefined;
  }

  return arg.length === 0;
}

/**
 * Checks if the provided argument is an array and not empty.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean | undefined} - Returns boolean `true` if `arg` is an array and not empty, `undefined` otherwise.
 */
export function NotEmptyArray(arg: unknown): boolean | undefined {
  if (!OfArrayType(arg)) {
    return undefined;
  }

  return arg.length > 0;
}
