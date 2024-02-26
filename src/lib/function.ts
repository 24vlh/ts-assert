import { OfType } from './of-type';

/**
 * This function checks if the given argument is of a specific type T.
 * It uses the OfType function to perform the type check.
 *
 * @template T The expected type of the argument.
 * @param {unknown} arg - The argument whose type is to be checked.
 * @returns {boolean} - Returns true if the argument is of type T, false otherwise.
 * @example
 *  const value = () => {};
 *  const result = OfFunctionType(value);
 *  // result is true
 */
export const OfFunctionType = <T>(arg: unknown): arg is T => {
  return OfType(arg, 'Function');
};

/**
 * This function checks if the given argument is not of a specific type T.
 * It uses the OfFunctionType function to perform the type check.
 *
 * @param {unknown} arg - The argument whose type is to be checked.
 * @returns {boolean} - Returns true if the argument is not of type T, false otherwise.
 * @example
 *  const value = 'string';
 *  const result = NotOfFunctionType(value);
 *  // result is true
 */
export const NotOfFunctionType = (arg: unknown): boolean => {
  return !OfFunctionType(arg);
};

/**
 * This function checks if the given argument is a function.
 * It uses the typeof operator to perform the type check.
 *
 * @template T The expected type of the argument.
 * @param {unknown} arg - The argument whose type is to be checked.
 * @returns {boolean} - Returns true if the argument is a function, false otherwise.
 * @example
 *  const value = () => {};
 *  const result = OfFunctionType2(value);
 *  // result is true
 */
export const OfFunctionType2 = <T>(arg: unknown): arg is T => {
  return typeof arg === 'function';
};

/**
 * This function checks if the given argument is not a function.
 * It uses the OfFunctionType2 function to perform the type check.
 *
 * @param {unknown} arg - The argument whose type is to be checked.
 * @returns {boolean} - Returns true if the argument is not a function, false otherwise.
 * @example
 *  const value = 'string';
 *  const result = NotOfFunctionType2(value);
 *  // result is true
 */
export const NotOfFunctionType2 = (arg: unknown): boolean => {
  return !OfFunctionType2(arg);
};
