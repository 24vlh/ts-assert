import { OfStringType } from './string';
import { OfObjectType } from './object';

export function ObjectHasProperty<T extends object>(
  key: unknown,
  object: unknown
): key is keyof T {
  return OfStringType(key) && OfObjectType<T>(object) && key in object;
}
