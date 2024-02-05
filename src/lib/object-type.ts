import { OfObjectType } from './object';
import { ObjectHasOwnProperty } from './object-has-own-property';

/**
 * Checks if the given argument is an object of the specified type.
 *
 * @param {unknown} arg - The argument to check.
 * @param {Array<keyof T>} requiredKeys - The keys to check in the object.
 * @return {boolean} - Returns true if the argument is an object of the specified type and contains all of the specified keys, otherwise returns false.
 */
export function ObjectOfType<T extends object>(
  arg: unknown,
  requiredKeys: (keyof T)[]
): arg is T {
  if (!OfObjectType(arg)) return false;

  return requiredKeys.every((key: unknown) =>
    ObjectHasOwnProperty<T>(key, arg)
  );
}
