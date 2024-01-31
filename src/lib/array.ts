export function OfArrayType<T>(arg: unknown): arg is T[] {
  return (
    Object.prototype.toString.call(arg) === '[object Array]' &&
    Array.isArray(arg)
  );
}
