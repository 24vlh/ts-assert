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
    let obj: object = object;

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
