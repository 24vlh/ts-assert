import { OfObjectType } from './object';
import { OfStringType } from './string';

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
