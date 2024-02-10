import { OfObjectType } from './object';
import { OfStringType } from './string';
import { ObjectHasOwnProperty } from './object-has-own-property';

/**
 * Checks if an object has a property in a nested structure.
 *
 * @param {unknown} path - The property path as a string, e.g. 'obj.prop.nested'.
 * @param {unknown} object - The object to check.
 * @return {boolean} - True if the property exists, false otherwise.
 */
export function ObjectHasPropertyDeepScan(
  path: unknown,
  object: unknown
): boolean {
  if (OfObjectType(object) && OfStringType(path)) {
    const keys: string[] = path.split('.');
    let obj: object = { ...object };

    for (const key of keys) {
      if (ObjectHasOwnProperty(key, obj)) {
        obj = obj[key];
      } else {
        return false;
      }
    }

    return true;
  }

  return false;
}

/**
 * Checks if an object has a property at a given nested path.
 *
 * @param {unknown} path - The path of the property to check, in dot notation.
 * @param {unknown} object - The object to search for the property.
 *
 * @return {boolean} - Returns true if the property is found, false otherwise.
 */
export function ObjectHasPropertyDeepScan2(
  path: unknown,
  object: unknown
): boolean {
  if (OfObjectType(object) && OfStringType(path)) {
    const keys: string[] = path.split('.');
    let obj: object = { ...object };

    return keys.every((key) => {
      if (ObjectHasOwnProperty(key, obj)) {
        obj = obj[key];
        return true;
      }

      return false;
    });
  }

  return false;
}
