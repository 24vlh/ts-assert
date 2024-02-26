import { OfObjectType } from './object';
import { OfStringType } from './string';

/**
 * Checks if an object has a specific property.
 *
 * @template T - The type of the object.
 * @param {unknown} key - The property key to check.
 * @param {unknown} object - The object to check for the property.
 * @returns {boolean} - Returns true if the object has the property, false otherwise.
 * @example
 *  const value = {key: 'value'};
 *  const result = ObjectHasOwnProperty('key', value);
 *  // result is true
 */
export const ObjectHasOwnProperty = <T extends object>(
  key: unknown,
  object: unknown
): key is keyof T => {
  return (
    OfStringType(key) &&
    OfObjectType<T>(object) &&
    Object.prototype.hasOwnProperty.call(object, key)
  );
};

/**
 * Checks if an object does not have a specific property.
 *
 * @param {unknown} key - The property key to check.
 * @param {unknown} object - The object to check for the property.
 * @returns {boolean} - Returns true if the object does not have the property, false otherwise.
 * @example
 *  const value = {key: 'value'};
 *  const result = ObjectHasNotOwnProperty('key', value);
 *  // result is false
 */
export const ObjectHasNotOwnProperty = (
  key: unknown,
  object: unknown
): boolean => {
  return !ObjectHasOwnProperty(key, object);
};
