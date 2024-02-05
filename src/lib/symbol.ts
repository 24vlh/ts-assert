import { OfType } from './of-type';

/**
 * Checks if the given argument is of type `symbol`.
 *
 * @param {unknown} arg - The argument to be checked.
 * @return {boolean} - Returns `true` if the argument is of type `symbol`, otherwise `false`.
 */
export function OfSymbolType(arg: unknown): arg is symbol {
  return OfType(arg, 'Symbol');
}
