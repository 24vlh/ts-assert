import { OfStringType } from './string';
import { OfObjectType } from './object';

/**
 * Checks if an object has a specific property.
 *
 * @param {unknown} key - The property key to check.
 * @param {unknown} object - The object to check for the property.
 * @template T - The type of the object.
 * @returns {boolean} - True if the object has the property, false otherwise.
 */
export function ObjectHasProperty<T extends object>(
  key: unknown,
  object: unknown
): key is keyof T {
  return OfStringType(key) && OfObjectType<T>(object) && key in object;
}
