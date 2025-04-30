import { OfNanType } from './nan';

/**
 * Checks if the given argument is either null | undefined | string | number | true | false | symbol | bigint.
 *
 * @param {unknown} arg - The argument to check.
 * @return {boolean} Returns true if the argument is null | undefined | string | number | true | false | symbol | bigint, otherwise returns false.
 * @example
 *  const value = null;
 *  const result = OfPrimitiveType(value);
 *  // result is true
 */
export const OfImmutablePrimitiveType = (
  arg: unknown
): arg is
  | null
  | undefined
  | string
  | number
  | true
  | false
  | symbol
  | bigint => {
  if (OfNanType(arg)) return true;

  return [
    '[object Null]',
    '[object Undefined]',
    '[object Boolean]',
    '[object String]',
    '[object Number]',
    '[object BigInt]',
    '[object Symbol]'
  ].includes(Object.prototype.toString.call(arg));
};

/**
 * Checks if the given argument is not null | undefined | string | number | true | false | symbol | bigint.
 *
 * @param {unknown} arg - The argument to check.
 * @return {boolean} Returns true if the argument is not null | undefined | string | number | true | false | symbol | bigint, otherwise returns false.
 * @example
 *  const value = 1;
 *  const result = NotOfPrimitiveType(value);
 *  // result is true
 */
export const NotOfImmutablePrimitiveType = (arg: unknown): boolean => {
  return !OfImmutablePrimitiveType(arg);
};
