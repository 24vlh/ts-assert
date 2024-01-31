import { OfObjectType } from './object';
import { OfStringType } from './string';
import { ObjectHasProperty } from './object-has-property';

export function ObjectHasPropertyDeepScan(
  str: unknown,
  object: unknown
): boolean {
  if (OfObjectType(object) && OfStringType(str)) {
    const keys: string[] = str.split('.');
    let obj: object = object;

    for (const key of keys) {
      if (ObjectHasProperty(key, obj)) {
        obj = obj[key];
      } else {
        return false;
      }
    }

    return true;
  }

  return false;
}
