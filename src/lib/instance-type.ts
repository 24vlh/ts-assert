/**
 * Checks if the given object is an instance of the expected type.
 *
 * @param {unknown} arg - The object to check.
 * @param {new (...args: never[]) => T} expectedTypeClass - The expected type class.
 * @return {boolean} Returns true if the object is an instance of the expected type, false otherwise.
 */
export function InstanceOfType<T>(
  arg: unknown,
  expectedTypeClass: new (...args: never[]) => T
): arg is T {
  return arg instanceof expectedTypeClass;
}
