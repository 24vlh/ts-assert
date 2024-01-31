export function OfObjectType<T extends object>(arg: unknown): arg is T {
  return Object.prototype.toString.call(arg) === '[object Object]';
}
