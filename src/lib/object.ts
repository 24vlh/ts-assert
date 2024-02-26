import { OfType } from './of-type';

/**
 * Checks if the given argument is of the specified object type.
 *
 * @template T - The type of the object.
 * @param {unknown} arg - The argument to check.
 * @returns {arg is T} - Returns true if the argument is of type T, false otherwise.
 * @example
 *  const value = {};
 *  const result = OfObjectType(value);
 *  // result is true
 */
export const OfObjectType = <T extends object>(arg: unknown): arg is T => {
  return OfType(arg, 'Object');
};

/**
 * Checks if the given argument is not of the specified object type.
 *
 * @template T - The type of the object.
 * @param {unknown} arg - The argument to check.
 * @returns {boolean} - Returns true if the argument is not of type T, false otherwise.
 * @example
 *  const value = 'string';
 *  const result = NotOfObjectType(value);
 *  // result is true
 */
export const NotOfObjectType = <T extends object>(arg: unknown): boolean => {
  return !OfObjectType<T>(arg);
};
