/**
 * Checks if the given argument is of NaN type.
 *
 * @param {unknown} arg - The argument to be checked.
 * @returns {boolean} Returns true if the argument is of NaN type, otherwise returns false.
 */
export function OfNanType(arg: unknown): arg is typeof NaN {
  return Number.isNaN(arg);
}
