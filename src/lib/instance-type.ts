/**
 * Checks if the given object is an instance of the expected type.
 *
 * @param {unknown} arg - The object to check.
 * @param {new (...args: never[]) => T} expectedTypeClass - The expected type class.
 * @return {boolean} Returns true if the object is an instance of the expected type, false otherwise.
 * @example
 *  const value = new MyClass();
 *  const result = InstanceOfType(value, MyClass);
 *  // result is true
 */
export const InstanceOfType = <T>(
  arg: unknown,
  expectedTypeClass: new (...args: never[]) => T
): arg is T => {
  return arg instanceof expectedTypeClass;
};

/**
 * Checks if the given object is not an instance of the expected type.
 *
 * @param {unknown} arg - The object to check.
 * @param {new (...args: never[]) => T} expectedTypeClass - The expected type class.
 * @return {boolean} Returns true if the object is not an instance of the expected type, false otherwise.
 * @example
 *  const value = new MyClass();
 *  const result = NotInstanceOfType(value, MyClass);
 *  // result is false
 */
export const NotInstanceOfType = <T>(
  arg: unknown,
  expectedTypeClass: new (...args: never[]) => T
): boolean => {
  return !InstanceOfType(arg, expectedTypeClass);
};
