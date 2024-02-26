import { OfObjectType } from './object';
import { ObjectHasOwnProperty } from './object-has-own-property';

/**
 * Checks if the given argument is an object of the specified type.
 *
 * @template T - The type of the object.
 * @param {unknown} arg - The argument to check.
 * @param {Array<keyof T>} requiredKeys - The keys to check in the object.
 * @return {boolean} - Returns true if the argument is an object of the specified type and contains all of the specified keys, otherwise returns false.
 * @example
 *  ObjectOfType({name: 'John', age: 30}, ['name', 'age']);
 *  // result is true
 */
export const ObjectOfType = <T extends object>(
  arg: unknown,
  requiredKeys: (keyof T)[]
): arg is T => {
  if (!OfObjectType(arg)) return false;

  return requiredKeys.every((key: unknown) =>
    ObjectHasOwnProperty<T>(key, arg)
  );
};

/**
 * Checks if the given argument is not an object of the specified type.
 *
 * @template T - The type of the object.
 * @param {unknown} arg - The argument to check.
 * @param {Array<keyof T>} requiredKeys - The keys to check in the object.
 * @return {boolean} - Returns true if the argument is not an object of the specified type or does not contain all of the specified keys, otherwise returns false.
 * @example
 *  NotObjectOfType({name: 'John', age: 30}, ['name', 'age']);
 *  // result is false
 */
export const NotObjectOfType = <T extends object>(
  arg: unknown,
  requiredKeys: (keyof T)[]
): boolean => {
  return !ObjectOfType<T>(arg, requiredKeys);
};
