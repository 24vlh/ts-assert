import { OfObjectType } from './object';
import { OfStringType } from './string';

/**
 * Checks if an object has a specific property.
 *
 * @param {unknown} key - The property key to check.
 * @param {unknown} object - The object to check for the property.
 * @template T - The type of the object.
 * @returns {boolean} - Returns true if the object has the property, false otherwise.
 */
export function ObjectHasOwnProperty<T extends object>(
  key: unknown,
  object: unknown
): key is keyof T {
  return (
    OfStringType(key) &&
    OfObjectType<T>(object) &&
    Object.prototype.hasOwnProperty.call(object, key)
  );
}
