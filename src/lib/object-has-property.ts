import { OfStringType } from './string';
import { OfObjectType } from './object';

/**
 * Checks if an object has a specific property.
 *
 * @template T - The type of the object.
 * @param {unknown} key - The property key to check.
 * @param {unknown} object - The object to check for the property.
 * @returns {boolean} - True if the object has the property, false otherwise.
 * @example
 *  const value = {key: 'value'};
 *  const result = ObjectHasProperty('key', value);
 *  // result is true
 */
export const ObjectHasProperty = <T extends object>(
  key: unknown,
  object: unknown
): key is keyof T => {
  return OfStringType(key) && OfObjectType<T>(object) && key in object;
};

/**
 * Checks if an object does not have a specific property.
 *
 * @param {unknown} key - The property key to check.
 * @param {unknown} object - The object to check for the property.
 * @returns {boolean} - True if the object does not have the property, false otherwise.
 * @example
 *  const value = {key: 'value'};
 *  const result = ObjectHasNotProperty('key', value);
 *  // result is false
 */
export const ObjectHasNotProperty = (
  key: unknown,
  object: unknown
): boolean => {
  return !ObjectHasProperty(key, object);
};
