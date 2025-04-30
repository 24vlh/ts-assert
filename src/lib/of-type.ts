import { ObjectTypeValues } from './24vlh.type';

/**
 * Check if the given argument is of the specified type.
 *
 * @template T - The type of the arg.
 * @param {unknown} arg - The argument to check.
 * @param {ObjectTypeValues} typeName - The name of the object type to compare against.
 * @return {boolean} - Returns `true` if the argument is of the specified type, `false` otherwise.
 * @example
 *  const value = {};
 *  const result = OfType<{}>(value, 'Object');
 *  // result is true
 */
export const OfType = <T>(
  arg: unknown,
  typeName: ObjectTypeValues
): arg is T => {
  return Object.prototype.toString.call(arg) === `[object ${typeName}]`;
};

/**
 * Check if the given argument is not of the specified type.
 *
 * @param {unknown} arg - The argument to check.
 * @param {ObjectTypeValues} typeName - The name of the object type to compare against.
 * @return {boolean} - Returns `true` if the argument is not of the specified type, `false` otherwise.
 * @example
 *  const value = 1;
 *  const result = NotOfType(value, 'Object');
 *  // result is true
 */
export const NotOfType = (
  arg: unknown,
  typeName: ObjectTypeValues
): boolean => {
  return !OfType(arg, typeName);
};
