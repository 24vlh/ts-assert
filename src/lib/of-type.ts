import { ObjectTypeValues } from './24vlh.type';

/**
 * Check if the given argument is of the specified type.
 *
 * @param {unknown} arg - The argument to check.
 * @param {ObjectTypeValues} typeName - The name of the object type to compare against.
 * @return {boolean} - Returns `true` if the argument is of the specified type, `false` otherwise.
 */
export function OfType(arg: unknown, typeName: ObjectTypeValues): boolean {
  return Object.prototype.toString.call(arg) === `[object ${typeName}]`;
}
