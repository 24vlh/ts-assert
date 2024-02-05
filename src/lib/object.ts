import { OfType } from './of-type';

/**
 * Checks if the given argument is of the specified object type.
 *
 * @template T - The type of the object.
 * @param {unknown} arg - The argument to check.
 * @returns {arg is T} - Returns true if the argument is of type T, false otherwise.
 */
export function OfObjectType<T extends object>(arg: unknown): arg is T {
  return OfType(arg, 'Object');
}
