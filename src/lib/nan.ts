/**
 * Checks if the given argument is of NaN type.
 *
 * @param {unknown} arg - The argument to be checked.
 * @returns {boolean} Returns true if the argument is of NaN type, otherwise returns false.
 * @example
 *  const value = NaN;
 *  const result = OfNanType(value);
 *  // result is true
 */
export const OfNanType = (arg: unknown): arg is number => {
  return Number.isNaN(arg);
};

/**
 * Checks if the given argument is not of NaN type.
 *
 * @param {unknown} arg - The argument to be checked.
 * @returns {boolean} Returns true if the argument is not of NaN type, otherwise returns false.
 * @example
 *  const value = 'string';
 *  const result = NotOfNanType(value);
 *  // result is true
 */
export const NotOfNanType = (arg: unknown): boolean => {
  return !Number.isNaN(arg);
};
