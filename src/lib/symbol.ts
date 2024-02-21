import { OfType } from './of-type';

/**
 * Checks if the given argument is of type `symbol`.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} - Returns `true` if the argument is of type `symbol`, otherwise `false`.
 * @example
 *  const value = Symbol();
 *  const result = OfSymbolType(value);
 *  // result is true
 */
export function OfSymbolType(arg: unknown): arg is symbol {
  return OfType(arg, 'Symbol');
}

/**
 * Checks if the given argument is not of type `symbol`.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} - Returns `true` if the argument is not of type `symbol`, otherwise `false`.
 * @example
 *  const value = {};
 *  const result = NotOfSymbolType(value);
 *  // result is true
 */
export function NotOfSymbolType(arg: unknown): boolean {
  return !OfSymbolType(arg);
}
