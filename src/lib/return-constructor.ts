/**
 * Returns the constructor function.
 *
 * @template T - The type of object the constructor function creates.
 *
 * @param {new (...args: never[]) => T} constructor - The constructor function to be returned.
 *
 * @returns {new (...args: never[]) => T} - The constructor function.
 */
export function ReturnConstructor<T>(
  constructor: new (...args: never[]) => T
): new (...args: never[]) => T {
  return constructor;
}
